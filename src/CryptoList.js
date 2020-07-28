import React from 'react';
import './CryptoList.css';


function CryptoList (props) {

    

    return (
        <div className="list-of-rate">
            <ul>
                <li>Last rate: <span>9999</span>  USD [$]</li>
                <li>Last rate: <span>8374</span>  RUB [R$]</li>
            </ul>
        </div>
    )

}

export default CryptoList;