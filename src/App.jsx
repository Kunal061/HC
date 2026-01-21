import './App.css'
import Card from './assets/components/Card';

function App() {
  return( 
  <>
  <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 rounded-full '>CHOOSE ONE CARD</h1>
  <div className='flex gap-4'>
  <Card />
  <Card />
  <Card />
  </div>
  </>
);
}

export default App;
