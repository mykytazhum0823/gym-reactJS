import { createContext } from 'react';
import { adminUser} from '../mockUser/MockUser';

const UserContext = createContext({
    user: adminUser,
    setUser:()=>{}
});

export default UserContext;