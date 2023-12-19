import React from 'react';
import { OuterWrapper, InnerWrapper, AlignLeftWrapper, MainHeadline, MediumHeadline } from 'styles/GlobalStyles';
import { MainProjects } from './MainProjects';
import { OtherProjects } from './OtherProjects';

export const FeatProjects = () => {
  return (
    <OuterWrapper>
      <MainHeadline>FEATURED PROJECTS</MainHeadline>
      <InnerWrapper>
        <MainProjects />
      </InnerWrapper>

      <MediumHeadline color="#BA4C08">OTHER PROJECTS</MediumHeadline>
      <AlignLeftWrapper>
        <OtherProjects />
      </AlignLeftWrapper>
    </OuterWrapper>
  )
}
