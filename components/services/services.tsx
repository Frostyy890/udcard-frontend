import React from "react";
import { cards } from "./services.data";

const Services = () => {
  return (
    <section id="services" className="w-full">
      <div className="py-[11.25rem] max-w-[1200px] mx-auto text-center px-4">
        <div className="mb-24 max-w-[560px] mx-auto">
          <h1 className="text-4xl font-bold mb-10">Схема сотрудничества</h1>
          <p className="text-left text-sm font-bold">
            Компания UDC: размещает информацию о вас на сайте, разрабатывает
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
