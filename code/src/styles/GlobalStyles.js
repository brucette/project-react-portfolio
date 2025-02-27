import styled from 'styled-components/macro';

// STRUCTURAL STYLE-COMPONENTS (used in several sections of the page)
export const OuterWrapper = styled.section`
  background-color: ${(props) => props.backGroundcolor};
  text-align: center;
  padding: 2rem 0;
  //border: 2px solid green;


  @media (min-width: 668px) {
    padding: 3.5rem 1rem;
  }

  @media (min-width: 1025px) {
    padding: 3.5rem 3rem;
  }
`
export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-top: 1.5rem;
`

export const InnerWrapper = styled(HeaderWrapper)`
  padding-top: 0rem;
  background-color: ${(props) => props.backGroundcolor};
  padding-bottom: 2.5rem;
  //border: 2px solid red;
  //width: 70%;


  @media (min-width: 668px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export const AlignLeftWrapper = styled(InnerWrapper)`
  flex-direction: column;
  text-align: left;
`

export const Paragraph = styled.p`
  color: ${(props) => props.color};
  font-family: 'Montserrat';
  font-size: 1.06rem;
  line-height: 1.8rem;
  padding-top: 0.8rem;
  margin: 0 auto;
  
  a {
    color: "white";
  }

  @media (min-width: 668px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  @media (min-width: 1025px) {
    width: 68%;
  }
`

export const MainHeadline = styled.h2`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 1.35rem;
  line-height: 1.7rem;
  background-color: #BA4C08;
  padding: 2px;
  border-radius: 3px;
  display: inline-block;
  width: fit-content;
  text-align: center;
  color: white;
  margin-bottom: 2rem;

  @media (min-width: 668px) {
    font-size: 1.7rem;
    margin-bottom: 2.5rem;
  }
`

export const MediumHeadline = styled.h3`
  color: ${(props) => props.color};
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.6rem;
  margin: 1.5rem 0;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }
`

export const SmallHeadline = styled.h4`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color:  #BA4C08;
  text-transform: uppercase;
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;

  @media (min-width: 668px) {
    font-size: 1.3rem;
  }
`

export const ProjectCard = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  text-align: left;
  border-radius: 5px;

  a {
    border-radius: 5px;
  }
  
  @media (min-width: 668px) and (max-width:1024px) {
    width: 35vw;
  }

  @media (min-width: 1025px) {
    width: 33vw;
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const Tags = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background-color: #8ECEDC;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 3px;
  border-radius: 2px;
  font-size: 14px;
`

export const ImageContainer = styled.div`
  position: relative;
  /* This transition will cause the text to fade */
  transition: 0.5s ease;
  border-radius: 5px;

  &:hover > .title {
    color: transparent;
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 99%;
  /* This is a semi-transparent overlay on the image */
  background-color: rgba(0, 0, 0, 0.5);
  /* This will cause the overlay to fade */
  transition: 0.5s ease;
  border-radius: 5px;

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
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const Link = styled.a`
  font-weight: bold;
  color: #555;
  font-family: Montserrat;

  &:hover {
    color: #BA4C08;
  }
`