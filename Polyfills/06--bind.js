/**
 * A Polyfill is a piece of javascript code used to provide modern functionality 
 * on older browsers that do not support it.
 * 
 * polyfill is nothing but our own version of any functionality..
 */

//polyfill for bind..


const obj = {
    name : "Nikhil",
    city : "Srikakulam"
}

function displayUserInfo(state){
    console.log(`Hii Iam ${this.name} from ${this.city}, ${state}`);
}

// const bindFunction = displayUserInfo.bind(obj, "AP");
// bindFunction();


Function.prototype.createdBind = function(context, ...args)
{
    context.showMsg = this;
    console.log(args);
    return function(...rest)
    {
        console.log(rest);
        context.showMsg(...args, ...rest);
        delete context.showMsg;
    };
};

const bindFunction_1 = displayUserInfo.createdBind(obj, "AP");
bindFunction_1();

const bindFunction_2 = displayUserInfo.createdBind(obj);
bindFunction_2("Tripura");