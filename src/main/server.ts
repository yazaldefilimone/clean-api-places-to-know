import "../main/config/module-alias";
import app from '../main/config/app';
import env from "../main/config/env";


app.listen(env.port, env.host, () => console.log(`server running at: http://localhost:${env.port}`));







