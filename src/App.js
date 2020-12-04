import './App.css';
import Nav from "./Nav";
import CatFacts from "./CatFacts";
import About from "./About";
import ItemDetail from "./ItemDetail";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
    return (
        <Router>

            <div className="App">
                <Nav/>
                <Switch> {/* render first matched path, not all paths. Additionally
                             exact on / ensures it only matches exactly not anything that
                             has a leading / */}
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/cat-facts"} exact component={CatFacts}/>
                    <Route path={"/shop/:id"} component={ItemDetail}/>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1>Home page</h1>
    </div>
);

export default App;
