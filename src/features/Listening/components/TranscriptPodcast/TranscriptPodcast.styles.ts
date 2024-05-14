import { styled } from "styled-components";

export const WrapTranscript = styled.div`
  overflow-y: auto;
  position: relative;
  padding-top: calc(100% - 3.8rem + 1.5rem);
  .list-transcript {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: absolute;
    top: 0;
    bottom: 0;
  }
`;

export const SectionTranscript = styled.div`
  .time-part {
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    background-color: #eee;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  .content-section {
    display: flex;
    flex-wrap: wrap;
    line-height: 2rem;
  }
`;
