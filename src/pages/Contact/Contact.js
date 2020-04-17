import React from 'react';
import Layout from '../../components/Layout';
import { ContactContainer } from './styles';
import ProfileLogoContainer from '../../components/ProfileLogoContainer';

const Contact = ({ user }) => {
  return (
    <Layout user={user}>
      <ContactContainer>
        <h2 className="contact-heading">Contact me</h2>
        <p>
          <span className="email-link-container">
            <a
              href="mailto:jasonbwelsh@gmail.com?Subject=Development%20topic"
              target="_top"
            >
              Email me
            </a>
          </span>
          or reach me via one of the provided links:
        </p>
        <ProfileLogoContainer />
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
