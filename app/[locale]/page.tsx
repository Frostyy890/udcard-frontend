import About from "@/components/about";
import Contacts from "@/components/contacts";
import Home from "@/components/home";
import PartnersDemo from "@/components/partners/partnersDemo";
import Services from "@/components/services";
import WhyUs from "@/components/whyus";

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
