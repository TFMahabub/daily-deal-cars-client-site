import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './Routes/Routers';

function App() {


  return (
    <div>
      <RouterProvider router={routers}>
      </RouterProvider>
    </div>
  );
}

export default App;
