import React from "react";

const Sidebar = ({ isOpen }) => {
  const styles = {
    sidebar: {
      position: "fixed",
      top: "60px", // 헤더 아래 배치
      left: isOpen ? "0" : "-200px", // 열고 닫기 동작
      width: "200px",
      height: "100%",
      backgroundColor: "#f7f7f7",
      borderRight: "1px solid #ddd",
      transition: "left 0.3s ease-in-out",
      zIndex: 999,
    },
    menuItems: {
      listStyle: "none",
      padding: "20px",
      margin: 0,
    },
    menuItem: {
      padding: "10px 0",
      fontSize: "18px",
      color: "#333",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.sidebar}>
      <ul style={styles.menuItems}>
        <li style={styles.menuItem}>메뉴 1</li>
        <li style={styles.menuItem}>메뉴 2</li>
        <li style={styles.menuItem}>메뉴 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
