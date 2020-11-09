import { useState } from 'react'
import DecBinRow from './DecBinRow'
import LogicCard from './LogicCard'

const Basics = props => {
    const [numA, setNumA] = useState(2)
    const [numB, setNumB] = useState(7)

    return (
        <div>
            <DecBinRow 
                name="A" 
                dec={numA} 
                onChange={setNumA} 
            />
            <DecBinRow 
                name="B" 
                dec={numB} 
                onChange={setNumB} 
            />

            {/* <div className="row"> */}
                <LogicCard 
                    nameA="A"
                    nameB="B"
                    valueA={numA}
                    valueB={numB}
                    operation="AND"
                />
                <LogicCard 
                    nameA="A"
                    nameB="B"
                    valueA={numA}
                    valueB={numB}
                    operation="OR"
                />
                <LogicCard 
                    nameA="A"
                    nameB="B"
                    valueA={numA}
                    valueB={numB}
                    operation="XOR"
                />
            {/* </div> */}
        </div>
    )
}

export default Basics