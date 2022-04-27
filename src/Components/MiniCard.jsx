import React from "react";
import styled from "styled-components";
import Search from "../Assets/search.jpg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  padding: 20px;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  font-style: bold;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </Container>
  );
};

export default MiniCard;
