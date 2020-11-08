import { useState } from 'react'

const initVal = {
    dec: 0,
    bin: '00000000'
}

const DecBinRow = props => {
    const { name } = props
    const [value, setValue] = useState(initVal)

    const onChangeDec = e => {
        const dec = parseInt(e.target.value)
        if(isNaN(dec)) return

        else if(dec < 0 || dec > 255) return alert('The decimal number must be in the range 0 <= n <= 255')

        else {
            const bin = converDecToBin8bitString(dec)
            setValue({ dec, bin })
        }
    }

    const onChangeBin = (e, i) => {
        const val = parseInt(e.target.value)
        if( isNaN(val) || val < 0 || val > 1 ) return alert('A binary digit must be either 0 or 1')

        let bin = value.bin.split('')
        bin[i] = val
        bin = bin.join('')

        const dec = parseInt(bin, 2)
        setValue({ dec, bin })
    }

    const handleShift = direction => {
        const dec = direction === 'LEFT' ? value.dec << 1 : value.dec >> 1
        const bin = converDecToBin8bitString(dec)
        setValue({ dec, bin })
    }

    /**
     * Supply it a decimal integer and
     * it will return an 8 bit binary string
     * @param {*} n 
     */
    const converDecToBin8bitString = n => n.toString(2).padStart(8, '0')

    return (
        <div className="row dec-bin-row shadow">
            <div className="col-sm-12 col-md-2 name">{name}</div>
            <div className="col-sm-12 col-md-2">
                <div className="form-group">
                    <label htmlFor={'decimal'+name}>Dec</label>
                    <input type="text" 
                        className="form-control" 
                        id={'decimal'+name} 
                        value={value.dec} 
                        onChange={onChangeDec}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-8 d-flex binaries">
                {
                    value.bin.split('').map( (b, i) =>
                    <div className="form-group mr-2" key={i}>
                        <label htmlFor={`bits-${name}-${7-i}`}>2<sup>{7-i}</sup></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id={`bits-${name}-${8-i}`} 
                            value={b} 
                            onChange={e => onChangeBin(e, i)}
                        />
                    </div>
                    )
                }
                
            </div>
            <div className="col-sm-12 btn-panel">
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={() => handleShift('LEFT')}
                >
                    <i className="fas fa-angle-double-left"></i> Left Shift 
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary ml-2"
                    onClick={() => handleShift('RIGHT')}
                > 
                    Right Shift <i className="fas fa-angle-double-right"></i>
                </button>
            </div>
        </div>
    )
}

export default DecBinRow