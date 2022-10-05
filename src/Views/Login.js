import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import React,{useContext, useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Fontistos from 'react-native-vector-icons/Fontisto'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntDesigns from 'react-native-vector-icons/AntDesign'
import { AuthContext } from '../Contect/AuthContext';


const Login = ({navigation}) => {
  const[getPasswordVisible,setPasswordVisible] = useState(false);
  const[email,setEmail] = useState(null);
  const[password,setPassword] = useState(null);
  const val = useContext(AuthContext)

  return (
    
  <SafeAreaView style={styles.container}>
    <View style={{paddingHorizontal:25}}>
      <Text>{val}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode='stretch' source={require('../Images/messager.jpg')}></Image>
      </View>

    <Text style={styles.headerLogin}>Login</Text>
      <View style={styles.emailContainer}>
        <View >
          <Fontistos style={{marginRight:10}} name='email' size={30} color='#666'/>
        </View>
          <TextInput placeholder='Nhập email' 
                     keyboardType='email-address' 
                     value={email}
                     onChangeText={text => setEmail(text)}
                     style={{flex:1,paddingVertical:0}}
        />
      </View>

    <View style={styles.passwordContainer}>
      <View >
        <Icon style={{marginRight:10}} name='lock-closed-outline' size={30} color='#666'/>
      </View>
      <TextInput placeholder='Nhập password' 
                 keyboardType='password-address' 
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

    <TouchableOpacity style={styles.forgotPassword}>
      <Text style={{color:'#ff3300'}}
      onPress={()=>(
      alert('ForgetPassword')
      )}
    >Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.bodyLogin}
      onPress={()=>(
      alert('Login')
      )}
    >
      <Text style={styles.textLogin}>Login</Text>
    </TouchableOpacity>

    <Text style={styles.textLoginWith}>Or, login with....</Text>

    <View style={styles.facebookGoogleContainer}>
      <TouchableOpacity style={styles.facebookContainer}
        onPress={()=>(
        alert('Facebook')
        )}
      >
        <AntDesigns name='facebook-square' size={40} color='#000' />
      </TouchableOpacity>
    <TouchableOpacity style={styles.googleContainer}
      onPress={()=>(
      alert('Google')
      )}
    >
      <AntDesigns name='google' size={40} color='#000' />
    </TouchableOpacity>
    </View>

    <View style={styles.endContainer}>
      <Text style={{fontSize:16}}>New to the app?   </Text>
      <TouchableOpacity 
        onPress={()=>(
            navigation.navigate('Register')
        )}
      >
        <Text style={styles.textRegister}>Register</Text>
      </TouchableOpacity>
    </View>
    </View>
  </SafeAreaView>
)
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:3,
    borderColor:'black',
    width:'100%',
    height:'100%',
    backgroundColor:'#fff'
  },
  imageContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'35%',
    width:'100%'
  },
  image:{
    width:'70%',
    height:'90%'
  },
  headerLogin:{
    fontSize:38,
    fontWeight:'500',
    color:'#333',
    height:'6%'
  },
  emailContainer:{
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingVertical:10,
    marginTop:25,
    alignItems:'center',
    height:'6%'
  },
  passwordContainer:{
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingVertical:10,
    marginTop:25,
    alignItems:'center',
    height:'6%'
  },
  forgotPassword:{
    margin:10,
    height:'3%'
  },
  bodyLogin:{
    padding:13,
    borderRadius:10,
    marginBottom:10,
    backgroundColor:'#FFFF44',
    marginTop:20,
    marginBottom:20,
    borderWidth:1,
    borderColor:'#FFFF11'
    },
  textLogin:{
    textAlign:'center',
    fontWeight:'700',
    fontSize:26,
    color:'#444'
  },
  textLoginWith:{
    marginBottom:20,
    color:'#666',
    textAlign:'center',
    fontSize:20
  },
  facebookGoogleContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:5
  },
  facebookContainer:{
    borderRadius:10,
    borderWidth:1,
    padding:5
  },
  googleContainer:{
    borderRadius:10,
    borderWidth:1,
    padding:5
  },
  endContainer:{
    flexDirection:'row',
    marginBottom:30,
    justifyContent:'center',
    padding:20
  },
  textRegister:{
    color:'#ff3300',
    fontSize:16
  }
  })
  