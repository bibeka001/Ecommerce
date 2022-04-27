import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge, getRadioUtilityClass } from "@mui/material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  width: 60%;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightblue;
  display: flex;
  align-content: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  margin-right: 25px;
  font-weight: bold;
  color: gray;
`;
const Button = styled.button`
  border: 2px solid white;
  padding: 10px 20px;
  background-color: crimson;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>dREAMER</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
