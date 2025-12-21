 function greet (userName){
    return `Good Morning ${userName}`;
};

function print(value){
    console.log (value);
}

module.exports = {
    greet,
    print   //Indicates that these functions are ready to import
}