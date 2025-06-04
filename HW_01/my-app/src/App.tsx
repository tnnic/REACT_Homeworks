import './App.css';

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
    <>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </>
  )
}

export default App
