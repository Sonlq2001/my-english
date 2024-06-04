import { styled } from "styled-components";
import { Form } from "formik";

export const WrapCreateDocument = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.white};
`;

export const WrapFormik = styled(Form)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .row-btn {
    display: flex;
    justify-content: flex-end;
  }
`;
