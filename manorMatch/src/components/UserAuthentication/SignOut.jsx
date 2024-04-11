import axios from 'axios';

export const signOut = () => {
  axios.post('/logout')
  .catch((err) => {
    console.error(err);
  })
}