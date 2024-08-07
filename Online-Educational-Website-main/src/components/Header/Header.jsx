import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";


<header class="header"></header>
const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About Us",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Academy",
    url: "#",
  },
  {
    display: "Certification",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> <span>Bright</span>learn
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>

              < button className="btn free__btn">Sign in</button>
        


          </div>
        </div>
      </div>
      <div className="mobile__menu">
        <span>
          <i class="ri-menu-line" onClick={menuToggle}></i>


        </span>
      </div>



    </Container>
    </header >
  );
};

export default Header;

