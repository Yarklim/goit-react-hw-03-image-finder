import styled from 'styled-components';

export const BtnLoadMore = styled.button`
  width: 180px;

  margin: 0 auto;

  text-align: center;

  padding: 10px 20px;

  font-size: 18px;
  font-weight: 500;
  color: rgb(238, 238, 238);

  cursor: pointer;

  border: none;
  border-radius: 6px;

  background-color: #1988c0;
  box-shadow: 2px 3px 10px #4a4a4a;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #187db0;
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 8px #4a4a4a;
  }
`;
