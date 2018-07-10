/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const newArray = Array.from(new Set(items));
  return newArray;
};

module.exports = removeDuplicateItems;
