import React from 'react';
import './CryptoList.css';


function CryptoList (props) {

    let cryptoList = props.cryptoList.map((cryptoObject) => {

    return(<li key={cryptoObject.currency}>Last rate: <span className ={`${cryptoObject.class}`}> {cryptoObject.lastRate} {cryptoObject.arrow}</span>  {cryptoObject.currency} [{cryptoObject.symbol}]</li>)
    })

    console.log(cryptoList);

    return (
        <div className="list-of-rate">
            <ul>
                {cryptoList}
                
            </ul>
        </div>
    )

}

export default CryptoList;