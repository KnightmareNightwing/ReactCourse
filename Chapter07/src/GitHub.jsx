import React, { useEffect, useState} from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

function GitHub() {
    const [data, setData] = useState([]); 
    const [searchTerm, setSearchTerm] = useState("greg");
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => {
                //console.log(res.data.items);
                setData(res.data.items) 
                setIsLoading(false); 
            });
    }, [searchTerm])
    return (
        <div>
            {isLoading && <ReactLoading type="spinningBubbles" color="#444" /> }   
        </div>
    );
}
export default GitHub;