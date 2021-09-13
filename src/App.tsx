import React from "react";
import styled from "@emotion/styled";
import DescriptionCard from "./components/DescriptionCard";
import "./styles.css";

const Container = styled.section`
  border-radius: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  > section:first-child {
    border-radius: 20px 20px 0px 0px;
  }
  > section:last-child {
    border-radius: 0px 0px 20px 20px;
  }
  @media (min-width: 769px) {
    flex-direction: row;
    > section:first-child {
      border-radius: 20px 0px 0px 20px;
    }
    > section:last-child {
      border-radius: 0px 20px 20px 0px;
    }
  }
`;

const Cards = [
  {
    name: "Sedans",
    description: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or an your next road trip.`,
    style: {
      backgroundColor: "hsl(31, 77%, 52%)",
      icon: "/images/icon-sedans.svg"
    }
  },
  {
    name: "Suvs",
    description: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.`,
    style: {
      backgroundColor: "hsl(184, 100%, 22%)",
      icon: "/images/icon-suvs.svg"
    }
  },
  {
    name: "Luxury",
    description: `Cruise in the best car brands without the bloasted prices, Enjoy the enhanced comfort of a luxury rental and arrive in style.`,
    style: {
      backgroundColor: "hsl(179, 100%, 13%)",
      icon: "/images/icon-luxury.svg"
    }
  }
];

export default function App() {
  return (
    <Container>
      {Cards.map((elem, index) => (
        <DescriptionCard {...elem} key={`description-card-${index}`} />
      ))}
    </Container>
  );
}
