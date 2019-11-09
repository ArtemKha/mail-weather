import styled from 'styles/styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background: #fff;
  padding: 0 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.025);
  }
`;

export const Close = styled.button`
  border: 0px;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;

  &:focus,
  &:active {
    outline: none;
  }
`;

export const Title = styled.span`
  flex-basis: 60%;
  font-size: 1.2em;
  margin: auto;

  @media screen and (min-width: 500px) {
    font-size: 1.6em;
  }
`;

export const Info = styled.div`
  margin: 10px 0;
  flex-basis: 40%;
`;

export const InfoRow = styled.p`
  font-family: inherit;
  margin: 5px 0;
`;
