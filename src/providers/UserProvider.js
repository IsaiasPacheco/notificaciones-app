import React, {createContext, useEffect, useState} from 'react'

export const UserContext = createContext( {user: null});

const UserProvider = (props) => {
    
    const [user, setUser] = useState();
    
    useEffect(
        () => {
            setUser(null)
        }, []
    )

    return(
        <UserContext.Provider value={user}>
            {
               user && <p> Usuario {user.user.mail}</p>
            }

            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;