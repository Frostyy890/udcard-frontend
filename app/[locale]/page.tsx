import About from "@/components/about/about";
import Contacts from "@/components/contacts/contacts";
import Home from "@/components/home/home";
import PartnersDemo from "@/components/partners/partners.demo";
import Services from "@/components/services/services";
import WhyUs from "@/components/whyus/whyus";

const App = () => {
  return (
    // ROUTES
    <div className="routes">
      <Home />
      <About />
      <PartnersDemo />
      <WhyUs />
      <Services />
      <Contacts />
    </div>
  );
};

export default App;
