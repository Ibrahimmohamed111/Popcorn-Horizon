import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MovieSelectionScreen = ({ movies }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default MovieSelectionScreen;
