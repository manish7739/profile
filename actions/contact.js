import axios from "axios";

export default {
  async contact_us(data, cb) {
    try {
      console.log(process.env.baseUrl);
      const res = await axios.post(`${process.env.baseUrl}`, data);
      if (res && res.data.status == 201) {
        cb(null, res.data.data);
      } else {
        cb(res.data.message, null);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
