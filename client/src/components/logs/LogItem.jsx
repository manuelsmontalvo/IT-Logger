import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { getTech } from "../services/Techs";

const LogItem = ({ log: { _id, message, attention, tech, date } }) => {
  const [techName, setTechName] = useState();

  useEffect(() => {
    geTechName(tech);
    // eslint-disable-next-line
  }, []);

  const geTechName = async (tech) => {
    const res = await getTech(tech);
    const fullName = `${res.firstName} ${res.lastName}`;
    setTechName(fullName);
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          className={`modal-trigger ${
            attention === true ? "red-text" : "blue-text"
          }`}
          href='#edit-log-modal'
        >
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{_id} </span>
          <span>last updated by </span>
          <span className='black-text'>{techName}</span> on{" "}
          <Moment format='MMMM do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
