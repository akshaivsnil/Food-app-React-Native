import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Yelp from "./api/Yelp";

const ViewScreen = ({ navigation }) => {


    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')


    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);


    if (!result) {
        return null;
    };

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                key={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <Image source={{ uri: item }}
                            style={styles.Image} />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    Image : { height: 200, width: 200 }

});

export default ViewScreen;