import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;

  column-gap: 15px;
  row-gap: 10px;
  padding-top: 63px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
  background-color: white;

  margin-left: auto;
  margin-right: auto;
`;
