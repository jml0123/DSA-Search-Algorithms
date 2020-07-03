
const BinarySearchTree = require("./DepthFirstSearch");



//Q1:
// 11, 6, 8
// 11, 14, 15, 17, -1
// Q2:
// 15 searches
// 15 searches

const linearSearch = (dataSet, item) => {
    let searchCount = 0;
    for(element of dataSet) {
        searchCount++
        if (element === item) {
            return `${element} -- # of Searches ${searchCount}`
        }
    }
    return `not found -- # of Searches ${searchCount}`
}
const binarySearch  = (dataSet, value, start, end) => {
   
   dataSet.sort((a,b) => a-b)
   start = start === undefined? 0 : start;
   end = end === undefined ? dataSet.length : end;
   let recursiveCalls = 0;
   
   if (start > end) {
        return `${- 1} Not found - Recursive Calls ${recursiveCalls}`
   }
   
   const index = Math.floor((start + end) / 2);
   const item = dataSet[index]

 
   if (item == value) {
    return `${binarySearch[index]} - # of Recursive Calls ${recursiveCalls}`
    }
    else if (item < value) {
        recursiveCalls++
        binarySearch(dataSet, value, index + 1, end)
        
    }
    else if (item > value) {
        recursiveCalls++
        binarySearch(dataSet, value, start, index - 1)
    }
}

// e.g. 599.284
const deweySearch = (dewey, title, library, start, end) => {
    let section = dewey.slice(0)
    const start = start === undefined? 0 : start;
    const end = end === undefined ? section.length : end; // We know the section where the book is locateed baased on the dewey number
    const midIndex = Math.floor((start + end) / 2);

    if (start > end) {
        return "Cannot find book"
    }
    if(section[midIndex].title === title) {
        return section[midIndex]
    }
    else if(section[midIndex].dewey < dewey) {
        deweySearch(dewey, title, library, index+ 1, end)
    }
    else if(section[midIndex].dewey > dewey) {
        deweySearch(dewey, title, library, start, index-1)
    }
}

const maxProfit = (prices) => {
    // initial values
    let minimum = prices[0]
    let maxProfit = prices[1] - minimum
    
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] - minimum > maxProfit) {
            maxProfit = prices[i] - minimum
        }
        if(prices[i] < minimum && i !== length - 1) {
            minimum = prices[i];
        }
    }
}

const main = () => {
    const dataset  = [
        89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 
        40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 
        27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 
        16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 
        88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 
        90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 
        42, 51, 54, 84, 34, 53, 78, 40, 14, 5
    ]
    console.log(linearSearch(dataset, 13))
    console.log(binarySearch(dataset, 13))
}

main()

// Searching in a BST
// Tree traversals
// Next commanding
