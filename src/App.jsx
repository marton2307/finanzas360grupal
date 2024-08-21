import { HashRouter } from "react-router-dom";
import './App.css';


import Pages from './routes/pages';



function App() {
  return (
    <>
    <HashRouter>
      <Pages/>
    </HashRouter>
    </>
  );
}

export default App;

