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
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-gray-600 md:space-y-16">
      <div className="flex flex-col space-y-10 text-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h2 className="text-7xl italic">Contact Us</h2>
          <div className="w-1/2 border border-b-red-400"></div>
        </div>
        <h4 className="text-xl font-medium">HOW TO GET IN TOUCH ?</h4>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-10 md:flex-row">
        <div className="flex w-full flex-col gap-10 text-center md:grid  md:grid-cols-2 md:text-xl">
          <div className="flex w-full flex-col items-center justify-center space-y-4  md:space-y-8">
            <div className=" space-y-10 text-left font-bold md:inline-block md:text-2xl">
              <div className="hidden space-y-4 text-3xl md:inline-block">
                <h2 className="">Let{`'`}s Talk!</h2>
                <h2 className="">Tell us what's on your mind.</h2>
              </div>
              <div className="flex flex-row justify-center gap-4 text-base md:flex-col md:items-start md:font-bold">
                <span>
                  <ImLocation className="mr-[1px] inline text-xl text-amber-500 md:mr-2 md:text-3xl" />
                  {contactAddress}
                </span>
                <span>
                  <GrMail className="mr-[1px] inline text-xl text-amber-500 md:mr-2 md:text-3xl" />
                  {contactEmail}
                </span>
              </div>
            </div>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
