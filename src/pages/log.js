import { useParams, Link } from 'react-router-dom';
import { getLog } from '../data';

export default function Log() {
  let params = useParams();
  let log = getLog(parseInt(params.logId, 10));
  return (
    <main>
      <Link to="/loglist">Return to list</Link>
      <h2>
        {log.name} ({log.date})
      </h2>
      <h3>Start Location: {log.startloc}</h3>
      <h3>End Location: {log.endloc}</h3>
      <p>{log.notes}</p>
      <div>{}</div>
    </main>
  );
}
