class OrderUtil {
  isValidGetResults(results) {
    return results && results.length > 0 && results[0] !== {};
  };

  isValidDeletedResults(results) {
    return results && results.affectedRows > 0;
  };
}

module.exports = new OrderUtil;
