import React from 'react';
import { OuterWrapper, InnerWrapper, MainHeadline, SmallHeadline, Tags, Tag, ImageOverlay, OverlayTitle, Link } from 'styles/GlobalStyles'; // Image ProjectCard
import styled from 'styled-components/macro';
import preView from '../assets/projPreview.png';

// Function to map over the tags and display them:
const renderTags = (tags) => {
  return tags.map((tag) => {
    return <Tag key={tag}>{tag.toUpperCase()}</Tag>
  })
}

export const ClientProjects = () => {
  return (
    <OuterWrapper backGroundcolor="#f4f4f4">
      <MainHeadline>FREELANCE PROJECTS</MainHeadline>
      <InnerWrapper backGroundcolor="#f4f4f4">

        <CProjectCard>
          <Container>
            <ImageOverlay />
            {/* <Image src="https://raw.githubusercontent.com/brucette/bridget/main/public/preview/projPreview.png" alt="" /> */}
            <ClientImage src={preView} alt="" />
            <OverlayTitle className="title">Portfolio site</OverlayTitle>
          </Container>
          <SmallHeadline>Portfolio for Bridget Pivac</SmallHeadline>
          <p>
            A portfolio website built according to the design provided by the client,
            UX designer Bridget Pivac.
          </p>
          <p>
            Original, initial website deployed <DeployLink href="https://cheerful-salmiakki-biddy.netlify.app/" target="_blank" rel="noopener noreferrer">here</DeployLink>
          </p>
          <p>
            Live, evolving website deployed on <DeployLink href="https://bridgetpivac.com">bridgetpivac.com</DeployLink>
          </p>
          <Tags>
            {renderTags(['Javascript', 'html', 'bootstrap', 'sass css'])}
          </Tags>
          <div>
            <Link href="https://github.com/brucette/bridget" target="_blank" rel="noopener noreferrer">View Code</Link>
          </div>
        </CProjectCard>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const DeployLink = styled.a`
  color: #BA4C08;
`

export const Inner = styled.section`
  padding-top: 0rem;
  background-color: ${(props) => props.backGroundcolor};
  padding-bottom: 2.5rem;
  border: 2px solid blue;
  display: flex;
  flex-direction: column;  
  margin: 0 auto;
  padding-top: 1.5rem;
  width: 60%;


  @media (min-width: 668px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const Container = styled.div`
  position: relative;
  /* This transition will cause the text to fade */
  transition: 0.5s ease;
  border-radius: 5px;
  align-self: center;

  &:hover > .title {
    color: transparent;
  }
`

export const ClientImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const CProjectCard = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-decoration: none;
  text-align: left;
  border-radius: 5px;
  //border: 2px solid blue;


  a {
    border-radius: 5px;
  }
  
  @media (min-width: 668px) and (max-width:1024px) {
    width: 30vw;
  }

  @media (min-width: 1025px) {
    width: 25vw;
  }
`