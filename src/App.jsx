
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <>
      <div><Header/></div>
      <div><NavBar/></div>
      <div className='df-3'>
        <ItemListContainer/>
        <ItemListContainer/>
        <ItemListContainer/>
        <ItemListContainer/>
      </div>
    </>
  )
}

export default App
