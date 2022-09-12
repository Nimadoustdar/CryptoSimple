import React, { useEffect, useState } from 'react'

// API
import { getCoin } from '../services/api'

// Components
import Coin from './Coin'
import Loader from './Loader'

// Styles
import styles from "./Landing.module.css";
const Landing = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin()
            setCoins(data)
        }
        fetchApi()
    }, [])
    const handleSearch = (event) => {
        setSearch(event.target.value)

    }
    const searchCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search)

    )
    return (
        < >

            {
                coins.length ?
                    <>
                        <input
                            className={styles.input}
                            type='text'
                            value={search}
                            onChange={handleSearch}
                            placeholder='Search Your Coin'
                        />
                        <div className={styles.coinContainer}>
                            {
                                searchCoins.map(coin => <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    marketCap={coin.market_cap}
                                    priceChange={coin.price_change_percentage_24h}
                                />
                                )
                            }
                        </div>
                    </>
                    :
                    <Loader />
            }

        </>
    )
}

export default Landing