import { styled } from "styled-components";
import { Form } from "formik";

export const WrapWriting = styled.main`
  max-width: 76.8rem;
  margin: 0 auto;
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
