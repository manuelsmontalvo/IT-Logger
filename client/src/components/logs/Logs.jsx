import React, { useState, useEffect } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import { getLogs } from "../services/Logs";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    logArray();
    // eslint-disable-next-line
  }, []);

  const logArray = async () => {
    const res = await getLogs();
    setLogs((prevState) => [...prevState, ...res.data]);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'> No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log._id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
