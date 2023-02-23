import { Link, useSearchParams } from "react-router-dom";

interface Props {}

const Auth = (props: Props) => {
  const [params] = useSearchParams();
  const isRegister = params.get("register");

  return (
    <div className="h-full flex flex-col items-center justify-center">
      {isRegister && <h2>Register form</h2>}
      {!isRegister && <h2>Login form</h2>}
      <Link to="..">Back</Link>
    </div>
  );
};

export default Auth;
