import { useSearchParams } from "react-router-dom";
import Login from "../components/Forms/Login";
import Register from "../components/Forms/Register";

interface Props {}

const Auth = (props: Props) => {
  const [params] = useSearchParams();
  const isRegister = params.get("register");

  return (
    <div className="h-full flex flex-col items-center justify-center">
      {isRegister && <Register />}
      {!isRegister && <Login />}
    </div>
  );
};

export default Auth;
