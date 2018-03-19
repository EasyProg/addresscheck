/**
 * Created by Михаил on 17.03.2018.
 */
/**
 * Created by Михаил on 09.03.2018.
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import dataReducer from '../reducers/index';
export default function configureStore(initialState)
{
    return createStore(dataReducer,composeWithDevTools(applyMiddleware(thunk)),initialState);
};