import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counterpage from './pages/Counterpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counterpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
