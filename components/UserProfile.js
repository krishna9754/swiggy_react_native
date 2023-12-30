import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const [Show, setShow] = useState(true)
  const [Show1, setShow1] = useState(true)
  const [Show2, setShow2] = useState(true)
  const navigation = useNavigation()

  const returnHome =() =>{
    navigation.navigate("Home")
  }

  // const hideShow = () => {
  //   setShow(false)
  //   console.log('object')
  // }

  return (
    <View style={styles.container}>
      <Feather name="arrow-left-circle" size={28} color="black" onPress={() => returnHome()}/>
      <View style={styles.fontSearchAndBars}>
        <FontAwesome name="user-circle-o" size={64} color="black" />
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Name</Text>
        <Text style={{color: 'grey', marginBottom: 10}}>89XXXXXX89</Text>
      </View>
      <View>
          <View style={{borderBottomWidth: 1, marginBottom: 10, marginTop: 5}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Address</Text>
                <MaterialIcons name="arrow-right" size={32} color="black"  onPress={() => setShow2(!Show2)}/>
            </View>

             {/* Address function with logic =============================== */}
             {
              Show2 ? <Address/> : null
            }

            
          </View>
          <View style={{borderBottomWidth: 1, marginBottom: 10, }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Payment & Refund</Text>
                <MaterialIcons name="arrow-right" size={32} color="black"  onPress={() => setShow1(!Show1)}/>
            </View>


            {/* Payment function with logic =============================== */}
            {
              Show1 ? <Payment/> : null
            }
           
          </View>
          <View style={{borderBottomWidth: 1, marginBottom: 10, }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1,}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Help</Text>
                <MaterialIcons name="arrow-right" size={32} color="black"  onPress={() => setShow(!Show)}/>
            </View>


            {/* help function with logic ==================================*/}
            {
                 Show ? <Help/> : null
            }


            
          </View>
          <View style={{borderBottomWidth: 1, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>Order History</Text>
            <MaterialIcons name="arrow-right" size={32} color="black" />
          </View>
          <View style={{borderBottomWidth: 1, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Refer & Earn</Text>
            <MaterialIcons name="arrow-right" size={32} color="black" />
          </View>
      </View>
      
    </View>
  )
} 

const Help = () => {
  return(
    <View style={{marginTop: 8}}>
            <Text>Issues With Previous Order</Text>
            <Text>General Issues</Text>
            <Text>Legal, Terms & Condition</Text>
            <Text>FAQs</Text>
  </View>
  )
}

const Payment = () => {
return(
      <View>
      <Text>Payment Mode</Text>
        <Text>Refund Status</Text> 
        </View>
)
   
}

const Address = () => {
return(
      <View>
      <Text>Add New Address</Text>
            <Text>Edit Address</Text>
        </View>
)
   
}


export default UserProfile

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        marginHorizontal: 10,
    },
    fontSearchAndBars:{
        flexDirection: 'column',
        alignItems: 'center',
        borderBottomWidth: 2,

    }
})