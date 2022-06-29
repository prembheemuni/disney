import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HitMovies() {
  return (
    <Container>
      <h2>Hit Movies</h2>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40"
              alt="//"
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4831/674831-v"
              alt="//"
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9"
              alt="//"
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v"
              alt="//"
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40"
              alt="//"
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4831/674831-v"
              alt="//"
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9"
              alt="//"
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v"
              alt="//"
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px 0px 26px;
  //border: 2px solid red;
  overflow-x:auto ;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  position: relative;
  grid-template-columns: repeat(8, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
  }
`;

const Wrap = styled.div`
  display: block;
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 2px solid rgba(249, 249, 249, 0.2);
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    position: relative;
  }
  &:hover{
    transform: scale(1.05);
  }
`;

export default HitMovies;
