import './App.css';
import Profile from './profile/profile';
import img from './assets/img.jpg'


function App() {

  return (
    <div className="App">
      <h1>Checkpoint Props</h1>
    <Profile fullName='Mohamed Haddaji'bio='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' profession='Web developer' children={img}/>
    </div>
  );
}

export default App;
