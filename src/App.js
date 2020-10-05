import React, {useState} from 'react';
import Home from "./components/HomeComponent";
import NavBar from "./components/NavBar";
import MenuList from "./components/MenuComponent";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";
import { DISHES} from "./shared/dishes";
import { COMMENTS} from "./shared/comments";
import { LEADERS} from "./shared/leaders";
import { PROMOTIONS} from "./shared/promotions";
import DishDetail from "./components/DishDetailComponent";
import Footer from "./components/FooterComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from "./components/ContactComponent";


function App() {

    const [selectedDishId, setSelectedDishId] = useState(null);

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
                        <Home dishes={dishes} promotions={promotions} leaders={leaders} />
                    </Route>
                    <Route exact path='/menu'>
                        <MenuList dishes={dishes} setSelectedDishId={setSelectedDishId} />
                    </Route>
                    <Route exact path='/contactus'>
                        <Contact />
                    </Route>
                    <Redirect to='/home' />
                </Switch>
            </Container>
            <Footer />
        </>
    );
}

export default App;
