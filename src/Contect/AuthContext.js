import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React,{createContext,useState} from 'react';
import {BASE_URL} from '../../src/configs/config'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
 const [userInfo,setUseInfo] = useState({});
 const [isLoading, setIsLoading] = useState(false);


    const register = (account,email,password,confirm_password)=>{
       setIsLoading(true);

       axios
       .post(`${BASE_URL}/create.php`,{
        account,
        email,
        password,
        confirm_password
       })
       .then(res => {
        let userInfo = res.data;
        setUseInfo(userInfo);
        AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
       })
       .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
       })
    };
    return(
    <AuthContext.Provider 
    value={[
        isLoading,
        userInfo,
        register,
        ]}>
            {children}
    </AuthContext.Provider>
    );
}



