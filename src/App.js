import logo from './logo.svg';
import './App.css';
import {Mycomponent} from './component/Greet'
import Welcome from './component/Welcome';
import Hello from './component/hello';
import Message from './component/message';
import Counter from './component/counter';

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
      {/* <Message/>
      <Counter/> */}
       {/* <h1>Amazing scientists</h1> */}
        <Mycomponent name = "mango" heroName="Batman"/>
          {/* <p>This is children props</p> */}
        {/* </Mycomponent> */}
      {/* <Mycomponent name = "banana" heroName="protein"> */}
          <button>Action</button>
        {/* </Mycomponent> */}
        {/* <Mycomponent name = "sprout" heroName="protein"/> */} 

        <Welcome name = "viral" heroName="Captain"/>

        {/* <Hello />  */}
        
      </section>
    

    </div>
  );
}
export default App;



 