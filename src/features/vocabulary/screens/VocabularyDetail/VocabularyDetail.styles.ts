import { styled } from "styled-components";

export const WrapVocabularyDetail = styled.div`
  max-width: 76.8rem;
  margin: 0 auto;

  .name-vocabulary {
    display: flex;
    align-items: center;
  }

  .vocabulary {
    font-size: 2.5rem;
    font-weight: ${(props) => props.theme.palette.weight.semibold};
    margin-right: 3rem;
  }

  svg:hover {
    cursor: pointer;
  }

  .type-vocabulary {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-style: italic;
  }
`;

export const ListInfoVocabulary = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
  .title-mean {
    display: block;
    margin-bottom: 2rem;
  }
  .list-mean {
    margin-left: 5rem;
    li {
      position: relative;
      padding-left: 2rem;
      line-height: 2.5rem;
      svg {
        position: absolute;
        margin-left: 2rem;
        width: 2rem;
      }
    }
    li + li {
      margin-top: 2rem;
    }
  }
`;

export const InnerContentInfo = styled.div`
  display: flex;
  gap: 2rem;
  .info-head {
    flex: 1;
  }
  img {
    width: 20rem;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
