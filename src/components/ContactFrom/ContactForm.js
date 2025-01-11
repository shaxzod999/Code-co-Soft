import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const ContactForm = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      setForms({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title" htmlFor="input_name">
              Полное имя
            </label>
            <input
              value={forms.name}
              type="text"
              name="name"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Голадрия Гомес"
            />
            {validator.message("name", forms.name, "required|alpha_space")}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title" htmlFor="input_email">
              Ваш Email
            </label>
            <input
              value={forms.email}
              type="email"
              name="email"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Code-co Soft@example.com"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="input_title" htmlFor="input_phone">
              Ваш телефон
            </label>
            <input
              value={forms.phone}
              type="phone"
              name="phone"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="+8250-3560 6565"
            />
            {validator.message("phone", forms.phone, "required|phone")}
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="input_title" htmlFor="input_textarea">
              Сообщение
            </label>
            <textarea
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.message}
              type="text"
              name="message"
              className="form-control"
              placeholder="Как мы можем вам помочь?"
            ></textarea>
            {validator.message("message", forms.message, "required")}
          </div>
          <button type="submit" className="btn btn-primary">
            <span className="btn_label" data-text="Отправить сообщение">
              Отправить сообщение
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
