//import "module-alias/register";
import "./config/module-alias";
import "reflect-metadata";
import { PgConnection } from '@/infra/postgres/helpers'

import env from "@/shared/env";

PgConnection.getInstance().connect()
  .then(async () => {
    const { app }  = await import('@/main/config/app');
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)








