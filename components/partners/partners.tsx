import { PartnerType, partnersData } from "./data/partners.data";
import PartnersSLider from "./components/partners-sliders/partners.slider";
import "./partners.styles.css";
import { useTranslations } from "next-intl";

const Partners = () => {
  const { categories, partners, isCategoryEmpty, returnSortedPartners } =
    partnersData;
  const partnersTypeDiscount = partners.filter(
    (partner) => partner.type === PartnerType.discount
  );
  const partnersTypeCard = partners.filter(
    (partner) => partner.type === PartnerType.card
  );
  const t = useTranslations("Second_Page");
  return (
    <section>
      <h1 className="md:text-4xl text-2xl font-bold text-center md:py-6 pt-6 px-2">
        {t("FirstBlock.header")}
      </h1>
      {categories.map((category) =>
        isCategoryEmpty(category.id, partnersTypeCard) ? (
          <div id={category.path} key={category.id}>
            <p className="md:text-3xl text-xl font-bold text-center py-8">
              {category.name}
            </p>
            <div className="max-w-[1920px] mx-auto">
              <PartnersSLider
                partners={returnSortedPartners(category.id, partnersTypeCard)}
              />
            </div>
          </div>
        ) : undefined
      )}
      <h1 className="md:text-4xl text-2xl font-bold text-center md:py-6 pt-6 px-2">
        {t("SecondBlock.header")}
      </h1>
      {categories.map((category) =>
        isCategoryEmpty(category.id, partnersTypeDiscount) ? (
          <div id={category.path} key={category.id}>
            <p className="md:text-3xl text-xl font-bold text-center py-8">
              {category.name}
            </p>
            <div className="w-full">
              <PartnersSLider
                partners={returnSortedPartners(
                  category.id,
                  partnersTypeDiscount
                )}
              />
            </div>
          </div>
        ) : undefined
      )}
    </section>
  );
};

export default Partners;
