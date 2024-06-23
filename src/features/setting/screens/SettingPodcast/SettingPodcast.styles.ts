import { styled } from "styled-components";

export const HeaderSetting = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const WrapTable = styled.div`
  overflow-x: auto;
  margin-top: 2rem;
  max-width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    white-space: nowrap;
    background-color: #f3f3f3;
    font-weight: 500;
    padding: 1.2rem;
    text-align: left;
  }
  td {
    text-align: left;
    padding: 1.5rem 1.2rem;
    line-height: 2.5rem;
  }
  tr:not(:first-child) {
    border-top: 1px solid #f3f3f3;
  }
  td span.topic {
    font-size: 1.4rem;
    background-color: #fcdbdc;
    padding: 0.4rem;
    border-radius: 0.8rem;
  }
`;

export const WrapTile = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: 60rem;
  width: 100%;
  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 100%;
    border: 1px solid #ccc;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const WrapAction = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ContentConfirm = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: red;
  svg {
    width: 3rem;
    height: 3rem;
  }
`;
