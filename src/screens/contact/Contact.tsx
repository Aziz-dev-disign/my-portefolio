import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { socialNetworks } from "./utils";

export const Contact = () => {
  const [val, setVal] = useState("");

  const contacts = [
    {
      field: "email",
      component: (
        <input
          type="email"
          className="pl-2 bg-transparent focus-visible:outline-none active:border-none"
        />
      ),
    },
    {
      field: "subject",
      component: (
        <input className="pl-2 bg-transparent focus-visible:outline-none active:border-none" />
      ),
    },
    {
      field: "message",
      component: (
        <div className="w-full">
          <TextareaAutosize
            minRows={3}
            className="pl-2 overflow-auto bg-transparent resize-none w-92 text-primaryColor focus-visible:outline-none active:border-none"
            maxRows={6}
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
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
            - Me Contacter
          </span>
        </p>
        <span className="html-tag">{"</b>"}</span>
      </div>
      <div className="flex flex-col pt-8 lg:flex-row lg:pt-32">
        <div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-primaryColor">RETROUVER MOI SUR</h3>
            <p className="text-primaryColor">
              N'hésitez pas à me contacter{" "}
              <span className="text-lg text-themePrimaryColor">
                et à vous connecter.
              </span>
            </p>
          </div>
          <div className="grid items-center w-full grid-cols-5 gap-1 p-2 sm:gap-6">
            {socialNetworks().map((item) => item)}
          </div>
        </div>
        <div className="line-contact relative w-[50%] whitespace-pre-wrap pl-10 pt-16 sm:ml-24 sm:pl-4 lg:w-1/3 lg:pt-0">
          <p className="text-xl text-themePrimaryColor">
            .contactMe<span className="text-xl  text-primaryColor">{" {"}</span>
          </p>
          {contacts.map(({ field, component }) => (
            <p
              className="flex pl-10 text-lg line-contact text-primaryColor"
              key={field}
            >
              {field}:{component}
            </p>
          ))}
          <p className="text-xl line-contact text-primaryColor">{"}"}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
