import styled from 'styled-components';

export const Buttons = styled.button`
  width: 85px;
  height: 30px;
  font-size: 12px;
  padding: 5px;
  border-radius: 8px;
  margin-right: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 10px 5px 5px grey;
  }
`;
