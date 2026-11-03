import React from 'react';

import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import colors from '../styles/colors';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchContainer}>
                    <Ionicons
                        name="search-outline"
                        size={22}
                        color={colors.textSecondary}
                    />
                    <TextInput
                        placeholder="O que você deseja comer?"
                        style={styles.searchInput}
                        placeholderTextColor={colors.textSecondary}
                    />
                </View>

                <View style={styles.banner}>
                    <Text style={styles.bannerTitle}>Seu próximo pedido está aqui!</Text>
                    <Text style={styles.bannerSubtitle}>Descubra sabores incríveis no TechFood.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Categorias</Text>
                    <Text style={styles.placeholder}>Em breve: categorias do cardápio.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Mais pedidos</Text>
                    <Text style={styles.placeholder}>Em breve: nossos pratos favoritos.</Text>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: colors.surface,

    marginHorizontal: 20,
    marginTop: 15,

    paddingHorizontal: 15,
    borderRadius: 12,

    height: 50,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },

  banner: {
    backgroundColor: colors.primary,

    margin: 20,
    padding: 25,

    borderRadius: 18,
  },

  bannerTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },

  bannerSubtitle: {
    color: colors.white,
    fontSize: 14,
    marginTop: 10,
  },

  section: {
    marginHorizontal: 20,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },

  placeholder: {
    color: colors.textSecondary,
    fontSize: 14,
  },

});