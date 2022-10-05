import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import React,{useContext, useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Fontistos from 'react-native-vector-icons/Fontisto'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesigns from 'react-native-vector-icons/AntDesign'
import Fontistoss from 'react-native-vector-icons/Fontisto'
import { AuthContext } from '../Contect/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Register = ({navigation}) => {
  const[getPasswordVisible,setPasswordVisible] = useState(false)
  const[getPasswordVisiblee,setPasswordVisiblee] = useState(false)
  const[account,setAccont] = useState(null);
  const[email,setEmail] = useState(null);
  const[password,setPassword] = useState(null);
  const[confirm_password,setConfirm_password] = useState(null);
  const {isLoading,register} = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal:25}}>
       <Spinner visible={isLoading}/>
    <View style={styles.imageContainer}>
    <Image style={styles.image} resizeMode='stretch' source={require('../Images/messager.jpg')}></Image>
    </View>

    <Text style={styles.headerRegister}>Register</Text>


    <View style={styles.userContainer}>
    <View >
    <AntDesigns style={{marginRight:10}} name='user' size={30} color='#666'/>
    </View>
    <TextInput placeholder='Full Name' 
                style={{flex:1,paddingVertical:0}}
                autoCapitalize="none" 
                value={account}
                onChangeText={text => setAccont(text)}
                secureTextEntry={true}
    />
    </View>

    <View style={styles.emailContainer}>
    <View >
    <Fontistos style={{marginRight:10}} name='email' size={30} color='#666'/>
    </View>
    <TextInput placeholder='Email' 
               value={email}
               onChangeText={text => setEmail(text)}
                keyboardType='email-address' 
                style={{flex:1,paddingVertical:0}}/>
    </View>

    <View style={styles.passwordContainer}>
    <View >
    <Icon style={{marginRight:10}} name='lock-closed-outline' size={30} color='#666'/>
    </View>
    <TextInput placeholder='Password' 
              keyboardType='email-address' 
              value={password}
              onChangeText={text => setPassword(text)}
              style={{flex:1,paddingVertical:0}}
              autoCapitalize='none' 
              secureTextEntry={getPasswordVisible ? false : true}
    />
    <TouchableOpacity 
    onPress={()=>(
      setPasswordVisible(!getPasswordVisible)
    )}
    >
       {getPasswordVisible ?
      <MaterialIcon name='visibility-off' size={30} color='#666'/>
      :
      <MaterialIcon name='visibility' size={30} color='#666'/>}
    </TouchableOpacity>
    </View>

    <View style={styles.confirmPasswordContainer}>
    <View >
    <Icon style={{marginRight:10}} name='lock-closed-outline' size={30} color='#666'/>
    </View>
    <TextInput placeholder='Confirm Password' 
              keyboardType='email-address'
              value={confirm_password} 
              onChangeText={text => setConfirm_password(text)}
              style={{flex:1,paddingVertical:0}}
              autoCapitalize='none'  
              secureTextEntry={getPasswordVisiblee ? false : true}
    />
    <TouchableOpacity
    onPress={()=>(
      setPasswordVisiblee(!getPasswordVisiblee)
    )}
    >
     {getPasswordVisiblee ?
      <MaterialIcon name='visibility-off' size={30} color='#666'/>
      :
      <MaterialIcon name='visibility' size={30} color='#666'/>}
    </TouchableOpacity>
    </View>
  
    
         
     <TouchableOpacity style={styles.bodyRegister}
     onPress={()=>{
         register(account,email,password,confirm_password);
     }}
     >
      <Text style={styles.textRegister}>Register</Text>
     </TouchableOpacity>
  

     <View style={styles.endContainer}>
         <Text style={{fontSize:16}}>Already registered  </Text>
         <TouchableOpacity 
         onPress={()=>(
             navigation.navigate('Login')
         )}
         >
          <Text style={styles.textLogin}>Login</Text>
         </TouchableOpacity>
     </View>
    </View>
  </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:3,
    width:'100%',
    height:'100%',
    backgroundColor:'#fff'
  },
  imageContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'30%',
    width:'100%'
  },
  image:{
    width:'70%',
    height:'90%'
  },
  headerRegister:{
    fontSize:38,
    fontWeight:'500',
    color:'#333'
  },
  userContainer:{
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingVertical:10,
    marginTop:25,
    alignItems:'center'
  },
  emailContainer:{
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingVertical:10,
    marginTop:25,
    alignItems:'center'
  },
  passwordContainer:{
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingVertical:10,
    marginTop:25,
    alignItems:'center'
  },
  confirmPasswordContainer:{
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingVertical:10,
    marginTop:25,
    alignItems:'center'
  },
  
  bodyRegister:{
    padding:13,
    borderRadius:10,
    marginBottom:10,
    backgroundColor:'#FFFF44',
    marginTop:25,
    marginBottom:20,
    borderWidth:1,
    borderColor:'#FFFF11'
  },
  textRegister:{
    textAlign:'center',
    fontWeight:'700',
    fontSize:26,
    color:'#444'
  },
  endContainer:{
    flexDirection:'row',
    marginBottom:30,
    justifyContent:'center',
    padding:20
  },
  textLogin:{
    color:'#FF3300',
    fontSize:16
  }

  })