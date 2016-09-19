





//this handles changes to the generations
const initialGenerations = {generationState: 0, gameOn: true}
const generationsReducer = (state = initialGenerations, action) => {
  switch(action.type){
    case 'CLEAR':
      state = {
        generationState: 0,
        gameOn: false
      };
      return state;
    case 'TICK':
      return {
        generationState: state.generationState +1,
        gameOn: true
      };
    case 'STOP':
      return {
        generationState: state.generationState,
        gameOn: false
      };
     case 'RANDOM':
      return {
        generationState: 0,
        gameOn: false
      };
    default:
      return state;
  }

};



export default generationsReducer;
