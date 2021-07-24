import axios from "axios";

export const getLogs = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/logs");
    return res;
  } catch (error) {
    throw error;
  }
};
