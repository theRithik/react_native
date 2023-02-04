import React,{useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, Button,Alert, Image } from 'react-native';
import Display from './component/display'
const url="http://3.17.216.66:4000/quicksearch"
export default function App() {
  const [title,updateTitle] = useState('Developer Rithik')
  const [rest, setRest] =useState()

  setTitle=()=>{
    updateTitle('New Title')
  }
  useEffect(()=>{
    fetch(url,{method:'GET'})
 .then((res)=>res.json())
 .then((data)=>{
 setRest(data)
 })
    
  },[])
  
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button title="press me" color="red" onPress={()=>Alert.alert('Button got Clicked')}/>
     <Button title="press me" color="yellow" onPress={setTitle}/>
     <Display restList={rest}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100,

  },
  
});
