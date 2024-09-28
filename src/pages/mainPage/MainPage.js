import React, {useState} from "react";
import Tabss from "../../components/Tabs";
import Nature from "../../components/Nature";
import Animals from "../../components/Animals";
import Books from "../../components/Books";
import Sport from "../../components/Sport";
import Five from "../../components/Five";


const VALUES = {
    nature: "Nature",
    animals: "Animals",
    books: "Books",
    sport: "Sport",
    five: "five"
}

const GetCategories = ({value}) => {
    switch (value) {
        case VALUES.nature: {
            return <Nature/>
        }
        case VALUES.animals: {
            return <Animals/>
        }
        case VALUES.books: {
            return <Books/>
        }
        case VALUES.sport: {
            return <Sport/>
        }
        case VALUES.five: {
            return  <Five/>
        }
        default: return <></>
    }
}

const MainPage = () => {

    const categorySelect = [
        {value: VALUES.nature, label:VALUES.nature},
        {value: VALUES.animals, label:VALUES.animals},
        {value: VALUES.books, label:VALUES.books},
        {value: VALUES.sport, label:VALUES.sport},
        {value: VALUES.five, label:VALUES.five},
    ]

    const [value, setValue] = useState(categorySelect?.[0].value)

    return (
        <div>
            <Tabss categoriesSelect={categorySelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>
        </div>
    )
}

export default MainPage;