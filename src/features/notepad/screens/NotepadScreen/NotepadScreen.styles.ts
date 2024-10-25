import { styled } from "styled-components";

export const WrapNotepad = styled.div`
  display: flex;
  padding-top: 3.5rem;
  gap: 2rem;
`;

export const SectionLeft = styled.section`
  flex: 1;
`;

export const SectionRight = styled.section`
  max-width: 25rem;
  width: 100%;
`;

export const WrapWeek = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin: 4rem 0 3rem 0;
  border-bottom: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  padding-bottom: 2rem;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 2px;
  }
`;

export const ItemDay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  border-bottom: 3px solid ${(props) => props.theme.palette.primary.light};
  .day-name {
    font-weight: 600;
  }
`;

export const BannerRemind = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 3rem;
  font-size: 1.9rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 1rem;
  img {
    width: 30rem;
  }
`;

export const BannerRemindContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 2.7rem;
  .text-highlight {
    font-weight: 600;
    margin-left: 1rem;
    color: ${(props) => props.theme.palette.primary.light};
  }
`;
