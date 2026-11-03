import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/colors';

export default function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>TechFood</Text>
                <Text style={styles.subtitle}>Seu restaurante favorito!</Text>
            </View>
            <TouchableOpacity>
                <Ionicons
                    name="notifications-outline"
                    size={25}
                    color={colors.text}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingVertical: 15,

    backgroundColor: colors.background,
  },

  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.primary,
  },

  subtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 3,
  },

  iconButton: {
    padding: 10,
    backgroundColor: colors.surface,
    borderRadius: 50,
  },
});