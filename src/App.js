import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
// import JobDetails from './components/JobDetails'
import ProtectedRoute from './components/ProtectedRoute'
import Jobs from './components/Jobs'
import JobDescriptions from './components/JobDescriptions'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobDescriptions} />
      <NotFound />
    </Switch>
  </BrowserRouter>
)

export default App
