export const encodeKeyword = (keyword: string) => {
  let valueEncode = "";
  try {
    valueEncode = encodeURIComponent(keyword);
  } catch (error) {
    valueEncode = keyword;
  }
  return valueEncode;
};

export const decodeKeyword = (keyword: string) => {
  let valueDecode = "";
  try {
    valueDecode = decodeURIComponent(keyword);
  } catch (error) {
    valueDecode = keyword;
  }
  return valueDecode;
};
