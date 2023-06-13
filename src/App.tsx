import { RouterProvider } from "react-router-dom"
import { MainRoutes } from "./route/MainRoutes"
 const App =()=>{
  return(
    <div>
      <RouterProvider router={MainRoutes}/>    
    </div>
  )
}

export default App