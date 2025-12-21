/**
 * Average age of all family members.
 */

const family = [

    {
        name : "kiran",
        age : 49
    },
    {
        name : "teja",
        age : 45
    },
    {
        name : "nikhil",
        age : 19
    },
    {
        name : "akhil",
        age : 16
    }
]
    const result = family.reduce((acc,cur) =>  acc+cur.age  , 0);

    console.log(result);


    const avgAge = result / family.length ;

    console.log(avgAge);
