//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils"  />
      <div className="container">
      <TextForm heading="Enter The Text To Analyse Below"/>
      </div>
      
    </>
  );
}

export default App;
