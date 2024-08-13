import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import AirlineForm from '../AirlineForm/AirlineForm.jsx';
import AirlineTable from '../AirlineTable/AirlineTable.jsx';



function App() {

  return (
    <div>
      <AirlineForm />
      <AirlineTable />
    </div>
  );
}

export default App;
