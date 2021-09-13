import React from "react";
import styled from "@emotion/styled";
import { H1, P } from "./Typography";
import { WhiteButton } from "./Buttons";
import { IMG } from "./Image";

const Container = styled.section<{ backgroundColor: string }>`
  padding: 40px;
  width: 290px;
  min-height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const DescriptionCard = (props: {
  name: string;
  description: string;
  style: {
    backgroundColor: string;
    icon: string;
  };
}) => {
  return (
    <Container backgroundColor={props.style.backgroundColor}>
      <IMG
        mobile={props.style.icon}
        desktop={props.style.icon}
        alt="icon car"
        style={{ width: "30px", height: "30px" }}
      />
      <H1>{props.name}</H1>
      <P>{props.description}</P>
      <WhiteButton color={props.style.backgroundColor}>Learn More</WhiteButton>
    </Container>
  );
};

export default DescriptionCard;
