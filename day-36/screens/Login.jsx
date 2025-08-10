import { Alert, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import InputComponent from "../components/InputComponent"
import { styles } from "../utils/stylesSheet"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth"

const resetForm = {
  email: '',
  password: '',
}

export const Login = () => {
  const [formData, setFormData] = useState({ ...resetForm })
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()


  const onChangeHandle = (key, value) => {
    setFormData((pre) => ({ ...pre, [key]: value }))
  }



  const submitHandle = () => {

    setLoading(true)
    signInWithEmailAndPassword(getAuth(), formData.email, formData.password)
      .then(() => {
        // setLoading(false)
        Alert.alert('User logged in Successfully!');
        navigateTo('Home')
      })
      .catch(error => {
        // setLoading(false)

        let errorMessage = ''
        if (error.message) {
          errorMessage = error.message
        }
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'That email address is already in use!'
        }

        if (error.code === 'auth/invalid-email') {
          errorMessage = 'That email address is invalid!'
        }

        Alert.alert(errorMessage)

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
        Login
      </Text>
      <View style={{ gap: 20 }}>
        <InputComponent value={formData.email} changeHandle={(text) => onChangeHandle('email', text)} placeholder="Enter email" label='Email' />
        <InputComponent value={formData.password} secureTextEntry={true} changeHandle={(text) => onChangeHandle('password', text)} placeholder="Enter password" label='Password' />
      </View>

      <TouchableOpacity disabled={loading} onPress={submitHandle} style={[styles.button, styles.bgGreen, loading ? styles.loading : {}]}>
        <Text style={styles.buttonText}>{loading ? "Loading..." : "Login"}</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', gap: 3, justifyContent: 'center' }}>



        <Text>Don't have an account</Text><TouchableOpacity onPress={() => navigateTo('Signup')}>
          <Text>Signup Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
}