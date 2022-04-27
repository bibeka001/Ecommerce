import React, { useState } from "react";
import styled from "styled-components";
import Pro from "../Assets/prowoman1.jpg";
import MiniCard from "./MiniCard";
import Play from "../Assets/play.jpg";
const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 100%;
  /* margin-left: 100px; */
  display: ${(props) => props.open && "none"};
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: relative;
  top: 0;
  margin: auto;
  bottom: 0;
  right: 0;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;
const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20x;
  }
`;
const Title = styled.h1``;
const Desc = styled.p`
  margin-top: 20px;
  color: gray;
  font-size: 2opx;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Service = () => {
  const [open, setOpen] = useState(false);

  const smallScreen = window.screen.width;
  return (
    <Container>
      <Left>
        <Image open={open} src={Pro} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://youtu.be/oM-XJD4J36U"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title> Simple process to start</Title>
          <Desc>
            We provide digital experience sevices to startups and small business
            to looking for a partner of their digital media, design &
            development, lead generation and communications requirements. We
            work with you, not for you. Although we have a great resources{" "}
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://youtu.be/oM-XJD4J36U"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
