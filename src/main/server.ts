import "module-alias/register";

import "@/main/config/module-alias";
import "reflect-metadata";
import { PgConnection } from '@/infra/postgres/helpers'

//import app from '@/main/coenv";
import env from "@/shared/env";

PgConnection.getInstance().connect()
  .then(async () => {
    const { app }  = await import('@/main/config/app');
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)

//app.listen(env.port as number, env.host, () => console.log(`server running at: http://localhost:${env.port}`));







