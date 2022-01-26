import React from 'react';

export default (state, action) => {
    const {payload,type}= action;
    switch (type){
    case "Login":
        return {
            ...state,
            sessionStarted: payload
        }
    case "Logout":
        return {
            ...state,
            sessionStarted: payload
        }
    default:
        return state
    }
}