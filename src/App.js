import logo from './logo.svg';
import './App.css';
import NavParent from './Components/Nav/Nav.js'
import MidContent from './Components/MidContent/MidContent.js';
import Footer from './Components/Footer/Footer.js';
function App() {
  return (
    <>
      <div className="App">
        <NavParent />
        <MidContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
