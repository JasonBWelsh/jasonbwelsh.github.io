import styled from 'styled-components';
import { white } from '@carbon/colors';

export const StyledProfileLogoContainer = styled.div`
  margin-top: 1rem;
  max-width: 200px;
  border: 1px solid ${white};
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .profile-link {
    padding: 0.5rem 1rem;
    transition: transform 0.3s ease-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  svg {
    fill: ${white};
    padding-top: 5px;
    height: 100%;
  }
`;
