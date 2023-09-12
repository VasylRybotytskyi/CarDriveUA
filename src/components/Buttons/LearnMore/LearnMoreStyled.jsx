import styled from 'styled-components';

export const Button = styled.button`
  width: 274px;
  height: 44px;
  top: 20px;
  left: 20px;
  padding: 12px 99px;
  border-radius: 12px;
  background: rgba(52, 112, 255, 1);
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(11, 68, 205, 1);
  }
`;
