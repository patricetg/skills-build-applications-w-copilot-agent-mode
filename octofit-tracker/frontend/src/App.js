import logo from '../../docs/octofitapp-small.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Octofit Logo" />
          <h1 style={{marginLeft: '16px'}}>Octofit Tracker</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/users">Users</Link>
          <Link to="/workouts">Workouts</Link>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
