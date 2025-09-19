

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);
  const [index, setIndex] = useState(-1);
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('taskData'));
    if (data) {
      setTaskList(data);
    } else {
      setTaskList([]);
    }
    setLoading(false);
  }, []);

  const getInputData = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'member') {
      const newMember = [...member];
      if (newMember.includes(value)) {
        const pos = newMember.findIndex((v) => v === value);
        if (pos !== -1) {
          newMember.splice(pos, 1);
        }
      } else {
        newMember.push(value);
      }
      setMember(newMember);
      value = newMember;
    }

    setTask({ ...task, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    const newList = [...taskList];

    if (index !== -1) {
      newList[index] = { ...task, member };
      toast.success("Record updated successfully", { position: "top-right" });
    } else {
      const newTask = { ...task, member, id: Math.round(Math.random() * 1000) };
      newList.push(newTask);
      toast.success("Record added successfully", { position: "top-right" });
    }

    setTaskList(newList);
    localStorage.setItem('taskData', JSON.stringify(newList));
    setTask({});
    setIndex(-1);
    setMember([]);
  };

  return (
    <>
      <h1 align="center">Add Review</h1>

      <form onSubmit={submitData}>
        <table border={1} align="center" cellPadding={10}>
          <tbody>
            <tr>
              <td>Enter Your Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={getInputData}
                  placeholder='Enter Your Name'
                  value={task.name || ""}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Image URL:</td>
              <td>
                <input
                  type="text"
                  name="img"
                  onChange={getInputData}
                  placeholder='Enter Image URL'
                  value={task.img || ""}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Enter Your Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  onChange={getInputData}
                  placeholder='Enter Your Email'
                  value={task.email || ""}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Message:</td>
              <td>
                <input
                  type="text"
                  name="message"
                  onChange={getInputData}
                  placeholder='Enter Your Message'
                  value={task.message || ""}
                  required
                />
              </td>
            </tr>
           
            <tr>
              <td>Rating:</td>
              <td>
                <div className="star-input">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setTask({ ...task, rating: star })}
                      style={{
                        fontSize: '24px',
                        color: star <= task.rating ? 'orangered' : 'blue',
                        cursor: 'pointer',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <input type="submit" value={index !== -1 ? "Update" : "Add"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br /><br />

      {loading ? (
        <p align="center">Loading...!</p>
      ) : (
        <div className="card-container">
          {taskList.map((v, i) => (
            <div className="task-card" key={v.id}>
              <img
                src={v.img}
                alt={v.name}
                className="task-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/80';
                }}
              />
              <h3>{v.name}</h3>
              <p><strong>Email:</strong> {v.email}</p>
              <p><strong>Message:</strong> {v.message}</p>
              <p><strong>Rating:</strong> {v.rating}</p>
            </div>
          ))}
        </div>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
