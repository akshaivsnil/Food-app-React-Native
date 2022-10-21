import React , {useState , useEffect} from "react";
import Yelp from "../api/Yelp";

export default () => {

    const [results, setResult] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses)
            setErrorMsg('')
        } catch (err) {
            setErrorMsg('Somthing went wrong')
        }
    };


    useEffect(() => {
        searchApi('pasta')
    }, []);


    return [searchApi , results , errorMsg];
};