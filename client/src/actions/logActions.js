import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
} from './types';
import api from '../config/apiConfig';

// Get logs from server
export const getLogs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await api.get(`/logs`);
        const data = await res.data;

        dispatch({
            type: GET_LOGS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.message,
        });
    }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
    try {
        setLoading();

        const res = await api.post('/logs', log);
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.message,
        });
    }
};

// Delete log from server
export const deleteLog = (id) => async (dispatch) => {
    try {
        setLoading();

        await api.delete(`/logs/${id}`);

        dispatch({
            type: DELETE_LOG,
            payload: id,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.message,
        });
    }
};

// Update log on server
export const updateLog = (log) => async (dispatch) => {
    try {
        setLoading();

        const res = await api.put(`/logs/${log._id}`, log);

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.message,
        });
    }
};

// Set current log
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log,
    };
};

// Clear current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    };
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
