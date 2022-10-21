import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term,onTermChange, onTermSubmit}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search"
                style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value= {term}
                onChangeText = {onTermChange}
                autoCapitalize = 'none'
                autoCorrect = {false}
                onEndEditing = {onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flexDirection: 'row',
        backgroundColor: '#dbdbdb',
        height: 50,
        borderRadius: 5,
        margin: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        margin: 6
    }
});

export default SearchBar;