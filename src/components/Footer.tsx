import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="bg-[url('../public/assets/footer-bg.jpg')] absolute inset-0 bg-cover bg-left "></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-25"></div>
      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto px-6 py-10 flex flex-col items-center text-center space-y-10">
        {/* Logo and Description */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="../public/assets/logo.png"
            alt="Gilges Logo"
            className="h-15 mb-5 mt-10"
          />
          <p className="text-md leading-[2.0rem] tracking-[1.2px]">
            Als traditionelles Familienunternehmen
            <br /> sind wir vor allem eines: immer ganz nah
            <br /> dran an unseren Kunden. Indem wir ihre
            <br /> Wünsche zu unserer Leidenschaft.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex gap-12 text-3xl">
          <a href="#" className="hover:text-sky-500">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-sky-500">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-sky-500">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-[90vw] h-px bg-white opacity-30 "></div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-wider mb-2 font-primary">
            Quick Links
          </h3>
          <div className="w-12 h-1 bg-white mx-auto mb-6"></div>
          <a
            href="https://webversion-gilgesltw.hakmitec.com/"
            className="hover:text-sky-500 text-xl"
          >
            Home
          </a>
        </div>

        {/* Divider */}
        <div className="w-[90vw] h-px bg-white opacity-30 "></div>

        {/* Sprechzeiten */}
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold tracking-wider mb-2 font-primary">
            Sprechzeiten
          </h3>
          <div className="w-12 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl">Montag – Freitag</p>
          <p className="text-xl">08.00 – 17.00</p>
        </div>

        {/* Divider */}
        <div className="w-[90vw] h-px bg-white opacity-30 "></div>

        {/* Copyright */}
        <div className="text-lg text-center space-y-1 tracking-wide">
          <p>
            ©Copyright 2024 |{" "}
            <span className="font-semibold underline ">
              Gilges Bautrocknung |
            </span>
          </p>
          <p>Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
