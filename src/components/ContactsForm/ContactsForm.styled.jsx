import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  padding: 20px;
  font-size: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  padding: 12px;
  max-width: 400px;
`;

export const FormButton = styled.button`
  display: block;
  min-width: 150px;
  margin: 20px auto;
  font-size: 20px;
  padding: 15px 20px;
  border-radius: 20px;
  border: none;
  background-color: grey;
  color: white;

  :hover,
  :focus {
    background-color: blue;
  }
`;
