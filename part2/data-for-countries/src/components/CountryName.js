import React, { useState } from "react";
import ShowButton from "./ShowButton";
import CountryDetails from "./CountryDetails";

const CountryName = ({countries, country}) => {

    const [showDetail, setShowDetail] = useState(false);


    const handleShowClick = () => {
        setShowDetail(true);
    };

    if (showDetail === true) {
        return (
            <CountryDetails key={country.name} country={country} />

        )
    }

    return (
        <div>
            <h2>{country.name} <ShowButton text="show" onClick={handleShowClick} /></h2>
        </div>
    )
}

export default CountryName;
