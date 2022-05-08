import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { ToggleColorMode } from './components/Colormode'


// import Dashboard from './screen/Dashboard'
import AdminDashboard from './admin/view/AdminDashboard'

import Portfolio from "./screen/Portfolio"
import Projects from "./screen/Projects"
import About from "./screen/About"
import Contact from "./screen/Contact"


// import SignIn from './screen/SignIn'
import SignIn from './authScreen/SignIn'
import SignUp from './authScreen/SignUp'
import ForgotPassword from './authScreen/ForgotPassword'
import Terms from "./screen/Terms"
import Privacy from "./screen/Privacy"
import Home from './screen/Home'


import AdminRoute from './route/AdminRoute'
import GuestRoute from './route/GuestRoute'
import AdminProjects from './admin/view/Projects'
import AdminAbout from './admin/view/About'
import AdminContact from './admin/view/Contact'
import AdminPortfolio from './admin/view/Portfolio'


function App() {
  return (
    <>
      {/* <ToggleColorMode> */}
      

   
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home} />

          <AdminRoute exact path="/admin/dashboard" component={AdminProjects} />
          <AdminRoute exact path="/admin/project" component={AdminProjects} />
          <AdminRoute exact path="/admin/portfolio" component={AdminPortfolio} />
          <AdminRoute exact path="/admin/contact" component={AdminContact} />
          <AdminRoute exact path="/admin/about" component={AdminAbout} />
  
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <GuestRoute exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />


        </Switch>
      </Router>


      {/* </ToggleColorMode> */}
    </>
  );
}

export default App;