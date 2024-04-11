import { StaticImageData } from "next/image";
import logo2 from "@/public/assets/123.jpg";
import logo3 from "@/public/assets/1234.jpg";
import logo4 from "@/public/assets/12345.jpg";
import logo5 from "@/public/assets/123456.jpg";
import logo6 from "@/public/assets/CuCucina_Logo_Full colour_PNG-01.png";
import logo7 from "@/public/assets/IMG_1758.jpg";
import logo9 from "@/public/assets/IMG_3675.jpg";
import logo10 from "@/public/assets/IMG_3676.jpg";
import logo11 from "@/public/assets/IMG_9014.jpg";
// import logo12 from "@/public/assets/IMG_9472.jpg";
import logo13 from "@/public/assets/Logo_hd_RED-KISS_Black.jpg";
// import logo15 from "@/public/assets/The-Rose-logo.jpg";
import logo17 from "@/public/assets/logo ™Ѓѓ®п (2) (2).jpg";
import logo19 from "@/public/assets/lotte.jpg";

interface PartnersData {
  categories: Category[];
  partners: Partner[];
  isCategoryEmpty: (categoryId: number, partners: Partner[]) => boolean;
  returnSortedPartners: (categoryId: number, partners: Partner[]) => Partner[];
}

interface Category {
  id: number;
  name: string;
  path?: string;
  img?: string;
}

export interface Partner {
  id: number;
  img?: StaticImageData;
  name: string;
  description: string;
  discount: number;
  link?: string;
  categoryId: number;
}

export const partnersData: PartnersData = {
  categories: [
    {
      id: 1,
      name: "Гостинницы / Hotels",
      path: "hotels",
      img: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg`",
    },
    {
      id: 2,
      name: "Рестораны / Restaraunts",
      path: "restaraunts",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=1200&h=-1&s=1",
    },
    // { id: 3, name: "Общепит / Public Catering", path: "catering" },
    // { id: 4, name: "Ритэйл / Retail", path: "retail" },
    {
      id: 5,
      name: "Бары / Bars",
      path: "bars",
      img: "https://www.foodandwine.com/thmb/8rtGtUmtC0KiJCDxAUXP_cfwgM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GTM-Best-US-Bars-Katana-Kitten-FT-BLOG0423-fa9f2ba9925c47abb4afb0abd25d915a.jpg",
    },
  ],
  partners: [
    {
      id: 1,
      name: "Wyndham Hotel Group",
      img: logo2,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/wyndham_tashkent?igsh=MTFyaTBwMGdhNTFpaQ==",
    },
    {
      id: 2,
      name: "Intercontinental",
      img: logo4,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/intercontinental_tashkent?igsh=MXhheGM5ZTdocW5leQ==",
    },
    {
      id: 3,
      name: "Cucucina",
      img: logo6,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 5,
      categoryId: 2,
      link: "https://www.instagram.com/cucucina.tashkent?igsh=MXIxOTlvN3o4anUxYQ==",
    },
    {
      id: 4,
      name: "Ronni",
      img: logo7,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 15,
      categoryId: 2,
      link: "https://www.instagram.com/ronipizzauz?igsh=MWQ1bXlmM3E3ZHBucg==",
    },
    {
      id: 5,
      name: "Bootlegger",
      img: logo9,
      description: "Дается резиденство по карте",
      discount: 5,
      categoryId: 5,
      link: "https://www.instagram.com/bootleggerbar.uz?igsh=MXB2Y2s3cWp0NnFx",
    },
    {
      id: 6,
      name: "Shisha Bar",
      img: logo10,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 20,
      categoryId: 5,
      link: "https://www.instagram.com/shisha.lounge_bar?igsh=enVweHZ6NGNla3h1",
    },
    {
      id: 7,
      name: "Wonder bar",
      img: logo11,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 5,
      categoryId: 5,
    },
    // {
    //   id: 8,
    //   name: "Divan",
    //   img: logo12,
    //   description:
    //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    //   discount: 10,
    //   categoryId: 2,
    //   link: "https://www.instagram.com/divan.rest?igsh=MW56eXk3M3h1dDIyeQ==",
    // },
    {
      id: 9,
      name: "Хорошая девочка",
      img: logo13,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 5,
      categoryId: 2,
      link: "https://www.instagram.com/xdevochka.uz/?igsh=enVzbnAydGM1amZ0",
    },
    {
      id: 10,
      name: "Ramada Hotel",
      img: logo3,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/ramada.tashkent?igsh=ZHB4ZzJvZHY5czAy",
    },
    // {
    //   id: 11,
    //   name: "The Rose",
    //   img: logo15,
    //   description:
    //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    //   discount: 0,
    //   categoryId: 2,
    // },
    {
      id: 12,
      name: "Grand Mir Hotel",
      img: logo5,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/grandmirhotel?igsh=bTQ1eThnZ2hmeTB1",
    },
    {
      id: 13,
      name: "Takahuli",
      img: logo17,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 5,
      categoryId: 2,
      link: "https://www.instagram.com/tkh.uz/?igsh=Nm5qNXF5ZjI5Mm1w",
    },
    {
      id: 14,
      name: "Lotte",
      img: logo19,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/lottecityhotel_tashkent?igsh=MTd3bjVwMG9pazR3cA==",
    },
  ],
  isCategoryEmpty(categoryId, partners) {
    const partnerInCategory = partners.find(
      (partner) => partner.categoryId === categoryId
    );
    return partnerInCategory ? true : false;
  },
  returnSortedPartners(categoryId, partners) {
    const sortedPartners = partners.filter(
      (partner) => partner.categoryId === categoryId
    );
    return sortedPartners;
  },
};
