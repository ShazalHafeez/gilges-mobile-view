import React from "react";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';


const GilgesLTW: React.FC = () => {
   return (
     <div className="bg-[#07243c]">
       <Header />
       <Main />
       <Footer />
     </div>
   );
};

export default GilgesLTW;
