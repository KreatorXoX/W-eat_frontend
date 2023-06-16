import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";

interface Props {}

const Nutritions = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const alergens: string[] = location.state?.alergens;
  const from = location.state?.from?.pathname || "/";
  return (
    <div className="space-y-6 overflow-y-hidden px-4 text-gray-700 dark:text-slate-200">
      <div className="mt-4 flex flex-row items-center justify-between ">
        <h1 className="text-3xl  font-bold">Nutrition information</h1>
        <AiOutlineClose
          onClick={() => navigate(from)}
          className="cursor-pointer text-2xl"
        />
      </div>
      <h2 className="text-2xl font-bold">LMIV - Allergen</h2>
      <ol className="list-disc space-y-4 pl-5 text-gray-500">
        {alergens?.map((alergen) => (
          <li key={alergen + Date.now()}>
            Contains {alergen} and products thereof
          </li>
        ))}
      </ol>
      <p className="font-sans text-sm">
        We always provide you with relevant information given to us by our
        partners relating to their products. However, in some cases, the
        information displayed may be incomplete, automatically generated and/or
        not yet validated by restaurant. Please contact our customer service
        department via this{" "}
        <Link
          className="text-lg italic tracking-wide text-blue-500 underline underline-offset-2"
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
