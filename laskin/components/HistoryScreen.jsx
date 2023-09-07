import React from 'react';
import { View, Text } from 'react-native';

export default function HistoryScreen({ route, navigation}) {
    const { history } = route.params;

    return (
        <View>
            <Text>History</Text>
            <Text>{history}</Text>
        </View>
    );
};