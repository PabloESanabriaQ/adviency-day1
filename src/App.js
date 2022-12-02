import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl py-8">Regalos:</h1>
      <ul>
        <Item>Barco</Item>
        <Item>Remera Power Ranger Verde</Item>
      </ul>
    </div>
  );
}

function Item(props){
  return (
    <li>{props.children}</li>
  )
}

export default App;
