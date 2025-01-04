import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 스타일 파일 import

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 정보:", formData);
    // 여기에 로그인 검증 로직 추가 가능
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* 아이디 입력 */}
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>

        {/* 아이디/비밀번호 찾기 */}
        <div className="find-links">
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </div>

        {/* 로그인 버튼 */}
        <button type="submit" className="login-button">
          로그인
        </button>

        {/* 회원가입 버튼 */}
        <button
          type="button"
          className="signup-button"
          onClick={handleSignup}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Login;
