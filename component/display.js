import React from 'react'
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';


export default function Display(props){

    renderDisplay=({restList})=>{
        if(restList){
          return  restList.map((item)=>{
           return(
             <View key={item.mealtype_id}>
                 <Image style={styles.logo} source={{uri: item.meal_image, headers: { 'Accept': 'image/*'}}}/>
                 <Text>{item.mealtype}</Text>
            </View>
           )
            })
            
        }

    }
    return(
        <View>
         <ScrollView style={styles.container}>
            {renderDisplay(props)}
         </ScrollView>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    logo:{
        width: 170,
    height: 170,
    resizeMode: 'contain',
    },
    text:{
        fontSize:42,

    },
   
})