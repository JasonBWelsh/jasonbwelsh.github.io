import React from 'react';
import { StyledProfileLogoContainer } from './styles';
import { LogoLinkedin32, LogoGithub32, Email32 } from '@carbon/icons-react';

const ProfileLogoContainer = () => {
  return (
    <StyledProfileLogoContainer>
      <a
        className="profile-link"
        href="https://www.linkedin.com/in/jasonbwelsh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoLinkedin32 />
      </a>
      <a
        className="profile-link"
        href="https://github.com/JasonBWelsh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoGithub32 />
      </a>
    </StyledProfileLogoContainer>
  );
};

export default ProfileLogoContainer;
