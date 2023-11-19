import { createBrowserRouter } from 'react-router-dom';

import Dashboard from './Dashboard.tsx';
import { Agenda } from './features/Agenda.tsx';
import { Settings } from './features/Settings.tsx';
import { Fallback } from './features/Fallback.tsx';
import { Cards } from './features/cards/Cards.tsx';
import { UrlState } from './features/UrlState.tsx';
import { StarWarsPlanet } from './features/starWars/StarWarsPlanet.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <Agenda />,
      },
      {
        path: '/agenda',
        element: <Agenda />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/cards',
        element: <Cards />,
      },
      {
        path: '/url-state',
        element: <UrlState />,
      },
      {
        path: '/star-wars-planet',
        element: <StarWarsPlanet />,
      },
    ],
  },
  {
    path: '*',
    element: <Fallback />,
  },
]);
