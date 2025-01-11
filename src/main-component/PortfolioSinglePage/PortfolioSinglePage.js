import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Project from "../../api/project";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import psImg from "../../images/portfolio/portfolio_details_image_1.webp";
import icon from "../../images/icons/icon_check_3.svg";
import { useLocation } from "react-router-dom";
import TechnologySection from "../../components/software-company-components/TechnologySection/TechnologySection";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const   PortfolioSinglePage = (props) => {
  const { slug } = useParams();
  const PortfolioDetails = Project.find((item) => item.slug === slug);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const location = useLocation();
  const { project } = location.state;

  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={PortfolioDetails.title}
          pagesub={"Детали 😃"}
          pageTop={"Портфолио"}
        />
        <section className="portfolio_details_section section_space bg-light">
          <div className="container">
            {/* <div className="details_item_image">
              <img src={psImg} alt="Портфолио Элемент" />
            </div>
            <h2 className="details_item_title">
              Проект по миграции и интеграции в облако
            </h2>
            <p>
              "Проект по миграции и интеграции в облако" является важным этапом
              цифровой трансформации нашего клиента. Переход с традиционной
              инфраструктуры в облако открывает множество возможностей, таких
              как масштабируемость, гибкость, безопасность и снижение затрат.
              Наша тщательная подготовка и реализация обеспечивают бесперебойный
              переход.
            </p>
            <p className="mb-0">
              Мы содействуем успешному выполнению проекта за счет полной
              подготовки и технической поддержки. Наша экспертиза и преданность
              помогают нашим клиентам создавать инновации.
            </p> */}
            <div className="project_details">
              <div className="details_item_image">
                <img src={project.pImg} alt="Портфолио Элемент" />
              </div>
              <h2 className="details_item_title">{project.title}</h2>
              <p className="mb-0">{project.sub}</p>
              <br />
              <p>{project.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (project.link) {
                    window.open(project.link, "_blank");
                  } else {
                    console.log("Link not available");
                  }
                }}
              >
                <span className="btn_label" data-text="Посмотреть сайт">
                  Посмотреть сайт
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </button>
            </div>
            <hr />
            {/* <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
              <li>
                <span className="icon_list_text">
                  <strong className="text-dark text-uppercase">Услуги:</strong>
                  Миграция в облако
                </span>
              </li>
              <li>
                <span className="icon_list_text">
                  <strong className="text-dark text-uppercase">Клиент:</strong>
                  Code-co Soft
                </span>
              </li>
              <li>
                <span className="icon_list_text">
                  <strong className="text-dark text-uppercase">
                    Местоположение:
                  </strong>
                  Нью-Йорк, США
                </span>
              </li>
              <li>
                <span className="icon_list_text">
                  <strong className="text-dark text-uppercase">
                    Дата завершения:
                  </strong>
                  20-12-2024
                </span>
              </li>
            </ul>

            <h3 className="details_item_info_title pt-4">Требования проекта</h3>
            <p>
              На этом этапе проекта реализуются стратегические планы по миграции
              в облако. Бесперебойная миграция данных с серверов в облачные
              хранилища.
            </p> */}
            <div className="row mb-4">
              <div className="col-lg-5">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Иконка проверки SVG" />
                    </span>
                    <span className="icon_list_text">Полный этап оценки</span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Иконка проверки SVG" />
                    </span>
                    <span className="icon_list_text">
                      Стратегические планы миграции
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Иконка проверки SVG" />
                    </span>
                    <span className="icon_list_text">
                      Стратегии миграции данных
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Иконка проверки SVG" />
                    </span>
                    <span className="icon_list_text">
                      Подготовка инфраструктуры
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Иконка проверки SVG" />
                    </span>
                    <span className="icon_list_text">
                      Миграция программного обеспечения
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Иконка проверки SVG" />
                    </span>
                    <span className="icon_list_text">
                      Подготовка учебных материалов и документации
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Иконка проверки SVG" />
                    </span>
                    <span className="icon_list_text">
                      Подготовка инфраструктуры
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_icon">
                      <img src={icon} alt="Иконка проверки SVG" />
                    </span>
                    <span className="icon_list_text">
                      Поддержка после миграции
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="details_item_info_title pt-4">
              Решение и результат
            </h3>
            <p>
              Миграция данных была успешно выполнена, и данные были бесперебойно
              перенесены из серверов в облачные хранилища. В процессе этого
              процесса безопасность и точность данных были приоритетом.
            </p>
            <p>
              Для достижения этого результата были проведены тщательные
              планирования и проверки, в том числе с использованием самых
              современных инструментов.
            </p>

            <h3 className="details_item_info_title pt-5 mb-4">
              Наши похожие проекты
            </h3>
            <TechnologySection />
          </div>
        </section>
        <div style={{ margin: "50px 0" }}>
          <div className="portfolio_carousel">
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{ clickable: true }}
              speed={400}
              parallax={true}
              breakpoints={{
                1025: {
                  slidesPerView: 2,
                },
              }}
            >
              {Project.slice(0, 23).map((project, prj) => {
                const descriptionPreview = project.description
                  ? project.description.split(" ").slice(0, 19).join(" ")
                  : "No description available";

                return (
                  <SwiperSlide key={prj}>
                    <div
                      className="portfolio_block"
                      onClick={(e) => ClickHandler(project, e)}
                      style={{height:"800px"}}
                    >
                      <div className="portfolio_image">
                        <button
                          onClick={(e) => ClickHandler(project, e)}
                          className="portfolio_image_wrap bg-light"
                        >
                          <img
                            src={project.pImg}
                            alt={project.title}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </button>
                      </div>
                      <div className="portfolio_content">
                        <h3 className="portfolio_title">
                          <button onClick={(e) => ClickHandler(project, e)}>
                            {project.title}
                          </button>
                        </h3>
                        <ul className="category_list unordered_list">
                          <li>
                            <button onClick={(e) => ClickHandler(project, e)}>
                              {project.sub}
                            </button>
                          </li>
                        </ul>{" "}
                        <br />
                        <p>{descriptionPreview}...</p>
                        <button
                          onClick={(e) => ClickHandler(project, e)}
                          className="btn btn-outline-light"
                        >
                          <span className="btn_label" data-text="Исследовать">
                            Исследовать
                          </span>
                          <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default PortfolioSinglePage;
