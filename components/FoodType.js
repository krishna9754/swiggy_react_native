import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FoodType = () => {
    const food_item = [
        {
            "id": 1,
            "name": "Pizza",
            "category": "Italian",
            "image_url": "https://media.gettyimages.com/id/184928432/photo/pizza-from-the-top-pepperoni-cheese.jpg?s=612x612&w=0&k=20&c=wkC4yrZLcvHqg-9kQtRb1wan_z15eiO1Z297OFSuxpg="
          },
          {
            "id": 2,
            "name": "Sushi",
            "category": "Japanese",
            "image_url": "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VzaGl8ZW58MHx8MHx8fDA=&w=1000&q=80"
          },
          {
            "id": 3,
            "name": "Burger",
            "category": "American",
            "image_url": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnN8ZW58MHx8MHx8fDA="
          },
          {
            "id": 4,
            "name": "Tacos",
            "category": "Mexican",
            "image_url": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8fDA="
          },
          {
            "id": 5,
            "name": "Pasta",
            "category": "Italian",
            "image_url": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlc3xlbnwwfHwwfHx8MA==&w=1000&q=80https://example.com/pasta.jpg"
          },
          {
            "id": 6,
            "name": "Sushi Roll",
            "category": "Japanese",
            "image_url": "https://images.unsplash.com/photo-1562158074-1602c2f19a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1c2hpJTIwcm9sbHN8ZW58MHx8MHx8fDA=&w=1000&q=80/sushi_roll.jpg"
          },
          {
            "id": 7,
            "name": "Steak",
            "category": "American",
            "image_url": "https://img.freepik.com/premium-photo/grilled-top-sirloin-cup-rump-beef-meat-steak-marble-board-black-background-top-view_89816-33317.jpg?size=626&ext=jpg"
          },
          {
            "id": 8,
            "name": "Enchiladas",
            "category": "Mexican",
            "image_url": "https://st.depositphotos.com/1961409/2595/i/600/depositphotos_25954099-stock-photo-enchiladas.jpg"
          },
          {
            "id": 9,
            "name": "Gelato",
            "category": "Italian",
            "image_url": "https://st2.depositphotos.com/1868949/6977/i/600/depositphotos_69771187-stock-photo-dessert-of-ice-cream-in.jpg"
          },
          {
            "id": 10,
            "name": "Sashimi",
            "category": "Japanese",
            "image_url": "https://st.depositphotos.com/1175884/2022/i/450/depositphotos_20227025-stock-photo-mix-sashimi.jpg"
          }
    ]

  return (
    <View style={styles.container}>
        <Text style={{fontSize:20, fontWeight: 'bold', marginBottom: 5, marginLeft: 15}}>What's Your Mind ?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            food_item.map((items, id) => {
                return(
                    <View key={id} style={{alignItems: "center"}}>
                        
                        <View style={{marginHorizontal: 10}}>
                            <Image style={styles.circle} source={{uri:items.image_url}} />
                        </View>
                        <Text style={{marginTop: 5}}>{items.name}</Text>
                        <Text>({items.category})</Text>
                    </View>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default FoodType

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
    },

    circle:{
        width:60,
        height: 60,
        borderRadius: 50,
        display: 'flex',
        flexWrap: 'wrap'
    }
})