import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="lines" bg={true} className='particles-bg-canvas-self' />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* 
      
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
