import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ErrorPage from "./pages/Error";
import TodoPage from "./pages/TodoPage";
import { privateLoader, publicLoader, firstPageLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage />, loader: firstPageLoader },
      { path: "signup", element: <SignUpPage />, loader: privateLoader },
      { path: "signin", element: <SignInPage />, loader: privateLoader },
      { path: "todo", element: <TodoPage />, loader: publicLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
