import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HotelMenu = () => {
  const navigation = useNavigation()
    const restaurants = [
        {
          "id": 1,
          "resturant" : "Meghana Foods",
          "name": "Tasty Burgers",
          "description": "A cozy place with a variety of delicious burgers.",
          "rating": 4.5,
          "running": '30-40',
          "homeTime": '22mins',
          "address": "Residency Road, Ashok Nagar",
          "KM": "0-3 Kms",
          "deliveryFees": "15",
          "imagePic" : "https://i0.wp.com/www.aspicyperspective.com/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-14.jpg?resize=650,882&ssl=1"
        },
        {
          "id": 2,
          "resturant" : "Ahuja Foods",
          "name": "Italian Delight",
          "description": "Authentic Italian dishes served with love.",
          "rating": 4.2,
          "running": '20-40',
          "homeTime": '22mins',
          "address": "Kaccha Camp, Batra Colony",
          "KM": '0-4 Kms',
          "deliveryFees": "30",
          "imagePic" : "https://slicelife.imgix.net/48202/photos/original/product-sicilian-flat-pan-margarita-pizza-9782753.jpeg?auto=compress&auto=format"
        },
        {
          "id": 3,
          "resturant" : "Baker Pride",
          "name": "Sushi Haven",
          "description": "Fresh and flavorful sushi for sushi enthusiasts.",
          "rating": 4.8,
          "running": '30-35',
          "homeTime": '22mins',
          "address": "G.T. Road, Camp",
          "KM": '1-3 Kms',
          "deliveryFees": "20",
          "imagePic" : "https://threebestrated.com/images/SushiOnChapel-NewHaven-CT.jpeg"
        },
        {
          "id": 4,
          "resturant" : "The Dhaba Foods",
          "name": "Spicy Curry House",
          "description": "Experience the bold flavors of spicy curries.",
          "rating": 3.9,
          "running": '30-40',
          "homeTime": '22mins',
          "address": "Sec. 62, Noida",
          "KM": '0-3.5 Kms',
          "deliveryFees": "10",
          "imagePic" : "https://bennydoro.com/chef/wp-content/uploads/sites/3/2018/01/670c2a7d296da12783aba333289daf63-1300x1300.jpeg"
        },
        {
          "id": 5,
          "resturant" : "Grameen Kulfi",
          "name": "Mediterranean Feast",
          "description": "Savor the tastes of the Mediterranean in every bite.",
          "rating": 4.3,
          "running": '30-40',
          "homeTime": '22mins',
          "address": "Ahuja's, Ram Lal chowk",
          "KM": '0-3 Kms',
          "deliveryFees": "30",
          "imagePic" : "https://bellasunluci.com/public/uploads/recipes/_featured/Bellas_Mediterranean_Feast.jpg"
        },
        {
          "id": 6,
          "resturant" : "Zaika",
          "name": "Veggie Delight",
          "description": "A paradise for vegetarians with a variety of veggie options.",
          "rating": 4.6,
          "running": '30-40',
          "homeTime": '22mins',
          "address": "Residency Road, Ashok Nagar",
          "KM": '0-3 Kms',
          "deliveryFees": "20",
          "imagePic" : "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Veggie_Delight.jpg"
        },
        {
          "id": 7,
          "resturant" : "Big Bite",
          "name": "Seafood Extravaganza",
          "description": "Discover the richness of the ocean with our seafood dishes.",
          "rating": 4.7,
          "running": '30-40',
          "homeTime": '22mins',
          "address": "Ahuja's, Ram Lal chowk",
          "KM": '0-3 Kms',
          "deliveryFees": "30",
          "imagePic" : "https://i.pinimg.com/originals/67/d7/7d/67d77df97623e5656656a4ca686139a0.jpg"
        },
        {
          "id": 8,
          "resturant" : "Munchies",
          "name": "Sweet Treats Bakery",
          "description": "Indulge in a delightful array of sweet treats and pastries.",
          "rating": 4.4,
          "running": '30-40',
          "homeTime": '22mins',
          "address": "Sec. 62, Noida",
          "KM": '0-3 Kms',
          "deliveryFees": "35",
          "imagePic" : "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_800,q_75,w_1200/v1/clients/dallasites101/breadwinners101media_66_of_105__0b043dc2-12cf-450e-adaf-39eb61644e82.jpg"
        },
        {
          "id": 9,
          "resturant" : "Pizza Wings",
          "name": "Fusion Flavors",
          "description": "Experience a fusion of diverse flavors from around the world.",
          "rating": 4.1,
          "running": '30-40',
          "homeTime": '22mins',
          "address": "G.T. Road, Camp",
          "KM": '0-3 Kms',
          "deliveryFees": "30",
          "imagePic" : "https://kitchenfusions.com/cdn/shop/articles/20231120144451-cucdillcharcuterie-20crop-20copy.jpg?v=1700491514"
        },
        {
          "id": 10,
          "resturant" : "Subways",
          "name": "Cozy Coffee Corner",
          "description": "Relax and unwind with a cup of freshly brewed coffee.",
          "rating": 4.9,
          "running": '30-40',
          "homeTime": '22 mins',
          "address": "Kaccha Camp, Batra Colony",
          "KM": '0-3 Kms',
          "deliveryFees": "25",
          "imagePic" : "https://s3-media0.fl.yelpcdn.com/bphoto/Lwu2NMI_HNsls1AxG9d8tw/l.jpg"
        }
      ]

  return (
    <View>
      
      {
        restaurants.map((items, id) => {
          return(
            <View key={id}>
              <Pressable onPress={() => navigation.navigate('MoreQuick', {
                id: items.id,
                rating: items.rating,
                restaurant: items.resturant,
                description: items.description,
                running: items.running,
                address: items.address,
                homeTime: items.homeTime,
                deliveryFees: items.deliveryFees,
                km: items.KM,

              })}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 25, borderBottomWidth: 0.5}}>
                  <Image style={styles.image} source={{uri:items.imagePic}} />
                  <View>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>{items.resturant}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', marginTop: 8}}>
                      <MaterialIcons style={{marginRight: 3}} name="stars" size={18} color="green" />
                      <Text>{items.rating}</Text>
                      <Text style={{marginLeft: 10}}>{items.running}mins</Text>
                    </View>
                    <Text style={{color: 'grey', marginTop: 3}}>{items.address}</Text>
                    <Text style={{marginTop: 10, fontSize: 20}}>
                      <Ionicons name="bicycle-sharp" size={24} color="black" />
                      <Text>Free Delivery</Text>
                    </Text>
                    <Text style={{width: 200, marginTop: 15, marginBottom: 50}}>{items.description}</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          )
        })
      }
    </View>
  )
}

export default HotelMenu

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 200,
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
  }
})