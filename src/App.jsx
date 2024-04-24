import { useState } from "react";
import Todo from "./component/Todo";
function App() {
  const [list, setList] = useState([]);
  let task;
  return (
    <div className="container w-50">
      <div className="row">
        <div className="col">
          <header>
            <h1 className="text-center">To-Do-List</h1>
            <div className="row justify-content-end mt-4 ">
              <div className="input-group">
                <input type="text" className="form-control" value={task} onChange={(e) => {
                  task = e.target.value;
                }} />
                <button className="w-25 btn btn-outline-primary" onClick={() => {
                  setList([...list, {
                    task: task,
                    done: false
                  }]);
                }}>Add Item</button>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="row mt-4">
        <main>
          {list.map((task, index) => {
            return (
              <Todo task={task} list={list} setList={setList} id={index} key={index} />
            )
          })}
        </main>
      </div>

      <div className="row bg-light fixed-bottom ">
        <footer >
          <p className="text-center">
            Made by &nbsp;
            <strong>
              Aman
            </strong>
          </p>
        </footer>
      </div>
    </div>
  );

}

export default App;

