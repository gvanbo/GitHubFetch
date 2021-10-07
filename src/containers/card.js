import { useState, useEffect } from "react";
import DisplayGitHub from "../components/DisplayGitHub";
import SelectUser from "../components/SelectUser";

const Card = () => {
    const [user, setUser] = useState('gvanbo')
    const [data, setData] = useState(null)

    const handleSubmit = (user) => {
        setUser(user)
      }
    
    useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
        .then((res) => res.json())
        .then(setData)
        .catch(console.error);
    }, [user]);

    return (
        <div style={{margin: "20px 20% 0 20%"}}>
          <SelectUser onSubmit={handleSubmit}/>
          <DisplayGitHub data={data}/> 
        </div>
    )
}

export default Card;