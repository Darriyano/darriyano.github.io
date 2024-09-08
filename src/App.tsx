import React, {useState} from 'react';
import './App.css';
import MainBlack from "./pages/main-black";

function App() {
    const [toggleSwitch, toggleSwitchState] = useState(false);

    return (
        <>
            {!toggleSwitch ? (
                    <MainBlack/>
                ) :
                <></>}
        </>
    );
}

export default App;
