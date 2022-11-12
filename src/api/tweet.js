import axios from "axios";

export const tweet = {
  list: async () => {
    try {
      const { data } = await axios.get(`/api/tweets`);

      return data.tweets;
    } catch (error) {
      console.error(error);
    }
  },
};
