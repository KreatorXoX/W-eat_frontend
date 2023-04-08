import RegisterForm from "../components/Forms/Register";

interface Props {}

const Register = (props: Props) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <RegisterForm />
    </div>
  );
};

export default Register;
