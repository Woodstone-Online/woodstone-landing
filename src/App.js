import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
