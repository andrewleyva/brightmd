import React from "react";

const times = [
    '7:00 AM',
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
]

const Table = ({data, caption, cols, isEditMode, onChange}) => {

    function handleSelectChange(value, coords) {
        onChange(value, coords);
    }        

    function handleToggleChange(value, coords) {
        const data = value ? 'open' : 'closed';
        onChange(data, coords);

    }

    const EditControl = ({coords, value, control}) => {
        const id = `availability-${coords.index}`;
        if (control === 'checkbox') {
            return (
                <>
                <div className="toggle">
                    <input type="checkbox" id={id} defaultChecked={(value==='open')} 
                        onChange={(e)=> {
                            handleToggleChange(e.currentTarget.checked, coords)
                        }
                        }
                        />
                    <span className="slider"></span>
                </div>
                <label htmlFor={id}>{value}</label>
                </>
            )
        }
        if (control === 'select') {
            const isClosed = data[coords.index].availability === 'closed';
            if (isClosed) return '';
            return (
                <select name="openTime" id="openTime" defaultValue={value.toString()} 
                    onChange={ e => handleSelectChange(e.currentTarget.value, coords) }>
                    {
                    times.map((time, index)=> {
                    return (
                        <option defaultValue={time} key={index}>{time}</option>
                    )}
                    )}
                </select>
            )
        }
        return value
    }

    const TableCell = ({coords, value, control}) => {
        if (isEditMode) return <td><EditControl coords={coords} value={value} control={control} /></td>
        return <td>{value}</td>
    }

    const TableRow = ({row, rowIndex}) => {
        return (
        <tr>
            {cols.map((col, index)=> {
                const coords = {index: rowIndex, key: col.name}
                return <TableCell key={index} coords={coords} value={row[col.name]} control={col.control} />
            })}
        </tr>)
    }


    return (
        
    <table>
        <caption>{caption}</caption>
        <tbody>
            {data.map((row, index)=> <TableRow row={row} rowIndex={index} key={index} />)}
        </tbody>
    </table>
    )
}

export default Table;