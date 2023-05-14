import styled from '@emotion/styled';

export const ListButton = styled.button`
  min-width: 80px;

  font-size: 20px;

  border-radius: 20px;
  border: none;
  background-color: grey;
  color: white;

  :hover,
  :focus {
    background-color: blue;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
