import RegisterForm from "../components/Forms/Register";

interface Props {}

const Register = (props: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <RegisterForm />
    </div>
  );
};

export default Register;
