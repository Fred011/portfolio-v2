import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <SideMenu />
      <Button />
      <Name />
      <div className="contact-container">
        <div classname="contact-header">
          <h2>
            Bonjour, je m'appelle
            <br />
            Frédéric Vannier.
            <br />
            Développeur web et graphiste,
            <br />
            actuellement à la recherche de
            <br />
            <span>nouvelles opportunités</span>
          </h2>
        </div>
        <div className="contact-text">
          <section className="first-section">
            <p>Intéressé par travailler avec moi?</p>
          </section>
          <section className="second-section">
            <p>
              N'hésitez pas à me contacter par e-mail
              <br />
              pour une possible collaboration
            </p>
          </section>
          <a href="mailto:frederic.vannier01@gmail.com?subject=Je viens de voir votre portfolio!">
            <p className="email">frederic.vannier01@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}