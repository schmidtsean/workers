const Service = ({ title, body, id, deleteService }) => {
  return (
    <>
      <h1>{title}</h1>
      <h1> Test</h1>
      <p>{body}</p>
      <button onClick={() => deleteService(id)}>
        Delete
      </button>
    </>
  )
}
export default Service;