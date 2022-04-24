import * as api from '../api/index.js';

export const getDoubt = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await api.fetchDoubt(id);
    //console.log(data);
    //console.log("actions");

    dispatch({ type: "FETCH_POST", payload: { doubt: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getDoubts = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchDoubts();

    dispatch({ type: "FETCH_ALL", payload: { data } });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const createDoubt = (doubt, history) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.createDoubt(doubt);

    dispatch({ type: "CREATE", payload: data });

    history.push(`/discussion/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateDoubt = (id, doubt) => async (dispatch) => {
  try {
    const { data } = await api.updateDoubt(id, doubt);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentDoubt = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    console.log(data);

    dispatch({ type: "COMMENT", payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDoubt = (id) => async (dispatch) => {
  try {
    await await api.deleteDoubt(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};