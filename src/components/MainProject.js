import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { ProjectCard, Image, SmallHeadline } from 'styles/GlobalStyles';
import happyThoughts from '../assets/happyThoughts.png';

export const MainProject = () => {
  const [projects, setProjects] = useState([]);

  // Get all my repos on GitHub via API call:
  useEffect(() => {
    fetch('https://api.github.com/users/brucette/repos')
      .then((response) => response.json())
      .then((json) => setProjects(json))
      .catch((error) => console.error(error))
  }, []);

  return (
  // start a map here?
    projects.map((project) => {
      return (
        <ProjectCard key={project.id} href="#" target="_blank" rel="noopener noreferrer">
          <ImageContainer>
            <ImageOverlay />
            <Image src={happyThoughts} alt="" />
            <OverlayTitle>{project.name}</OverlayTitle>
          </ImageContainer>
          <SmallHeadline>{project.name}</SmallHeadline>
        </ProjectCard>
      )
    })
  )
}

// return (
// <img src="https://github.com/brucette/project-guess-who/blob/main/code/images/jack.svg" alt="preview of" />
// )
// https://raw.githubusercontent.com/<UserName>/<RepoName>/<pathToFileInRepo>
// https://raw.githubusercontent.com/brucette/${project.name}/blob/master/projPreview.png

// STYLING FOR THE ABOVE COMPONENT
export const ImageContainer = styled.div`
  position: relative;
  /* This transition will cause the text to fade */
  transition: 0.5s ease;
`

export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* This is a semi-transparent overlay on the image */
  background-color: rgba(0, 0, 0, 0.5);
  /* This will cause the overlay to fade */
  transition: 0.5s ease;

  &:hover {
    background-color: transparent;
  }
`

export const OverlayTitle = styled.p`
  text-align: center;
  position: absolute;
  top: 33%;
  left: 25%;
  right: 26%;
  color: white;
  font-size: 24px;
  font-weight: 700;
  
  /* This causes the text to fade, color is the text color */
  &:hover {
    color: transparent;
  }
`