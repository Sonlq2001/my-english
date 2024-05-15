import { styled } from "styled-components";

export const WrapPodcast = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.palette.white};
  padding: 2rem;
`;

export const ContentVideo = styled.div`
  margin-right: 4rem;
  width: 65%;
`;

export const InfoVideo = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.palette.gray.medium};
  padding: 2rem 0;
  p {
    font-size: 1.4rem;
    margin-top: 0.8rem;
  }
`;

export const DescriptionVideo = styled.div`
  margin-top: 2rem;
`;

export const WrapTranscript = styled.div`
  width: 35%;
  h4 {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.palette.gray.extraLight};
  }
`;
