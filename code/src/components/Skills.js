import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, MainHeadline, SmallHeadline, InnerWrapper } from 'styles/GlobalStyles';

export const Skills = () => {
  return (
    <OuterWrapper backGroundcolor="#f4f4f4">
      <MainHeadline>SKILLS</MainHeadline>
      <ListWrapper backGroundcolor="#f4f4f4">
        <div>
          <SmallHeadline>CODE</SmallHeadline>
          <List>
            <li>HTML5</li>
            <li>C#</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Sqlite3</li>
            <li>C</li>
          </List>
        </div>
        <div>
          <SmallHeadline>TOOLBOX</SmallHeadline>
          <List>
            <li>Visual Studio Code</li>
            <li>GCP</li>
            <li>GitHub</li>
            <li>Mongo DB</li>
            <li>Docker</li>
            <li>Figma</li>
            <li>Slack</li>
          </List>
        </div>
        <div>
          <SmallHeadline>UPCOMING</SmallHeadline>
          <List>
            <li>TypeScript</li>
            <li>NextJS</li>
          </List>
        </div>
      </ListWrapper>
    </OuterWrapper>
  )
}

const ListWrapper = styled(InnerWrapper)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 668px) {
    justify-content: space-evenly;
  }
`

const List = styled.ul`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8rem;
    list-style-type: none;
    padding-bottom: 2.5rem;

    @media (min-width: 668px) {
      font-size: 1.1rem;
    }
`