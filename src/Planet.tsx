import styled from "styled-components";
import data from "./data.json";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function Planet() {
  const [structure, setStructure] = useState<boolean>(false);
  const [surface, setSurface] = useState<boolean>(false);
  const [on, setOn] = useState<boolean>(false);
  const { planetName } = useParams();
  const planet = data.find((planet) => planet.name === planetName);

  return (
    <>
      <Infos>
        <h2 onClick={() => setStructure(false)}>OVERVIEW</h2>
        <h2 onClick={() => setStructure(true)}>STRUCTURE</h2>
        <h2 onClick={() => setSurface(true)}>SURFACE</h2>
      </Infos>
      <Planets onClick={() => setOn(!on)}>
        {data.map((planet) => (
          <>
            <Link
              key={planet.name}
              style={{ textDecoration: "none", color: "white" }}
              to={`/${planet.name}`}
            >
              {planet.name}
            </Link>
          </>
        ))}
      </Planets>
      <Circle></Circle>

      <Main>
        {structure === true ? (
          <img src={planet?.images.internal} alt="Structure" />
        ) : (
          <img src={planet?.images.planet} alt="Planet" />
        )}
        {surface === true ? (
          <img
            className="geology_img"
            src={planet?.images.geology}
            alt="Geology"
          />
        ) : null}
        <PlanetInfo>
          <div className="planet_info">
            <h1>{planet?.name}</h1>
            {structure === true ? (
              <p className="info">{planet?.structure.content}</p>
            ) : (
              <p className="info">{planet?.overview.content}</p>
            )}

            <div className="source">
              <p>Source :</p>
              <a href={planet?.overview.source}>
                <p>WIKIPEDIA</p>
              </a>
            </div>
          </div>
          <div className="modes">
            <div className="names" onClick={() => setStructure(false)}>
              <p>01</p> <span>OVERVIEW</span>
            </div>
            <div className="names" onClick={() => setStructure(!structure)}>
              <p>02</p>
              <span>INTERNAL STRUCTURE</span>
            </div>
            <div className="names">
              <p>03</p>
              <span>SURFACE GEOLOGY</span>
            </div>
          </div>
        </PlanetInfo>

        <div className="container">
          <InfoContainer>
            <p>ROTATION TIME</p>
            <span>{planet?.rotation}</span>
          </InfoContainer>
          <InfoContainer>
            <p>REVOLUTION TIME</p>
            <span>{planet?.revolution}</span>
          </InfoContainer>
          <InfoContainer>
            <p>RADIUS</p>
            <span>{planet?.radius}</span>
          </InfoContainer>
          <InfoContainer>
            <p>AVERAGE TEMP.</p>
            <span>{planet?.temperature}</span>
          </InfoContainer>
        </div>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 95px 24px 47px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  @media (min-width: 768px) {
    display: flex;
  }

  .geology_img {
    position: absolute;
    height: 40px;
    width: 40px;
  }

  & > img {
    width: 173px;
    height: 173px;
    margin-bottom: 67px;
    @media (min-width: 768px) {
      width: 285px;
      height: 285px;
      margin-top: 30px;
    }
  }

  & > h1 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .info {
    font-size: 11px;
    line-height: 2;
    text-align: center;
  }

  .source {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 28px;
    color: #fff;
    opacity: 0.5;
  }
  @media (min-width: 768px){
    .source{
      display: flex;
      justify-content: start;
    }

  }
  .source a {
    all: unset;
    text-decoration: underline;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 11px;
    }
  }
`;

const InfoContainer = styled.div`
  width: 327px;
  height: 48px;
  padding: 4px 24px 10px;
  border: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    opacity: 0.5;
  }
  & > span {
    color: #fff;
  }
  @media (min-width: 768px) {
    width: 164px;
    height: 88px;
    padding: 16px 69px 19px 15px;
    border: 1px solid #fff;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 6px;
  }
  @media (min-width: 768px) {
    & > p {
      color: white;
      font-size: 10px;
    }
    & > span {
      font-size: 24px;
      letter-spacing: -0.9px;
    }
  }
`;

const Infos = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 43px;

  @media (min-width: 768px) {
    display: none;
  }

  & > h2 {
    color: #ffffff;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 1.93px;
    opacity: 0.2;
    cursor: pointer;
  }
`;

const Planets = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 39px;
    font-size: 11px;
    font-weight: bold;
    line-height: 2.27;
    letter-spacing: 1px;
  }
`;
const Circle = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 27px;
  }
`;
const PlanetInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 69px;
  margin-top: 40px;
  .planet_info h1 {
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 768px) {
    .planet_info h1 {
      text-align: start;
    }
    
  }

  @media (min-width: 768px) {
    .planet_info {
      width: 339px;
    }
    .info {
      text-align: left;
    }
  }
  .modes {
    display: none;
  }
  .modes div {
    width: 281px;
    height: 40px;
    padding: 8px 87px 7px 20px;
    border: 1px solid white;
  }
  @media (min-width: 768px) {
    .modes {
      display: block;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .names {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .names p {
      opacity: 0.5;
      font-size: 9px;
      font-weight: bold;
      line-height: 2.78;
      letter-spacing: 1.93px;
    }
    .names span {
      font-size: 9px;
      font-weight: bold;
      line-height: 2.78;
      letter-spacing: 1.93px;
    }
    .planet_info h1 {
      font-size: 48px;
      font-weight: 500;
      margin-bottom: 24px;
    }
    .planet_info p {
      font-size: 11px;
      line-height: 2;
      margin-bottom: 32px;
    }
    
  }
`;
