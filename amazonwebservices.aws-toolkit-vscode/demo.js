
// a function need to create random numbers between 0 and 1000

function  random(){
    return Math.floor(Math.random()*1000);
}

// write a function that takes a string and returns the length of the string with null check

function provide_length(str){
    if(str==null){
        return 0;
    }
    return str.length;
}

// write code for addition of two numbers

function  add(a,b){
    return a+b;
}

// write code for login form

function login(username,password){
    if(username=="admin"&&password=="admin"){
        return "login successful";
    }
    return "login failed";
}

// write a code for substring

function  substring(str,start,end){
    return str.substring(start,end);
}

// write a code for random number generator

function random_number(){
    return Math.floor(Math.random()*1000);
}

// write a code for palindrome

function palindrome(str){
    if(str==str.split("").reverse().join("")){
        return true;
    }
    return false;
}

// function for login with user name and password

function login(username,password){
    if(username=="admin"&&password=="admin"){
        return "login successful";
    }
    return "login failed";
} 




















