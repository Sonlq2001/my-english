import { styled } from "styled-components";
import { Form } from "formik";

export const WrapBackPage = styled.div`
  margin-top: 2rem;
`;

export const WrapFormik = styled(Form)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  .row-btn {
    display: flex;
    justify-content: flex-end;
  }
`;
