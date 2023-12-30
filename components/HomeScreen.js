import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import Carousal from './Carousal';
import FoodType from './FoodType';
import QuickFood from './QuickFood';
import Filter from './Filter';
import HotelMenu from './HotelMenu';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation()
  const profileSec = () => {
    navigation.navigate("UserProfile")
  }

  return (
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={true}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, }}>
        {/* <FontAwesome5 name="bars" size={24} color="black" /> */}
        <View style={styles.search}>
          <TextInput 
            placeholder='Search for Resturiant items or more' 
          />
          <Feather name="search" size={24} color="black" />
        </View>
         <FontAwesome name="user-circle-o" size={32} color="black" onPress={() => profileSec()} />
      </View>
      {/* =============================== import components ====================================== */}
      {/* ==== image slider ===== */}
      <Carousal/>

      {/* ===== Food types ====== */}
      <FoodType/>

      {/* ===== Quick food ====== */}
      <QuickFood/>

      {/* ===== Filter ========== */}
      <Filter/>

      {/* ===== HotelMenu ======= */}
      <HotelMenu />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  search:{
    width: 330,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  }
})