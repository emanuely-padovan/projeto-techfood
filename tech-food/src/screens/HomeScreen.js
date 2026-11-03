import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TechFood</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
    },
});