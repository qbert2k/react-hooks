import './App.css';
import StateTutorial from './UseState/StateTutorial';
import EffectTutorial from './UseEffect/EffectTutorial';
import ContextTutorial from './UseContext/ContextTutorial';
import ReducerTutorial from './UseReducer/ReducerTutorial';
import CallbackTutorial from './UseCallback/CallbackTutorial';
import MemoTutorial from './useMemo/MemoTutorial';
import RefTutorial from './UseRef/RefTutorial';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
import DebugValueTutorial from './UseDebugValue/DebugValueTutorial';

function App() {
    return (
        <div className="App">
            <h1>Hooks (React)</h1>

            <h2>Basic Hooks</h2>

            <StateTutorial/>
            <EffectTutorial/>
            <ContextTutorial/>

            <h2>Additional Hooks</h2>

            <ReducerTutorial initialCount={10}/>
            <CallbackTutorial/>
            <MemoTutorial/>
            <RefTutorial/>
            <ImperativeHandle/>
            <LayoutEffectTutorial/>
            <DebugValueTutorial/>
        </div>
    );
}

export default App;
