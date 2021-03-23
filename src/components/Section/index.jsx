import React from "react";
import PropTypes from "prop-types";
import Button from '../Button/index.jsx'
import { EDIT, VIEW } from './constants.js'

const Section = ({ 
  mode, 
  title, 
  byline, 
  onEdit, 
  onSave,
  onCancel,
  children 
  }) => {

  const ActionButtons = () => {

    let actionButtons = null;
    if (mode === VIEW) {
      actionButtons = <Button link onClick={()=>{onEdit()}}>Edit</Button>
    }
    if (mode === EDIT) {
      actionButtons = <>
        <Button secondary onClick={()=>{onCancel()}}>Cancel</Button>
        <Button primary onClick={()=>{onSave()}}>Save</Button>
      </>
    }
    return <div className="buttons">{actionButtons}</div>
  }

  return (
    <section>
        <h1>{title}</h1>
        <ActionButtons />
        <p>{byline}</p>
        {children}
    </section>
  );
};

Section.defaultProps = {
  // mode: true,
};

Section.propTypes = {
  mode: PropTypes.string,
};

export default Section;
