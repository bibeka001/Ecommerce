import React from "react";
import styled from "styled-components";
import Map from "./Assets/landmark.jpg";
import Phone from "./Assets/phone.jpg";
import Send from "./Assets/send.jpg";
const Container = styled.div`
  background: url("");
  height: 90%;
  @media only screen {
    /* height: 100%; */
  }
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding-top: 60px;
  }
`;

const Title = styled.h1`
  padding: 60px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 40%;
    margin-right: 10px;
    padding-top: 0;
    padding-bottom: 10px;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 69%;
    /* padding-top: 0; */
    padding-bottom: 20px;
  }
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 10px;
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 100px;
  }
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    /* margin-bottom: 20px; */
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
    /* margin-bottom: 40px; */
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br />
            Let's Get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
            {/* <Text>149 St Petersburg , Edinburg, Scotland</Text>
            <Text> Maria Residency, Fortune Tower, London, UK</Text> */}
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+44 234 5602 9126</Text>
            <Text>+44 256 9082 7126</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@walker.knight</Text>
            <Text>contact@evil.eyes</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
