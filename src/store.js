import {popupData} from './firebaseConnect.js' 

var redux = require('redux');

const InitialState = {
    // isEdit:false,
    data:popupData,
    test:true
}

const allReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            console.log('ket noi store thanh cong')
            return state

        default:
            return state
    }
}

var store=redux.createStore(allReducer);
export default store;