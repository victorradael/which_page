const separateBookPages = (totalPages, days) => {
  const pagesPerDay = (Number(totalPages) / Number(days)).toFixed(0);
  if (pagesPerDay === "0") {
    return console.log("Isso dá menos de uma página por dia!");
  }
  let markings = pagesPerDay;
  const pagesMarkings = [];

  console.log(pagesPerDay);
  console.log(days);

  while (markings <= totalPages) {
    pagesMarkings.push(markings);
    markings = markings + pagesPerDay;
  }

  return pagesMarkings;
};

module.exports = { separateBookPages };
