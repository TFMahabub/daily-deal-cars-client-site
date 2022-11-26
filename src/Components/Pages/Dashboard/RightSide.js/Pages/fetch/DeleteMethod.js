const deleteFetch = (id) =>{
  return fetch(`http://localhost:5000/user/${id}`, {
    method: 'DELETE'
  })
}
export default deleteFetch