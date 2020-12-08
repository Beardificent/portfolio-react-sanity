import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route component={Home} path='/' exact />
            <Route component={About} path='/about' />
            {/*single post goes above Post because: if it cannot find a single post, go to post.js*/}
            <Route component={SinglePost} path='/post/:slug' />
            <Route component={Post} path='/post' />
            <Route component={Project} path='/project' />
        </Switch>
    </BrowserRouter>
);

}
export default App;
