import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from "./components/Create";
import ProductDetails from "./components/ProductDetails";
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/products/:id' element={<ProductDetails />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
