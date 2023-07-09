import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { useForm, SubmitHandler } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import ContactUsForm from "../components/Forms/ContactUs";
type Props = {
  contactEmail?: string;
  contactAddress?: string;
};

const ContactUs = ({
  contactAddress = "Restaurant Address",
  contactEmail = "gorkemgocer7@gmail.com",
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center overflow-hidden px-10 md:flex-row"
    >
      <h3 className="tall:inline absolute top-24 ml-[12px] hidden uppercase tracking-[12px] text-slate-200 md:text-2xl">
        Contact me
      </h3>
      <div className="wideShort:mt-0 mt-10 flex w-full flex-col gap-10 text-center text-slate-200 md:flex-row md:items-center md:text-xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex w-full flex-col space-y-4 sm:mt-0 md:space-y-8"
        >
          <div className="hidden space-y-4 text-left font-bold md:inline-block md:text-4xl">
            <h2 className="">Let{`'`}s Talk!</h2>
            <h2 className="">Tell me about your projects.</h2>
          </div>
          <h5 className="text-center text-sm font-thin italic text-green-200 md:text-left md:font-semibold">
            Let{`'`}s build your dreams{" "}
            <span className=" font-semibold underline decoration-[#CF2400] underline-offset-2 md:text-xl">
              together
            </span>
          </h5>
          <div className="flex flex-row items-center justify-center gap-3 text-xs md:flex-col md:items-start md:font-bold">
            <span>
              <ImLocation className="mr-[1px] inline text-amber-300 md:mr-2 md:text-xl" />
              {contactAddress}
            </span>
            <span>
              <GrMail className="mr-[1px] inline text-amber-300 md:mr-2 md:text-xl" />
              {contactEmail}
            </span>
          </div>
        </motion.div>
        <ContactUsForm />
      </div>
    </motion.div>
  );
};

export default ContactUs;
