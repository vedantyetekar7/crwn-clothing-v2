import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
