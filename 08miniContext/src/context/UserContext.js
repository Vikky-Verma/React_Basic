import React from 'react'

const UserContext = React.createContext()

export default UserContext;


//1. every context is a provider because it provide us a variable

// 2.context , we call it global variable when wrap the component in a context  then it becomes provider it provides every component to access the UserContext(global variable)


{/* <UserContext>  
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext> */}