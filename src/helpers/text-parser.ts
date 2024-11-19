const textParser = (htmlString: string, maxLength = 100) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const textOnly = doc.body.innerText || doc.body.textContent || "";

  if (textOnly.length > maxLength) {
    const spacePosition = textOnly.lastIndexOf(" ", maxLength);

    const positionSlice = spacePosition !== -1 ? spacePosition : maxLength;

    return `${textOnly.slice(0, positionSlice)}...`;
  }

  return textOnly;
};

export default textParser;
