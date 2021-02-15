
import './App.css';
import Dropdown from './Dropdown';


const items = [
  { id: 1, value: "Red" },
  { id: 2, value: "Blue" },
  { id: 3, value: "Purple" },
  { id: 4, value: "Green" },
];

function App() {
  return (
    <div className="wrapper">
   <Dropdown title="Select color" items={items} multiSelect/>
    </div>
  );
}

export default App;
