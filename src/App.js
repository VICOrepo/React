import logo from './logo.svg';
import './App.css';
import {Mycomponent} from './component/Greet'
import Welcome from './component/Welcome';
import Hello from './component/hello';
import Message from './component/message';
import Counter from './component/counter';
import FunctionClick from './component/functionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet';
import InlineStyle from './component/InlineStyle';
import './appStyle.css'
import styles from './appStyles.module.css'


function App() {
  return (
    <div className="App">
      <br/>
      <h1 className='error'>Error</h1>
      {/* <br/> */}
      <h1 className={styles.success}>Success</h1>
      <InlineStyle/>
    {/* <StyleSheet primary = {true}/> */}
    {/* <UserGreeting/> */}
    {/* <NameList/> */}
     {/* <ParentComponent/> */}
     
      <section>
        {/* <br/>
        <FunctionClick/>
        <br/>
        <ClassClick/> */}
        <br/>
        {/* <EventBind/> */}

      {/* <Message/>
      <Counter/> */}
       {/* <h1>Amazing scientists</h1> */}
        {/* <Mycomponent name = "mango" heroName="Batman"/> */}
          {/* <p>This is children props</p> */}
        {/* </Mycomponent> */}
      {/* <Mycomponent name = "banana" heroName="protein"> */}
          {/* <button>Action</button> */}
        {/* </Mycomponent> */}
        {/* <Mycomponent name = "sprout" heroName="protein"/> */} 

        {/* <Welcome name = "viral" heroName="Captain"/> */}

        {/* <Hello />  */}
        
      </section>
    

    </div>
  );
}
export default App;



 