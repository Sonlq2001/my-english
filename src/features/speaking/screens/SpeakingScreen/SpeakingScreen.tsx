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

import AppButton from "@app/components/AppButton/AppButton";

import {
  InnerSpeaking,
  ItemTypeSpeaking,
  ListTypes,
  WrapSpeaking,
} from "./SpeakingScreen.styles";

import { LIST_SPEAKING_STYLE } from "../../constants/speaking.constants";

const SpeakingScreen: FC = () => {
  return (
    <WrapSpeaking>
      <InnerSpeaking>
        <h2>Popular</h2>

        <ListTypes>
          {LIST_SPEAKING_STYLE.map((type, index) => (
            <ItemTypeSpeaking key={index}>
              <img src={type.thumbnail} alt="" />
              <div className="content-item">
                <h3>{type.title}</h3>
                <p>{type.subTitle}</p>
                <AppButton variant="outlined" className="btn-join">
                  Join here
                </AppButton>
              </div>
            </ItemTypeSpeaking>
          ))}
        </ListTypes>
      </InnerSpeaking>
    </WrapSpeaking>
  );
};

export default SpeakingScreen;
