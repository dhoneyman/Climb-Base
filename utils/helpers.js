module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: (stars) => {
    if (stars === 1){
      return `⭐️`
    }
    if (stars === 2){
      return `⭐️⭐️`
    }
    if (stars === 3){
      return `⭐️⭐️⭐️`
    }
    if (stars === 4){
      return `⭐️⭐️⭐️⭐️`
    }
    if (stars === 5){
      return `⭐️⭐️⭐️⭐️⭐️`
    }
  }


};
