import axios from "axios";

export const getQueryCreator = "GET_QUERY";

export const getQuery = () => (dispatch) => {
  axios
    .get(
      "https://67727eceee76b92dd4927b07.mockapi.io/query?filter=id=1&id=2&id=4&id=8"
    )
    .then(({ data }) => {
      console.log(data);

      dispatch({
        type: getQueryCreator,
        data,
      });
    });
};
