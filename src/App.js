import "./App.css";
import ParticlesBg from "particles-bg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Header from "./Pages/Header/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Header></Header>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ParticlesBg num={50} type="cobweb" bg={true} />
    </div>
  );
}

export default App;
