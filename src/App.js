import './App.css';
import StateTutorial from './UseState/StateTutorial';
import EffectTutorial from './UseEffect/EffectTutorial';

function App() {
    return (
        <div className="App">
            <h1>Hooks (React)</h1>
            <h2>Basic Hooks</h2>
            <StateTutorial/>
            <EffectTutorial/>

            <h2>Additional Hooks</h2>
        </div>
    );
}

export default App;
