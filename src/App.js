import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // useLocation 추가
import "./App.css";
import Header from "./components/Header"; // 기존 Header 컴포넌트 가져오기
import Sidebar from "./components/Sidebar";
import Sign from "./pages/Sign"; // 회원가입 페이지 컴포넌트 가져오기

// 메인 콘텐츠를 렌더링할 AppContent 컴포넌트 생성
function AppContent() {
  const location = useLocation(); // 현재 경로 확인
  const [menuOpen, setMenuOpen] = useState(false);

  // 사이드바 상태를 토글하는 함수
  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* 헤더: toggleSidebar 전달 */}
      <Header toggleSidebar={toggleSidebar} />

      {/* 사이드바: 회원가입 페이지가 아닐 때만 보여줌 */}
      {location.pathname !== "/signup" && <Sidebar isOpen={menuOpen} />}

      {/* 메인 콘텐츠 영역 */}
      <main
        style={{
          marginLeft: location.pathname !== "/signup" ? (menuOpen ? "300px" : "0") : "0",
          marginTop: "60px",
          transition: "margin-left 0.3s",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          {/* 메인 페이지 */}
          <Route
            path="/"
            element={
              <>
                <h1>메인 콘텐츠 영역</h1>
              </>
            }
          />
          {/* 회원가입 페이지 */}
          <Route path="/signup" element={<Sign />} />
        </Routes>
      </main>
    </div>
  );
}

// 최상위 App 컴포넌트
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
