import { styled } from "styled-components";
import { Form } from "formik";

export const WrapPage = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  padding: 2rem;
`;

export const WrapContent = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
`;

export const WrapForm = styled(Form)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .row-btn {
    display: flex;
    justify-content: flex-end;
  }
`;
