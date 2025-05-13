import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[url('../public/assets/header-bg.png')] bg-cover bg-center text-white py-10 h-125">
      <div className="container mx-auto">
        {/* Logo and Title */}
        <div className="flex flex-col items-center">
          <img
            src="../public/assets/logo.png"
            alt="Gilges Logo"
            className="h-13 w-58 mb-7"
          />
          <h1
            className="text-4xl font-bold text-center text-white font-primary tracking-wide"
            style={{ textShadow: "4px 4px 2px rgba(0,0,0,0.8)" }}
          >
            Leckageortung <br />
            Technische Trocknung <br />
            Winterbaubeheizung
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
