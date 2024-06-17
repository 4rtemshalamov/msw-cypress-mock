import { useState } from 'react';

const methods = [
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
  'HEAD',
  'OPTIONS',
  'TRACE',
];

export const Example = () =>  {
  const [method, setMethod] = useState(methods[0]);
  const [endpoint, setEndpoint] = useState('https://swapi.dev/api/people/');
  const [res, setRes] = useState(null);
  const [status, setStatus] = useState<any>(null);

  const [data, setData] = useState<any>(null)
  const [user, setUser] = useState<any>()


  return (
    <div className="App">
      <h2>GitHub API mock playground</h2>
      {user}
      <label>Method</label>
      <select value={method} onChange={e => setMethod(e.target.value)}>
        {methods.map(i => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <br />
      <label>Endpoint: </label>
      <input
        type="text"
        value={endpoint}
        onChange={e => setEndpoint(e.target.value)}
      />
      <br />
      <button
        onClick={async () => {
          const res = await fetch(endpoint, { method });
          const data = await res.json();
          setRes(data);
          setStatus(res.status);
        }}
      >
        fetch
      </button>
      {data ? JSON.stringify(data,  null, 4) : null}
      {status && <div>Status: {status}</div>}

      <pre>
        <code>{res ? JSON.stringify(res, null, 4) : 'null'}</code>
      </pre>
    </div>
  );
}