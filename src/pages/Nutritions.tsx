import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";

interface Props {}

const Nutritions = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const alergens: string[] = location.state?.alergens;
  return (
    <div className="dark:text-slate-200 text-gray-700 px-4 space-y-6 overflow-y-hidden">
      <div className="flex flex-row justify-between mt-4 items-center ">
        <h1 className="font-bold  text-3xl">Nutrition information</h1>
        <AiOutlineClose
          onClick={() => navigate("..")}
          className="text-2xl cursor-pointer"
        />
      </div>
      <h2 className="text-2xl font-bold">LMIV - Allergen</h2>
      <ol className="list-disc pl-5 text-gray-500 space-y-4">
        {alergens?.map((alergen) => (
          <li key={alergen + Date.now()}>
            Contains {alergen} and products thereof
          </li>
        ))}
      </ol>
      <p className="text-sm font-sans">
        We always provide you with relevant information given to us by our
        partners relating to their products. However, in some cases, the
        information displayed may be incomplete, automatically generated and/or
        not yet validated by restaurant. Please contact our customer service
        department via this{" "}
        <Link
          className="text-blue-500 text-lg italic tracking-wide underline underline-offset-2"
          to="/contact-us"
        >
          form
        </Link>{" "}
        if you have allergies, intolerances or questions about any specific
        items.
      </p>
    </div>
  );
};

export default Nutritions;
