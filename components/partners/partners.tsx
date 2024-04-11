import { partnersData } from "./data/partners.data";
import PartnersSLider from "./components/partners-sliders/partners.slider";
import "./partners.styles.css";

const Partners = () => {
  const { categories, partners, isCategoryEmpty, returnSortedPartners } =
    partnersData;
  return (
    <section className="py-6">
      <h1 className="md:text-4xl text-2xl font-bold text-center md:py-6 pt-2">
        Партнеры где вы можете приобрести наши карты
      </h1>
      {categories.map((category) =>
        isCategoryEmpty(category.id, partners) && category.id === 1 ? (
          <div id={category.path} key={category.id}>
            <p className="md:text-3xl text-xl font-bold text-center py-8">
              {category.name}
            </p>
            <div className="w-full">
              <PartnersSLider
                partners={returnSortedPartners(category.id, partners)}
              />
            </div>
          </div>
        ) : undefined
      )}
      <h1 className="md:text-4xl text-2xl font-bold text-center md:py-6 pt-2">
        Партнеры где вы можете получить скидки по нашим картам
      </h1>
      {categories.map((category) =>
        isCategoryEmpty(category.id, partners) && category.id !== 1 ? (
          <div id={category.path} key={category.id}>
            <p className="md:text-3xl text-xl font-bold text-center py-8">
              {category.name}
            </p>
            <div className="w-full">
              <PartnersSLider
                partners={returnSortedPartners(category.id, partners)}
              />
            </div>
          </div>
        ) : undefined
      )}
    </section>
  );
};

export default Partners;
