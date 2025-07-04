import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
// import { HomePage } from '../pages/homePage/HomePage';
// import { Politics } from '../pages/politics/Politics';
// import { Risk } from '../pages/risk/Risk';
// import { Oferta } from '../pages/oferta/Oferta';
// import { Parthner } from '../pages/parthner/Parthner';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   path: '/',
      //   element: <HomePage />
      // },
      // {
      //   path: '/politics',
      //   element: <Politics />
      // },
      // {
      //   path: '/risk',
      //   element: <Risk />
      // },
      // {
      //   path: '/oferta',
      //   element: <Oferta />
      // },
      // {
      //   path: '/parthner',
      //   element: <Parthner />
      // }
    ]
  },
]);
