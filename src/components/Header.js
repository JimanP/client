import React from "react";

const Header = ({ toggleSidebar }) => {
  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "60px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #ddd",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between", // 양쪽 정렬
      padding: "0 20px",
      zIndex: 1000,
      boxSizing: "border-box",
    },
    menuAndLogo: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0, // 로고와 햄버거 메뉴 축소 방지
    },
    menuIcon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "30px",
      height: "25px",
      cursor: "pointer",
      marginRight: "15px", // 로고와 간격 설정
    },
    bar: {
      width: "100%",
      height: "4px",
      backgroundColor: "#333",
      borderRadius: "2px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    logoImage: {
      width: "60px", // 로고 이미지 크기 조정
      height: "50px",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexGrow: 1, // nav가 남은 공간을 차지하도록 설정
      flexShrink: 0, // nav 크기가 축소되지 않도록 설정
      overflow: "hidden", // 메뉴가 화면을 초과하지 않도록 설정
    },
    navItem: {
      marginLeft: "20px",
      fontSize: "24px", // 메뉴 글씨 크기 조정
      color: "#333",
      textDecoration: "none",
      cursor: "pointer",
      whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
    },
  };

  return (
    <header style={styles.header}>
      {/* 왼쪽: 햄버거 메뉴와 로고 */}
      <div style={styles.menuAndLogo}>
        <div style={styles.menuIcon} onClick={toggleSidebar}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
        <div style={styles.logo}>
          <img src="logo.png" alt="Logo" style={styles.logoImage} />
        </div>
      </div>
      {/* 오른쪽: 회원가입, 로그인, 고객센터 */}
      <nav style={styles.nav}>
        <span style={styles.navItem}>회원가입</span>
        <span style={styles.navItem}>로그인</span>
        <span style={styles.navItem}>고객센터</span>
      </nav>
    </header>
  );
};

export default Header;
