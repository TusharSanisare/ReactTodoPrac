let Item = ({
  todoNo,
  todoName,
  todoDate,
  onDeleteClick,
  onhandleFinishbtn,
}) => {
  return (
    <tr id={todoNo}>
      <th scope="row">{todoNo + 1}</th>
      <td>{todoName}</td>
      <td>{todoDate}</td>
      <td>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => {
            onDeleteClick(todoNo);
          }}
        >
          Delete
        </button>
        <button
          type="submit"
          className="btn btn-success ms-1"
          onClick={() => {
            onhandleFinishbtn(todoNo);
          }}
        >
          Finished
        </button>
      </td>
    </tr>
  );
};
export default Item;
