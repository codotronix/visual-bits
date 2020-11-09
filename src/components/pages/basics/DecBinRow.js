import clsx from 'clsx'

const DecBinRow = props => {
    const { name, dec, onChange } = props

    /**
     * Whenever user types in decimal field.
     * @param {*} e 
     */
    const onChangeDec = e => {
        const newDec = parseInt(e.target.value)
        if(isNaN(newDec)) return

        else if(newDec < 0 || newDec > 255) return alert('The decimal number must be in the range 0 <= n <= 255')

        else onChange && onChange(newDec)
    }

    /**
     * Whenever user changes in one of bin fields
     * @param {*} e | event
     * @param {*} i | Index of the field corresponding to binary array
     */
    const onChangeBin = (e, i) => {
        const val = parseInt(e.target.value)
        if( isNaN(val) || val < 0 || val > 1 ) return alert('A binary digit must be either 0 or 1')

        let bin = converDecToBin8bitString(dec).split('')
        bin[i] = val
        bin = bin.join('')

        const newDec = parseInt(bin, 2)
        onChange && onChange(newDec)
    }

    /**
     * Binary Shift Operator
     * @param {*} direction | 'LEFT' or 'RIGHT'
     */
    const handleShift = direction => {
        const newDec = direction === 'LEFT' ? dec << 1 : dec >> 1
        onChange && onChange(newDec)
    }

    /**
     * Supply it a decimal integer and
     * it will return an 8 bit binary string
     * @param {*} n 
     */
    const converDecToBin8bitString = n => n.toString(2).padStart(8, '0').substr(0, 8)

    return (
        <div className="row dec-bin-row shadow">
            <div className="col-sm-12 col-md-2 name">{name}</div>
            <div className="col-sm-12 col-md-2">
                <div className="form-group">
                    <label htmlFor={'decimal'+name}>Dec</label>
                    <input type="text" 
                        className="form-control" 
                        id={'decimal'+name} 
                        value={dec} 
                        onChange={onChangeDec}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-8 d-flex binaries">
                {
                    converDecToBin8bitString(dec).split('').map( (b, i) =>
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
            <div className={clsx("col-sm-12 btn-panel", !onChange && 'd-none')}>
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