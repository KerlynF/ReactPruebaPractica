import logo from './logo.svg';
import './App.css';
import Search from './modulos/buscar';
import Button from './modulos/button';
import ContainerRepo from './container/repositoriesContainer';

function App() 
{
  return (
    <div className="App">
      <div className='search-container'>
        <Search />
        <Button text='search' isButtonClick={true} />
        <ContainerRepo/>
      </div>
      
    </div>
  );
}

export default App;
