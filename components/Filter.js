import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Filter = () => {
  return (
    <View style={styles.container}>
        <View style={{justifyContent: 'space-around', display: 'flex', flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 8, paddingHorizontal: 20, borderRadius: 40}}>
                <Ionicons name="filter" style={{right: 5}} size={24} color="black" />
                <Text style={{fontSize: 14}}>Filter</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 8, paddingHorizontal: 20, borderRadius: 40}}>
                <Text style={{fontSize: 14}}>Sort By Rateing</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 8, paddingHorizontal: 20, borderRadius: 40}}>
                <Text style={{fontSize: 14}}>Sort By Price</Text>
            </View>
        </View>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    }
})