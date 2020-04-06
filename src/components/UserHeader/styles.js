import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }

  .header-title {
    @media (max-width: 768px) {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }
`;

export const Image = styled.img`
  width: 200px;
  margin: 0 auto;
  // border-radius: 3px;
  // border: 1px solid #000;

  @media (min-width: 768px) {
    margin: 0 1rem 0 0;
  }
`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  max-width: 166px;
  border: 2px solid #72729c;
  background-color: #42425a;
  transition: background-color 250ms ease;
  &:hover {
    background-color: #72729c;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;
