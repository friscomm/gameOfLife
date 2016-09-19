



//this handles changes to the gameboard
const initialGrid = makeGrid(grid_height, grid_width, false);
const gridReducer = (state = initialGrid, action) => {
  switch(action.type){
    case 'CHANGE':
      let newState = state.slice(0);
      console.log(newState);
      let cell = newState[action.x][action.y];
      if(cell.status == 0){
        cell.status = 1;
      }
      else {
        cell.status = 0;
      }
      return newState;
    case 'CLEAR':
      const emptyGrid = makeGrid(grid_height, grid_width, true);
      return emptyGrid;
    case 'RANDOM':
      const randomGrid = makeGrid(grid_height, grid_width, false);
      return randomGrid;
    case 'NEXT_CELL':
      const newBoard = action.newBoard;
      return newBoard;
    default:
      return state;
  }
};



export default gridReducer;
