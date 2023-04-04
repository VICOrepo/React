import logo from './logo.svg';
import './App.css';
import {Mycomponent} from './component/Greet'
import Welcome from './component/Welcome';
import Hello from './component/hello';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     
      <section>
        <h1>Amazing scientists</h1>
        <Mycomponent name = "mango" heroName="Batman"/>
        <Welcome/>
        <Hello />
      </section>
    

    </div>
  );
}
export default App;



 