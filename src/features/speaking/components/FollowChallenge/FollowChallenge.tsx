import { FC } from "react";

import {
  InnerFollowChallenge,
  WrapFollowChallenge,
} from "@app/features/speaking/components/FollowChallenge/FollowChallenge.styles";
import ImageStackOfBooks from "@app/assets/images/stack-of-books.jpg";

const FollowChallenge: FC = () => {
  return (
    <WrapFollowChallenge>
      <h2>Follow</h2>

      <InnerFollowChallenge>
        <div className="box-image">
          <img src={ImageStackOfBooks} alt="" />
        </div>

        <div className="box-slogan">
          <h2>Study and progress every day</h2>
          <p>
            Learning is a long process, take it step by step, follow the journey
            and move forward
          </p>
        </div>
        <div className="box-step">
          {Array(3)
            .fill(1)
            .map((_, index) => (
              <div className="step" key={index}>
                <img
                  src="https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_1280.jpg"
                  alt=""
                />
                <div className="step-intro">
                  <h3>Keep going</h3>
                  <p>Never give up</p>
                </div>
              </div>
            ))}
        </div>
      </InnerFollowChallenge>
    </WrapFollowChallenge>
  );
};

export default FollowChallenge;
