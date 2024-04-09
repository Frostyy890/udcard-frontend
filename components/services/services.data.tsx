import { Card } from "../whyus/whyus";
// ICONS
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SavingsIcon from "@mui/icons-material/Savings";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

const defaultIconSize = { fontSize: "5rem" };
export const cards: Card[] = [
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
