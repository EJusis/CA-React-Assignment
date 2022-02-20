import './App.css';
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateRecipe from "./pages/createRecipe";
import MainPage from "./pages/mainPage";
import FavouritesPage from "./pages/favouritesPage";
import SingleRecipePage from "./pages/SingleRecipePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Toolbar/>
                <Routes>

                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/create-recipe' element={<CreateRecipe/>}/>
                    <Route path='/favourites' element={<FavouritesPage/>}/>
                    <Route path='/recipe/:title/:id' element={<SingleRecipePage/>}/>

                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
