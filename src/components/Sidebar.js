import React, { useState } from "react";

const Sidebar = ({ isOpen }) => {
  // 각 카테고리의 확장 상태 관리
  const [expanded, setExpanded] = useState({});

  // 특정 카테고리 확장/축소 토글 함수
  const toggleExpand = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const styles = {
    sidebar: {
      position: "fixed",
      top: "60px", // 헤더 아래 배치
      left: isOpen ? "0" : "-300px", // 열고 닫기 동작
      width: "300px",
      height: "100%",
      backgroundColor: "#ffffff",
      borderRight: "1px solid #ddd",
      transition: "left 0.3s ease-in-out",
      zIndex: 999,
      overflowY: "auto", // 스크롤 가능
    },
    category: {
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "25px",
      color: "#333",
      borderBottom: "1px solid #ddd",
    },
    subMenu: {
      paddingLeft: "40px",
      display: "flex",
      flexDirection: "column",
    },
    subMenuItem: {
      padding: "5px 0",
      fontSize: "14px",
      color: "#555",
      cursor: "pointer",
    },
    icon: {
      marginRight: "10px",
      width: "30px",
      height: "25px",
    },
    arrow: {
      transform: "rotate(0deg)",
      transition: "transform 0.3s",
    },
    arrowExpanded: {
      transform: "rotate(90deg)",
    },
  };

  return (
    <div style={styles.sidebar}>
      {/* 카테고리 */}
      <div>
        <div style={styles.category} onClick={() => toggleExpand("상품관리")}>
          <div>
            <img src="product.png" alt="상품관리" style={styles.icon} />
            상품관리
          </div>
          <span
            style={{
              ...styles.arrow,
              ...(expanded["상품관리"] ? styles.arrowExpanded : {}),
            }}
          >
            ▶
          </span>
        </div>
        {expanded["상품관리"] && (
          <div style={styles.subMenu}>
            <div style={styles.subMenuItem}>상품등록</div>
            <div style={styles.subMenuItem}>상품수정</div>
          </div>
        )}

        <div style={styles.category} onClick={() => toggleExpand("직원관리")}>
          <div>
            <img src="employee.png" alt="직원관리" style={styles.icon} />
            직원관리
          </div>
          <span
            style={{
              ...styles.arrow,
              ...(expanded["직원관리"] ? styles.arrowExpanded : {}),
            }}
          >
            ▶
          </span>
        </div>
        {expanded["직원관리"] && (
          <div style={styles.subMenu}>
            <div style={styles.subMenuItem}>학생 요청 승인</div>
            <div style={styles.subMenuItem}>직원 권한 관리</div>
            <div style={styles.subMenuItem}>직원 정보 관리</div>
          </div>
        )}

        {/* 더 많은 카테고리 추가 가능 */}
      </div>
    </div>
  );
};

export default Sidebar;
