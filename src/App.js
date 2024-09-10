import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {TodosProvider} from './contexts/todos';
const App=()=>{
  return (
     <TodosProvider>
     <div className="todoapp">
       <Header/>
       <Main/>
       <Footer/>
     </div>
     </TodosProvider>
  );
};

export default App;
