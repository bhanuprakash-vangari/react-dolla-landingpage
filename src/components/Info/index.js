import React from "react";
import { Button } from "../ButtonElement";
import {
  Column2,
  Column1,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  BtnWrap,
  Img,
  Heading,
  TextWrapper,
  Subtitle,
  TopLine,
} from "./InfoElements";



const Info = ({
  lightBg,
  lightText,
  imgStart,
  id,
  headline,
  darkText,
  description,
  buttonLabel,
  alt,
  topLine,
  primary,
  dark,
  dark2,
  img
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={1}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
