import { NavLink, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <header className="wrapper">
        <div>
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink to={'/agenda'}>Agenda</NavLink>
              </li>
              <li>
                <NavLink to={'/settings'}>Settings</NavLink>
              </li>
              <li>
                <NavLink to={'/cards'}>Cards</NavLink>
              </li>
              <li>
                <NavLink to={'/url-state'}>URL</NavLink>
              </li>
              <li>
                <NavLink to={'/star-wars-planet'}>Star Wars Planet</NavLink>
              </li>
            </ul>
          </nav>
          <h1>Typescript + Redux</h1>
        </div>
      </header>
      <main className="wrapper">
        <Outlet />
      </main>
    </>
  );
}

export default Dashboard;
