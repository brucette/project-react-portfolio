import React from 'react';
import styled from 'styled-components/macro';
import { OuterWrapper, MediumHeadline, Paragraph } from 'styles/GlobalStyles';

export const Footer = () => {
  return (
    <OuterWrapper backGroundcolor="#5A415A">
      <MediumHeadline color="white">CONTACT</MediumHeadline>
      <Paragraph color="white">Tina Bruce</Paragraph>
      <Email href="mailto:tina@fishface.se">
        <Paragraph color="white">
        tina@fishface.se
        </Paragraph>
      </Email>
    </OuterWrapper>
  )
}

export const Email = styled.a`
  color: "white"
`