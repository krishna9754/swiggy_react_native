import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const Carousal = () => {
    const images = [
        "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
        "https://cdn.zoutons.com/images/originals/blog/Swiggy-1_1644436270.png",
        "https://happysale.in/hs/img/w/up/swiggycouponshappysalejpg1626767975151.jpg",
        "https://cdn.zoutons.com/images/originals/blog/main-banner_(87)_1639557140_1642067114.png", // Network image
      ]

  return (
    <View style={styles.container}>
          <SliderBox images={images}
          autoPlay="true"
          />
    </View>
  )
}

export default Carousal

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        
      },
    //   border:{
    //     borderRadius: 5,
    //     borderWidth: 5,
        
    //   }
})