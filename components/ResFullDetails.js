import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import ResMenu from './ResMenu';
import { useNavigation } from '@react-navigation/native';



const MoreQuick = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const returning = () => {
    navigation.navigate("Home")
  }

  return (
    <>
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10}}>
          <Feather name="arrow-left" size={24} color="black" onPress={() => returning()}/>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-search-outline" size={24} color="black" />
            <Text>Search</Text>
          </View>
      </View>

      {/* resturant name and details ======================================================  */}

      <View style={styles.NameAndAdress}>
          <View style={styles.WidthAndHeight}>
            <View style={{marginVertical: 10, marginHorizontal: 10,}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>{route.params.restaurant}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Feather name="share-2" size={24} color="black" />
                    <Entypo name="heart-outlined" size={24} color="black" />
                  </View>
              </View>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                  <MaterialIcons name="stars" size={26} color="green" />
                    <Text style={{marginLeft: 3, fontSize: 16}}>{route.params.rating}</Text>
                    <Text>. {route.params.running}mins</Text>
                </View>
                <Text style={{marginBottom: 8, fontSize: 16, color: 'grey'}}>{route.params.description}</Text>
                <View style={{flexDirection: 'row', marginBottom: 8, fontSize: 15, }}>
                  <Text style={{marginRight: 14}}>Outlet</Text>
                  <Text style={{color: 'grey', fontWeight: 'bold'}}>{route.params.address}</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 8, fontSize: 16 }}>
                  <Text>{route.params.homeTime}</Text>
                  <Text style={{color: 'grey', marginLeft: 14, fontWeight: 'bold'}}>Home</Text>
                </View>
                <View style={{borderTopWidth: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                  <Text>
                    <Ionicons name="ios-bicycle-sharp" size={24} color="orange" /> {route.params.km}
                  </Text>
                  <Text style={{borderLeftWidth: 1}}></Text>
                  <Text>{route.params.deliveryFees} Delivery Fee Will Apply</Text>
                </View>
            </View>
          </View>
      </View>
 </View>
      {/* resturant menu ======================================================== */}
   
      <ResMenu/>

    </>
  )
}

export default MoreQuick

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#C8D4F2',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,

  },
  NameAndAdress: {
    height: 250,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: '#C8D4F2' ,
    alignItems: 'center',
  },
  WidthAndHeight:{
    width: 350,
    height: 200,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10
  }
})