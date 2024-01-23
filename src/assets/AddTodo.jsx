import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [name, setName] = useState();
  const [date, setDate] = useState();

  const handleNameChange = () => {
    setName(event.target.value);
  };
  const handleDateChange = () => {
    setDate(event.target.value);
  };

  const handleSaveBtn = () => {
    onNewItem(name, date);
    setDate("");
    setName("");
  };

  return (
    <div
      style={{ borderBottom: "1px solid #ddd" }}
      className="row row-cols-lg-auto g-2 justify-content-center align-items-center mb-4 pb-2"
    >
      <div className="col-12">
        <div className="form-outline">
          <input
            type="text"
            value={name}
            className="form-control"
            placeholder="Enter a task here"
            onChange={handleNameChange}
          />
        </div>
      </div>
      <div className="col-12">
        <div className="form-outline">
          <input
            type="date"
            value={date}
            className="form-control"
            onChange={handleDateChange}
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
