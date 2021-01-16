import React, {FC} from "react";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import MenuButton from "./MenuButton";
import Expandable from "./Expandable";
import {Switch, Route} from "react-router-dom";
import ColorDetail from "./ColorDetail";
import {BrowserRouter} from "react-router-dom";

const App:FC = () => {
     const PopUpButton = Expandable(MenuButton);
    return (
        <BrowserRouter>
            <div className="container d-flex justify-content-center flex-column mt-5 mb-5">
                <Switch>
                    <Route exact path="/">
                        <AddColorForm />
                        <ColorList />
                        <PopUpButton hidden={true} txt="скрыть\открыть">
                            <p>Органайзер цветов</p>
                        </PopUpButton>
                    </Route>
                    <Route exact path="/:id">
                        <ColorDetail />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
