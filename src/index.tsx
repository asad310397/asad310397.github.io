import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { themeOptions } from "./assets/mui-theme";
import "./assets/styles/styles.scss";
import Error404 from "./Layout/LayoutOne/Error404";
import HomePage from "./Pages/HomePage/HomePage";

axios.defaults.baseURL = "https://qamersupplies.com/node";
axios.defaults.headers.post["Content-Type"] = "application/json";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const routes = [
  { path: "/", errorElement: <Error404 />, element: <HomePage /> },
  // { path: "/form-builder", errorElement: <Error404 />, element: <FormBuilder /> },
  { path: "*", errorElement: <Error404 />, element: <HomePage /> },
];

const router = createBrowserRouter(routes, {
  basename: `${process.env.PUBLIC_URL}/`,
});

root.render(
  <ThemeProvider theme={createTheme(themeOptions)}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
