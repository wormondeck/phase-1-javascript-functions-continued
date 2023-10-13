function saturdayFun(string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`;
}


function mondayWork(string = 'go to the office'){
    return `This Monday, I will ${string}.`;
   }
   console.log(mondayWork());

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`
    }
  }
