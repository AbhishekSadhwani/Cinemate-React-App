import { AllRoutes } from './Routes/AllRoutes';
import { Header, Footer } from './components'; 
import './App.css';


function App() {
  
  return (
    <div className="App">
      <div className='dark:bg-slate-800'>
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
