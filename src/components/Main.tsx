import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const Card: React.FC<{
  icon: any;
  title: string;
  description: React.ReactNode;
  onClick?: () => void;
}> = ({ icon, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full max-w-[400px] h-70 bg-[#2793db] shadow-md flex flex-col items-center justify-center cursor-pointer transition transform hover:scale-95 active:scale-90"
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-19 w-19 rounded-full bg-[#07243c] text-white">
        <FontAwesomeIcon icon={icon} size="2xl" />
      </div>
      {/* Title */}
      <h2 className="text-white text-4xl font-bold m-4 font-primary tracking-widest">
        {title}
      </h2>
      {/* Description */}
      <div className="text-white text-center">
        <p className="text-md tracking-[1.2px]">{description}</p>
      </div>
    </div>
  );
};

const Main: React.FC = () => {
  return (
    <main className="bg-[#07243c] py-20 px-6 flex flex-col items-center gap-15">
      <Card
        icon={faPhone}
        title="Telefon"
        onClick={() => (window.location.href = "tel:02131767217")}
        description={
          <>
            Wir sind werktags zwischen 8 - 17
            <br /> Uhr unter der Nummer 02131 76 72 17
            <br /> zu erreichen.
          </>
        }
      />
      <Card
        icon={faEnvelope}
        title="E-Mail"
        onClick={() => (window.location.href = "mailto:info@gilgesltw.de")}
        description={
          <>
            Schreiben Sie uns gerne eine
            <br />
            E-Mail info@gilgesltw.de
          </>
        }
      />
      {/* Kontakt Card → download/import VCF */}
      <a href="/GILGES-LTW.vcf" download className="block w-full max-w-[400px]">
        <Card
          icon={faUser}
          title="Kontakt"
          description={
            <>
              Möchten Sie uns direkt zu Ihrem
              <br />
              Adressbuch hinzufügen?
            </>
          }
        />
      </a>
      {/* <Card
        icon={faUser}
        title="Kontakt"
        onClick={() => {window.location.href = "../public/assets/GILGES-LTW.vcf";}}
        description={
          <>
            Möchten Sie uns direkt zu Ihrem
            <br />
            Adressbuch hinzufügen?
          </>
        }
      /> */}
    </main>
  );
};

export default Main;
