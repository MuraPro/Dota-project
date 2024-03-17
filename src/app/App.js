import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Users from './layouts/users';
import Main from './layouts/main';
import NavBar from './components/ui/navbar/navBar';
import ProtectedRoute from './components/common/route';
import LogIn from './layouts/login';
import LogOut from './layouts/logOut';
import { AppLoader } from './components/ui/hoc';
import Info from './layouts/info';
import Favotites from './layouts/favorites';

function App() {
    return (
        <>
            <AppLoader>
                <NavBar />
                <main className="container">
                    <Switch>
                        <ProtectedRoute
                            path="/users/:userId?/:edit?"
                            component={Users}
                        />
                        <ProtectedRoute path="/info" component={Info} />
                        <ProtectedRoute
                            path="/favorites"
                            component={Favotites}
                        />
                        <Route path="/login/:type?" component={LogIn} />
                        <Route path="/logout" component={LogOut} />
                        <Route path="/" exact component={Main} />
                        <Redirect to="/" />
                    </Switch>
                </main>
            </AppLoader>
            <ToastContainer />
        </>
    );
}

export default App;
