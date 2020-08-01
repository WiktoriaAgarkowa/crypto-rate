import React, {Component} from 'react';
import './Crypto.css';
import axios from 'axios';
import CryptoList from './CryptoList';

class Crypto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cryptoList: [],
            filterList: [],

        };
    }

    componentDidMount() {
        this.getCryptoData();
        setInterval(() => this.getCryptoData(), 5000);
    }

    

    getCryptoData = () => {
        axios.get('https://blockchain.info/pl/ticker')
            .then(res => {
                const tickers = res.data;

                this.setState((state) => {
                    let newCryptoList = [];

                    for (const [ticker, cryptoRate] of Object.entries(tickers)) {
                        
                        let lastCryptoObj = state.cryptoList.find((cryptoObject) => {
                            return(cryptoObject.currency === ticker);
                        });

                        let newCryptoObj = {
                            currency: ticker,
                            symbol: cryptoRate.symbol,
                            buy: cryptoRate.buy,
                            sell: cryptoRate.sell,
                            lastRate: cryptoRate.last,
                            arrow: String.fromCharCode(8596),
                            
                        }


                        if(lastCryptoObj !== undefined) {

                            if(newCryptoObj.lastRate > lastCryptoObj.lastRate) {
                                newCryptoObj.class = 'green';
                                newCryptoObj.arrow = String.fromCharCode(8593);
                            } else if (newCryptoObj.lastRate < lastCryptoObj.lastRate){
                                newCryptoObj.class = 'red';
                                newCryptoObj.arrow = String.fromCharCode(8595);
                            } else {
                                newCryptoObj.class = 'blue';
                                newCryptoObj.arrow = String.fromCharCode(8596);
                            } 
                        } else {
                            newCryptoObj.class = "blue";
                            newCryptoObj.arrow = String.fromCharCode(8596);
                        }

                        newCryptoList.push(newCryptoObj);
                    }
                    
                    

                    return ({
                        cryptoList: newCryptoList
                    })
                    
                });
                
                this.filterRateList();
            });

    
    }

    filterRateList = () => {
        this._inputFilter.value = this._inputFilter.value.trim().toUpperCase();

        this.setState((state) => {
            let newFilteredCryptoList = state.cryptoList.filter((cryptoObject) => {
                return(cryptoObject.currency.includes(this._inputFilter.value));
            });

            return({
                filterList: newFilteredCryptoList
            });
        });
        
    }

    render() {

        return (
            <div>
                <input ref={element => this._inputFilter = element} onChange={this.filterRateList} type="text" placeholder="Filter"></input>
            
                <CryptoList cryptoList={this.state.filterList}/>
                
            </div>
        );
    }
}


export default Crypto;