import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  let [users, setUser] =useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(
    ()=>{setLoading(()=>true); setTimeout(()=>axios.get("http://localhost:3001/api/users")
    .then(res=>setUser(prev=>prev=res.data))
    .catch(e=>console.log(e))
    .finally(()=>setLoading(()=>false)),3000)
  }
  ,[])
  if(loading) return <p>loading....</p>;
  return (
    
    <div>
        <h1>User</h1>
        <ul>
          {users.map(user=>(<li key={user.id}>{user.name}</li>))}
        </ul>
    </div>
  );
}

export default App;
