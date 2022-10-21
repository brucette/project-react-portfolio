import styled from 'styled-components/macro';

// STRUCTURAL STYLE-COMPONENTS (used in several sections of the page)
export const OuterWrapper = styled.section`
  background-color: ${(props) => props.backGroundcolor};
  text-align: center;
  padding: 2rem 0;
`

export const InnerWrapper = styled.section`
  background-color: ${(props) => props.backGroundcolor};
  width: 80%;
  margin: 0 auto;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  

  @media (min-width: 668px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const AlignLeftWrapper = styled(InnerWrapper)`
  flex-direction: column;
  text-align: left;
`

export const MainHeadline = styled.h2`
  font-family: 'Montserrat, sans-serif';
  font-weight: 700;
  font-size: 1.35rem;
  line-height: 1.7rem;
  background-color: #BA4C08;
  padding: 2px;
  border-radius: 0.3rem;
  display: inline-block;
  width: fit-content;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
`

export const MediumHeadline = styled.h3`
  color: ${(props) => props.color};
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.6rem;
  margin: 1.5rem 0;
`

export const SmallHeadline = styled.h4`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.8rem;
  color:  #BA4C08;
  text-transform: uppercase;
`

export const NavBar = styled.nav`
  align-self: ${(props) => props.alignment};
  
  img {
    width: 3rem;
    height: 3rem;
    padding: 0.3rem;
  }
  
  @media (min-width: 668px) {
    img {
      width: 5rem;
      height: 5rem;
    }
  }

  & :hover {
    transform: scale(1.1);
  }
`

export const ProjectCard = styled.section`
  margin-bottom: 2rem;
  width: 85vw;
  height: 35vh;
  text-decoration: none;
  text-align: left;

  @media (min-width: 668px) and (max-width:1024px) {
    width: 35vw;
    height: 35vh;
  }

  @media (min-width: 1025px) {
    cursor: pointer;
    width: 35vw;
    height: 52vh;
  }
`

export const ThoughtCard = styled(ProjectCard)`
  @media (min-width: 668px) and (max-width:1024px) {
    height: 48vh;
  }

  @media (min-width: 1025px) {
    height: 65vh;
  }
`

export const Image = styled.img`
  width: 100%;
`

export const Tags = styled.div`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  flex-wrap: wrap;
  width: 80%;

`

export const Tag = styled.span`
  background-color: #8ECEDC;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 3px;
  font-family: 'Roboto';
  border-radius: 5px;
  color: #362836; 
`