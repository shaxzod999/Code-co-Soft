import React from "react";
import Project from "../../api/project";
import { useNavigate } from "react-router-dom";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ProjectSection = () => {
  const navigate = useNavigate();

  const ClickHandler = (project, event) => {
    event.stopPropagation();
    window.scrollTo(10, 0);
    navigate(`/portfolio_details/${project.slug}`, { state: { project } });
  };

  return (
    <section className="portfolio_section xb-hidden section_space pb-0">
      <div className="container">
        <div className="heading_block">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="heading_focus_text">
                <span className="badge bg-secondary text-white">Создаём</span>
                успех с помощью проектов 😍
              </div>
              <h2 className="heading_text">Наши недавние лучшие работы</h2>
              <p className="heading_description mb-0">
                Наши недавние проекты подчеркивают нашу экспертизу в
                предоставлении индивидуальных решений, которые соответствуют
                уникальным потребностям и целям наших клиентов, включая
                кастомное программное обеспечение.
              </p>
            </div>
          </div>
        </div>
      </div>
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
                  style={{ height: "800px" }}
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
    </section>
  );
};

export default ProjectSection;
