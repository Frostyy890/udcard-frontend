import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SavingsIcon from "@mui/icons-material/Savings";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { useTranslations } from "next-intl";
import { descCard } from "../whyus";

const Services = () => {
  const defaultIconSize = { fontSize: "5rem" };
  const t = useTranslations("First_Page");
  const servicesData: descCard[] = [
    {
      icon: <AirplanemodeActiveIcon sx={defaultIconSize} />,
      title: "",
      desc: t("Services.desc"),
    },
    {
      icon: <SavingsIcon sx={defaultIconSize} />,
      title: t("Services.titleSavings"),
      desc: t("Services.descSavings"),
    },
    {
      icon: <PriceCheckIcon sx={defaultIconSize} />,
      title: t("Services.titleEffective"),
      desc: t("Services.descEffective"),
    },
  ];
  return (
    <section id="services" className="w-full">
      <div className="py-[11.25rem] max-w-[1200px] mx-auto text-center px-4">
        <div className="mb-24 max-w-[560px] mx-auto">
          <h1 className="text-4xl font-bold mb-10">{t("Scheme.header")}</h1>
          <p className="text-left text-sm font-bold">{t("Scheme.body")}</p>
        </div>
      </div>
      <div className="py-[11.25rem] bg-gray-900 text-gray-100 px-4">
        <div className="max-w-[1200px] text-center mx-auto">
          <h1 className="text-4xl font-bold mb-24">{t("Services.header")}</h1>
          <div className="items max-w-[760px] mx-auto flex flex-col gap-y-12">
            {servicesData.map((service, index) => (
              <div className="item flex gap-9" key={index}>
                <div>{service.icon}</div>
                <div className="text-left flex flex-col gap-3">
                  <h1 className="text-lg font-bold">{service.title}</h1>
                  <h3 className="text-lg font-light">{service.desc}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
