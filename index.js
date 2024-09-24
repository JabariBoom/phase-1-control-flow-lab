function scuberGreetingForFeet(numberOfFeet){
  // Write your code here!
  if(numberOfFeet > 2500){
    return 'No can do.'
  } 
  else if(numberOfFeet > 2000){
    return 'I will gladly take your thirty bucks.'
  }
  else if(numberOfFeet >= 400 && numberOfFeet <= 2000){ 
    return 'That will be twenty bucks.' 
  }
  else if(numberOfFeet <= 400){
    return 'This one is on me!'
  }
}
function ternaryCheckCity(aCity){
  // Write your code here!
  return aCity === 'NYC'?'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(charm){
  // Write your code here!
  switch(charm){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
} 