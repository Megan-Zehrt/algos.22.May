// 2363. Merge Similar Items

// You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:

//  - items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
//  - The value of each item in items is unique.
// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.

// Note: ret should be returned in ascending order by value.






/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let weightMap = new Map();

    // Process the first list of items
    for (let [value, weight] of items1) {
        if (weightMap.has(value)) {
            weightMap.set(value, weightMap.get(value) + weight);
        } else {
            weightMap.set(value, weight);
        }
    }

    // Process the second list of items
    for (let [value, weight] of items2) {
        if (weightMap.has(value)) {
            weightMap.set(value, weightMap.get(value) + weight);
        } else {
            weightMap.set(value, weight);
        }
    }

    // Convert the map to a sorted array
    let ret = Array.from(weightMap.entries()).map(([value, weight]) => [value, weight]);
    ret.sort((a, b) => a[0] - b[0]);

    return ret;
};
