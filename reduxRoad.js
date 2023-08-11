//Defining the initial state:
const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
}

//defining the reducer:
const wagonStateReducer = (state= initialWagonState, action) => {
  switch(action.type) {

    case 'gather': {
      return {
      ...state,
      supplies: state.supplies + 15,
      days: state.days + 1
      };
    }
    case 'travel': {
      let supplies = state.supplies - 20*action.payload;
      let distance = state.distance + 10*action.payload;
      let days = state.days + action.payload;//action.payload contains the number of days to travel
      if (state.supplies <= 0) {
        return state;
      } else if (supplies < 0) {
      return state;
      } else 
        return {
          ...state, supplies, distance, days        
      };
    }    
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      };
    }
    case 'sell': {
      return {
        ...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5
      };
    }
    case 'buy': {
      return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15
      };
    }
    case 'theft': {
      return {
        ...state,
        cash: state.cash / 2
      };
    }
	
    default:
      return state;
    }
   }
   
   //action 1:
   let wagon = wagonStateReducer(undefined, {});     
    //console.log(wagon);

   //action 2:
   let wagon1 = wagonStateReducer(wagon, {type: 'travel', payload: 1 });
   //console.log(wagon1);

   //action 3:
   let wagon2 = wagonStateReducer(wagon1, {type: 'gather', payload: 0 });
   //console.log(wagon2);

  //action 4:
  let wagon3 = wagonStateReducer(wagon2, {type: 'tippedWagon'});
   //console.log(wagon3);

  //action 5:
  let wagon4 = wagonStateReducer(wagon3, {type: 'travel', payload: 3});
   //console.log(wagon4);

  //action 6:
  let wagon5 = wagonStateReducer(wagon4, {type: 'sell'});
   //console.log(wagon5);

  //action 7:
  let wagon6 = wagonStateReducer(wagon5, {type: 'buy'});
   //console.log(wagon6);

  //action 8:
  let wagon7 = wagonStateReducer(wagon6, {type: 'theft'});
   //console.log(wagon7);


    

  