import { createConnection, getConnectionOptions } from 'typeorm';

getConnectionOptions().then(options => {
  Object.assign(options, {
    host: 'database',
  });

  createConnection({
    ...options,
  });
});
