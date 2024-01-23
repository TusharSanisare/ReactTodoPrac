import AddTodo from "./assets/AddTodo";
import TodoItems from "./assets/TodoItems";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (item, date) => {
    let newItemList = [...todoItems, { name: item, dueDate: date }];
    setTodoItems(newItemList);
  };

  const handleDeleteItem = (index) => {
    const updatedItemList = [...todoItems];
    updatedItemList.splice(index, 1);
    setTodoItems(updatedItemList);
  };

  const handleFinishbtn = (index) => {
    console.log(index);
    let doneTodo = document.getElementById(index);
    doneTodo.classList.add("done");
    console.log(doneTodo);
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <h1 className="text-center my-3 pb-3">TODO App</h1>
                  {/* ------------------------------------------------------------- */}
                  <AddTodo onNewItem={handleNewItem}></AddTodo>
                  {/* ------------------------------------------------------------- */}
                  <TodoItems
                    onDeleteClick={handleDeleteItem}
                    todoItemList={todoItems}
                    onhandleFinishbtn={handleFinishbtn}
                  ></TodoItems>
                  {/* ------------------------------------------------------------- */}
                  {todoItems.length === 0 ? (
                    <h6 className="text-center my-3 pb-3">
                      Todo list is empty! Enter your TODO
                    </h6>
                  ) : (
                    " "
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
