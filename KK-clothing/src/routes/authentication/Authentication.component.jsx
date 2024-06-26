import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";
import SignInForm from "../../components/sign-in-form/Sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
