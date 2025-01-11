import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import Teams from "../../api/team";
import CountUp from "react-countup";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import sImg1 from "../../images/icons/icon_facebook.svg";
import sImg2 from "../../images/icons/icon_twitter_x.svg";
import sImg3 from "../../images/icons/icon_linkedin.svg";
import sImg4 from "../../images/icons/icon_instagram.svg";

const TeamSinglePage = (props) => {
  const { slug } = useParams();

  const TeamDetails = Teams.find((item) => item.slug === slug);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={TeamDetails.name}
          pagesub={"Подробности 😍"}
          pageTop={"Команда"}
        />
        <section className="team_details_section section_space bg-light">
          <div className="container">
            <div className="team_member_details_card">
              <div className="team_member_image">
                <img src={TeamDetails.tImg} alt="Team Member" />
              </div>
              <div className="team_member_content">
                <h2 className="team_member_name">{TeamDetails.name}</h2>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="icon_list_text">
                      <strong>Ответственность: </strong>
                      {TeamDetails.title}
                    </span>
                  </li>
                  {/* <li>
                                        <span className="icon_list_text">
                                            <strong>Experience:</strong>
                                            18 Years
                                        </span>
                                    </li> */}
                  <li>
                    <span className="icon_list_text">
                      <strong>Электронная почта: </strong>
                      {TeamDetails.email}
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_text">
                      <strong>Телефон: </strong>
                      {TeamDetails.phone}
                    </span>
                  </li>
                </ul>
                <div className="social_wrapper">
                  <h3 className="social_title">Социальные сети</h3>
                  <ul className="social_icons_block unordered_list">
                    <li>
                      <Link onClick={ClickHandler} to={"/team"}>
                        <img src={sImg1} alt="Icon Facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to={"/team"}>
                        <img src={sImg2} alt="Icon Twitter X" />
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to={"/team"}>
                        <img src={sImg3} alt="Icon Linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to={"/team"}>
                        <img src={sImg4} alt="Icon Instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="details_item_info_title">Профессиональные навыки</h3>
            <p>
              С момента прихода в Code-co Soft в 1993 году Матильда сыграла
              важную роль в Преобразование компании из коллекции технически
              подкованных от людей, сотрудничающих со стартапами, до всемирно
              известного лидера в сфере цифровых системотехнических услуг,
              обслуживающих инновационные потребности предприятий из списка
              Fortune 500. Во время Матильды За время своего пребывания на посту
              президента и генерального директора компания Code-co Soft стала
              свидетелем замечательных расширение как масштабов, так и потоков
              доходов. Этот рост имеет были достигнуты рука об руку с
              выращиванием динамичного корпоративная культура, которая
              способствует вовлечению сотрудников и способствует дух инноваций
              на каждом уровне.
            </p>

            <div className="row mb-5">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="funfact_block text-center">
                  <div className="counter_value">
                    <span className="odometer" data-count="98">
                      <CountUp end={98} enableScrollSpy />
                    </span>
                    <span>%</span>
                  </div>
                  <h3 className="funfact_title mb-0">Разработка продукта</h3>
                  <div className="bottom_line bg-primary"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="funfact_block text-center">
                  <div className="counter_value">
                    <span className="odometer" data-count="88">
                      <CountUp end={88} enableScrollSpy />
                    </span>
                    <span>%</span>
                  </div>
                  <h3 className="funfact_title mb-0">Решение проблем</h3>
                  <div className="bottom_line bg-danger"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="funfact_block text-center">
                  <div className="counter_value">
                    <span className="odometer" data-count="99">
                      <CountUp end={99} enableScrollSpy />
                    </span>
                    <span>%</span>
                  </div>
                  <h3 className="funfact_title mb-0">
                    Коммуникационные навыки
                  </h3>
                  <div className="bottom_line bg-secondary"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="funfact_block text-center">
                  <div className="counter_value">
                    <span className="odometer" data-count="77">
                      <CountUp end={77} enableScrollSpy />
                    </span>
                    <span>%</span>
                  </div>
                  <h3 className="funfact_title mb-0">Страсть к помощи</h3>
                  <div className="bottom_line bg-warning"></div>
                </div>
              </div>
            </div>

            <h3 className="details_item_info_title">Образовательный опыт</h3>
            <p>
              Имея степень бакалавра компьютерных наук, полученную в Университет
              XYZ, я специализировался на структурах данных, алгоритмах, и сети.
              Расширяя свои знания, я получил степень магистра в Управление
              информационными технологиями в Университете ABC.
            </p>

            <p className="mb-2">Qualifications:</p>
            <ul className="icon_list unordered_list_block">
              <li>
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle fa-fw"></i>
                </span>
                <span className="icon_list_text">
                  Навыки системного анализа, проектирования, внедрения и
                  обслуживание.
                </span>
              </li>
              <li>
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle fa-fw"></i>
                </span>
                <span className="icon_list_text">
                  Уверенное знание сетевых протоколов, аппаратного и
                  программного обеспечения. компоненты.
                </span>
              </li>
              <li>
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle fa-fw"></i>
                </span>
                <span className="icon_list_text">
                  Опыт работы с технологиями виртуализации (VMware, Hyper-V).
                </span>
              </li>
              <li>
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle fa-fw"></i>
                </span>
                <span className="icon_list_text">
                  Опыт работы с платформами облачных вычислений (AWS, Azure,
                  Google. Облако).
                </span>
              </li>
              <li>
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle fa-fw"></i>
                </span>
                <span className="icon_list_text">
                  Знание скриптовых языков (Python, PowerShell).
                </span>
              </li>
              <li>
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle fa-fw"></i>
                </span>
                <span className="icon_list_text">
                  Опыт планирования системной безопасности и аварийного
                  восстановления.
                </span>
              </li>
              <li>
                <span className="icon_list_icon">
                  <i className="fa-solid fa-circle fa-fw"></i>
                </span>
                <span className="icon_list_text">
                  Отличные навыки решения проблем и аналитические способности.
                </span>
              </li>
            </ul>
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamSinglePage;
