const fs = require("fs");

const objectToCSVRow = (obj, columns) => {
  return columns
    .map((column) => (obj[column] ? `"${obj[column]}"` : '"NA"'))
    .join(",");
}

const filterHeaders = (headers, results) => {
  return headers.filter((header) =>
    results.some((obj) => obj.hasOwnProperty(header))
  );
}

const writeToCsv = (results) => {
  const allHeaders = [
    "Epic",
    "Name",
    "Husbands Name",
    "House Number",
    "Gender",
    "Age",
    "Fathers Name",
  ];

  const columnsToInclude = filterHeaders(allHeaders, results);

  const csvContent =
    `"${columnsToInclude.join('","')}"\n` +
    results.map((obj) => objectToCSVRow(obj, columnsToInclude)).join("\n");

  fs.writeFileSync("output.csv", csvContent);
  console.log("Output added to a csv file: output.csv ✅");
};

module.exports = { writeToCsv };
