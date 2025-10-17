import axios from "axios";

export const addNewMen = () => ({
  type: "ADD_PRODUCT_SUC",
});

export const getAllMen = (data) => ({
  type: "GET_ALL_PRODUCT_SUC",
  payload: data,
});

export const deleteMen = (id) => ({
  type: "DELETE_PRODUCT_SUC",
  payload: id,
});

export const getMen = (data) => ({
  type: "GET_PRODUCT_SUC",
  payload: data,
});

export const updateMen = (data) => ({
  type: "UPDATE_PRODUCT_SUC",
  payload: data,
});

export const addNewMenRej = (msg) => ({
  type: "ADD_PRODUCT_REJ",
  payload: msg,
});

export const getAllMenRej = (msg) => ({
  type: "GET_ALL_PRODUCT_REJ",
  payload: msg,
});

export const deleteMenRej = (msg) => ({
  type: "DELETE_PRODUCT_REJ",
  payload: msg,
});

export const getMenRej = (msg) => ({
  type: "GET_PRODUCT_REJ",
  payload: msg,
});

export const updateMenRej = (msg) => ({
  type: "UPDATE_PRODUCT_REJ",
  payload: msg,
});


export const getAllMenAsync = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/men")
      .then((res) => dispatch(getAllMen(res.data)))
      .catch((err) => dispatch(getAllMenRej(err.message)));
  };
};

export const addNewMenAsync = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/men", data)
      .then((res) => {
        dispatch(addNewMen());
      })
      .catch((err) => dispatch(addNewMenRej(err.message)));
  };
};

export const deleteMenAsync = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/men/${id}`)
      .then(() => dispatch(deleteMen(id)))
      .catch((err) => dispatch(deleteMenRej(err.message)));
  };
};

export const getMenAsync = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/men/${id}`)
      .then((res) => dispatch(getMen(res.data)))
      .catch((err) => dispatch(getMenRej(err.message)));
  };
};

export const updateMenAsync = (data) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/men/${data.id}`, data)
      .then((res) => {
        dispatch(updateMen(res.data)); 
      })
      .catch((err) => dispatch(updateMenRej(err.message)));
  };
};


export const filterMenData = (data) => ({
  type: "FILTER_MEN",
  payload: data,
});
