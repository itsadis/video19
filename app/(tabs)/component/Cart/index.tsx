import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Cart = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartWrapper}>
        <Image source={require('../Cart/icon/cart.png')} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Warna background
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#439BD1',
        width: 93,
        height: 93,
        borderRadius: 93 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 40
    },
    iconCart: {
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 8
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6FCF97',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    }
});
