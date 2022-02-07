import {Route} from 'react-router-dom'
import Supplier from "./Supplier.js";
import TaskGrid from "./TaskGrid.js";


function App() {
  return (
    <div>
      <Route path='/forecast'><TaskGrid /></Route>
      <Route path='/supplier'><Supplier /></Route>
      
      {/* <GridExample /> */}
    </div>
  );
}

export default App;
