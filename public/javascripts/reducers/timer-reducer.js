



//this is used to collect the setInterval ID, so it can be passed into the clear interval function when the generations need to stop being counted, I need to combine the timer and boardtimer because they will always need to start and stop at the same time, since the generations and board are always in tracked together
const timeReducer = (state={}, action) => {
  switch(action.type){
    case 'TIMER':
      let timerId = action.timerId;
      return timerId;
    default:
      return state;
  }
};



export default timerReducer;
