import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ErrorPage from "./pages/Error";
import ToDoList from "./pages/ToDoList";
import { checkAuthLoader, firstPageLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage />, loader: firstPageLoader },
      { path: "signup", element: <SignUpPage /> },
      { path: "signin", element: <SignInPage /> },
      { path: "todo", element: <ToDoList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
