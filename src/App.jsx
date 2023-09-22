import React from "react";
import Header from "./components/header";
import Advertisment from "./components/advertisment";
import Footer from "./components/footer"

function App() {
  const footerProps = {
    year: 2023,
    company: 'EcoFusion Technologies',
    address: '123 Main Street, City, Country',
    email: 'contact@company.com',
    phone: '+1 (123) 456-7890',
  };

  return (
    <>
      <Header />
      <Advertisment />
      <Footer {...footerProps} />
  
    </>
  );
}
export default App;
