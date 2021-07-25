import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types';
import api from '../config/apiConfig';

// Get techs from server
export const getTechs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await api.get('/techs');
        const data = await res.data;

        dispatch({
            type: GET_TECHS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.message,
        });
    }
};

// Add technician to server
export const addTech = (tech) => async (dispatch) => {
    try {
        setLoading();

        const res = await api.post('/techs', tech);
        const data = await res.data;

        dispatch({
            type: ADD_TECH,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.message,
        });
    }
};

export const deleteTech = (id) => async (dispatch) => {
    try {
        setLoading();

        await api.delete(`/techs/${id}`);

        dispatch({
            type: DELETE_TECH,
            payload: id,
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.message,
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
