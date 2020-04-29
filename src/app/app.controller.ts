import { controller } from '@foal/core';

import { ApiController, OpenApiController, SeedController } from './controllers';

export class AppController {
  subControllers = [
    controller('/api', ApiController),
    controller('/seeds', SeedController),
    controller('/swagger', OpenApiController),
  ];
}
