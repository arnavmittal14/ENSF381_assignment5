import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginForm from "../components/loginform";
import SignupForm from "../components/signupform";

const LoginPage = () => {
  const [showSignup, setShowSignup] = useState(false);

  const switchToSignup = () => {
    setShowSignup(true);
  };

  const switchToLogin = () => {
    setShowSignup(false);
  };

  return (
    <div>
      <Header />
      {showSignup ? (
        <SignupForm switchToLogin={switchToLogin} />
      ) : (
        <LoginForm switchToSignup={switchToSignup} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
