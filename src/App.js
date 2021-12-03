import React from 'react'; //biblioteca externa

import Todo from './pages/Todo'; //nossos componentes
import Welcome from './pages/Welcome';//nossos componentes

import './App.css'; //nosso css

function App() {
  const [name, setName] = React.useState('');
  const [showTodo, setShowTodo] = React.useState(false);
    
  return (
    <>      
      {
        !showTodo && 
        <Welcome
          name={name}
          updateName={setName}
          updateShowTodo={setShowTodo}
        />        
      }

      {
        showTodo && 
        <Todo name = {name} />
      }       
    </>
  );
}

export default App;
