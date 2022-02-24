import './main.css'
import NavBar from '../components/navigation/nav-bar/nav-bar'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useMatch,
    useParams,
    useLocation,
    Link
  } from "react-router-dom";

import Dashboard from './dashboard/dashboard';

export default function MainApp(){
    return <div className='main'>
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
              Week planner
              <ul>
                  <li><Link to="/week-planner/view">view</Link></li>
                  <li><Link to="/week-planner/view">edit</Link></li>
              </ul>
            
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/topics/me">Topics</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='' element={<Dashboard/>} />
        <Route path='dashbaord' element={<Dashboard/>} />
        <Route path='demo' element={<Dashboard/>} />
        <Route path='week-planner/view' element={<Dashboard/>} />
      </Routes>
    </div>
}