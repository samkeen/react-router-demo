import React, {useEffect, useState} from "react"
import './App.css';
import {Link} from "react-router-dom"


function CatFacts() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [facts, setFacts] = useState([]);

    const fetchItems = async () => {
        const url = "https://cat-fact.herokuapp.com/facts";
        const data = await fetch(url)
        const items = await data.json()
        setFacts(items.all);
    }

    return (
        <div>
            {facts.map(fact => (
                <h1 key={fact._id}>
                    <Link to={`/shop/${fact._id}`}>{fact.text}</Link>
                </h1>
            ))}
        </div>
    );
}

export default CatFacts;
