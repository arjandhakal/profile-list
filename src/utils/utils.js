/*
    A pure function to prevent out of bounds error while 
    shuffling through array elements. 
    Returns the index of first element when the number is greater than array length.
    Returns the index of last element when the number is less than 0
*/
export function checkIndexChange(number,arrayLength){
    if (number > arrayLength - 1) return 0;
    if (number < 0) return arrayLength - 1;
    return number;
}


/*
    a function that gets a priorit list array and changes
    it to a object where [keys] are the priority names and values
    are the [priority] with 0 being the highest priority.
*/
function getPriorityListObject(priorityListArray){
    let priorityList = {};
    //Adding Key and Value to the priority list from the array element and index
    priorityListArray.forEach((item,index) => {
        priorityList[item] = index + 1
    })
    return priorityList;
}

/* A pure function that sorts the array object based on a priority list Array and priority list 
category
*/
export function sortbyPriority(array,priorityListArray,priorityCategory){
    let arrayToSort =[...array]
    //getting the priorit list object for comparision while sorting
    let priorityList = getPriorityListObject(priorityListArray);

    //sorting the array ascendingly based on the values of the priorityList
    arrayToSort.sort((first,second) => {
        //getting the category of the first element
        let categoryOfFirst = first[priorityCategory];
        //getting the category of the second element
        let categoryOfSecond = second[priorityCategory];
        //getting the priority value from the priority list and making the comparision
        return priorityList[categoryOfFirst] - priorityList[categoryOfSecond]

    })

    return arrayToSort;
    
}