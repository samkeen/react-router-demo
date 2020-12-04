import React, {useEffect, useState} from "react"
import './App.css';

function ItemDetail({match}) {
    useEffect(() => {
        fetchItem();
        console.log(match)
    }, []);

    const [fact, setFact] = useState({});

    const fetchItem = async () => {
        const url = `https://cat-fact.herokuapp.com/facts/${match.params.id}`;
        const data = await fetch(url)
        const fact = await data.json()
        console.log(fact)
        setFact(fact)
    }

    return (
        <div>
            <h3>{fact.text}</h3>
            <p>createdAt: {fact.createdAt}</p>
            <p>deleted: {fact.deleted}</p>
            <p>source: {fact.source}</p>
            <p>type: {fact.type}</p>
            <p>updatedAt: {fact.updatedAt}</p>
            <p>used: {fact.used}</p>
            <p>user: {fact.user}</p>
        </div>
    );
}

export default ItemDetail;
