import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing';
import Temp from './pages/Temp';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/landing" component={Landing} />
                <Route path="/" component={Temp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
