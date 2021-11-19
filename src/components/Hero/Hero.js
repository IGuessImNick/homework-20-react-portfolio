import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Nick Skinner
        </SectionTitle>
        <SectionText>
        My name is Nick, and you're viewing my portfolio page. I'm a junior web developer and a graduate of the UC Davis Full Stack Web Design Program. Check out some of my work below! You can find my contant information below as well as links to my Instagram and GitHub pages.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;