import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../Styles/header.css";

function Header() {
  const location = useLocation();
  const [isGoyoAwardVisible, setIsGoyoAwardVisible] = useState(false);

  useEffect(() => {
    const handleAwardVisibility = (event) => {
      setIsGoyoAwardVisible(event.detail.visible);
    };

    window.addEventListener("goyo-award-visibility", handleAwardVisibility);

    return () => {
      window.removeEventListener(
        "goyo-award-visibility",
        handleAwardVisibility,
      );
    };
  }, []);

  const pathname =
    location.pathname.toLowerCase().replace(/\/+$/, "") || "/";

  const headerThemes = {

    "/project/artroad": {
      backgroundColor: "#d62828",
      textColor: "#ffffff",
    },

    "/project/goyo": {
      backgroundColor: "#f3f9f7",
      textColor: "#000000",
    },

    "/project/meet-me": {
      backgroundColor: "#000000",
      textColor: "#ffffff",
    },

    // 나중에 프로젝트가 추가되면 아래처럼 추가
    // "/project/project4": {
    //   backgroundColor: "#색상코드",
    //   textColor: "#ffffff",
    // },

    // "/project/project5": {
    //   backgroundColor: "#색상코드",
    //   textColor: "#ffffff",
    // },
  };

  const defaultTheme = {
    backgroundColor: "#ffffff",
    textColor: "#000000",
  };

  const currentTheme = headerThemes[pathname] || defaultTheme;
  const headerTheme =
    pathname === "/project/goyo" && isGoyoAwardVisible
      ? { backgroundColor: "#252525", textColor: "#ffffff" }
      : currentTheme;

  return (
    <header
      className="site-header"
      style={{
        backgroundColor: headerTheme.backgroundColor,
        color: headerTheme.textColor,
      }}
    >
      <Link to="/" className="site-logo">
        Onhwa
      </Link>

      <nav className="site-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          WORK
        </NavLink>

        <NavLink
          to="/awards"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          AWARDS
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;