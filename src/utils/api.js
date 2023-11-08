import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const apiKey = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);

    // Check if status code is 404
    if (response.status === 404) {
      throw new Error("Not Found");
    }

    return response.data;
  } catch (error) {
    // Handle errors here
    if (axios.isAxiosError(error)) {
      // Axios error, check for specific error conditions
      if (error.response) {
        // The request was made and the server responded with a status code
        // other than 2xx.
        console.log("Error response from server:", error.response.data.message);
        alert(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error setting up the request:", error.message);
      }
    } else {
      // Handle non-Axios errors
      console.log("An unexpected error occurred:", error.message);
    }

    throw error; // Rethrow the error to propagate it further if needed
  }
};
