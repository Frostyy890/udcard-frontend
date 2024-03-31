import About from "@/components/about/about";
import Contacts from "@/components/contacts/contacts";
import Home from "@/components/home/home";
import Services from "@/components/services/services";
import Slider from "@/components/slider/custom_slider";
import WhyUs from "@/components/whyus/whyus";

const App = () => {
  return (
    // ROUTES
    <div className="routes">
      <Home />
      <About />
      <WhyUs />
      <Services />
      <Slider />
      <Contacts />
    </div>
  );
};

export default App;
