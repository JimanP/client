import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 사이드바 상태를 토글하는 함수
  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* 헤더 */}
      <Header toggleSidebar={toggleSidebar} />
      
      {/* 사이드바 */}
      <Sidebar isOpen={menuOpen} />

      {/* 메인 콘텐츠 */}
      <main
        style={{
          marginLeft: menuOpen ? "300px" : "0", // 사이드바 열림 상태에 따라 좌측 여백 조정
          marginTop: "60px", // 헤더 높이만큼 여백 추가
          transition: "margin-left 0.3s", // 부드러운 이동 애니메이션
          padding: "20px", // 메인 콘텐츠 내부 패딩
          boxSizing: "border-box", // 패딩 포함 크기 계산
        }}
      >
        <h1>메인 콘텐츠 영역</h1>
        <p>이곳에 페이지 콘텐츠를 추가하세요.</p>
      </main>
    </div>
  );
}

export default App;
