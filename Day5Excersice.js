/**
 This problem was asked by Jane Street.
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.


 */


//  Solution in pyhton by: https://galayko.rocks/posts/2018-07-06/ 

 function cons (a,b){
     function pair(f){
         return f(a,b)
     }
    return pair;
 }

function car(f){
    function left(a, b){
        return a
    }
    return f(left)
}

function cdr(f){
    function right(a, b){
        return b
    }
    return f(right)
}

 cons(1,2)


console.log((car(cons(3,4))));
console.log((cdr(cons(3,4))));