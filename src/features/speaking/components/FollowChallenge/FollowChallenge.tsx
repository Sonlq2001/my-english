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

        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </InnerFollowChallenge>
    </WrapFollowChallenge>
  );
};

export default FollowChallenge;
