const deleteFetch = (id) =>{
  return fetch(`https://daily-deal-cars-server-site.vercel.app/user/${id}`, {
    method: 'DELETE'
  })
}
export default deleteFetch