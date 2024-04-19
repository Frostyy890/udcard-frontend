import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SavingsIcon from "@mui/icons-material/Savings";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { useTranslations } from "next-intl";

const Services = () => {
  const defaultIconSize = { fontSize: "5rem" };
  const t = useTranslations("Services");
  return (
    <section id="services" className="w-full">
      <div className="py-[11.25rem] max-w-[1200px] mx-auto text-center px-4">
        <div className="mb-24 max-w-[560px] mx-auto">
          <h1 className="text-4xl font-bold mb-10">{t("headerScheme")}</h1>
          <p className="text-left text-sm font-bold">{t("bodyScheme")}</p>
        </div>
      </div>
      <div className="py-[11.25rem] bg-gray-900 text-gray-100 px-4">
        <div className="max-w-[1200px] text-center mx-auto">
          <h1 className="text-4xl font-bold mb-24">{t("header")}</h1>
          <div className="items max-w-[760px] mx-auto flex flex-col gap-y-12">
            {/* ITEM 1 */}
            <div className="item flex gap-9">
              <div>
                <AirplanemodeActiveIcon sx={defaultIconSize} />
              </div>
              <div className="text-left flex flex-col gap-3">
                <h1 className="text-lg font-bold"></h1>
                <h3 className="text-lg font-light">{t("desc")}</h3>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className="item flex gap-9">
              <div>
                <SavingsIcon sx={defaultIconSize} />
              </div>
              <div className="text-left flex flex-col gap-3">
                <h1 className="text-lg font-bold">{t("titleSavings")}</h1>
                <h3 className="text-lg font-light">{t("descSavings")}</h3>
              </div>
            </div>
            {/* ITEM 3 */}
            <div className="item flex gap-9">
              <div>
                <PriceCheckIcon sx={defaultIconSize} />
              </div>
              <div className="text-left flex flex-col gap-3">
                <h1 className="text-lg font-bold">{t("titleEffective")}</h1>
                <h3 className="text-lg font-light">{t("descEffective")}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
