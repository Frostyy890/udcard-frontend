import About from "@/components/about/about";
import Contacts from "@/components/contacts/contacts";
import Home from "@/components/home/home";
import Partners from "@/components/partners/partners";
import Services from "@/components/services/services";
import WhyUs from "@/components/whyus/whyus";

const App = () => {
  return (
    // ROUTES
    <div className="routes">
      <Home />
      <About />
      <WhyUs />
      <Services />
      <Partners />
      <Contacts />
    </div>
  );
};

export default App;
