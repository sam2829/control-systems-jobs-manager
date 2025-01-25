import axios from "axios";

// Setting the default headers for POST requests to specify the
// content type as multipart/form-data
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

// Allowing cross-origin requests to include credentials
// (cookies, HTTP authentication) for requests made by axios
axios.defaults.withCredentials = true;

// Creating separate instances of axios for requests and responses
// to customize them independently if needed
// export const axiosReq = axios.create();
// export const axiosRes = axios.create();

// Function to set the Authorization token
export const setAuthToken = () => {
  const token = localStorage.getItem("authToken"); // Get token from localStorage
  if (token) {
    // If token exists, add it to the default Authorization header
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    // If no token, remove the Authorization header
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Run setAuthToken initially to ensure token is always added when Axios is used
setAuthToken();

// Optionally, set up an Axios request interceptor to dynamically attach the token to each request
axios.interceptors.request.use(
  (config) => {
    // Attach the token before the request is sent
    setAuthToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
