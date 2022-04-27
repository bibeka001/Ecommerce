import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";
import "../src/style.css";
import styled, { css } from "styled-components";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Feature from "./Components/Feature";
import Service from "./Components/Service";
import Price from "./Components/Price";
import Contact from "./Contact";
import Footer from "./Components/Footer";
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%, 60% 0%, 52% 100%, 100% 100%);
  background-color: crimson;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0 , 52% 0, 55% 100%, 100% 100%);
  background-color: pink;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(50% 0.5% , 100% 70%, 65% 87%, 100% 0.5%);
  background-color: #f88497;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(50% 0.5% , 100% 70%, 65% 87%, 100% 0.5%);
  background-color: crimson;
`;
function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
