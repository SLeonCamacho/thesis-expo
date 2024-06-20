import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "../data/apps.js";

const Item = ({ name, description, language, love, url }) => (
    <View style={styles.item}>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{language}</Text>
        <Text>{love}</Text>
        <Text>{url}</Text>
    </View>
);

const AppsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item }) => <Item name={item.name} description={item.description} language={item.language} love={item.love} url={item.url} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 4,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
});

export default AppsList;
