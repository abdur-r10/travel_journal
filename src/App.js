import Header from './components/Header.js'
import Main from './components/Main.js'
import data from './data.js';

export default function App() {
  const cards = data.map(item => {
  return (
      <Main 
      data={item}
      />
  );
})

return(
  <div className="App">
    <Header />
    
    <div className='main--container'>
      {cards}
    </div>
  </div>
)
}