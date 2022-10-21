import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMsg] = useResult();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView>

                <ResultList
                    title='Cast effextive'
                    results={filterResultByPrice('$')} 
                    />
                <ResultList
                    title='Bit Pricier'
                    results={filterResultByPrice('$$')} 
                    />
                <ResultList title='Big Spender'
                    results={filterResultByPrice('$$$')}
                     />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;