export let adSliderSlides: string[] = [];
const generateDemoSlides = (slidesCount: number) => {
  for (let i = 1; i < slidesCount; i++) {
    adSliderSlides = [...adSliderSlides, `Slide ${i}`];
  }
};
generateDemoSlides(9);
