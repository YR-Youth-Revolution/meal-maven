import React, { useState } from "react";
import "./Header.css";
import logoImage from "/public/Website/meal-maven.png";
import menu from "/public/Website/menu.png";
import { motion } from "framer-motion";
import Modal from "../../components/Culinary/Modal";
import ContactForm from "./Form";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#home");
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menuId) => {
    if (menuId === "openModal") {
      openModal();
    } else {
      setActiveMenu(menuId);
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <motion.div
      className="header-container"
      initial={{ opacity: 1, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="logo-box">
      <a href="/">  <img src={logoImage} alt="Logo" /></a>
      </div>
      <div className="menu-box">
        <ul>
          {[
            { id: "/#home", label: "Home" },
            { id: "/#cook-with-us", label: "Cook with us" },
            { id: "/#about", label: "About" },
            { id: "/#why-choose-us", label: "Why Mealee?" },
            { id: "/#app", label: "App" },
            // { id: "openModal", label: "Contact" },
          ].map((menu) => (
            <li
              key={menu.id}
              className={activeMenu === menu.id ? "active" : ""}
              onClick={
                menu.id === "openModal"
                  ? openModal
                  : () => handleMenuClick(menu.id)
              }
            >
              <a href={menu.id !== "openModal" ? menu.id : "#"}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-btn-box">
        <button className="button-order" onClick={openModal}>Contact Us</button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="modal-box form-box"
      >
        <div className="form-container">
          <div className="form-heading-box">
            <h3>Contact us</h3>
            <h1>Get in touch</h1>
            <p>We’d love to hear from you.</p>
          </div>
          <ContactForm />
        </div>
      </Modal>

      <div className="mob-menu">
        <img
          onClick={toggleSidebar}
          className="menu-icon"
          src={menu}
          alt="Menu"
        />
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? "X" : ""}
        </button>
        <nav className="menu">
          <ul>
            {[
              { id: "#home", label: "Home" },
              { id: "#cook-with-us", label: "Cook with us" },
              { id: "#about", label: "About" },
              { id: "#why-choose-us", label: "Why Mealee?" },
              { id: "#app", label: "App" },
              // { id: "openModal", label: "Contact" },
            ].map((menu) => (
              <li
                key={menu.id}
                className={activeMenu === menu.id ? "active" : ""}
                onClick={
                  menu.id === "openModal"
                    ? openModal
                    : () => handleMenuClick(menu.id)
                }
              >
                <a href={menu.id !== "openModal" ? menu.id : "#"}>{menu.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
