import axios from "axios";

export const getQueryCreator = "GET_QUERY";
export const visitedQueryCreator = "VISITED_QUERY";

export const getItemCreator = "GET_ITEM";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

export const getQuery = (value) => async (dispatch) => {
  try {
    const response = await api.get(`?title=${value}`);
    const { data } = response;

    dispatch({
      type: getQueryCreator,
      data,
    });
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
};

export const visitedQuery = (id) => async (dispatch) => {
  try {
    const response = await api.post(``, { id });
    const { data: idUpdated } = response;

    dispatch({
      type: visitedQueryCreator,
      message: idUpdated,
    });
  } catch (err) {
    console.log("Error sending a data", err);
  }
};

export const getContent = (id) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.get(`/content?id=${id}`);
    console.log("%c content", "background: green; padding: 40px", data);

    dispatch({
      type: getItemCreator,
      data,
    });
  } catch (err) {
    console.log("There is no conent", err);
  }
};
