import './App.css'
import Notes from './Components/Notes/Notes'

function App() {
  const DATA = [
    {
      id: 1,
      note: "Hello World! asda sadsadf otuz kırk sekizyüz elli kırkbeş 21 652 ssda zxc 6qqe zz qwe xxxx vxa x",
      color: "red",
    },
    {
      id: 2,
      note: "Note 2 asdacczasdasdas asd ",
      color: "yellow",
    },
    {
      id: 3,
      note: "Note 3 asdasd sss xczx aw2 vs",
      color: "blue",
    },
    {
      id: 4,
      note: "Note 499799797979797997996666666666",
      color: "green",
    },
    {
      id: 5,
      note: "Note 5",
      color: "blue",
    }
  ];
  return (
    <>
     <h1>NOTES APP</h1>
     <Notes data={DATA} />
    </>
  )
}

export default App
