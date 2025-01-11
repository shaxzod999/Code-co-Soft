import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

import cnIcon1 from "../../../images/icons/icon_php.svg";
import cnIcon2 from "../../../images/icons/icon_javascript.svg";
import cnIcon3 from "../../../images/case/icon_elephent.svg";
import cnIcon4 from "../../../images/icons/icon_swift.svg";
import cnIcon5 from "../../../images/icons/icon_typescript.svg";
import cnIcon6 from "../../../images/icons/icon_python.svg";
import cnIcon7 from "../../../images/icons/icon_g318.svg";
import cnIcon8 from "../../../images/icons/icon_java.svg";
import cnIcon9 from "../../../images/icons/icon_ruby.svg";
import cnIcon10 from "../../../images/icons/icon_c_plus.svg";
import cnIcon11 from "../../../images/icons/icon_react_js.svg";
import cnIcon12 from "../../../images/icons/icon_laravel.svg";
import cnIcon18 from "../../../images/icons/icons8-flutter.svg";
import cnIcon13 from "../../../images/icons/images.png";
import cnIcon14 from "../../../images/icons/images1.png";
import cnIcon15 from "../../../images/icons/img1.png";
import cnIcon16 from "../../../images/icons/img2.png";
import cnIcon17 from "../../../images/icons/img3.png";
import cnIcon19 from "../../../images/icons/img4.png";
import cnIcon20 from "../../../images/icons/img5.png";
import cnIcon21 from "../../../images/icons/img6.png";
import cnIcon22 from "../../../images/icons/img7.png";
import cnIcon23 from "../../../images/icons/img8.png";
import cnIcon24 from "../../../images/icons/img9.png";
import cnIcon25 from "../../../images/icons/icons8-ionic.svg";
import cnIcon26 from "../../../images/icons/img10.png";
import Bg from "../../../images/shapes/shape_title_under_line.svg";

const TechnologyList = [
//   {
//     Id: "1",
//     sIcon: cnIcon1,
//     title: "PHP",
//   },
  {
    Id: "2",
    sIcon: cnIcon2,
    title: "JavaScript",
  },
//   {
//     Id: "3",
//     sIcon: cnIcon3,
//     title: "PostgreSQL",
//   },

  {
    Id: "5",
    sIcon: cnIcon5,
    title: "Typescript",
  },
  {
    Id: "6",
    sIcon: cnIcon6,
    title: "Python",
  },
//   {
//     Id: "7",
//     sIcon: cnIcon7,
//     title: "G318",
//   },
  {
    Id: "8",
    sIcon: cnIcon8,
    title: "Java",
  },
//   {
//     Id: "12",
//     sIcon: cnIcon12,
//     title: "Laravel",
//   },
  {
    Id: "13",
    sIcon: cnIcon19,
    title: "mysql",
  },
  {
    Id: "16",
    sIcon: cnIcon16,
    title: "mssql",
  },
  {
    Id: "14",
    sIcon: cnIcon14,
    title: "SQL",
  },
  {
    Id: "15",
    sIcon: cnIcon3,
    title: "postgresql",
  },

  {
    Id: "17",
    sIcon: cnIcon20,
    title: "oracle",
  },
  {
    Id: "18",
    sIcon: cnIcon21,
    title: "mongodb",
  },
  {
    Id: "19",
    sIcon: cnIcon22,
    title: "firebase",
  },
  {
    Id: "11",
    sIcon: cnIcon18,
    title: "Flutter",
  },
  {
    Id: "12",
    sIcon: cnIcon11,
    title: "React Native",
  },
  {
    Id: "22",
    sIcon: cnIcon25,
    title: "ionic",
  },
  {
    Id: "20",
    sIcon: cnIcon23,
    title: "Linux",
  },
  {
    Id: "21",
    sIcon: cnIcon24,
    title: "Windows",
  },
  {
    Id: "23",
    sIcon: cnIcon26,
    title: "ubuntu",
  },
];

const TechnologySection = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <div className="heading_block text-center">
        <div
          className="heading_focus_text has_underline d-inline-flex"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          Наши технологии
        </div>
        <h2 className="heading_text mb-0">
          Наши <mark>технологии</mark>
        </h2>
      </div>

      <div className="tab_block_wrapper">
        <Nav tabs className="nav justify-content-center">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Веб-платформа
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Базы данных
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Облако и DevOps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Мобильные приложения
            </NavLink>
          </NavItem>
          <NavItem></NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="web_development_technologies row justify-content-center">
              {TechnologyList.slice(0, 15).map((technology, cnt) => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <img src={technology.sIcon} alt="" />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="web_development_technologies row justify-content-center">
              {TechnologyList.slice(4, 11).map((technology, cnt) => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <img src={technology.sIcon} alt="" />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="web_development_technologies row justify-content-center">
              {TechnologyList.slice(14, 17).map((technology, cnt) => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <img src={technology.sIcon} alt="" />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="web_development_technologies row justify-content-center">
              {TechnologyList.slice(11, 14).map((technology, cnt) => (
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <img src={technology.sIcon} alt="" />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default TechnologySection;
