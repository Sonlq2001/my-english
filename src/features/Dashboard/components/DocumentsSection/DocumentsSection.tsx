import { WrapDoc, WrapListDoc } from "./DocumentsSection.styles";

const DocumentsSection = () => {
  return (
    <WrapListDoc>
      <WrapDoc>
        <img
          src="https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_640.jpg"
          alt=""
        />
        <span>He made a cake his birthday</span>
        <button>Reading</button>
      </WrapDoc>
      <WrapDoc>
        <img
          src="https://cdn.pixabay.com/photo/2023/05/02/14/15/british-shorthair-7965411_640.jpg"
          alt=""
        />
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          nulla esse, nobis eos eveniet enim commodi, ratione cum quo aliquid
        </span>
        <button>Reading</button>
      </WrapDoc>
    </WrapListDoc>
  );
};

export default DocumentsSection;
