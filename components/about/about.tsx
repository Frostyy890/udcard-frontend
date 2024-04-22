import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("First_Page.About");
  return (
    <section id="about" className="py-[6rem] px-4">
      <div className="max-w-[1200px] mx-auto text-center text-gray-900">
        <h1 className="text-4xl font-bold mb-10">{t("header")}</h1>
        <p className="italic text-lg">{t("body")}</p>
      </div>
    </section>
  );
};

export default About;
