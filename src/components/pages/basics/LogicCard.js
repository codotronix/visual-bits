import { useState, useEffect } from 'react'

/**
 * Supply it a decimal integer and
 * it will return an 8 bit binary string
 * @param {*} n 
 */
const converDecToBin8bitString = n => n.toString(2).padStart(8, '0').substr(0, 8)


const LogicCard = props => {
    const { nameA, nameB, valueA, valueB, operation } = props
    const [decArr, setDecArr] = useState([0, 0, 0])
    const [title, setTitle] = useState('')
    const binIndex = [7, 6, 5, 4, 3, 2, 1, 0]

    useEffect(() => {
        const newDecimalArray = []
        newDecimalArray.push(isNaN(valueA) ? 0 : valueA)
        newDecimalArray.push(isNaN(valueB) ? 0 : valueB)
        let result = 0
        if (operation === 'AND') {
            result = newDecimalArray[0] & newDecimalArray[1]
            setTitle(`${nameA} & ${nameB}`)
        }
        else if (operation === 'OR') {
            result = newDecimalArray[0] | newDecimalArray[1]
            setTitle(`${nameA} | ${nameB}`)
        }
        else if (operation === 'XOR') {
            result = newDecimalArray[0] ^ newDecimalArray[1]
            setTitle(`${nameA} ^ ${nameB}`)
        }

        newDecimalArray.push(result)
        setDecArr(newDecimalArray)
    }, 
    [valueA, valueB])

    return (
        <div className="row logic-card shadow">
            <div className="col-sm-12 overflow-auto">
                <div className="title">{title}</div>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>D</th>
                        {
                            binIndex.map(i => <th>2<sup>{i}</sup></th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        decArr.map((d, i) => 
                        <tr key={i}>
                            <td>{d}</td>
                            {
                                converDecToBin8bitString(d).split('').map((b,j) => 
                                <td key={j}>{b}</td>
                                )
                            }
                        </tr>)
                    }
                </tbody>
                </table>
            </div>
        </div>
    )

}

export default LogicCard