import React from 'react';
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import NavBar from "./components/NavBar";
import MenuList from "./components/MenuComponent";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";
import {DISHES} from "./shared/dishes";
import {COMMENTS} from "./shared/comments";
import {LEADERS} from "./shared/leaders";
import {PROMOTIONS} from "./shared/promotions";
import DishDetail from "./components/DishDetailComponent";
import Footer from "./components/FooterComponent";
import {Redirect, Route, Switch} from 'react-router-dom';
import Contact from "./components/ContactComponent";


function App() {



    const dishes = DISHES;
    const comments = COMMENTS;
    const promotions = PROMOTIONS;
    const leaders = LEADERS;

    return (
        <>
            <CssBaseline />
            <NavBar />
            <Container fixed>
                <Switch>
                    <Route exact path='/home'>
                        <Home dishes={dishes} promotions={promotions} leaders={leaders}/>
                    </Route>
                    <Route exact path='/aboutus'>
                        <About leaders={leaders} />
                    </Route>
                    <Route exact path='/menu'>
                        <MenuList dishes={dishes}/>
                    </Route>
                    <Route path='/menu/:dishId'>
                        <DishDetail dishes={dishes} comments={comments}/>
                    </Route>
                    <Route exact path='/contactus'>
                        <Contact/>
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            </Container>
            <Footer />
        </>
    );
}

export default App;
