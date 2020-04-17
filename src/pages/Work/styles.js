import styled from 'styled-components';
import { white } from '@carbon/colors';

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};

  .job-info-heading {
    margin: 0.5rem 0;
    font-weight: bold;
  }
`;

export const WorkTitle = styled.h4`
  font-weight: bold;
`;

export const JobTitle = styled.p`
  font-weight: bold;
  display: inline-block;
`;

export const WorkImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  .work-grid__image {
    height: 100px;
    width: 100px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      margin-right: 20px;
      height: 125px;
      width: 125px;
    }
  }
`;
