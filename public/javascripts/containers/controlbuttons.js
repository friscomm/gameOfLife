




class Control_Buttons extends Component{

  //this changes the generations to 0 and stops the interval for the ticking
  clearButton(){
    let stopTimer = this.props.timer;
    clearInterval(stopTimer);
    this.props.clearGame(true);
  }
  //this generates a new randomly generated board and stops teh iterval for ticking
   randomButton(){
     let stopTimer = this.props.timer;
     clearInterval(stopTimer);
     this.props.randomGame();
  }
  //this starts the ticking for generations, as long as the game is not currently running
  tickTest2(){
    if(this.props.generations.gameOn == false){
      let timer = setInterval(this.props.tickGame, 500);
      this.props.getTimer(timer);
    }
  }
  //this pauses the ticking, but doesn't zero out the generations
  pauseButton(){
    let stopTimer = this.props.timer;
    clearInterval(stopTimer);
    this.props.stopGame();
  }
  render(){
    return(

          <ButtonToolbar>
            <ButtonGroup>
                <Button bsStyle="info"
                  onClick = {() => this.tickTest2()}
                  >Start</Button>
                <Button bsStyle="info"
                  onClick = {() => this.pauseButton()}>Pause</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button bsStyle="info"
               onClick = {() => this.randomButton()}
                   >Randomize</Button>
                <Button bsStyle="info"
                  onClick = {() => this.clearButton()}
                  >Clear</Button>
            </ButtonGroup>
          </ButtonToolbar>

    );
  }
};


//for passing in actions as props
 function matchDispatchToProps2(dispatch){
  return bindActionCreators({
                              clearGame: clearGame,
                              randomGame: randomGame,
                              stopGame: stopGame,
                              getTimer: getTimer,
                              tickGame: tickGame,
                              stopGame: stopGame
                            }, dispatch)
}

//for connecting the props to the container
const ControlButtons = connect(mapStateToProps1, matchDispatchToProps2)(Control_Buttons);


export default ControlButtons;
