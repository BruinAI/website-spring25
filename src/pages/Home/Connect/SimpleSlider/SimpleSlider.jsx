import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Card from "./Card/Card.jsx";

const cardData = [
  {
    image: '/assets/sairs2025group.jpeg',
    title: 'Card 1',
    description: 'Description for card 1.'
  },
  {
    image: '/assets/baidemoday.jpeg',
    title: 'Card 2',
    description: 'Description for card 2.'
  },
  {
    image: '/assets/baidemoday.jpeg',
    title: 'Card 3',
    description: 'Description for card 2.'
  },
  {
    image: '/assets/baidemoday.jpeg',
    title: 'Card 4',
    description: 'Description for card 2.'
  },
];

export default function SimpleSlider() {
  return (
    <div className=" w-[190px] sm:w-[340px] h-[480px] md:w-[400px] lg:w-[500px] rounded-[7px] overflow-hidden text-white">
      <Splide
        options={{
          direction: 'ttb',
          height: '480px',
          type: 'loop',
          perPage: 1.5,
          perMove: 1,
          arrows: false,
          focus: 'center',
          gap: '10px',
          padding: '10px',
          autoWidth: true,
        }}
        aria-label="Connect Cards"
      >
        {cardData.map((card, idx) => (
          <SplideSlide key={idx}>
            <Card image={card.image} title={card.title} description={card.description} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}