import { FC } from "react";

import {
  InnerFollowChallenge,
  WrapFollowChallenge,
} from "@app/features/speaking/components/FollowChallenge/FollowChallenge.styles";
import ImageStackOfBooks from "@app/assets/images/stack-of-books.png";
import { LIST_STEPS } from "@app/features/speaking/constants/speaking.constants";
import ContentContainer from "@app/components/ContentContainer/ContentContainer";

const FollowChallenge: FC = () => {
  return (
    <WrapFollowChallenge>
      <ContentContainer title="Follow">
        <InnerFollowChallenge>
          <div className="box-image">
            <img src={ImageStackOfBooks} alt="" />
          </div>

          <div className="box-slogan">
            <h2>
              Life is like riding a bicycle. To keep your balance, you must keep
              moving.
            </h2>
            <p>
              Learning is a long process, take it step by step, follow the
              journey and move forward.
            </p>
          </div>
          <div className="box-step">
            {LIST_STEPS.map((step, index) => (
              <div className="step" key={`thumbnail-step-${index}`}>
                <img src={step.thumbnail} alt={`thumbnail-step-${index}`} />
                <div className="step-intro">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </InnerFollowChallenge>
      </ContentContainer>
    </WrapFollowChallenge>
  );
};

export default FollowChallenge;
