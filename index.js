// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}

let mondayWork = function(activity = ("go to the office, work from home")){
    return `This Monday, I will ${activity}.`
    
}


let wrapAdjective = function(style = "*"){
    return function(adjective = "special"){
        return `You are ${style}${adjective}${style}!`;
    }
}