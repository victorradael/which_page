const setTheNumberOfDays = (option, quantity) => {
  switch (option) {
    case "day":
      return Number(quantity);
      break;

    case "week":
      return Number(7 * quantity);
      break;

    case "month":
      return Number(30 * quantity);
      break;

    case "year":
      return Number(365 * quantity);
      break;

    default:
      break;
  }
};

module.exports = { setTheNumberOfDays };
