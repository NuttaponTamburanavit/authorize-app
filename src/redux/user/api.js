import Axios from 'axios';

const domainURL = 'http://localhost:9000';

export const userAPI = {
  create_user(form) {
    let url = `${domainURL}/api/users`;
    return Axios.post(url, form)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return { status: "500", "message" : "Server Error" };
    });
  },
}