




//this creates a table as the gameboard, the cells are created by using the 2d array that was passed into state with the makeGrid function. it must be mapped through twice, and then the index is passed into the changeCell action so it can be used for determining which cell you have clicked on
class Game_Board extends Component{
    componentDidMount(){
      //this passes the gameboard state into the nextCellGeneration function. that checks the status of all cells and return a new board after applying the game rules to all cells. that new board is passed to the nextCell action, and that should update the gameboard every 500 milliseconds, but it's not working
      setInterval(this.props.nextCell(this.nextCellGeneration(this.props.board)), 500);
}




  //this counts the live neighbors that around a cell, since a status of 1 is alive and a status of 0 is dead
  countLiveNeighbors(x, y, boardState){
    let topRow = x-1 < 0 ? grid_height -1 : x-1;
    let bottomRow = x + 1 == grid_height ? 0 : x + 1;
    let leftColumn = y-1 < 0 ? grid_width -1 : y-1;
    let rightColumn = y+1 == grid_width ? 0 : y+1;

    let total = 0;
    total += boardState[topRow][leftColumn].status;
    total += boardState[topRow][y].status;
    total += boardState[topRow][rightColumn].status;
    total += boardState[x][leftColumn].status;
    total += boardState[x][rightColumn].status;
    total += boardState[bottomRow][leftColumn].status;
    total += boardState[bottomRow][y].status;
    total += boardState[bottomRow][rightColumn].status;
    return total;

}
  //this returns a new status based on the number of live neighbors a cell has
   updateBoard(x, y, boardState){
     //console log is here to check that the previous functions are working well
     console.log('This is the status ' + boardState[x][y].status)
    let liveNeighbors = this.countLiveNeighbors(x,y,boardState);
     //these are the rules for live cells
     if (boardState[x][y].status == 1) {
        if (liveNeighbors < 2){
          return {status: 0};
      } else if (liveNeighbors == 2 || liveNeighbors == 3){
           return {status: 1};
      } else if (liveNeighbors > 3) {
           return {status: 0};
      }
       //these are the rules for dead cells
     } else if (boardState[x][y].status == 0){
         if (liveNeighbors == 3) {
           return {status: 1};
        }
     }
  }
    nextCellGeneration(board){
    let newBoard = [];
    board.map((row, i) => {
      let newRow = [];
        row.map((cell, j) => {
           let updatedCell = this.updateBoard(i,j,board);
           newRow.push(updatedCell);
        })
      newBoard.push(newRow);
    })
    return newBoard;
  }

  render(){
  return (
      <div className="cellHolder">
         <table>
           <tbody>
           {this.props.board.map((row,i) =>
               <tr key={i}>
                 {row.map((column,j) =>
                  <td
                    key={j}
                    className= {(column.status == 1 ? 'alive' : '')}
                    onClick={() => this.props.changeCell(i,j, column.status)}
                    ></td>
                     )}
             </tr> )}
           </tbody>
         </table>
      </div>
    );
  }
};

//map state to props is necessary for mapping your data in the store to props that can be accessed in your containers; containers are just 'smart' containers
 const mapStateToProps1 = (state) =>{
  return{
    board: state.board,
    generations: state.generations,
    timer: state.timer
  };
}

 //match dispatch to props is needed to get your action creators in your container as props
 function matchDispatchToProps1(dispatch){
  return bindActionCreators({
                              changeCell: changeCell,
                              nextCell: nextCell
                            }, dispatch)
}

//connect is used to connect the props and container, this constant is what we will use in our App since this has access to the props
const GameBoard = connect(mapStateToProps1, matchDispatchToProps1)(Game_Board);



export default GameBoard;
