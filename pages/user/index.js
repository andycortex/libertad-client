import { useContext } from 'react';
import { Context } from '../../context'
import UserRouter from '../../components/routes/UserRouter'
const UserIndex = () => {
    const { 
        state: {user},
    } = useContext(Context);


    return (
        <UserRouter>
            <h1>
                <pre>{JSON.stringify(user, null, 4)}</pre>
            </h1>
            
        </UserRouter>
    )
}

export default UserIndex;