import "./App.css";
import { useEffect, useState } from "react";

const apiBaseUrl = "http://20.235.169.49:3000/api/v1/";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(apiBaseUrl + "/task")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("Data", data);
        setTasks(data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      {tasks &&
        tasks.map((task, index) => {
          return <h3 key={index}>{task.title}</h3>;
        })}
    </div>
  );
}

export default App;
