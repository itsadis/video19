import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Cart from '../../component/Cart';
import Product from '../../component/Produk';

const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Komunikasi antar Component</Text>
        <Cart quantity={totalProduct}/>
        <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
    </View>
  )
}

export default Communication;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1, // Agar View mengisi layar
        backgroundColor: '#F2F2F2', // Warna background baru
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
