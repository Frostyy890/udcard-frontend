export let adSliderSlides: string[] = [];
const generateDemoSlides = (slidesCount: number) => {
  for (let i = 1; i < slidesCount; i++) {
    adSliderSlides = [...adSliderSlides, `Место для вашей рекламы №${i}`];
  }
};
generateDemoSlides(9);
