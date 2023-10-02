import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Configuration } from './components/Configuration';

import './App.scss';
import { ContextProvider } from './context/Context';

function App() {
  return (
    <ContextProvider>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={['#fff']} />
        <fog attach="fog" args={['#213547', 10, 20]} />
        <Experience />
      </Canvas>
      <Configuration />
    </ContextProvider>
    // <div className="wrapper">
    // </div>
  );
}

export default App;
