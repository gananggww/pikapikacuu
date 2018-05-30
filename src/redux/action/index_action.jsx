import axios from 'axios'

export const actionPika = (payload) => {
  return {
    type: 'GET_PIKA',
    payload
  }
}


export const getPika = () => {
  return (dispatch, getState) => {
    const url = ""
    axios.get(url)
    .then(resp => {
      dispatch(actionPika([]))
  }
}
