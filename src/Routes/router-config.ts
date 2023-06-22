import Home from "../Screens/Home";

const routes = [
  { path: "*", component: Home, exact: true },
  { path: "/Home", component: Home, exact: true },
  { path: "/", component: Home, exact: true },
];

export { routes };
