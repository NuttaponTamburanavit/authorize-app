import Axios from 'axios';

const domainURL = 'http://localhost:9000';

export const authAPI = {
  login() {
    let url = `${domainURL}/login`;
    // return Axios.post(url, { headers: {'Authorization': `Bearer ${getToken()}`}})
    return Axios.post(url, { headers: {'Authorization': `Bearer 1234`}})
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return { status: "500", "message" : "Server Error" };
    });
  },
}