import * as fs from 'fs';
import * as path from 'path';

const envFilePath = path.resolve(__dirname, '..', '..', '..', '.env');

if (fs.existsSync(envFilePath)) {
  const envFileContents = fs.readFileSync(envFilePath, 'utf8');
  const envVariables = envFileContents.split('\n');

  envVariables.forEach((envVar) => {
    const [key, value] = envVar.split('=');
    process.env[key] = value;
  });
}
