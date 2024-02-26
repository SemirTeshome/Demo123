import './style.css'
import './Assets/Image01.jpg'
function App() { 
  return (
    <div className="App">
      
      <img src={require('./Assets/Image1.jpg')} alt='Image1.jpg' ></img>
      
      <img src={require('./Assets/Image2.jpg')} alt='Image2.jpg' ></img>
      <img src={require('./Assets/Image3.jpg')} alt='Image3.jpg' ></img>

      
      
    </div>
  );
}

export default App;
