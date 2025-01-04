import React, { useState } from "react";
import "./Sign.css"; // 스타일 파일 import

const Sign = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    birthDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">회원가입</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        {/* 아이디 */}
        <div className="form-group">
          <label>아이디 *</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        {/* 비밀번호 */}
        <div className="form-group">
          <label>비밀번호 *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className="form-group">
          <label>비밀번호 확인 *</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* 이름 */}
        <div className="form-group">
          <label>이름 *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* 이메일 */}
        <div className="form-group">
          <label>이메일 *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* 휴대폰 */}
        <div className="form-group">
          <label>휴대폰 *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* 주소 */}
        <div className="form-group address-group">
          <label>주소 *</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <button type="button" className="address-button">주소 검색</button>
        </div>

        {/* 성별 */}
        <div className="form-group">
          <label>성별</label>
          <div className="gender-group">
            <label><input type="radio" name="gender" value="남자" onChange={handleChange} /> 남자</label>
            <label><input type="radio" name="gender" value="여자" onChange={handleChange} /> 여자</label>
            <label><input type="radio" name="gender" value="선택안함" onChange={handleChange} /> 선택안함</label>
          </div>
        </div>

        {/* 생년월일 */}
        <div className="form-group">
          <label>생년월일</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>

        {/* 제출 버튼 */}
        <button type="submit" className="submit-button">회원가입</button>
      </form>
    </div>
  );
};

export default Sign;
