/**
 * A Polyfill is a piece of javascript code used to provide modern functionality 
 * on older browsers that do not support it.
 * 
 * polyfill is nothing but our own version of any functionality..
 */

//polyfill for call and apply...

const obj = {
    name : "Nikhil",
    city : "srikakulam",
    // displayMsg(state) {
    // console.log(`Hii Iam ${this.name} from ${this.city}, ${state}`);
    // }
};

function displayUserInfo(state){
    console.log(`Hii Iam ${this.name} from ${this.city}, ${state}`);
}

// obj.displayMsg.call(obj, "Andhra Pradesh");


//                   CALL

Function.prototype.createdCall = function(context, ...args)
{
    // console.log(context); //this is obj
    // console.log(this); //points to the function displayMsg.

    context.showMsg = this;    //this statement will add displayUserInfo function into that context which is our obj.
    context.showMsg(...args);    //this will call or invoke the added function..
    delete context.showMsg;   //--- deletes the added function showMsg
}
displayUserInfo.createdCall(obj, "Andhra Pradesh");
console.log(obj);

// obj.showMsg();    ---- works if we do not delete the created showMsg




//              APPLY

Function.prototype.createdApply = function(context, args)   //here args is an array
{
    context.showMsg = this;
    context.showMsg(args);
}

displayUserInfo.createdApply(obj, ["INDIA"]);
console.log(obj);