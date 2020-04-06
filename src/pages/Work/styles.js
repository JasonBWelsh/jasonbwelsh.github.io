import styled from 'styled-components';
import { white } from '@carbon/colors';

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
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

  .work-grid__image {
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
    @media (min-width: 768px) {
      height: 125px;
      width: 125px;
    }
  }
`;
