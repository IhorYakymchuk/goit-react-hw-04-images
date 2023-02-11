import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 10px;

  color: #fff;

  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Input = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 4px;
  width: 500px;
  font-size: 18px;
  font-weight: 500;

  outline: transparent;
  border: none;

  border-radius: 3px;

  &::placeholder {
    font-size: 18px;
    font-weight: 500;
    color: #535353;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 600px;

  background-color: #fff;

  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  height: 100%;
  font-size: 16px;
  background-color: #ffffff;
  color: #535353;
  transition: color linear 150ms;
  border: none;
  border-radius: 3px;
  padding: 5px 8px;

  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
