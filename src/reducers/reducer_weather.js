import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action)
{
    //console.log("Action ", action)
    switch(action.type)
    {
        case FETCH_WEATHER:
          const wdata =  [action.payload.data, ...state]
          console.log(wdata);
          return wdata;
    }
    return state;
}
