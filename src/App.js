import './App.css';
import {Routes,Route} from "react-router-dom"
import {Home} from './paginas/inicio';
import {Register} from './paginas/register/register';
import {Login} from  './paginas/login/login'
import {AuthProvider} from './authContext'
import {RecoverPassword} from './paginas/register/recoverpass'

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={
          <Home />
        }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/register' element={<RecoverPassword/>}/>

      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;