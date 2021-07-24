import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log: { id, message, attention, tech, date } }) => {
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
          <span className='black-text'>ID #{id} </span>
          <span>last updated by </span>
          <span className='black-text'>{tech}</span> on{" "}
          <Moment format='MMMM do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
