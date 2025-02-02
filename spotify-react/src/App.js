import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
        <Sidebar/>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
