import { StaticImageData } from "next/image";
// HOTELS
import wyndhamLogo from "@/public/assets/logo_2/отель/123.jpg";
import lotteLogo from "@/public/assets/logo_2/отель/LotteHotels&ResortsLogo_Brown_RGB.jpg";
import ramadaLogo from "@/public/assets/logo_2/отель/1234.jpg";
import grandmirLogo from "@/public/assets/logo_2/отель/123456.jpg";
import intercontinentalLogo from "@/public/assets/logo_2/отель/12345.jpg";

// BARS
import cmiLogo from "@/public/assets/logo_2/бар/cmi.png";
import shishaLogo from "@/public/assets/IMG_3676.jpg";
import onemoreLogo from "@/public/assets/IMG_9014.jpg";

//RESTARAUNTS
import tkxLogo from "@/public/assets/logo_2/ресторан/tkx.png";
import kissLogo from "@/public/assets/logo_2/ресторан/Logo_hd_RED.png";
import cucucinaLogo from "@/public/assets/CuCucina_Logo_Full.png";
import scandalLogo from "@/public/assets/logo_2/ресторан/Скандалистъ_Ташкент_Лого (белый).png";
// import ronniLogo from "@/public/assets/IMG_3676.jpg";
import zeugmaLogo from "@/public/assets/logo_2/ресторан/Zeugma_Kunefe.png";
import velvetLogo from "@/public/assets/logo_2/ресторан/ЛОГО_VELVET_ЗОЛОТО_ТЕКСТУРА_НА_З.png";
// import silkLogo from "@/public/assets/silk (2).png";

//RETAIL
import azukarLogo from "@/public/assets/logo_2/одежда/Azukar_moreno.jpg";
import chemodanLogo from "@/public/assets/logo_2/одежда/ChemodanUZ.png";
import fauusLogo from "@/public/assets/logo_2/одежда/Fauus.png";
import mursakLogo from "@/public/assets/logo_2/одежда/Mursak-1.png";
// import shadiLogo from "@/public/assets/logo_2/одежда/Shadi.png";
import uyatLogo from "@/public/assets/logo_2/одежда/UYAT_Logo 2.png";
import adraschiLogo from "@/public/assets/logo_2/одежда/adraschi.png";
// import someLogo from "@/public/assets/logo_2/одежда/logo!-1.png";

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
  type?: PartnerType;
}

export enum PartnerType {
  discount = "Партнер со скидками",
  card = "Партнеры с нашими картами",
}

