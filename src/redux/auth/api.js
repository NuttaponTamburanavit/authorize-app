import Axios from 'axios';

const domainURL = 'http://localhost:9000';

export const authAPI = {
  login(form) {
    let url = `${domainURL}/api/login`;
    // return Axios.post(url, { headers: {'Authorization': `Bearer ${getToken()}`}})
    return Axios.post(url, form)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return { status: "500", "message" : "Server Error" };
    });
  },
}