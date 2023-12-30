import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import MoreQuick from './MoreQuick';

const QuickFood = (props) => {
  const navigation = useNavigation()
    const food = [
        {
            "id": 1,
            "name": "Pizza",
            "offer": '50% OFF',
            "rating": 4.3,
            "running": '30-40',
            "image_url": "https://img.freepik.com/premium-photo/delicious-pizza-pieces_1026910-2.jpg?size=626&ext=jpg"
          },
          {
            "id": 2,
            "name": "Sushi",
            "offer": '60% OFF',
            "rating": 3.9,
            "running": '20-25',
            "image_url": "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VzaGl8ZW58MHx8MHx8fDA=&w=1000&q=80"
          },
          {
            "id": 3,
            "name": "Burger",
            "offer": '60% OFF',
            "rating": 4.3,
            "running": '30-40',
            "image_url": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnN8ZW58MHx8MHx8fDA="
          },
          {
            "id": 4,
            "name": "Tacos",
            "offer": '40% OFF',
            "rating": 3.9,
            "running": '20-25',
            "image_url": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8fDA="
          },
          {
            "id": 5,
            "name": "Pasta",
            "offer": '20% OFF',
            "rating": 4.3,
            "running": '30-40',
            "image_url": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlc3xlbnwwfHwwfHx8MA==&w=1000&q=80https://example.com/pasta.jpg"
          },
     
    ]

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Get it Quickly</Text>
      <ScrollView style={{marginTop: 5,}} horizontal showsHorizontalScrollIndicator={false}>
      {
        food.map((items, id) => {
            return(
                <View key={id}>
                    <Pressable>
                            <Image style={styles.image} source={{uri:items.image_url}} />
                              <Text style={styles.offer}>
                                  {items.offer}
                              </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <View>
                                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                                            {items.name}
                                        </Text>
                                    </View>
                                    <View style={{flexDirection: 'row', position: 'relative', left: 20,}}>
                                        <MaterialIcons name="stars" size={24} color="green" />
                                        <Text style={{fontSize: 16,}} >{items.rating} </Text>
                                        <Text style={{fontSize: 16,}}> {items.running}mins</Text>
                                    </View>
                                </View>
                    </Pressable> 
                </View>
            )
        })
      }
      <View style={styles.images}>
        <Text style={{ textAlign: 'center', paddingTop: 28, fontSize: 20 }}>
             More <Feather name="arrow-right-circle" size={24} style={{marginTop: 10}} color="black" /> 
        </Text>
      </View>
      
      </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 15,
        marginTop: 15,
    },
    image:{
        width: 220,
        height: 250,
        marginRight: 15,
        borderRadius: 10,
        // borderWidth: 2,
        backgroundColor: '#E4E3E3'
    },
    images:{
        width: 220,
        height: 250,
        marginRight: 15,
        borderRadius: 10,
        // borderWidth: "white",
        // borderWidth: 2,
        backgroundColor: '#E4E3E3',
        alignItems: 'center',        
        justifyContent: 'center'
    },
    offer:{
        position: 'absolute',
        color: 'white',
        bottom: 35,
        left: 18,
        fontSize: 45,
        fontWeight: 'bold'
    }
})