export interface PartnersData {
  categories: Category[];
  partners: Partner[];
  isCategoryEmpty: (categoryId: number, partners: Partner[]) => boolean;
  returnSortedPartners: (categoryId: number, partners: Partner[]) => Partner[];
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
    { id: 4, name: "Ритэйл / Retail", path: "retail" },
    {
      id: 5,
      name: "Бары / Bars",
      path: "bars",
      img: "https://www.foodandwine.com/thmb/8rtGtUmtC0KiJCDxAUXP_cfwgM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GTM-Best-US-Bars-Katana-Kitten-FT-BLOG0423-fa9f2ba9925c47abb4afb0abd25d915a.jpg",
    },
  ],
  partners: [
    // BARS
    {
      id: 1,
      name: "CMI",
      img: cmiLogo,
      description: "CMI, after party bar",
      discount: 10,
      categoryId: 5,
      type: PartnerType.discount,
    },
    {
      id: 2,
      name: "One More",
      img: onemoreLogo,
      description: "One More, Wonder bar",
      discount: 5,
      categoryId: 5,
      type: PartnerType.discount,
    },
    {
      id: 3,
      name: "Shisha Bar",
      img: shishaLogo,
      description: "Shisha bar",
      discount: 20,
      categoryId: 5,
      link: "https://www.instagram.com/shisha.lounge_bar?igsh=enVweHZ6NGNla3h1",
      type: PartnerType.discount,
    },
    // RESTARAUNTS
    {
      id: 4,
      name: "Ткх",
      img: tkxLogo,
      description: "",
      discount: 5,
      categoryId: 2,
      link: "",
      type: PartnerType.discount,
    },
    {
      id: 5,
      name: "Кукучина",
      img: cucucinaLogo,
      description: "",
      discount: 5,
      categoryId: 2,
      link: "",
      type: PartnerType.discount,
    },
    {
      id: 6,
      name: "Хорошая девочка",
      img: kissLogo,
      description: "",
      discount: 5,
      categoryId: 2,
      link: "",
      type: PartnerType.discount,
    },
    // {
    //   id: 7,
    //   name: "Ronni pizza",
    //   img: ronniLogo,
    //   description: "",
    //   discount: 15,
    //   categoryId: 2,
    //   link: "",
    //   type: PartnerType.discount,
    // },
    {
      id: 8,
      name: "Velvet",
      img: velvetLogo,
      description: "",
      discount: 20,
      categoryId: 2,
      link: "",
      type: PartnerType.discount,
    },
    {
      id: 9,
      name: "Скандалист",
      img: scandalLogo,
      description: "",
      discount: 10,
      categoryId: 2,
      link: "",
      type: PartnerType.discount,
    },
    // {
    //   id: 10,
    //   name: "SILK 96",
    //   img: silkLogo,
    //   description: "SILK 96, wine & lounge",
    //   discount: 0,
    //   categoryId: 2,
    //   link: "",
    //   type: PartnerType.discount,
    // },
    {
      id: 10,
      name: "ZEUGMA KÜNEFE",
      img: zeugmaLogo,
      description: "",
      discount: 10,
      categoryId: 2,
      link: "",
      type: PartnerType.discount,
    },

    // RETAIL
    {
      id: 11,
      name: "Мурсак бутик",
      img: mursakLogo,
      description: "",
      discount: 10,
      categoryId: 4,
      link: "",
      type: PartnerType.discount,
    },
    // {
    //   id: 12,
    //   name: "7`s 5",
    //   img: someLogo,
    //   description: "",
    //   discount: 10,
    //   categoryId: 4,
    //   link: "",
    //   type: PartnerType.discount,
    // },
    {
      id: 13,
      name: "азукар морено",
      img: azukarLogo,
      description: "",
      discount: 5,
      categoryId: 4,
      link: "",
      type: PartnerType.discount,
    },
    {
      id: 14,
      name: "Faus",
      img: fauusLogo,
      description: "",
      discount: 20,
      categoryId: 4,
      link: "",
      type: PartnerType.discount,
    },
    {
      id: 15,
      name: "UYAT",
      img: uyatLogo,
      description: "",
      discount: 5,
      categoryId: 4,
      link: "",
      type: PartnerType.discount,
    },
    // {
    //   id: 16,
    //   name: "Shadi",
    //   img: shadiLogo,
    //   description: "",
    //   discount: 20,
    //   categoryId: 4,
    //   link: "",
    //   type: PartnerType.discount,
    // },
    {
      id: 17,
      name: "Адрасчи Амаки",
      img: adraschiLogo,
      description: "",
      discount: 10,
      categoryId: 4,
      link: "",
      type: PartnerType.discount,
    },
    {
      id: 18,
      name: "Chemodan Uz",
      img: chemodanLogo,
      description: "",
      discount: 10,
      categoryId: 4,
      link: "",
      type: PartnerType.discount,
    },
    //HOTELS
    {
      id: 19,
      name: "Wyndham Hotel Group",
      img: wyndhamLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/wyndham_tashkent?igsh=MTFyaTBwMGdhNTFpaQ==",
      type: PartnerType.card,
    },

    {
      id: 20,
      name: "Intercontinental",
      img: intercontinentalLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/intercontinental_tashkent?igsh=MXhheGM5ZTdocW5leQ==",
      type: PartnerType.card,
    },
    {
      id: 21,
      name: "Ramada Hotel",
      img: ramadaLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/ramada.tashkent?igsh=ZHB4ZzJvZHY5czAy",
      type: PartnerType.card,
    },
    {
      id: 22,
      name: "Grand Mir Hotel",
      img: grandmirLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/grandmirhotel?igsh=bTQ1eThnZ2hmeTB1",
      type: PartnerType.card,
    },
    {
      id: 23,
      name: "Lotte",
      img: lotteLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/lottecityhotel_tashkent?igsh=MTd3bjVwMG9pazR3cA==",
      type: PartnerType.card,
    },
    // {
    //   id: 3,
    //   name: "Cucucina",
    //   img: logo6,
    //   description:
    //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    //   discount: 5,
    //   categoryId: 2,
    //   link: "https://www.instagram.com/cucucina.tashkent?igsh=MXIxOTlvN3o4anUxYQ==",
    //   type: PartnerType.discount,
    // },
    // // {
    // //   id: 4,
    // //   name: "Ronni",
    // //   img: logo7,
    // //   description:
    // //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    // //   discount: 15,
    // //   categoryId: 2,
    // //   link: "https://www.instagram.com/ronipizzauz?igsh=MWQ1bXlmM3E3ZHBucg==",
    // //   type: PartnerType.discount,
    // // },
    // {
    //   id: 5,
    //   name: "Bootlegger",
    //   img: logo9,
    //   description: "Дается резиденство по карте",
    //   discount: 5,
    //   categoryId: 5,
    //   link: "https://www.instagram.com/bootleggerbar.uz?igsh=MXB2Y2s3cWp0NnFx",
    //   type: PartnerType.discount,
    // },

    // // {
    // //   id: 8,
    // //   name: "Divan",
    // //   img: logo12,
    // //   description:
    // //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    // //   discount: 10,
    // //   categoryId: 2,
    // //   link: "https://www.instagram.com/divan.rest?igsh=MW56eXk3M3h1dDIyeQ==",
    // // },

    // // {
    // //   id: 11,
    // //   name: "The Rose",
    // //   img: logo15,
    // //   description:
    // //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    // //   discount: 0,
    // //   categoryId: 2,
    // // },
    // {
    //   id: 13,
    //   name: "Takahuli",
    //   img: logo17,
    //   description:
    //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    //   discount: 5,
    //   categoryId: 2,
    //   link: "https://www.instagram.com/tkh.uz/?igsh=Nm5qNXF5ZjI5Mm1w",
    //   type: PartnerType.discount,
    // },

    // {
    //   id: 15,
    //   name: "Velvet",
    //   img: logo20,
    //   description:
    //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    //   discount: 20,
    //   categoryId: 2,
    //   link: "https://www.instagram.com/ronipizzauz?igsh=MWQ1bXlmM3E3ZHBucg==",
    //   type: PartnerType.discount,
    // },
    // {
    //   id: 16,
    //   name: "Скандалист",
    //   img: logo21,
    //   description:
    //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    //   discount: 10,
    //   categoryId: 2,
    //   link: "https://www.instagram.com/ronipizzauz?igsh=MWQ1bXlmM3E3ZHBucg==",
    //   type: PartnerType.discount,
    // },
    // {
    //   id: 17,
    //   name: "Zeugma",
    //   img: logo22,
    //   description:
    //     "Предлагает свои услуги за выгодную цену и гарантирует качество",
    //   discount: 10,
    //   categoryId: 2,
    //   link: "https://www.instagram.com/ronipizzauz?igsh=MWQ1bXlmM3E3ZHBucg==",
    //   type: PartnerType.discount,
    // },
  ],
  isCategoryEmpty(categoryId: number, partners: Partner[]): boolean {
    return partners.some((partner) => partner.categoryId === categoryId);
  },
  returnSortedPartners(categoryId: number, partners: Partner[]) {
    const sortedPartners = partners.filter(
      (partner) => partner.categoryId === categoryId
    );
    return sortedPartners;
  },
};
