import React from 'react';
import { WorkImageGrid } from './styles';
import AshleyMadisonLogo from '../../images/ashleyMadisonLogo.jpg';
import CvsLogo from '../../images/cvs-logo.jpeg';
import PeoplesLogo from '../../images/peoples.jpg';
import EsteeLogo from '../../images/estee-logo.png';

const WorkImageGridComponent = () => {
  return (
    <WorkImageGrid>
      <img
        className="work-grid__image img-border"
        src={AshleyMadisonLogo}
        alt="ashley madison logo"
      />
      <img className="work-grid__image" src={CvsLogo} alt="cvs logo" />
      <img
        className="work-grid__image img-border"
        src={PeoplesLogo}
        alt="peoples jewelers logo"
      />
      <img
        className="work-grid__image img-border"
        src={EsteeLogo}
        alt="estee origins logo"
      />
    </WorkImageGrid>
  );
};

export default WorkImageGridComponent;
