import About from "@/components/about/about";
import Contacts from "@/components/contacts/contacts";
import Home from "@/components/home/home";
import PartnersHome from "@/components/partners/partners.home";
import Services from "@/components/services/services";
import WhyUs from "@/components/whyus/whyus";

const App = () => {
  return (
    // ROUTES
    <div className="routes">
      <Home />
      <About />
      <PartnersHome />
      <WhyUs />
      <Services />
      <Contacts />
    </div>
  );
};

export default App;
