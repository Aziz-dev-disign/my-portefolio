import {
  KeyboardEvent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdClose } from "react-icons/md";
import { VscTerminalBash } from "react-icons/vsc";
import { AnimatePresence, motion } from "motion/react";
import { AppContext, AppContextInterface } from "../../providers/application";
import {
  ThemeContext,
  ThemeContextInterface,
} from "../../providers/theme";
import {
  Command,
  CommandContext,
  QUICK_SUGGESTIONS,
  commandNames,
  commands,
} from "./commands";

type HistoryEntry = {
  id: number;
  command: string;
  output: ReactNode;
};

const PROMPT_USER = "aziz";
const PROMPT_HOST = "portfolio";

const HEIGHT_KEY = "terminal:height";
const HEIGHT_DEFAULT = 280;
const HEIGHT_MIN = 180;
const heightMax = () =>
  typeof window === "undefined"
    ? 600
    : Math.max(HEIGHT_MIN, Math.round(window.innerHeight * 0.7));

export const Terminal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { toggleTheme } = useContext(ThemeContext) as ThemeContextInterface;
  const {
    terminalOpen,
    setTerminalOpen,
    setPdfPreviewerOpen,
    setAboutOpen,
    setProjectsOpen,
    setTechnologiesOpen,
    setContactOpen,
  } = useContext(AppContext) as AppContextInterface;

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [recall, setRecall] = useState<string[]>([]);
  const [recallIdx, setRecallIdx] = useState<number>(-1);
  const [welcomed, setWelcomed] = useState(false);
  const [height, setHeight] = useState<number>(() => {
    if (typeof window === "undefined") return HEIGHT_DEFAULT;
    const saved = window.localStorage.getItem(HEIGHT_KEY);
    const parsed = saved ? parseInt(saved, 10) : NaN;
    return Number.isFinite(parsed) ? parsed : HEIGHT_DEFAULT;
  });
  const [isResizing, setIsResizing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const counter = useRef(0);

  const ctx: CommandContext = useMemo(
    () => ({
      navigate,
      setTheme: toggleTheme,
      setPdfPreviewerOpen,
      setAboutOpen,
      setProjectsOpen,
      setTechnologiesOpen,
      setContactOpen,
      setTerminalOpen,
    }),
    [
      navigate,
      toggleTheme,
      setPdfPreviewerOpen,
      setAboutOpen,
      setProjectsOpen,
      setTechnologiesOpen,
      setContactOpen,
      setTerminalOpen,
    ]
  );

  // Welcome message on first open
  useEffect(() => {
    if (terminalOpen && !welcomed) {
      const help = commands.help.run([], ctx);
      const hint = t("terminal.welcomeHint", { cmd: "__HELP__" }).split(
        "__HELP__"
      );
      setHistory([
        {
          id: ++counter.current,
          command: "",
          output: (
            <div>
              <div className="text-themePrimaryColor pb-1">
                {t("terminal.welcome")}
              </div>
              <div className="text-textEditorColor pb-3">
                {hint[0]}
                <span className="text-themePrimaryColor">help</span>
                {hint[1]}
              </div>
              {help}
            </div>
          ),
        },
      ]);
      setWelcomed(true);
    }
  }, [terminalOpen, welcomed, ctx, t]);

  // Focus input when terminal opens
  useEffect(() => {
    if (terminalOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [terminalOpen]);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  // Persist height
  useEffect(() => {
    window.localStorage.setItem(HEIGHT_KEY, String(height));
  }, [height]);

  // Clamp height to viewport on window resize
  useEffect(() => {
    const onResize = () => {
      setHeight((h) => Math.min(h, heightMax()));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Global Ctrl+` / Cmd+` shortcut to toggle
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setTerminalOpen(!terminalOpen);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [terminalOpen, setTerminalOpen]);

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = height;
    setIsResizing(true);

    const onMove = (ev: MouseEvent) => {
      const delta = startY - ev.clientY;
      const next = Math.max(
        HEIGHT_MIN,
        Math.min(heightMax(), startHeight + delta)
      );
      setHeight(next);
    };
    const onUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.body.style.cursor = "row-resize";
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  const execute = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const [name, ...args] = trimmed.split(/\s+/);
    const cmd: Command | undefined = commands[name];

    setRecall((prev) => [...prev, trimmed]);
    setRecallIdx(-1);

    if (name === "clear") {
      setHistory([]);
      return;
    }

    let output: ReactNode;
    if (!cmd) {
      const parts = t("terminal.notFound", {
        name,
        cmd: "__HELP__",
      }).split("__HELP__");
      output = (
        <div className="text-red-400">
          {parts[0]}
          <span className="text-themePrimaryColor">help</span>
          {parts[1]}
        </div>
      );
    } else {
      output = cmd.run(args, ctx);
    }

    setHistory((prev) => [
      ...prev,
      { id: ++counter.current, command: trimmed, output },
    ]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      execute(input);
      setInput("");
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (recall.length === 0) return;
      const next = recallIdx < 0 ? recall.length - 1 : Math.max(0, recallIdx - 1);
      setRecallIdx(next);
      setInput(recall[next]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (recallIdx < 0) return;
      const next = recallIdx + 1;
      if (next >= recall.length) {
        setRecallIdx(-1);
        setInput("");
      } else {
        setRecallIdx(next);
        setInput(recall[next]);
      }
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const match = commandNames.find((n) => n.startsWith(input));
      if (match) setInput(match);
      return;
    }
    if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
      return;
    }
  };

  const runSuggestion = (cmd: string) => {
    execute(cmd);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {terminalOpen && (
        <motion.div
          key="terminal-panel"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            duration: isResizing ? 0 : 0.22,
            ease: "easeInOut",
          }}
          style={{ height: `${height}px` }}
          className="absolute bottom-0 left-0 right-0 z-30 flex w-full flex-col border-t border-headerBorderColor bg-tabBarBgColor text-primaryColor"
        >
          <div
            role="separator"
            aria-orientation="horizontal"
            aria-label={t("terminal.resize")}
            onMouseDown={startResize}
            className={`h-1 w-full cursor-row-resize ${
              isResizing
                ? "bg-themePrimaryColor"
                : "bg-tabBarBorderColor hover:bg-themePrimaryColor"
            } transition-colors`}
          />

          <div className="flex items-center justify-between border-b border-tabBarBorderColor px-3 py-1 text-xs">
            <div className="flex items-center gap-2 text-textEditorColor">
              <VscTerminalBash className="text-themePrimaryColor" />
              <span className="font-bold uppercase tracking-wide">
                {t("terminal.title")}
              </span>
            </div>
            <button
              type="button"
              title={t("terminal.close")}
              aria-label={t("terminal.close")}
              onClick={() => setTerminalOpen(false)}
              className="text-textEditorColor hover:text-primaryColor"
            >
              <MdClose className="text-base" />
            </button>
          </div>

          <div
            ref={bodyRef}
            className="flex-1 overflow-y-auto px-3 py-2 text-[13px] leading-6"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry) => (
              <div key={entry.id} className="pb-2">
                {entry.command && (
                  <div className="flex flex-wrap gap-1">
                    <span className="text-themePrimaryColor">
                      {PROMPT_USER}
                    </span>
                    <span className="text-textEditorColor">
                      @{PROMPT_HOST}
                    </span>
                    <span className="text-primaryColor">~ %</span>
                    <span className="text-primaryColor">{entry.command}</span>
                  </div>
                )}
                {entry.output && <div className="pt-1">{entry.output}</div>}
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-1">
              <span className="text-themePrimaryColor">{PROMPT_USER}</span>
              <span className="text-textEditorColor">@{PROMPT_HOST}</span>
              <span className="text-primaryColor">~ %</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                className="flex-1 min-w-[40px] border-0 bg-transparent text-primaryColor outline-none focus:outline-none"
                aria-label="Terminal input"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-tabBarBorderColor px-3 py-2 text-[12px]">
            <span className="text-textEditorColor">
              {t("terminal.suggestions")}
            </span>
            {QUICK_SUGGESTIONS.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => runSuggestion(cmd)}
                className="rounded border border-tabBarBorderColor px-2 py-0.5 text-themePrimaryColor hover:bg-textEditorHoverBg hover:text-textEditorHoverColor"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
