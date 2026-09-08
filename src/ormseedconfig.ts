import ormconfig from '@app/ormconfig';
import { ConnectionOptions } from 'typeorm';

const ormseedconfig: ConnectionOptions = {
  ...ormconfig,
  migrations: ['src/seeds/*.ts'],
  cli: {
    migrationsDir: 'src/seeds',
  },
};

export default ormseedconfig;
