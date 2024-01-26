import { useState, useRef } from "react";

function AddTodo({ onNewItem }) {
  // const [name, setName] = useState();
  // const [date, setDate] = useState();

  // const handleNameChange = () => {
  //   setName(event.target.value);
  // };
  // const handleDateChange = () => {
  //   setDate(event.target.value);
  // };

  // useRef
  let todoName = useRef();
  let todoDate = useRef();

  const handleSaveBtn = () => {
    onNewItem(todoName.current.value, todoDate.current.value);
    todoDate.current.value = "";
    todoName.current.value = "";
    // setDate("");
    // setName("");
  };

  return (
    <div
      style={{ borderBottom: "1px solid #ddd" }}
      className="row row-cols-lg-auto g-2 justify-content-center align-items-center mb-4 pb-2"
    >
      <div className="col-12">
        <div className="form-outline">
          <input
            // value={name}
            // onChange={handleNameChange}
            ref={todoName}
            type="text"
            className="form-control"
            placeholder="Enter a task here"
          />
        </div>
      </div>
      <div className="col-12">
        <div className="form-outline">
          <input
            // value={date}
            // onChange={handleDateChxange}
            ref={todoDate}
            type="date"
            className="form-control"
          />
        </div>
      </div>
      <div className="col-12">
        <button onClick={handleSaveBtn} className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
