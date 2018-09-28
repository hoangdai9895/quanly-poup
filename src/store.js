import {popupData} from './firebaseConnect.js' 

var redux = require('redux');

const InitialState = {
    data:popupData,
    test:true,
    editData:{},
    flag:false
}

const allReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            popupData.push(action.e);
            return state

        case 'GET_EDIT_DATA':
            return {...state, editData:action.e}

        case "EDIT_DATA":
            popupData.child(action.e.id).update({
                name: action.e.name,
                link_anh: action.e.link_anh,
                link_landing: action.e.link_landing,
                utm_campaign :  action.e.utm_campaign,
                tm_content :  action.e.utm_content,
                utm_medium : action.e.utm_medium,
                start_time :  action.e.start_time,
                end_time :  action.e.end_time,
                tan_suat :  action.e.tan_suat,
                check_box :  action.e.check_box
            })
            return {...state, editData:{}}

        case "DELETE_DATA": 
            popupData.child(action.e).remove()
            return state

        case "CHANGE_FLAG":
            return {...state,flag:!state.flag}

        default :
            return state
    }
}

var store=redux.createStore(allReducer);
// store.subscribe(function(){
//     console.log(JSON.stringify(store.getState()))
// })
export default store;