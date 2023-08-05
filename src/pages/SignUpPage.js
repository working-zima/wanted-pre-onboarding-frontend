import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../api";
import { validateEmail, validatePassword } from "../utils/validate";
import classes from "./SignUpPage.module.css";

function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // input 입력창 텍스트 변경
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  };

  const isEmailValid = validateEmail(formData.email);
  const isPasswordValid = validatePassword(formData.password);
  const isFormValid = isEmailValid && isPasswordValid;

  // 회원가입
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await Api.post("auth/signup", { ...formData });
      navigate("/signin");
    } catch (err) {
      console.log("회원가입 실패", err);
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <form>
      <label htmlFor="email" className={classes.label}>
        이메일
      </label>
      <input
        type="text"
        placeholder="이메일을 입력해 주세요"
        data-testid="email-input"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password" className={classes.label}>
        비밀번호
      </label>
      <input
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        data-testid="password-input"
        name="password"
        id="password"
        autoComplete="off"
        value={formData.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        data-testid="signup-button"
        disabled={!isFormValid}
        onClick={handleSubmit}
        className={classes.btn}
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUpPage;
