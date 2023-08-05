import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../api";
import classes from "./SignInPage.module.css";

function SignInPage() {
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

  // 로그인
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await Api.post(`auth/signin`, { ...formData });
      const user = res.data;
      const jwtToken = user.access_token;
      localStorage.setItem("access_token", jwtToken);
      navigate("/todo");
    } catch (err) {
      console.log("로그인 실패", err);
      alert("로그인에 실패하였습니다.");
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
        data-testid="signin-button"
        onClick={handleSubmit}
        className={classes.btn}
      >
        로그인
      </button>
    </form>
  );
}

export default SignInPage;
