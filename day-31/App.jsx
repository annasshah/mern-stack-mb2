
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"


const App = () => {

  const [count, setCount] = useState(0)
  return <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
    <View>
      {/* <Text>Hello World! </Text> */}
      <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Count: {count}</Text>
      <TouchableOpacity style={{
        backgroundColor:
          'lightblue'
      }} onPress={() => setCount((preCount) => preCount + 1)}>
        <Text style={{ color: 'white', paddingHorizontal: 10, paddingVertical: 10 }}>Increase Count</Text> </TouchableOpacity>
    </View>
  </View>
}
export default App