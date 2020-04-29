import { ApiInfo, controller } from '@foal/core';

import { SeedController } from './seed.controller';

@ApiInfo({
  title: 'Minecraft Perfect Seed Finder',
  version: '1.0.0',
})
export class ApiController {
  subControllers = [controller('/seeds', SeedController)];
}
