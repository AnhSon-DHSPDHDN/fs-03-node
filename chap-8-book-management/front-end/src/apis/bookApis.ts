import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const BookApis = {
  getAllBooks: async () => {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  },
};
