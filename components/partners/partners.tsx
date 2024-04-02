import Card from "./components/card/card";

const Partners = () => {
  return (
    <section id="partners" className="flex flex-col">
      <h1 className="text-4xl font-bold text-center py-6">Наши партнеры:</h1>
      <p className="text-3xl font-bold text-center py-6">Гостинницы</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="text-3xl font-bold text-center py-6">Оформите подписку</h1>
    </section>
  );
};

export default Partners;
