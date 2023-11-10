import  { useState, useEffect } from "react";
import axios from "axios";
import { Droppable, Draggable } from "react-draggable";

const TaskBoard = () => {
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const response = await axios.get("/lists");

      setLists(response.data.lists);
    };

    const fetchTasks = async () => {
      const response = await axios.get("/tasks");

      setTasks(response.data.tasks);
    };

    fetchLists();
    fetchTasks();
  }, []);

  const handleDrop = (task, listId) => {
    axios.put(`/tasks/${task.id}`, {
      listId,
    });

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === task.id) {
          task.listId = listId;
        }

        return task;
      });

      return updatedTasks;
    });
  };

  const handleUpdateTask = async (task) => {
    const response = await axios.put(`/tasks/${task.id}`, {
      title: task.title,
    });

    const updatedTask = response.data.task;

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }

        return task;
      });

      return updatedTasks;
    });
  };

  const handleTaskComplete = (task) => {
    axios.put(`/tasks/${task.id}`, {
      completed: true,
    });

    setTasks((prevTasks) => {
      const filteredTasks = prevTasks.filter((task) => task.id !== task.id);

      return filteredTasks;
    });
  };

  return (
    <div className="task-board">
      {lists.map((list) => (
        <Droppable key={list.id} onDrop={(task) => handleDrop(task, list.id)}>
          <div className="list">
            <h3>{list.title}</h3>

            <ul>
              {tasks
                .filter((task) => task.listId === list.id)
                .map((task) => (
                  <Draggable key={task.id} index={task.id}>
                    <li className="task">
                      <h4>{task.title}</h4>

                      <input
                        type="text"
                        value={task.title}
                        onChange={(e) =>
                          handleUpdateTask({ ...task, title: e.target.value })
                        }
                      />

                      <button onClick={() => handleTaskComplete(task)}>
                        Complete
                      </button>
                    </li>
                  </Draggable>
                ))}
            </ul>
          </div>
        </Droppable>
      ))}
    </div>
  );
};

export default TaskBoard;
