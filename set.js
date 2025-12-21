 const studentIds = [1,2,1,1,1];
 
 console.log({studentIds});

//Sets are collections of unique values

const uniqueStudentIds = new Set();

uniqueStudentIds.add(1);
uniqueStudentIds.add(2);
uniqueStudentIds.add(1);

console.log({uniqueStudentIds}); 

const uniqueStudentIds2 = new Set(studentIds);//converting array to set
console.log({uniqueStudentIds2});

console.log(studentIds[1],uniqueStudentIds2[1]);

//set cannot be accessed by index so we need to convert it to an array

const newStudentIdsArray = [...uniqueStudentIds2] //conversion of set to array

console.log({newStudentIdsArray});

//Now we can access by index
console.log(newStudentIdsArray[1]);