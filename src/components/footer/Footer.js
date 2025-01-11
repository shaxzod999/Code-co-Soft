import React from "react";
import { Link } from "react-router-dom";
import Bg from "../../images/shapes/bg_pattern_3.svg";
import icon1 from "../../images/icons/icon_mail.svg";
import icon2 from "../../images/icons/icon_calling.svg";
import icon3 from "../../images/icons/icon_map_mark.svg";
import icon4 from "../../images/icons/icon_mail_2.svg";
import sImg1 from "../../images/icons/icon_facebook.svg";
import sImg3 from "../../images/icons/icon_linkedin.svg";
import sImg4 from "../../images/icons/icon_instagram.svg";
import Services from "../../api/service";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer className="site_footer footer_layout_1">
      <div className="content_box" style={{ backgroundImage: `url(${Bg})` }}>
        <div className="container">
          <div className="diract_contact_links text-white">
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon1} alt="Mail SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Напишите нам</h3>
                <p className="mb-0">Code-co Soft@gmail.com</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon2} alt="Calling Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title"> Позвоните На (UZB)</h3>
                <p className="mb-0">+(998) 91 418 05 18</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon3} alt="Map Mark Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Наш офис</h3>
                <p className="mb-0">Uzbekistan, Bukhara, 200100</p>
              </div>
            </div>
          </div>
          <div className="footer_main_content">
            <div className="row gap-5">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Сервисы</h3>
                  <ul className="icon_list unordered_list_block">
                    {Services.slice(0, 5).map((service, srv) => (
                      <li key={srv}>
                        {service.title ? (
                          <Link
                            onClick={ClickHandler}
                            to={`/service-single/${service.slug}`}
                          >
                            <span className="icon_list_text">
                              {service.title}
                            </span>
                          </Link>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Информация</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="home_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Главная
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/team"
                        id="home_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Команда
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/about"
                        id="home_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        О нас
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/portfolio"
                        id="portfolio_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Портфолио
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Контакты
                      </Link>
                    </li>
                    {/* <li>
                      <Link onClick={ClickHandler} to="/about">
                        <span className="icon_list_text">О Techco</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/service">
                        <span className="icon_list_text">Инвесторы</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        <span className="icon_list_text">Контакт</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        <span className="icon_list_text">
                          Партнёрская программа
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/portfolio">
                        <span className="icon_list_text">Карьера</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/pricing">
                        <span className="icon_list_text">Цены</span>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "nowrap",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: "30px",
                    }}
                    className="social_icons_block unordered_list justify-content-center"
                  >
                    <div
                      style={{
                        width: "500px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "50px",
                      }}
                    >
                      <li
                        style={{
                          width: "130px",
                          display: "flex",
                          flexWrap: "nowrap",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <Link to={"/"}>
                          <img src={sImg4} alt="Icon Instagram" />
                        </Link>
                        -Instagram
                      </li>
                      <li
                        style={{
                          width: "128px",
                          display: "flex",
                          flexWrap: "nowrap",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <Link to={"/"}>
                          <img src={sImg1} alt="Icon Facebook" />
                        </Link>
                        -Facebook
                      </li>
                      <li
                        style={{
                          width: "100px",
                          display: "flex",
                          flexWrap: "nowrap",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <Link to={"/"}>
                          <i className="fa-brands fa-github"></i>
                        </Link>
                        -github
                      </li>
                    </div>
                    <div
                      style={{
                        width: "500px",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "50px",
                      }}
                    >
                      <li
                        style={{
                          width: "115px",
                          display: "flex",
                          flexWrap: "nowrap",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <Link to={"/"}>
                          <i class="fa-brands fa-youtube"></i>
                        </Link>
                        -youtube
                      </li>
                      <li
                        style={{
                          width: "123px",
                          display: "flex",
                          flexWrap: "nowrap",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <Link to={"/"}>
                          <i class="fa-brands fa-telegram"></i>
                        </Link>
                        -telegram
                      </li>
                      <li
                        style={{
                          width: "120px",
                          display: "flex",
                          flexWrap: "nowrap",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <Link to={"/"}>
                          <img src={sImg3} alt="Icon Linkedin" />
                        </Link>
                        -Linkedin
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
