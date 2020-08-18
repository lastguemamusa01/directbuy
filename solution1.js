module.exports = function sortCategoriesForInsert(inputJson) {
	
  const lookUpTable = {};
  inputJson.forEach(element => {
    if (!lookUpTable[element.parent_id]) {
      lookUpTable[element.parent_id] = [];
    }
    lookUpTable[element.parent_id].push(element);
  })
  const properJsonOutput = [];
  const result = (key) => {
    if (lookUpTable[key]) {
      lookUpTable[key].forEach(element => {
        properJsonOutput.push(element);
        result(element.id);
      })
    }
  }
  result(null);
  return properJsonOutput;
  
}