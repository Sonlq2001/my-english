import { styled } from "styled-components";

export const WrapTranscript = styled.div`
  overflow-y: auto;
  position: relative;
  padding-top: calc(100% - 3.8rem + 5.5rem);
  .list-transcript {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 0 0.5rem;
  }
`;

export const SectionTranscript = styled.div`
  max-height: 5.8rem;
  height: 100%;
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
    padding: 0 0.3rem;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #febf0040;
    }
    p {
      word-break: break-word;
      line-height: 2.5rem;
    }
  }
  &.active-transcript {
    .time-part,
    .content-section {
      background-color: #fcdbdc;
    }
    .content-section:hover {
      background-color: #fcdbdc;
    }
  }
`;
