import { StaticImageData } from "next/image";
import logoAzukar from "../../public/assets/AddText_05-11-05.15.38.jpg";
import logoAzukarDark from "../../public/assets/image_2021-02-26_19-12-20.png";
import logoCucucina from "../../public/assets/CuCucina_Logo_Full colour_PNG-01.png";
import logoTKH from "../../public/assets/logo ™Ѓѓ®п (2).png";
import logo4 from "../../public/assets/img_3496.png"

export interface SliderSlide {
  imgURL: string | StaticImageData;
  label?: string;
  link: string;
}

const slides: SliderSlide[] = [
  {
    imgURL: logoAzukar,
    label: "-10% на все услуги",
    link: "/link",
  },
  {
    imgURL: logoAzukarDark,
    label: "-10% на все услуги",
    link: "/link",
  },
  {
    imgURL: logoCucucina,
    label: "-5% на все услуги",
    link: "/link",
  },
  {
    imgURL: logoTKH,
    label: "-5% на все услуги",
    link: "/link",
  },
];
export default slides;
