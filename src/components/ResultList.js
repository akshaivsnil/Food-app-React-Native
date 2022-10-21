import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowResult', { id: item.id })}>
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}

            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultList);