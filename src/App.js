import { HashRouter as Router, Route, Routes, Switch } from 'react-router-dom'

import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

function App() {
  return (
    <Router>
      <div className="app main-layout ">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;
