import generationsReducer from './generations-reducer';
import gridReducer from './grid-reducer';
import timerReducer from './timer-reducer';



const reducers = combineReducers({
  board: gridReducer,
  generations: generationsReducer,
  timer: timeReducer
});


export default reducers;
