import { useState } from "react";

const SelectUser = ( {onSubmit} ) => {
  const [user, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user)
        setUser("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 ">
                <input 
                    class="form-control"
                    placeholder="Github Username"
                    type="text"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                ></input>
                <input type="submit" value="Submit" class="btn btn-primary "></input>
                </div>
            </form>
        </div>
    )
}

export default SelectUser