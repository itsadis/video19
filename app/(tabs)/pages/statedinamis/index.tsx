import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState, Component } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number + 1)} />
        </View>
    );
};

class CounterClass extends Component {
    state = {
        number: 0,
    };
    render() {
        return (
            <View>
                <Text>{this.state.number}</Text>
                <Button
                    title="Tambah"
                    onPress={() => this.setState({ number: this.state.number + 1 })}
                />
            </View>
        );
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Materi Component Dinamis dengan State</Text>
            <Text style={styles.titleSection}>Function Component (Hooks)</Text>
            <Counter />
            <Counter />
            <Text style={styles.titleSection}>Class Component</Text>
            <CounterClass />
            <CounterClass />
        </View>
    );
};

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        backgroundColor: '#FFFFFF', // Warna background putih
        flex: 1, // Agar tampilan mengisi layar penuh
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    titleSection: {
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
