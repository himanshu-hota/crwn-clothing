import './App.css';
import Homepage from './components/homepage/homepage'
import { Switch,Route } from 'react-router-dom'; 
 

const hatsPage =  () => {
  return(
    <div>
    <h1>Hats page</h1>
    </div>
  )
}


// const TopicList =  () => {
//   return(
//     <div>
//     <h1>TOPIC List</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
    <Switch>
      <Route  exact path='/' component={Homepage} />
      <Route  exact path='/shop/hats' component={hatsPage} />
      {/* <Route  exact path='/topics/:topicId' component={TopicDetails} /> */}
    </Switch>
    </div>
  );
}

export default App;
