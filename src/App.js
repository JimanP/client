import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Sign from "./pages/Sign";
import Login from "./pages/Login";

// 메인 콘텐츠를 렌더링할 AppContent 컴포넌트 생성
function AppContent() {
  const location = useLocation(); // 현재 경로 확인
  const [menuOpen, setMenuOpen] = useState(false);

  // 사이드바 상태를 토글하는 함수
  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  // 사이드바를 숨길 페이지 목록
  const hideSidebarPaths = ["/signup", "/login"];

  return (
    <div className="App">
      {/* 헤더 */}
      <Header toggleSidebar={toggleSidebar} />

      {/* 사이드바: 특정 경로에서는 숨김 */}
      {!hideSidebarPaths.includes(location.pathname) && <Sidebar isOpen={menuOpen} />}

      {/* 메인 콘텐츠 영역 */}
      <main
        style={{
          marginLeft: hideSidebarPaths.includes(location.pathname)
            ? "0"
            : menuOpen
            ? "300px"
            : "0",
          marginTop: "60px",
          transition: "margin-left 0.3s",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          {/* 기본 경로 리디렉션 */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />
          
          {/* 회원가입 페이지 */}
          <Route path="/signup" element={<Sign />} />
          
          {/* 메인 페이지 */}
          <Route
            path="/main" element={<> <h1>메인 콘텐츠 영역</h1>
              </>
            }
          />
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
