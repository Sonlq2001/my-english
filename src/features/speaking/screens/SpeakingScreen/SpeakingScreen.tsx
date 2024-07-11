// import { FC } from "react";

// import TitlePage from "@app/components/TitlePage/TitlePage";

// import { LIST_SPEAKING_STYLE } from "../../constants/speaking.constants";
// import SpeakingStyle from "../../components/SpeakingStyle/SpeakingStyle";
// import { WrapSpeaking } from "./SpeakingScreen.styles";

// const SpeakingScreen: FC = () => {
//   return (
//     <>
//       <TitlePage
//         title="Practice speaking"
//         subtitle="Practice speaking in many different forms."
//       />

//       <WrapSpeaking>
//         {LIST_SPEAKING_STYLE.map((item, index) => (
//           <SpeakingStyle
//             key={index}
//             title={item.title}
//             thumbnail={item.thumbnail}
//             path={item.path}
//           />
//         ))}
//       </WrapSpeaking>
//     </>
//   );
// };

// export default SpeakingScreen;

import { FC } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import AppButton from "@app/components/AppButton/AppButton";
import IconDoubleArrowRight from "@app/assets/images/icon-svg/icon-keyboard-double-arrow-right.svg?react";
import FollowChallenge from "@app/features/speaking/components/FollowChallenge/FollowChallenge";

import {
  InnerSpeaking,
  ItemTypeSpeaking,
  ListTypes,
  WrapSpeaking,
} from "./SpeakingScreen.styles";

import { LIST_SPEAKING_STYLE } from "../../constants/speaking.constants";
import { Link } from "react-router-dom";

const SpeakingScreen: FC = () => {
  return (
    <WrapSpeaking>
      <InnerSpeaking>
        <h2>Popular</h2>

        <ListTypes>
          {LIST_SPEAKING_STYLE.map((type, index) => (
            <StyleSheetManager
              key={index}
              enableVendorPrefixes
              shouldForwardProp={(propName, elementToBeRendered) => {
                return typeof elementToBeRendered === "string"
                  ? isPropValid(propName)
                  : true;
              }}
            >
              <ItemTypeSpeaking styleColor={type.styleColor}>
                <Link to={type.path}>
                  <img
                    src={type.thumbnail}
                    alt={`thumbnail-speaking-${index}`}
                  />
                  <div className="content-item">
                    <h3>{type.title}</h3>
                    <p>{type.subTitle}</p>
                    <AppButton
                      variant="outlined"
                      className="btn-join"
                      rightIcon={<IconDoubleArrowRight />}
                    >
                      Join here
                    </AppButton>
                  </div>
                </Link>
              </ItemTypeSpeaking>
            </StyleSheetManager>
          ))}
        </ListTypes>
      </InnerSpeaking>

      <FollowChallenge />
    </WrapSpeaking>
  );
};

export default SpeakingScreen;
