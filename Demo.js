import axios from 'axios';
export const runCallback = (callback) => {
  callback('abc', 'bac');
}

export const createObject = (classItem) => {
  new classItem();
}

export const getData = () => {
  return axios.get('/api').then(res => res.data)
}