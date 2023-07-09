import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../../shared/components/Form/Input";

import {
  ContactUsInput,
  contactUsSchema,
} from "../../utils/schema/contact.schema";
import { useEffect } from "react";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<ContactUsInput>({
    mode: "onChange",
    resolver: zodResolver(contactUsSchema),
  });

  const contactUsHandler: SubmitHandler<ContactUsInput> = (data) => {
    if (data.name && data.email && data.message) {
      const templateParams = {
        email: data.email,
        fullname: data.name,
        message: data.message,
      };
      // emailjs.send(
      //   "service_79sivws",
      //   "template_9vi5fpi",
      //   templateParams,
      //   import.meta.env.VITE_EMAILJS_API_KEY
      // );
      console.log("mail is sending : ", templateParams);
    }
    return;
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", message: "" });
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form
      onSubmit={handleSubmit(contactUsHandler)}
      className="flex h-full w-full flex-col items-center space-y-4 overflow-auto rounded-lg p-5 text-gray-800 dark:text-slate-200"
    >
      <div className="flex w-full items-center justify-start gap-10 border-b border-b-gray-400 pb-2">
        <h1 className="mb-3 font-semibold text-slate-50 md:mb-6 md:text-2xl">
          Send Us a Mail <span className="ml-2">🚀 </span>
        </h1>
      </div>
      <div className="flex w-full flex-col gap-4">
        <Input
          type="email"
          half={false}
          label="Email address"
          placeholder="yourmail@email.com"
          id="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          type="text"
          half={false}
          label="Name"
          placeholder="Micheal Scott"
          id="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          type="textarea"
          half={false}
          label="Message"
          placeholder="I have allergy for poop, is there any poop in the pizza ?"
          id="message"
          {...register("message")}
          error={errors.message?.message}
        />
      </div>

      <button
        disabled={!isValid}
        type="submit"
        className="auth--button bg-orange-500 text-slate-100 transition-colors duration-200 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-300 disabled:text-gray-500
         dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:disabled:bg-gray-300 dark:disabled:text-gray-500"
      >
        Send Message
      </button>
    </form>
  );
};

export default Login;
