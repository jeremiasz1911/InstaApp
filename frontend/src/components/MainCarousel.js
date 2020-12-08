import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';


const items = [
  {
    src: slide1,
    altText: 'Slide 1',
    caption: 'TechApp is our online school!',
    subcaption: 'E-learning Application'
  },
  {
    src: slide2,
    altText: 'Slide 2',
    caption: 'Join us!',
    subcaption: 'Our team is one of best!'
  },
  {
    src: slide3,
    altText: 'Slide 3',
    caption: 'Register your school',
    subcaption: 'Get elerning to your school'
  }
];

const MainCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.subcaption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default MainCarousel;