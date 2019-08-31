export const clearToken = () => {
  localStorage.removeItem('token');
}

export const getToken = () => {
  try {
    return JSON.parse(localStorage.getItem('token'));
  } catch (err) {
    clearToken();
    return null;
  }
}