





class Generation_Counter extends Component{
  // this begins the ticking when the page first loads, eventually this will include the game rules, so the game will start when you first open the page
  componentDidMount(){
    this.tickTest1();
  }

 //this is used to start the generations counter, the timerId needs to be sent to state so it can be used later to stop this counter
  tickTest1(){
      let timer = setInterval(this.props.tickGame, 500);
      this.props.getTimer(timer);
  }
  render(){
    return(
          <div>
            <div className='generations'> Generations: {this.props.generations.generationState}</div>
          </div>
    );
  }
};


const mapStateToProps3 = (state) =>{
  return{
    generations: state.generations,
    timer: state.timer
  };
}

 function matchDispatchToProps3(dispatch){
  return bindActionCreators({
                            tickGame: tickGame,
                            getTimer: getTimer
                           }, dispatch)
}

const GenerationCounter = connect(mapStateToProps3, matchDispatchToProps3)(Generation_Counter);


export default GenerationCounter;
