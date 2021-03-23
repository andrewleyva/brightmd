import React, {useState} from 'react';
import PropTypes from "prop-types";
import Section from '../../components/Section/index.jsx'
import { EDIT, VIEW } from '../../components/Section/constants.js'
import '../../App.css';

const Branding = ({onUpdate, data, mode}) => {
    const [isEditMode, setIsEditMode] = useState(mode === VIEW ? false : true);
    const [brandingData, setBrandingData] = useState([...data]);

    function handleCancel() {
        setBrandingData([...data]);
        setIsEditMode(false);
    }

    function handleSave() {
        onUpdate(brandingData);
        setIsEditMode(false);
    }

    function handleChange(value, changeIndex) {
        setBrandingData(
            brandingData.map((item, index) => 
            (index === changeIndex ? {key: item.key, value: value} : item))
        )
    }

    return (
        <Section
        mode={isEditMode ? EDIT : VIEW}
        title={'Branding'}
        byline={'Set name, welcome page text, and other branding for your patients to see during exams.'}
        onEdit={()=>{setIsEditMode(true)}}
        onSave={()=>{handleSave()}}
        onCancel={()=>{handleCancel()}}
        >
            <h2>Display Name</h2>
            <p>Set how the organization name is displayed to patients. In instances with limited screen space (emails, mobile view) a shortened name is displayed.</p>
        <dl>
             {data.map((item, index)=>{
                 const value = (isEditMode)
                    ? <input type="text" placeholder={item.value} onChange={(e)=>handleChange(e.target.value, index)}/>
                    : item.value;

                 return (<React.Fragment key={`${index}`}>
                 <dt>{item.key}</dt>
                 <dd>{value}</dd>
                 </React.Fragment>)
            })}
        </dl>
        </Section>
    )
};

Section.propTypes = {
    onUpdate: PropTypes.func,
    data: PropTypes.array,
    mode: PropTypes.string,
};


export default Branding;
