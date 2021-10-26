import "./App.css";

import { Input } from "./components/Input";
import { Card } from "./components/Card";

import { useState } from "react";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");

  const [userList, setUserList] = useState<User[]>([] as User[]);

  const handleUserList = (user: User) => {
    setUserList([...userList, user]);
  };

  return (
    <div className="App">
      <div className="form">
        <Input
          placeholder="nome"
          label="Nome"
          onChange={(evt) => setName(evt.target.value)}
        />
        <Input
          placeholder="idade"
          label="Idade"
          type="number"
          onChange={(evt) => setAge(Number(evt.target.value))}
        />
        <Input
          placeholder="hobby"
          label="Hobby"
          onChange={(evt) => setHobby(evt.target.value)}
        />
        <button onClick={() => handleUserList({ name, age, hobby })}>
          Enviar
        </button>
      </div>

      <div className="users-list">
        {userList.map((user, index) => (
          <li key={index}>
            <Card name={user.name} age={user.age} hobby={user.hobby} />
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
