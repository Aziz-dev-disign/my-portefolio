import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import TextareaAutosize from "react-textarea-autosize";
import emailjs from "@emailjs/browser";
import * as motion from "motion/react-client";
import { socialNetworks } from "./utils";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_mlelswc";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_d50ri17";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "4tfnmPzMJIJztZhqC";

export const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMsg("");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg(t("contact.errorNotConfigured"));
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: email,
          subject,
          message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : t("contact.errorGeneric")
      );
    }
  };

  const fields = [
    {
      field: t("contact.fields.email"),
      component: (
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-2 bg-transparent focus-visible:outline-none active:border-none"
        />
      ),
    },
    {
      field: t("contact.fields.subject"),
      component: (
        <input
          name="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="pl-2 bg-transparent focus-visible:outline-none active:border-none"
        />
      ),
    },
    {
      field: t("contact.fields.message"),
      component: (
        <div className="w-full">
          <TextareaAutosize
            name="message"
            required
            minRows={3}
            maxRows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pl-2 overflow-auto bg-transparent resize-none w-92 text-primaryColor focus-visible:outline-none active:border-none"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center pt-4 align-middle">
        <span className="html-tag">{"<b>"} </span>
        <p className="px-2 pb-2 text-lg font-bold text-primaryColor sm:text-2xl">
          <span className="text-lg text-themePrimaryColor sm:text-2xl">
            {" "}
            {t("contact.titleAccent")}
          </span>
        </p>
        <span className="html-tag">{"</b>"}</span>
      </div>
      <div className="flex flex-col pt-8 lg:flex-row lg:pt-32">
        <div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-primaryColor">
              {t("contact.findMe")}
            </h3>
            <p className="text-primaryColor">
              {t("contact.intro")}{" "}
              <span className="text-lg text-themePrimaryColor">
                {t("contact.introAccent")}
              </span>
            </p>
          </div>
          <div className="grid items-center w-full grid-cols-5 gap-1 p-2 sm:gap-6">
            {socialNetworks().map((item) => item)}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="line-contact relative w-[50%] whitespace-pre-wrap pl-10 pt-16 sm:ml-24 sm:pl-4 lg:w-1/3 lg:pt-0"
        >
          <p className="text-xl text-themePrimaryColor">
            .contactMe<span className="text-xl text-primaryColor">{" {"}</span>
          </p>
          {fields.map(({ field, component }) => (
            <p
              className="flex pl-10 text-lg line-contact text-primaryColor"
              key={field}
            >
              {field}:{component}
            </p>
          ))}
          <p className="text-xl line-contact text-primaryColor">{"}"}</p>

          <div className="pt-6">
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.05 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.95 }}
              className="rounded btn disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? t("contact.submitting")
                : t("contact.submit")}
            </motion.button>

            {status === "success" && (
              <p className="pt-3 text-themePrimaryColor" role="status">
                {t("contact.success")}
              </p>
            )}
            {status === "error" && (
              <p className="pt-3 text-red-500" role="alert">
                {errorMsg || t("contact.errorGeneric")}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
