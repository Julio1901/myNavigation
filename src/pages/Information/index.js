import React from "react";
import { View, Text } from "react-native";

export default function Information({ route }) {
    return (
        <View style={{marginTop:60}}>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.telefone}</Text>
        </View>
    )
}