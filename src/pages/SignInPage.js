import React from "react";

function SignInPage() {
  return (
    <>
      <input data-testid="email-input" />
      <input data-testid="password-input" />
      <button data-testid="signin-button">로그인</button>
    </>
  );
}

export default SignInPage;
