import './App.css'
import Card from './assets/components/Card';
import Hero from './assets/components/Hero';
import Header from './assets/components/Header';
function App() {
  return( 
  <>
  <Header title="Codibex" para="My name is Kunal and im training to be a react developer"/>
  <Hero />
  <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 rounded-full bg-orange-500 hover:bg-blue-500 transition-all duration-300 hover:text-black'>CHOOSE ONE CARD</h1>
  <div className='flex gap-4'>
  <Card title="Buy Python" paragraph="Buy thi s python cource its the best one on the market right now" buttonText="BUY Python" imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLk0jLzTMvd2GfwVZp22BNeUWUsRQJdjWtDQ&s"/>
  <Card title="Buy C++" paragraph="Buy this C++ course its the best one on the market right now" buttonText="BUY C++" imageurl="https://cdn.shopaccino.com/igmguru/images/what-is-c-346217457946001.jpg" />
  <Card title="Buy Java" paragraph="Buy this Java course its the best one on the market right now" buttonText="BUY Java" imageurl="https://t4.ftcdn.net/jpg/02/92/83/57/360_F_292835773_oImixQGFKLpOPnjfsbesHyqdjOk5hsxL.jpg" />
  </div>
  </>
);
}

export default App;
