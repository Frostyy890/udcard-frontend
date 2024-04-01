import CustomSlider from "../slider/custom_slider";
import slides from "../slider/slider.data";

const Partners = () => {
  return (
    <section id="partners">
      <h1 className="text-4xl font-bold text-center py-6">Наши партнеры:</h1>
      <p className="text-3xl font-bold text-center py-6">Гостинницы</p>
      <CustomSlider slides={slides}/>
      <h1 className="text-3xl font-bold text-center py-6">Оформите подписку</h1>
      <CustomSlider slides={slides}/>
    </section>
  );
};

export default Partners;
