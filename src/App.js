import './App.css';
import StateTutorial from './UseState/StateTutorial';
import EffectTutorial from './UseEffect/EffectTutorial';
import ReducerTutorial from './UseReducer/ReducerTutorial';
import RefTutorial from './UseRef/RefTutorial';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';

function App() {
    return (
        <div className="App">
            <h1>Hooks (React)</h1>

            <h2>Basic Hooks</h2>
            <StateTutorial/>
            <EffectTutorial/>

            <h2>Additional Hooks</h2>
            <ReducerTutorial initialCount={10}/>
            <RefTutorial/>
            <ImperativeHandle/>
            <LayoutEffectTutorial/>
        </div>
    );
}

export default App;
