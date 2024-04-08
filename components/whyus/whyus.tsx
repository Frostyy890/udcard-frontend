import React from "react";
// ICONS
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export interface Card {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const WhyUs = () => {
  const defaultIconSize = { fontSize: "5rem" };
  const cards: Card[] = [
    {
      icon: <TrendingUpIcon sx={defaultIconSize} />,
      title: "Увеличение продаж и узнаваемости",
      desc: "Ваш бизнес получит дополнительные продажи благодаря участию в нашей программе. Туристы, обладающие нашей картой, активно ищут предложения и скидки, что способствует увеличению вашего оборота.",
    },
    {
      icon: <AssignmentIcon sx={defaultIconSize} />,
      title: "Гибкие условия сотрудничества",
      desc: "Мы ценим уникальность каждого бизнеса. UDC предлагает гибкие условия сотрудничества, позволяя нашим партнерам выбирать наилучшие варианты сотрудничества, которые соответствуют их потребностям и стратегии.",
    },
    {
      icon: <SupportAgentIcon sx={defaultIconSize} />,
      title: "Маркетинговая поддержка",
      desc: "UDCARD предоставляет обширную маркетинговую поддержку своим партнерам, включая рекламные кампании, социальные сети и пресс-релизы. Мы активно продвигаем предложения наших партнеров, обеспечивая максимальную видимость",
    },
  ];
  return (
    <section id="whyus" className="py-[11.25rem] bg-gray-900">
      <div className="max-w-[1200px] mx-auto text-center text-gray-100">
        <div className="mb-24 max-w-[560px] mx-auto">
          <h1 className="text-4xl font-bold mb-8">Почему стоит выбрать нас?</h1>
          <p className="text-2xl">
            Наши специалисты с радостью поделятся своей экспертизой, основанной
            на знании того, что сейчас работает на рынке.
          </p>
        </div>
        <div className="cards flex flex-col md:gap-5 md:flex-row justify-between items-center gap-8">
          {cards.map((card, index) => (
            <div key={index} className="card max-w-[360px]">
              <div>{card.icon}</div>
              <h2 className="py-6 font-bold text-lg">{card.title}</h2>
              <p className="text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
