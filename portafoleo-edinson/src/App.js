import './App.css';
import MyComponent from './Componet';
import ComponentText from './ComponetText';
import Proyectos from './Proyectos';
import Tecnologias from './Tecnologias';
import Wrapper from './Wrapper';
import Copyright from './copyright';


function App() {
  return (
    <div className="App">
      
      <MyComponent />
      <ComponentText />
      <Proyectos/>
      <Tecnologias/>
      <Wrapper/>
      <Copyright/>
    </div>
  );
}

export default App;