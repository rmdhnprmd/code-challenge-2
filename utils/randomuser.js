const { default: axios } = require("axios");

const axiosGetUser = axios.create({
  baseURL: "https://randomuser.me/"
})

export default axiosGetUser;