import './App.css';
import Header  from './Header';
import MianContent from './MainContent';
import data from './data';


function App() {
   const element  = data.map(item => {
    return(
      <MianContent
      {...item}
      />
    )
   
  
   })

  return (
 
    <div>
         <Header/>
        {element}
    </div>
  );
}

export default App;
