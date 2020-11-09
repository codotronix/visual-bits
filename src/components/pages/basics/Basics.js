import { useState } from 'react'
import DecBinRow from './DecBinRow'

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
            <DecBinRow 
                name="A & B" 
                dec={numA&numB} 
                // onChange={setNumB} 
            />
            <DecBinRow 
                name="A | B" 
                dec={numA|numB} 
                // onChange={setNumB} 
            />
            <DecBinRow 
                name="A ^ B" 
                dec={numA^numB} 
                // onChange={setNumB} 
            />
        </div>
    )
}

export default Basics