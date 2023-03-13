// code your solution here

/*uses the default activity 'roller-skate' 
when no arguments are passed
✓ permits the default activity to be overriden 
*/
function saturdayFun(skate = 'roller-skate'){
    return `This Saturday, I want to ${skate}!`
}
saturdayFun()

/*uses the default activity 'go to the office' 
when no arguments are passed
✓ permits the default activity to be overriden */
function mondayWork(officeWork = 'go to the office'){
    return `This Monday, I will ${officeWork}.`
}
mondayWork()


function wrapAdjective(wrapper = "*"){
    return function (msg = "a hard worker"){
        return `You are ${wrapper}${msg}${wrapper}!`;
    }
}
console.log(wrapAdjective('||'));