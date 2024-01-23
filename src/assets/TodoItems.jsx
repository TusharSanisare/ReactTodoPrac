import Item from "./Item";

const TodoItems = ({ todoItemList, onDeleteClick, onhandleFinishbtn }) => {
  return (
    <table className="table mb-4">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Todo item</th>
          <th scope="col">Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todoItemList.map((item, index) => (
          <Item
            key={index}
            todoNo={index}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
            onhandleFinishbtn={onhandleFinishbtn}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoItems;
