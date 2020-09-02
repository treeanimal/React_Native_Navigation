import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title='홈 화면잉다' onPress={() => navigation.navigate('Detail')} />

        </View>
    );
}

