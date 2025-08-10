import { Alert, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import InputComponent from "../components/InputComponent"
import { styles } from "../utils/stylesSheet"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { createUserWithEmailAndPassword, getAuth } from "@react-native-firebase/auth"

const resetForm = {
  username: '',
  email: '',
  password: '',
}

export const Signup = () => {
  const [formData, setFormData] = useState({ ...resetForm })
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  const onChangeHandle = (key, value) => {
    setFormData((pre) => ({ ...pre, [key]: value }))
  }



  const submitHandle = () => {
    setLoading(true)
    createUserWithEmailAndPassword(getAuth(), formData.email, formData.password)
      .then(() => {
        // setLoading(false)
        Alert.alert('User account created & signed in!');
        setFormData({ ...resetForm })
        navigateTo('Home')
      })
      .catch(error => {
        // setLoading(false)
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        if (error.message) {
          Alert.alert(error.message);
        }

        console.error(error);
      }).finally(() => {
        setLoading(false)
      })
  }

  const navigateTo = (screen) => {
    navigation.navigate(screen)
  }


  return <View style={[styles.container, styles.center]}>
    <View style={{ width: '100%', gap: 20 }}>
      <Text style={styles.heading}>
        Signup
      </Text>
      <View style={{ gap: 20 }}>
        <InputComponent value={formData.username} changeHandle={(text) => onChangeHandle('username', text)} placeholder="Enter username" label='Username' />
        <InputComponent value={formData.Email} changeHandle={(text) => onChangeHandle('email', text)} placeholder="Enter email" label='Email' />
        <InputComponent value={formData.password} secureTextEntry={true} changeHandle={(text) => onChangeHandle('password', text)} placeholder="Enter password" label='Password' />
      </View>

      <TouchableOpacity disabled={loading} onPress={submitHandle} style={[styles.button, styles.bgGreen, loading ? styles.loading : {}]}>
        <Text style={styles.buttonText}>{loading ? "Loading..." : "Signup"}</Text>
      </TouchableOpacity>



      <View style={{ flexDirection: 'row', gap: 3, justifyContent: 'center' }}>
        <Text>Already have account</Text><TouchableOpacity onPress={() => navigateTo('Login')}>
          <Text>Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
}