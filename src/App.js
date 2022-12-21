import './App.css';
import Profile from './Profile/Profile';

function App() {
  const handleName = FullName => alert(FullName);
  return (
    <div>
      <Profile fullName="Firas Eljed" Bio="I'm Student at GoMyCode" profession="Student" handleName={handleName}>
        <img src="https://www.linkpicture.com/q/me.jpg" alt="jack"/>
        
      </Profile>
   
    </div>
  );
}

export default App;
