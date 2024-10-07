import styled from "styled-components";
import Img from "/assets/icon-hamburger.svg";
import { useState } from "react";
import Data from "./data.json";
import ArrowImg from "/assets/icon-chevron.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [on, setOn] = useState<boolean>(false);
  console.log(on);
  return (
    <>
      <Main>
        <Container>
          <h1> THE PLANETS </h1>
          <img onClick={() => setOn(!on)} src={Img} alt="" />
        </Container>

        {on === true ? (
          <PlanetList>
            {Data.map((planet, index) => (
              <PlanetDiv onClick={() => setOn(!on)} key={index}>
                <div className="left">
                  <Circle></Circle>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={planet.name}
                  >
                    {planet.name}
                  </Link>
                </div>

                <img src={ArrowImg} alt="" />
              </PlanetDiv>
            ))}
          </PlanetList>
        ) : (
          ""
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  @media (min-width: 1140px) {
    padding: 0px 41px 27px 32px;
    display: flex;
    justify-content: space-between;
  }
`;
const Container = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    opacity: 0.1;
    @media (min-width: 768px) {
      display: none;
    }
    @media (min-width: 1140px) {
      display: none;
    }
  }
  & > h1 {
    color: white;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.05px;
    @media (min-width: 768px) {
      margin: 0 auto;
    }
  }
`;

const PlanetList = styled.div`
  position: absolute;
  width: 100%;
  height: 678px;
  background-color: #070724;
  top: 59px;
  padding: 20px 32px 70px 24px;
`;
const PlanetDiv = styled.div`
  border-bottom: 1px solid white;
  padding: 24px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .left {
    display: flex;
    align-items: center;
    gap: 25px;
    & > h2 {
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      line-height: 1.67;
      letter-spacing: 1.36px;
    }
  }
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #def4fc;
  border-radius: 50%;
  border: none;
`;
