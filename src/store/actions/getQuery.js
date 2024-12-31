import axios from "axios";

export const getQueryCreator = "GET_QUERY";
export const visitedQueryCreator = "VISITED_QUERY";

export const getItemCreator = "GET_ITEM";

export const getQuery = (value) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v1?title=${value}`
    );
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
    const response = await axios.post(`http://127.0.0.1:8000/api/v1`, { id });
    const { data: idUpdated } = response;

    dispatch({
      type: visitedQueryCreator,
      message: idUpdated,
    });
  } catch (err) {
    console.log("Error sending a data", err);
  }
};
