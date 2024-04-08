import React from "react";
import { Card } from "../whyus/whyus";
// ICONS
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SavingsIcon from "@mui/icons-material/Savings";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

const Services = () => {
  const defaultIconSize = { fontSize: "5rem" };
  const cards: Card[] = [
    {
      icon: <AirplanemodeActiveIcon sx={defaultIconSize} />,
      title: "",
      desc: "Увеличение клиентов среди новых туристов которые прилетают в наше страну и привлечь релокантов которые проживают здесь",
    },
    {
      icon: <SavingsIcon sx={defaultIconSize} />,
      title: "Вы экономите время и деньги",
      desc: "Наши специалисты помогают вашему бренду с рекламой для иностранцев. Вы не тратите лишние финансы для этого.",
    },
    {
      icon: <PriceCheckIcon sx={defaultIconSize} />,
      title: "Оценка эффективности бизнеса",
      desc: "Мы помогаем вам получить максимум от бизнеса. Наши специалисты помогут выявить направления, которые интересна вашим потенциальным покупателям, и вместе с вами разработают план, как привлечь больше покупателей.",
    },
  ];
  return (
    <section id="services" className="w-full">
      <div className="py-[11.25rem] max-w-[1200px] mx-auto text-center px-4">
        <div className="mb-24 max-w-[560px] mx-auto">
          <h1 className="text-4xl font-bold mb-10">
            Схема сотрудничества
          </h1>
          <p className="text-left text-sm font-bold">
            Компания UDC: размещает информацию о Вас на сайте, разрабатывает
            упаковку и инструкцию для подарочного сертификата, находит клиента,
            продает сертификат сроком действия 1 месяц и переводит Вам
            оговоренную сумму ВЫ: Получаете деньги и обслуживаете клиента в
            согласованное время
          </p>
        </div>
      </div>
      <div className="py-[11.25rem] bg-gray-900 text-gray-100 px-4">
        <div className="max-w-[1200px] text-center mx-auto">
          <h1 className="text-4xl font-bold mb-24">Что вы получите?</h1>
          <div className="items max-w-[760px] mx-auto flex flex-col gap-y-12">
            {cards.map((card, index) => (
              <div key={index} className="item flex gap-9">
                <div>{card.icon}</div>
                <div className="text-left flex flex-col gap-3">
                  <h1 className="text-lg font-bold">{card.title}</h1>
                  <h3 className="text-lg font-light">{card.desc}</h3>
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
