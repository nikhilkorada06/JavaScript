/**
 * Callback Hell
 * Pyriamid of doom
 * Inversion of Control
 */


//                                    Callback Hell

// bookHotel --> proceedPayment --> showBookingStatus --> updateBookingHistory  (APIs)

bookHotel(hotelId, function(){ // 1
    if (error){
        handleError
    }else{
        proceedToPayment(hotelId, function(){ //2
            if (error){
                handleError
            }else{
                showBookingStatus(function(){ //3
                    if (error){
                        handleError
                    }else{
                        updateBookingHistory(function(){ //4
                            if (error){
                                handleError
                            }else{
                                success
                            }
                        })
                    }
                })
            }
        })
    }
})

//It is always hard to understand a code that is more in horizontal. In the above code the code is completely horizontal like a pyramid.
//To avoid this problem promises are used.
//The above code is like a pyramid that is called as Pyriamid of doom or Callback Hell basically its a deep nesting 

/**
 * Callback Hell—also known as the "Pyramid of Doom"—is what happens when you're writing JavaScript and you have multiple nested callback functions, 
    especially in asynchronous code like API calls, file operations, or timers. It looks chaotic and is hard to read, debug, and maintain.
     What Causes It?
- Deep nesting of functions: Each callback is inside another.
- Sequential async operations: You wait for one thing to finish before starting the next.
- Lack of proper abstraction: Repeating logic instead of modularizing it.

 */



//                             Inversion of Control     


bookHotel(hotelId, function(){
    proceedToPayment(hotelId, function(){
        
    })
})

//Inversion of control --- when the execution of a callback function completely depends upon 
//                         the function it has been passed to..
//  Here the execution of proceedToPayment completely depends upon bookHotel
// The control of proceedToPayment function completely depends on bookHotel API so this is called inversion of control.
//Same happens in case of button we use event listener in which we give a call back function. Then function control depends on button it wont be executed until we click the button. Here the control of function depends on button this is inversion of control
