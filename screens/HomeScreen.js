import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation()

    const handleLogout = () => {
        auth.signOut()
            .then(userCredentials => {
                navigation.navigate('Login')
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container} >
            <Text>Email : {auth.currentUser ? auth.currentUser.email : '-'}</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Çıkış Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#0782f9',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '60%',
        marginTop: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
})