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
  create: async (payload) => {
    const { body } = payload;
    try {
      const { data } = await axios.post(`/api/tweets`, { body });

      return data.tweet;
    } catch (error) {
      console.error(error);

      return null;
    }
  },
  favoriteById: async (tweetId) => {
    try {
      await axios.post(`/api/tweets/favorites/${tweetId}`);
    } catch (error) {
      console.error(error);

      return null;
    }
  },
};
