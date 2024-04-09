import { partnersData } from "./data/partners.data";
import PartnersSLider from "./components/partners-sliders/partners.slider";
import "./partners.styles.css";

const Partners = () => {
  const { categories, partners, isCategoryEmpty, returnSortedPartners } =
    partnersData;
  return (
    <section className="py-6">
      <h1 className="md:text-4xl text-2xl font-bold text-center md:py-6 py-2">
        Наши партнеры:
      </h1>
      {categories.map((category) =>
        isCategoryEmpty(category.id, partners) ? (
          <div id={category.path} key={category.id}>
            <p className="md:text-3xl text-xl font-bold text-center md:py-6 py-4">
              {category.name}
            </p>
            <div className="w-full px-3">
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
