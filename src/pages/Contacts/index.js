import React from "react";
import { View, Text } from "react-native";


export default function Contacts({navigation}) {
    return (
        <View style={{marginTop:60}}>
            <View>
                <Text>Nome: Julio Cesar</Text>
                <Text>Telefone: (11) 99999-9999</Text>
                <Text>Contacts</Text>
                <Text onPress={()=> navigation.navigate('Information', {nome: 'Julio Cesar', telefone: '(11) 99999-9999'})}>Information ...</Text>
            </View>
            <View style={{marginTop:20}} >
                <Text>Nome: Edjane</Text>
                <Text>Telefone: (11) 99999-9999</Text>
                <Text>Contacts</Text>
                <Text onPress={()=> navigation.navigate('Information', {nome: 'Edjane', telefone: '(11) 99999-9999'})}>Information ...</Text>
            </View>
        </View>
    )
}