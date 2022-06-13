
import React, { Suspense, useEffect } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
// import SpinnerLoading from './shared/UiElement/SpinnerLoading';
// lazy to run page when clicked
const HomePage = React.lazy(() => import('./Pages/HomePage'));


function App() {

    return (
        <>
            <Router>

                {/* page when reload between pages for first time */}
                <Suspense fallback={
                    <div className='centered'>
                        Loading....
                    </div>
                }>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to='/home-page' />
                        </Route>
                        <Route path='/home-page'>
                            <HomePage></HomePage>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>


        </>
    );
}

export default App;
