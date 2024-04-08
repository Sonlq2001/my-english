import { styled } from "styled-components";

export const WrapTranscriptText = styled.div`
  .item-transcript + .item-transcript {
    margin-top: 1.5rem;
  }

  .item-transcript {
    font-size: 1.5rem;
    word-break: break-word;
    line-height: 2.5rem;

    .groups-btn {
      display: inline-block;
      margin-left: 1rem;
      transform: translateY(0.5rem);

      svg {
        cursor: pointer;
        width: 2rem;
      }

      svg + svg {
        margin-left: 1rem;
      }
    }
  }
`;
