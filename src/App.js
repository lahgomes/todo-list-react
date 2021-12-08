import React from 'react'; //biblioteca externa

import Todo from './pages/Todo'; //nossos componentes
import Welcome from './pages/Welcome';//nossos componentes

import './App.css'; //nosso css

function App() {
  const [user, setUser] = React.useState({});
  const [showTodo, setShowTodo] = React.useState(false);
    
  return (
    <>      
      {
        !showTodo && 
        <Welcome
          user={user}
          updateUser={setUser}
          updateShowTodo={setShowTodo}
        />        
      }

      {
        showTodo && 
        <Todo user={user} />
      }       
    </>
  );
}

export default App;
