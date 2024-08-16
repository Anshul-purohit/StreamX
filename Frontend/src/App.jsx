import { Toaster } from "react-hot-toast"

const App = ({ children }) =>{
  return <>
    {children}
    <Toaster position="bottom-right" reverseOrder={false}/>
  </>
}

export default App;