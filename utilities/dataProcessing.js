const splitArrayByEmptyString = (arr) => {
  const result = [];
  let subArray = [];
  for (const item of arr) {
    if (item !== "") {
      subArray.push(item);
    } else if (subArray.length > 0) {
      result.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length > 0) {
    result.push(subArray);
  }
  return result;
};

const extractGenderAndAge = (param) => {
  const str = param?.toLowerCase();
  const numbers = str.match(/\d+/g);

  return {
    Age: numbers[numbers.length - 1] || "NA",
    Gender: str?.includes("gen")
      ? str?.includes("female")
        ? "Female"
        : "Male"
      : "NA",
  };
};

const extractKeyValuePairs = (arr) => {
  const result = [];

  for (const [index, str] of arr.entries()) {
    const keyValuePairs = str.split(",");
    let pairObj = {};

    if (
      (index === 1 && arr?.length > 5) ||
      (index === 0 && arr?.length === 5)
    ) {
      const epic = str?.split(" ");
      pairObj["Epic"] = epic[epic.length - 1];
    } else if (str?.toLowerCase()?.includes("age")) {
      const { Gender, Age } = extractGenderAndAge(str) || {};
      pairObj = {
        ...pairObj,
        Gender,
        Age,
      };
    } else {
      for (const pair of keyValuePairs) {
        const [key, value] = pair.split(/:|!/).map((item) => item.trim());
        if (key?.toLowerCase().includes("house")) {
          let result = value.split(" Photo")[0];
          pairObj[key] = result;
        } else {
          pairObj[key] = value;
        }
      }
    }

    result.push(pairObj);
  }

  const mergedObject = Object.assign({}, ...result);
  const arrayOfMergedObjects = [mergedObject];

  return arrayOfMergedObjects;
};

module.exports = {
  splitArrayByEmptyString,
  extractGenderAndAge,
  extractKeyValuePairs,
};
