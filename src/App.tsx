import React, {useEffect}            from 'react';
import Routes                        from "./routes";
import {BrowserRouter as Router}     from 'react-router-dom';
import {useDispatch}                 from "react-redux";
import {getCurrentUser, initSession} from "./controllers/Auth";
import storage                       from "./utils/storage";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            console.log(1);
            dispatch(getCurrentUser());
        } else {
            dispatch(initSession());
        }

    }, [dispatch])
    return (
        <div className="App">
            <Router>
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
