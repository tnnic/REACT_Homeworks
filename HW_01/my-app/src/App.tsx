import './App.css';
import {UsersMap} from './components/UsersMap';

export interface IUser {
  name: string
  age: string
  id: string
}

export interface IUsers {
  users: IUser[],
}



const users = [{
    name: "Alex",
    age: "31",
    id: "1"
  }, 
  { name: "John",
    age: "25",
    id: "2"
  },
  {
    name: "Jane",
    age: "28",
    id: "3"
  },
  {
    name: "Mike",
    age: "35",
    id: "4"
  },
  {
    name: "Sarah",
    age: "22",
    id: "5"
  }
]

function App() {

  return (
    <UsersMap users={users} />
  )
}

export default App
