import { FC } from "react";

import { WrapNotepadSection } from "./NotepadSection.styles";

const NotepadSection: FC = () => {
  return (
    <WrapNotepadSection to="/notepad/123">
      <h3>Cần thiết</h3>
      <div className="info-notepad">
        <span>20/12/2023</span>
        <p className="des-notepad">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          maiores perspiciatis, pariatur earum dolorum illo minus ipsum, ducimus
          molestiae, magni provident distinctio tempora sint impedit iste dolore
          ad voluptatum eum.
        </p>
      </div>
    </WrapNotepadSection>
  );
};

export default NotepadSection;
