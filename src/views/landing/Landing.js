import React, { useEffect } from 'react';
import { LandingContainer, HeroContainer, HeroTag, HeroBtn, InfoSection, ImgSection, ImgOne, ImgTwo, ImgThree, AnimatedButton, PotatoBoxSection, PotatoMemeSection, Span } from './Landing.styles';
import { useNavigate } from "react-router-dom";

const Landing = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <>
      <LandingContainer>
        <HeroContainer>
          <HeroTag>For when words aren’t enough… send a spud.</HeroTag>
        </HeroContainer>
      </LandingContainer>
      <InfoSection>
        <AnimatedButton onClick={() => navigate("/order")}>Customize your potato $11</AnimatedButton>
        <PotatoBoxSection></PotatoBoxSection>
        <h1>Any message you want delivered on a potato.</h1>
      </InfoSection>
      <ImgSection>
        <ImgOne></ImgOne>
        <ImgTwo></ImgTwo>
        <ImgThree></ImgThree>
      </ImgSection>
      <InfoSection>
        <AnimatedButton onClick={() => navigate("/order")}>Customize your potato $11</AnimatedButton>
      </InfoSection>
    </>
  )
}

export default Landing