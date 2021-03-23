import React, {useState} from 'react';
import PropTypes from "prop-types";
import Section from '../../components/Section/index.jsx'
import Table from '../../components/Table/index.jsx'
import { EDIT, VIEW } from '../../components/Section/constants.js'
import '../../App.css';

const colData = [
    {name: "day", control: null},
    {name: "availability", control: "checkbox"},
    {name: "openTime", control: "select"},
    {name: "closeTime", control: "select"},
]

const Hours = ({onUpdate, data, mode}) => {
    const [isEditMode, setIsEditMode] = useState(mode === VIEW ? false : true);
    const [hoursData, setHoursData] = useState([...data]);

    function handleCancel() {
        setHoursData([...data]);
        setIsEditMode(false);
    }
    function handleSave() {
        onUpdate(hoursData);
        setIsEditMode(false);
    }

    function handleChange(value, coords) {
        const {index, key} = coords;
        const newHours = hoursData.map((item, dataIndex) => {
            switch(key) {
                case "day":
                    return (index === dataIndex ? { ...item, "day": value }: item);
                case "availability":
                    return (index === dataIndex ? { ...item, "availability": value }: item);
                case "openTime":
                    return (index === dataIndex ? { ...item, "openTime": value }: item);
                case "closeTime":
                    return (index === dataIndex ? { ...item, "closeTime": value }: item);
                default:
                  return null
              }
        
        });
        setHoursData(newHours);
    }

    return (
        <Section
        mode={isEditMode ? EDIT : VIEW}
        title={'Hours of Operation'}
        byline={''}
        onEdit={()=>{setIsEditMode(true)}}
        onSave={()=>{handleSave()}}
        onCancel={()=>{handleCancel(false)}}
        >
            <Table
                cols={colData}
                data={hoursData}
                caption="Manage standard hours of operation when providers are available to provide care. Patients will be informed if they submit an exam outside of these hours."
                isEditMode={isEditMode}
                onChange={(value, coords)=> handleChange(value, coords)}
            />
        </Section>
    )
};

Section.propTypes = {
    onUpdate: PropTypes.func,
    data: PropTypes.array,
    mode: PropTypes.string,
};


export default Hours;
