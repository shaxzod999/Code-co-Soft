import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/icons/icon_wifi.svg";
import icon2 from "../../images/icons/icon_dollar_2.svg";
import icon3 from "../../images/icons/icon_chart.svg";
import icon4 from "../../images/icons/icon_tag_2.svg";
import icon5 from "../../images/icons/icon_user_2.svg";
import icon6 from "../../images/icons/icon_users.svg";
import icon7 from "../../images/icons/icon_pen.svg";
import icon8 from "../../images/clients/client_logo_9.webp";
import icon9 from "../../images/clients/client_logo_10.webp";
import icon10 from "../../images/avatar/avatar_7.webp";
import icon11 from "../../images/icons/icon_quote.svg";
import logo from "../../images/site_logo/site_logo_3.png";
import cases from "../../images/case/case_image_4.webp";
import MobileMenu from "../MobileMenu/MobileMenu";
import Services from "../../api/service";

const Header = (props) => {
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site_header site_header_1">
      <div className="header_top text-center">
        <div className="container">
          {/* <p className="m-0">Subscribe us and receive <b>20% bonus</b> discount on checkout. <Link onClick={ClickHandler} to="/pricing"><u>Learn more</u> <i className="fa-solid fa-angle-right"></i></Link></p> */}
        </div>
      </div>
      <div
        className={`header_bottom stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2 col-5">
              <div className="site_logo">
                <Link onClick={ClickHandler} className="site_link" to="/">
                  <img
                    src={logo}
                    alt="Code-co Soft"
                  />
                  <span>Code-co Soft</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
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
                    {/* <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        О компании
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-9">
                              <div className="megamenu_pages_wrapper mb-5">
                                <div className="row">
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      to="/about"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <img
                                            src={icon1}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          О нас
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Узнайте больше о Сodeco
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      to="/portfolio"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <img
                                            src={icon3}
                                            alt="Chart SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Портфолио
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Исследуйте наш обзор
                                      </span>
                                    </Link>
                                  </div>

                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      to="/team"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <img
                                            src={icon5}
                                            alt="User Check SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Команда
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Мы дружелюбны, присоединяйтесь к нашей
                                        команде
                                      </span>
                                    </Link>
                                  </div>

                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      to="/service"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <img src={icon7} alt="Pen SVG Icon" />
                                        </small>
                                        <small className="iconbox_title">
                                          Сервисы
                                        </small>
                                      </span>
                                      <small className="description mb-0">
                                        Готовы помочь вам!
                                      </small>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <ul className="btns_group p-0 unordered_list justify-content-start">
                                <li>
                                  <Link
                                    onClick={ClickHandler}
                                    className="btn btn-primary"
                                    to="/contact"
                                  >
                                    <span
                                      className="btn_label"
                                      data-text="Free Consultation"
                                    >
                                      Бесплатная консультация
                                    </span>
                                    <span className="btn_icon">
                                      <i className="fa-solid fa-arrow-up-right"></i>
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <div className="review_short_info_2">
                                    <div className="review_admin_logo">
                                      <img src={icon8} alt="Client Logo" />
                                    </div>
                                    <div className="review_info_content">
                                      <ul className="rating_block unordered_list">
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                      </ul>
                                      <div className="review_counter">
                                        Из <b>10+</b> отзывов
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="review_short_info_2">
                                    <div className="review_admin_logo">
                                      <img src={icon9} alt="Client Logo" />
                                    </div>
                                    <div className="review_info_content">
                                      <ul className="rating_block unordered_list">
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                        <li>
                                          <i className="fa-solid fa-star fa-fw"></i>
                                        </li>
                                      </ul>
                                      <div className="review_counter">
                                        Из <b>10+</b> отзывов
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
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
                    {/* <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="services_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Сервисы
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper p-0"
                        aria-labelledby="services_submenu"
                      >
                        <div className="container">
                          <div className="row justify-content-lg-between">
                            <div className="col-lg-8">
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      Сервисы{" "}
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      {Services.slice(0, 6).map(
                                        (service, srv) => (
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
                                        )
                                      )}
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            Услуги IT-менеджмента
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service-single/Data-Tracking-and-Security"
                                        >
                                          <span className="icon_list_text">
                                            Безопасность отслеживания данных
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            Разработка веб-сайтов
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            CRM-решения и дизайн
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            Услуги UI/UX-дизайна
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            Технологические решения
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service-single/IT-Management-Services"
                                        >
                                          <span className="icon_list_text">
                                            Разработка программного обеспечения
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      Наши области
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service"
                                        >
                                          <span className="icon_list_text">
                                            Здравоохранение
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service"
                                        >
                                          <span className="icon_list_text">
                                            Логистика
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service"
                                        >
                                          <span className="icon_list_text">
                                            Супермаркеты
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service"
                                        >
                                          <span className="icon_list_text">
                                            Промышленность
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service"
                                        >
                                          <span className="icon_list_text">
                                            Отели
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service"
                                        >
                                          <span className="icon_list_text">
                                            Финтех
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      Проекты
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/portfolio"
                                        >
                                          <span className="icon_list_text">
                                            Кейсы
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/pricing"
                                        >
                                          <span className="icon_list_text">
                                            Наши прайс-листы
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service"
                                        >
                                          <span className="icon_list_text">
                                            Возможности
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/about"
                                        >
                                          <span className="icon_list_text">
                                            Обзор
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link onClick={ClickHandler} to="/">
                                          <span className="icon_list_text">
                                            Новые релизы
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          to="/service"
                                        >
                                          <span className="icon_list_text">
                                            Решения
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="social_area">
                                <ul
                                  className="social_icons_block unordered_list"
                                  data-text="Подписывайтесь на нас:"
                                >
                                  <li>
                                    <Link onClick={ClickHandler} to="/">
                                      <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={ClickHandler} to="/">
                                      <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={ClickHandler} to="/">
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={ClickHandler} to="/">
                                      <i className="fa-brands fa-dribbble"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="megamenu_case bg-primary">
                                <h3>Компьютерное программное обеспечение</h3>
                                <h4>Астарте Медикал</h4>
                                <img src={cases} alt="Case" />
                                <Link
                                  onClick={ClickHandler}
                                  className="btn"
                                  to="/portfolio"
                                >
                                  <span
                                    className="btn_label"
                                    data-text="Прочитать дело"
                                  >
                                    Прочитать дело
                                  </span>
                                  <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    {/* <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="pages_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Страницы
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="pages_submenu"
                      >
                        <li>
                          <Link onClick={ClickHandler} to="/about">
                            О нас
                          </Link>
                        </li>

                        <li>
                          <Link onClick={ClickHandler} to="/contact">
                            Поддержка
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    onClick={() => setMobailState(!mobailActive)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li className="hidden" style={{display:"none"}}>
                  <div
                    onClick={ClickHandler}
                    className="btn btn-outline-light"
                  >
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(!mobailActive)}
              ></div>
              <nav className="xb-header-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div
            className="xb-header-menu-backdrop"
            onClick={() => setMobailState(false)}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
