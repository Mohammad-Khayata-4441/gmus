
import { ConfigModule } from '@nestjs/config';
import dbConfig from 'src/config/db.config';

ConfigModule.forRoot({
  isGlobal: true,
  load: [dbConfig],
  envFilePath: [`.env.${process.env.NODE_ENV}`],
});


const config = dbConfig()
console.log(config)
export default dbConfig();
export {config}