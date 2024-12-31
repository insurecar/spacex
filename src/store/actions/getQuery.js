import axios from "axios";

export const getQueryCreator = "GET_QUERY";

export const getQuery = (value) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v1?title=${value}`
    );
    const data = response.data;
    console.log(data);

    dispatch({
      type: getQueryCreator,
      data,
    });
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
};
