import LoginForm from "../components/Forms/Login";

interface Props {}

const Login = (props: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default Login;
