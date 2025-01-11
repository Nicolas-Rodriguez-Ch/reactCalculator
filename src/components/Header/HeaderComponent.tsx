import './HeaderComponent.css';
import { NavLink } from 'react-router';
import { paths } from '../../static/paths';

export default function HeaderComponent() {
  return (
    <nav className='headerComponent_container'>
      <NavLink
        to={paths.home}
        className={({ isActive }) =>
          isActive ? 'headerComponent_activeRoute' : ''
        }
      >
        Calculator
      </NavLink>
      <NavLink
        to={paths.history}
        className={({ isActive }) =>
          isActive ? 'headerComponent_activeRoute' : ''
        }
      >
        Your Calculations
      </NavLink>
    </nav>
  );
}
