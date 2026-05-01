import { ReactNode } from "react";
import { Theme } from "../../providers/theme";

export type CommandContext = {
  navigate: (path: string) => void;
  setTheme: (theme: Theme) => void;
  setPdfPreviewerOpen: (open: boolean) => void;
  setAboutOpen: (open: boolean) => void;
  setProjectsOpen: (open: boolean) => void;
  setTechnologiesOpen: (open: boolean) => void;
  setContactOpen: (open: boolean) => void;
  setTerminalOpen: (open: boolean) => void;
};

export type Command = {
  name: string;
  description: string;
  run: (args: string[], ctx: CommandContext) => ReactNode;
};

const Line = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`whitespace-pre-wrap ${className}`}>{children}</div>;

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="pb-2">
    <div className="text-themePrimaryColor font-bold pb-1">{title}</div>
    <div className="pl-2">{children}</div>
  </div>
);

const Kbd = ({ children }: { children: ReactNode }) => (
  <span className="text-themePrimaryColor">{children}</span>
);

export const commands: Record<string, Command> = {
  help: {
    name: "help",
    description: "Liste toutes les commandes disponibles",
    run: () => (
      <div>
        <Line className="pb-2 text-textEditorColor">
          Commandes disponibles. Tapez le nom ou cliquez sur une suggestion.
        </Line>
        {Object.values(commands).map((cmd) => (
          <Line key={cmd.name}>
            <Kbd>{cmd.name.padEnd(14, " ")}</Kbd>
            <span className="text-textEditorColor">— {cmd.description}</span>
          </Line>
        ))}
        <Line className="pt-2 text-textEditorColor">
          Astuces : <Kbd>↑</Kbd>/<Kbd>↓</Kbd> historique · <Kbd>Tab</Kbd>{" "}
          autocomplétion · <Kbd>Ctrl+L</Kbd> clear ·{" "}
          <Kbd>Ctrl+`</Kbd> toggle terminal
        </Line>
      </div>
    ),
  },

  whoami: {
    name: "whoami",
    description: "Une ligne de pitch",
    run: () => (
      <Line>
        <span className="text-themePrimaryColor">Abdoul Aziz BANDE</span>
        <span className="text-textEditorColor">
          {" "}
          — Développeur Web & Mobile Fullstack · Ouagadougou, Burkina Faso · 5+
          ans d'expérience
        </span>
      </Line>
    ),
  },

  about: {
    name: "about",
    description: "Profil professionnel",
    run: () => (
      <div>
        <Section title="profil">
          <Line className="text-textEditorColor">
            Développeur Fullstack avec plus de 5 ans d'expérience dans la
            conception, le développement et la maintenance d'applications web
            et mobiles performantes.
          </Line>
          <Line className="pt-2 text-textEditorColor">
            Expertise confirmée sur les écosystèmes{" "}
            <span className="text-themePrimaryColor">
              JavaScript/TypeScript
            </span>{" "}
            (React, Node.js, NestJS, Next.js),{" "}
            <span className="text-themePrimaryColor">Flutter</span> et{" "}
            <span className="text-themePrimaryColor">Java/Spring Batch</span>.
          </Line>
          <Line className="pt-2 text-textEditorColor">
            Pilotage de projets à fort impact dans les secteurs{" "}
            <span className="text-themePrimaryColor">
              FinTech et institutionnel
            </span>{" "}
            (SankMoney, Yenga, Ikoddi). Reconnu pour la rigueur technique,
            l'optimisation des performances applicatives, l'encadrement
            d'équipes et le sens du service utilisateur.
          </Line>
        </Section>
        <Line className="text-textEditorColor pt-1">
          → tapez <Kbd>experience</Kbd>, <Kbd>skills</Kbd>, <Kbd>projects</Kbd>{" "}
          ou <Kbd>contact</Kbd> pour en savoir plus.
        </Line>
      </div>
    ),
  },

  experience: {
    name: "experience",
    description: "Parcours professionnel",
    run: () => (
      <div>
        <Section title="KREEZUS · Développeur Fullstack · 2021 — Présent">
          <Line className="text-textEditorColor">
            • Conception & développement de solutions logicielles complexes
            (specs, cycle de vie, mise en prod)
          </Line>
          <Line className="text-textEditorColor">
            • Encadrement d'équipes : supervision, qualité des livrables,
            adoption des bonnes pratiques
          </Line>
          <Line className="text-textEditorColor">
            • Optimisation des performances :{" "}
            <span className="text-themePrimaryColor">
              -20 % de temps de chargement moyen
            </span>
          </Line>
          <Line className="text-textEditorColor">
            • Tests unitaires, fonctionnels et de non-régression
          </Line>
        </Section>

        <Section title="JDWS · Administrateur Web · 2021 — 2023">
          <Line className="text-textEditorColor">
            • Site vitrine moderne et responsive · gestion plateforme ·
            hébergement 24/7
          </Line>
          <Line className="text-textEditorColor">
            • Outil RH sur mesure pour automatiser les processus administratifs
          </Line>
          <Line className="text-textEditorColor">
            • Formation des utilisateurs internes
          </Line>
        </Section>

        <Section title="Société Générale du Burkina Faso · Stage · Oct 2020 — Fév 2021">
          <Line className="text-textEditorColor">
            • Plateforme de simulation de crédit bancaire en temps réel
          </Line>
        </Section>

        <Section title="Formation">
          <Line className="text-textEditorColor">
            • Certification Google — Gestion de projet · Coursera · 2024
          </Line>
          <Line className="text-textEditorColor">
            • Développement Web & Mobile · Simplon Burkina · 2020
          </Line>
        </Section>
      </div>
    ),
  },

  skills: {
    name: "skills",
    description: "Compétences techniques",
    run: () => (
      <div>
        <Section title="Langages">
          <Line className="text-textEditorColor">
            TypeScript · JavaScript · Dart · Java
          </Line>
        </Section>
        <Section title="Frameworks & Bibliothèques">
          <Line className="text-textEditorColor">
            React.js · Next.js · Node.js · NestJS · Flutter · Spring Batch
          </Line>
        </Section>
        <Section title="Bases de données">
          <Line className="text-textEditorColor">
            PostgreSQL · MySQL · Firebase · Couchbase · Prisma (ORM)
          </Line>
        </Section>
        <Section title="DevOps & Outils">
          <Line className="text-textEditorColor">
            Git · GitHub · GitLab · Docker · CI/CD
          </Line>
        </Section>
        <Section title="API & Architecture">
          <Line className="text-textEditorColor">
            API REST · optimisation des performances · architecture applicative
          </Line>
        </Section>
        <Line className="text-textEditorColor pt-1">
          → vue détaillée :{" "}
          <span
            className="text-themePrimaryColor cursor-pointer hover:underline"
            onClick={() => undefined}
          >
            stack.ts
          </span>
        </Line>
      </div>
    ),
  },

  projects: {
    name: "projects",
    description: "Liste des projets clés (--pro / --perso pour filtrer)",
    run: (args) => {
      const filter = args[0];
      const pro = filter !== "--perso";
      const perso = filter !== "--pro";

      return (
        <div>
          {pro && (
            <Section title="Professionnels">
              <Line>
                <Kbd>SankMoney</Kbd>
                <span className="text-textEditorColor">
                  {" "}
                  — Mobile money · TypeScript / Flutter / Firebase ·{" "}
                </span>
                <a
                  href="https://sankmoney.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-themePrimaryColor hover:underline"
                >
                  sankmoney.com ↗
                </a>
              </Line>
              <Line>
                <Kbd>Yenga</Kbd>
                <span className="text-textEditorColor">
                  {" "}
                  — Achat de crédit/forfait · Flutter / Firebase ·{" "}
                </span>
                <a
                  href="https://yenga.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-themePrimaryColor hover:underline"
                >
                  yenga.app ↗
                </a>
              </Line>
              <Line>
                <Kbd>Ikoddi</Kbd>
                <span className="text-textEditorColor">
                  {" "}
                  — Plateforme messagerie & distribution crédit · TS / React /
                  Nest / Prisma · Postgres ·{" "}
                </span>
                <a
                  href="https://ikoddi.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-themePrimaryColor hover:underline"
                >
                  ikoddi.com ↗
                </a>
              </Line>
              <Line>
                <Kbd>Yalendar</Kbd>
                <span className="text-textEditorColor">
                  {" "}
                  — SaaS gestion d'agendas · TS / React / Nest / Prisma ·
                  Postgres ·{" "}
                </span>
                <a
                  href="https://yalendar.com/kreezus/demo-yalendar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-themePrimaryColor hover:underline"
                >
                  démo ↗
                </a>
              </Line>
              <Line>
                <Kbd>Ma Gendarmerie BF</Kbd>
                <span className="text-textEditorColor">
                  {" "}
                  — App officielle Gendarmerie nationale · TS / Flutter /
                  Directus
                </span>
              </Line>
            </Section>
          )}

          {perso && (
            <Section title="Personnels">
              <Line>
                <Kbd>JDWS</Kbd>
                <span className="text-textEditorColor">
                  {" "}
                  — Site vitrine + outil RH interne
                </span>
              </Line>
              <Line>
                <Kbd>EIN</Kbd>
                <span className="text-textEditorColor">
                  {" "}
                  — projet Simplon
                </span>
              </Line>
            </Section>
          )}

          <Line className="pt-2 text-textEditorColor">
            → vue cards :{" "}
            <Kbd>open projects</Kbd>
          </Line>
        </div>
      );
    },
  },

  contact: {
    name: "contact",
    description: "Email et liens sociaux",
    run: () => (
      <div>
        <Section title="contact">
          <Line>
            <span className="text-textEditorColor">email:    </span>
            <a
              href="mailto:bandeabdelaziz3@gmail.com"
              className="text-themePrimaryColor hover:underline"
            >
              bandeabdelaziz3@gmail.com
            </a>
          </Line>
          <Line>
            <span className="text-textEditorColor">phone:    </span>
            <span className="text-primaryColor">+226 70 18 08 74</span>
            <span className="text-textEditorColor"> / </span>
            <span className="text-primaryColor">+226 55 99 56 26</span>
          </Line>
          <Line>
            <span className="text-textEditorColor">linkedin: </span>
            <a
              href="https://www.linkedin.com/in/bande-abdoul-aziz/"
              target="_blank"
              rel="noreferrer"
              className="text-themePrimaryColor hover:underline"
            >
              /in/bande-abdoul-aziz ↗
            </a>
          </Line>
          <Line>
            <span className="text-textEditorColor">github:   </span>
            <a
              href="https://github.com/Aziz-dev-disign"
              target="_blank"
              rel="noreferrer"
              className="text-themePrimaryColor hover:underline"
            >
              Aziz-dev-disign ↗
            </a>
          </Line>
          <Line>
            <span className="text-textEditorColor">gitlab:   </span>
            <a
              href="https://gitlab.com/keurdo"
              target="_blank"
              rel="noreferrer"
              className="text-themePrimaryColor hover:underline"
            >
              keurdo ↗
            </a>
          </Line>
        </Section>
        <Line className="text-textEditorColor pt-1">
          → tapez <Kbd>open contact</Kbd> pour le formulaire
        </Line>
      </div>
    ),
  },

  cv: {
    name: "cv",
    description: "Ouvre le CV",
    run: (_, ctx) => {
      ctx.setPdfPreviewerOpen(true);
      ctx.navigate("/cv");
      return (
        <Line className="text-textEditorColor">
          Ouverture de <Kbd>cv.pdf</Kbd>…
        </Line>
      );
    },
  },

  open: {
    name: "open",
    description: "Ouvre une page (about, projects, technologies, contact, cv)",
    run: (args, ctx) => {
      const target = args[0];
      const map: Record<string, () => void> = {
        home: () => ctx.navigate("/"),
        about: () => {
          ctx.setAboutOpen(true);
          ctx.navigate("/about");
        },
        projects: () => {
          ctx.setProjectsOpen(true);
          ctx.navigate("/projects");
        },
        technologies: () => {
          ctx.setTechnologiesOpen(true);
          ctx.navigate("/technologies");
        },
        stack: () => {
          ctx.setTechnologiesOpen(true);
          ctx.navigate("/technologies");
        },
        contact: () => {
          ctx.setContactOpen(true);
          ctx.navigate("/contact");
        },
        cv: () => {
          ctx.setPdfPreviewerOpen(true);
          ctx.navigate("/cv");
        },
      };
      const action = target ? map[target] : undefined;
      if (!action) {
        return (
          <Line className="text-red-400">
            usage: <Kbd>open</Kbd> &lt;home|about|projects|technologies|contact|cv&gt;
          </Line>
        );
      }
      action();
      return (
        <Line className="text-textEditorColor">
          Navigation vers <Kbd>{target}</Kbd>…
        </Line>
      );
    },
  },

  theme: {
    name: "theme",
    description: "Change le thème (light, dark, blue)",
    run: (args, ctx) => {
      const target = args[0]?.toLowerCase();
      const valid = ["light", "dark", "blue"];
      if (!target || !valid.includes(target)) {
        return (
          <Line className="text-red-400">
            usage: <Kbd>theme</Kbd> &lt;light|dark|blue&gt;
          </Line>
        );
      }
      ctx.setTheme(target as Theme);
      return (
        <Line className="text-textEditorColor">
          Thème → <Kbd>{target}</Kbd>
        </Line>
      );
    },
  },

  echo: {
    name: "echo",
    description: "Affiche le texte saisi",
    run: (args) => (
      <Line className="text-primaryColor">{args.join(" ")}</Line>
    ),
  },

  clear: {
    name: "clear",
    description: "Vide le terminal",
    run: () => null,
  },

  exit: {
    name: "exit",
    description: "Ferme le terminal",
    run: (_, ctx) => {
      ctx.setTerminalOpen(false);
      return null;
    },
  },
};

export const commandNames = Object.keys(commands);

export const QUICK_SUGGESTIONS = [
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
  "cv",
  "help",
];
