import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image
          className="img-border"
          src={user.basics.picture}
          alt="photo of Jason Welsh"
        />
        <div>
          <h2 className="header-title">{user.basics.name}</h2>
          <h4>{user.basics.label}</h4>
          <p>Coding in {user.basics.region}</p>
          {/* <p>
            {user.basics.yearsOfExperience} years of experience as a developer
          </p> */}
          <p>{user.basics.headline}</p>
          {/* <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4> */}
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
