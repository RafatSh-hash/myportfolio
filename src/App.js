import "./App.css";
import ParticlesBg from "particles-bg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Pages/Home/Home";
import Detail1 from "./Pages/Projects/Detail1";
import Detail3 from "./Pages/Projects/Detail3";
import Detail2 from "./Pages/Projects/Detail2";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
    {
      path: "/details/1",
      element: <Detail1></Detail1>,
    },
    {
      path: "/details/2",
      element: <Detail2></Detail2>,
    },
    {
      path: "/details/3",
      element: <Detail3></Detail3>,
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
