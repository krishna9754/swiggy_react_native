import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import { useRoute } from '@react-navigation/native'

const ResMenu = () => {
    const foods = [
          {
            
            "id": 1,
            "name": "Pizza Margherita",
            "rating": 4.5,
            "price": 192,
            "picture": "https://image.shutterstock.com/image-photo/fresh-homemade-italian-pizza-margherita-260nw-1829205563.jpg",
            "description": "Classic Italian pizza with fresh tomatoes, mozzarella cheese, and basil leaves."
          },
          {
            "id": 2,
            "name": "Grilled Salmon",
            "rating": 4.2,
            "price": 200,
            "picture": "https://t3.ftcdn.net/jpg/01/00/73/16/360_F_100731639_JvF0Aa6JBz10b9fHl1pILqmTIV3LV7of.jpg",
            "description": "Salmon fillet marinated in herbs and grilled to perfection, served with lemon wedges."
          },
          {
            "id": 3,
            "name": "Chicken Alfredo Pasta",
            "rating": 4.8,
            "price": 100,
            "picture": "https://thefoodcharlatan.com/wp-content/uploads/2020/08/Homemade-Chicken-Fettuccine-Alfredo-13-650x975.jpg",
            "description": "Creamy Alfredo sauce tossed with tender chicken and fettuccine pasta."
          },
          {
            "id": 4,
            "name": "Vegetable Stir-Fry",
            "rating": 4.0,
            "price": 128,
            "picture": "https://www.budgetbytes.com/wp-content/uploads/2022/03/Easy-Vegetable-Stir-Fry-close.jpg",
            "description": "Assorted vegetables stir-fried in a flavorful sauce, served over steamed rice."
          },
          {
            "id": 5,
            "name": "Chocolate Lava Cake",
            "rating": 4.7,
            "price": 110,
            "picture": "https://static01.nyt.com/images/2022/03/31/dining/two_person_lava_cake_1260/two_person_lava_cake_1260-articleLarge.jpg?w=1280&q=75",
            "description": "Decadent chocolate cake with a gooey, molten center, topped with a scoop of vanilla ice cream."
          },
          {
            "id": 6,
            "name": "Caprese Salad",
            "rating": 4.3,
            "price": 129,
            "picture": "https://static01.nyt.com/images/2023/07/25/multimedia/MC-Classic-Caprese-fpjw/MC-Classic-Caprese-fpjw-articleLarge.jpg?w=1280&q=75",
            "description": "Fresh tomatoes, mozzarella cheese, and basil drizzled with balsamic glaze."
          },
          {
            "id": 7,
            "name": "Beef Tacos",
            "rating": 4.6,
            "price": 210,
            "picture": "https://img.jamieoliver.com/home/wp-content/uploads/2021/07/taco_20-lead.jpg?tr=w-485",
            "description": "Seasoned ground beef in a taco shell, topped with lettuce, cheese, and salsa."
          },
          {
            "id": 8,
            "name": "Mango Sticky Rice",
            "rating": 4.4,
            "price": 222,
            "picture": "https://assets.epicurious.com/photos/63fe607b1462f8e197652cc7/1:1/pass/undefined",
            "description": "Sweet sticky rice topped with ripe mango slices and drizzled with coconut milk."
          },
          {
            "id": 9,
            "name": "Caesar Salad",
            "rating": 4.1,
            "price": 120,
            "picture": "https://media.gettyimages.com/id/1173079946/photo/caesar-salad.jpg?s=612x612&w=0&k=20&c=0Nuzkc6ZCrzCwe8N2OCMVE4UBIjghOTlkaA-ZvMucnI=",
            "description": "Crisp romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing."
          },
          {
            "id": 10,
            "name": "Sushi Platter",
            "rating": 4.9,
            "price": 130,
            "picture": "https://lirp.cdn-website.com/7cf73324/dms3rep/multi/opt/vegan-sushi-platter-in-Los-Angeles-1920w.jpg",
            "description": "Assorted sushi rolls with fresh fish, avocado, and seaweed, served with soy sauce and pickled ginger."
          }
        ]
      
  return (
    <View style={styles.container}>
        <Text style={{borderBottomWidth: 1, fontSize: 18, textAlign: 'center',}}>MENU</Text>
        <ScrollView>
        {
            foods.map((items, id) => {
                return(
                     <View key={id} style={{marginTop: 15, marginHorizontal: 20, flexDirection: 'row-reverse', justifyContent: 'space-between', marginBottom: 20}}>
                            <View style={{alignItems: 'center'}}>
                                <Image style={styles.image} source={{uri:items.picture}} />
                                <View style={styles.addbutton}>
                                    <Text style={{fontSize: 24, fontWeight: 'bold', color: 'green', backgroundColor: 'white', marginTop: 8}}>ADD</Text>
                                </View>
                            </View>
                            
                        <View style={styles.size}>
                            <View style={{flexDirection: 'row'}}>
                                <FontAwesome5 name="dot-circle" size={18} color="green" />
                                <Text style={{marginLeft: 6, color: 'red'}}>BestSeller</Text>
                            </View>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{items.name}</Text>
                                <View style={{flexDirection: 'row', marginBottom: 10}}>
                                    <FontAwesome name="star" size={18} color="orange" />
                                    <FontAwesome name="star" size={18} color="orange" />
                                    <FontAwesome name="star" size={18} color="orange" />
                                    <FontAwesome name="star" size={18} color="orange" />
                                    <FontAwesome name="star-half-empty" size={18} color="orange" />
                                </View>
                                <Text style={{ marginBottom: 10, color: 'grey'}}>{items.description}</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18}}>RS. {items.price}</Text>
                            </View>
                        </View>
                )
                
            })
        }
        </ScrollView>
       
        
    </View>
  )
    }


export default ResMenu

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 180,
        backgroundColor: 'grey',
        borderRadius: 20,

    },
    container:{
        marginTop: 10,
        marginBottom: 380,
    },
    addbutton:{
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 150,
        backgroundColor: 'white'
    },
    size: {
        width: 180,
    }
})