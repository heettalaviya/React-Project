import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../config/firebase.config";


// ------------------------------------
// ACTIONS
// ------------------------------------

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

export const loading = () => ({
  type: "LOADING",
});

// ------------------------------------
// ASYNC FUNCTIONS (FIREBASE)
// ------------------------------------

// GET ALL
export const getAllMenAsync = () => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      const res = await getDocs(collection(db, "megamart"));
      let result = [];

      res.forEach((docSnap) => {
        result.push({ id: docSnap.id, ...docSnap.data() });
      });

      dispatch(getAllMen(result));
    } catch (error) {
      dispatch(getAllMenRej(error.message));
    }
  };
};

// ADD
export const addNewMenAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      await setDoc(doc(db, "megamart", `${data.id}`), data);

      dispatch(addNewMen());
      dispatch(getAllMenAsync());
    } catch (error) {
      dispatch(addNewMenRej(error.message));
    }
  };
};

// DELETE
export const DeleteMenDataAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      await deleteDoc(doc(db, "megamart", `${id}`));
      dispatch(getAllMenAsync());
    } catch (error) {
      dispatch(AllRej(error.message));
    }
  };
};


// GET SINGLE
export const getMenAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      const docSnap = await getDoc(doc(db, "megamart", id));

      if (docSnap.exists()) {
        dispatch(getMen({ id: docSnap.id, ...docSnap.data() }));
      } else {
        dispatch(getMenRej("Product Not Found"));
      }
    } catch (error) {
      dispatch(getMenRej(error.message));
    }
  };
};

// UPDATE
export const updateMenAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      await setDoc(doc(db, "megamart", `${data.id}`), data, { merge: true });

      dispatch(updateMen(data));
      dispatch(getAllMenAsync());
    } catch (error) {
      dispatch(updateMenRej(error.message));
    }
  };
};


// FILTER
export const filterMenData = (data) => ({
  type: "FILTER_PRODUCTS",
  payload: data,
});
