import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp href="/home">GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Rays and the last dragon for an addional fee
            with a Disney+ subscription. As of 03/26/21, the proce of Disney+
            and the Disney Bundle will increase by $1
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 5px;
  font-size: 18px;
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 20px;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
max-width: 650px;
margin-bottom: 12px;
`;

export default Login;
