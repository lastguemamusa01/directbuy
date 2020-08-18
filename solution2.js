module.exports = function sortCategoriesForInsert(inputJson) {
	
  // save all parents id elements is null 
  let parentsIds = inputJson.filter(elemParent => elemParent.parent_id === null);
  // save all children id elements that parent id is not null
  let childrensIds = inputJson.filter(elemChildren => elemChildren.parent_id !== null );
  // traverse through children id elements and pushing the parent id element below parent 
  for(children of childrensIds ){
    let idx = parentsIds.findIndex(objectChild => objectChild.id === children.parent_id);
    parentsIds.splice(idx+1, 0, children);
  }
  
  return parentsIds;
  
}