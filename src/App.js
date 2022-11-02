import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/icons/style.css'

import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';


function App() {
  return (
    <div className='h-100 d-flex flex-column'>
      <div>
        <Header />
      </div>
      <main className='flex-grow-1'>
        <Meals />
      </main>
    </div>
  );
}

export default App;
