import axios from 'axios'

export const actionAllChar = (payload) => {
  return {
    type: 'GET_ALL_CHAR',
    payload
  }
}


export const getAllChar = () => {
  return (dispatch, getState) => {
    const url = `https://ghibliapi.herokuapp.com/films`
    axios.get(url)
    .then(resp => {
      console.log(resp);
      dispatch(actionAllChar(actionAllChar))
    }).catch(err => console.log(err))
  }
}
