import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postData = async (url, formData) => {
  try {
    const { data } = await axios.post(BASE_URL + url, formData);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
