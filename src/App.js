import { useEffect } from 'react';
import { useState } from 'react';

import { getUser, logout } from './services/userService';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';

import { getWeather } from './services/weather-api';


function App(props) {

  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  const [ team, setTeam ] = useState('Chiefs');

      function handleSignupOrLogin() {
      setUserState({
        user: getUser()
     });
    }

    function handleLogout() {
      logout();
      setUserState({ user: null })
      props.history.push('/');
    }

    const [ appData, setAppData ] = useState({
      temp: null,
      wind: null,
      description: null,
      icon: '',
      
    });
  
    async function getAppData() {
      const weatherData = await getWeather();
      
  
      setAppData({
        temp: Math.round(weatherData.main.temp),
        wind: Math.round(weatherData.wind.speed),
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        
      });

    }

  useEffect(() => {
    getAppData()
  }, []);

  return (
    <div className="App">
      
      <Header handleLogout={handleLogout} user={userState.user} />
  
        <main>
          <Switch>
            <Route exact path="/" render={props => 
              <HomePage />
            } />
            <Route exact path="/dashboard" render={props => 
              userState.user ?
                <DashboardPage {...props} appData={appData} team={setTeam} />
                  :
                <Redirect to="/login" />
            } />
            <Route exact path="/signup" render={props => 
              <SignupPage {...props} handleSignupOrLogin={handleSignupOrLogin} />
            } />
            <Route exact path="/login" render={props => 
              <LoginPage {...props} handleSignupOrLogin={handleSignupOrLogin} />
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}


export default withRouter(App);

