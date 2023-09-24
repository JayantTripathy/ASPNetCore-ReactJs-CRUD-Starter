import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import AddCreditCard from "./components/addCreditCard/addcreditcard"
import EditCreditCard from "./components/editCreditCard/editCreditCard";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/addcreditcard',
    element: <AddCreditCard />
  },
  {
    path: '/editcreditcard/:id',
    element: <EditCreditCard />
  },
  {
    path: '/home',
    element: <Home />
  },
];

export default AppRoutes;
