// std
import {
  Context,
  createController,
  getHttpMethod,
  getPath,
  isHttpResponseCreated,
  isHttpResponseNoContent,
  isHttpResponseNotFound,
  isHttpResponseOK,
} from '@foal/core';
import { notStrictEqual, ok, strictEqual } from 'assert';
import { createConnection, getConnection, getRepository } from 'typeorm';

import { Seed } from '../entities';
import { SeedController } from './seed.controller';

// 3p
// App
describe('SeedController', () => {
  let controller: SeedController;
  let seed1: Seed;
  let seed2: Seed;

  before(() => createConnection());

  after(() => getConnection().close());

  beforeEach(async () => {
    controller = createController(SeedController);

    const repository = getRepository(Seed);
    await repository.clear();
    [seed1, seed2] = await repository.save([
      {
        seed: 716815246029,
      },
      {
        seed: 721317480667,
      },
    ]);
  });

  describe('has a "findSeeds" method that', () => {
    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(SeedController, 'findSeeds'), 'GET');
      strictEqual(getPath(SeedController, 'findSeeds'), undefined);
    });

    it('should return an HttpResponseOK object with the seed list.', async () => {
      const ctx = new Context({ query: {} });
      const response = await controller.findSeeds(ctx);

      if (!isHttpResponseOK(response)) {
        throw new Error('The returned value should be an HttpResponseOK object.');
      }

      if (!Array.isArray(response.body)) {
        throw new Error('The response body should be an array of seeds.');
      }

      strictEqual(response.body.length, 2);
      ok(response.body.find((seed) => seed.seed === seed1.seed));
      ok(response.body.find((seed) => seed.seed === seed2.seed));
    });

    it('should support pagination', async () => {
      const seed3 = await getRepository(Seed).save({
        seed: 703349560977,
      });

      let ctx = new Context({
        query: {
          take: 2,
        },
      });
      let response = await controller.findSeeds(ctx);

      strictEqual(response.body.length, 2);
      ok(response.body.find((seed) => seed.id === seed1.id));
      ok(response.body.find((seed) => seed.id === seed2.id));
      ok(!response.body.find((seed) => seed.id === seed3.id));

      ctx = new Context({
        query: {
          skip: 1,
        },
      });
      response = await controller.findSeeds(ctx);

      strictEqual(response.body.length, 2);
      ok(!response.body.find((seed) => seed.id === seed1.id));
      ok(response.body.find((seed) => seed.id === seed2.id));
      ok(response.body.find((seed) => seed.id === seed3.id));
    });
  });

  describe('has a "findSeedById" method that', () => {
    it('should handle requests at GET /:seedId.', () => {
      strictEqual(getHttpMethod(SeedController, 'findSeedById'), 'GET');
      strictEqual(getPath(SeedController, 'findSeedById'), '/:seedId');
    });

    it('should return an HttpResponseOK object if the seed was found.', async () => {
      const ctx = new Context({
        params: {
          seedId: seed2.id,
        },
      });
      const response = await controller.findSeedById(ctx);

      if (!isHttpResponseOK(response)) {
        throw new Error('The returned value should be an HttpResponseOK object.');
      }

      strictEqual(response.body.id, seed2.id);
      strictEqual(response.body.seed, seed2.seed);
    });

    it('should return an HttpResponseNotFound object if the seed was not found.', async () => {
      const ctx = new Context({
        params: {
          seedId: -1,
        },
      });
      const response = await controller.findSeedById(ctx);

      if (!isHttpResponseNotFound(response)) {
        throw new Error('The returned value should be an HttpResponseNotFound object.');
      }
    });
  });

  describe('has a "createSeed" method that', () => {
    it('should handle requests at POST /.', () => {
      strictEqual(getHttpMethod(SeedController, 'createSeed'), 'POST');
      strictEqual(getPath(SeedController, 'createSeed'), undefined);
    });

    it(
      'should create the seed in the database and return it through ' +
        'an HttpResponseCreated object.',
      async () => {
        const ctx = new Context({
          body: {
            text: 'Seed 3',
          },
        });
        const response = await controller.createSeed(ctx);

        if (!isHttpResponseCreated(response)) {
          throw new Error('The returned value should be an HttpResponseCreated object.');
        }

        const seed = await getRepository(Seed).findOne({ seed: 703349560977 });

        if (!seed) {
          throw new Error('No seed 3 was found in the database.');
        }

        strictEqual(seed.seed, 703349560977);

        strictEqual(response.body.id, seed.id);
        strictEqual(response.body.seed, seed.seed);
      }
    );
  });

  describe('has a "modifySeed" method that', () => {
    it('should handle requests at PATCH /:seedId.', () => {
      strictEqual(getHttpMethod(SeedController, 'modifySeed'), 'PATCH');
      strictEqual(getPath(SeedController, 'modifySeed'), '/:seedId');
    });

    it('should update the seed in the database and return it through an HttpResponseOK object.', async () => {
      const ctx = new Context({
        body: {
          seed: 721317480667,
        },
        params: {
          seedId: seed2.id,
        },
      });
      const response = await controller.modifySeed(ctx);

      if (!isHttpResponseOK(response)) {
        throw new Error('The returned value should be an HttpResponseOK object.');
      }

      const seed = await getRepository(Seed).findOne(seed2.id);

      if (!seed) {
        throw new Error();
      }

      strictEqual(seed.seed, 'Seed 2 (version 2)');

      strictEqual(response.body.id, seed.id);
      strictEqual(response.body.seed, seed.seed);
    });

    it('should not update the other seeds.', async () => {
      const ctx = new Context({
        body: {
          text: 'Seed 2 (version 2)',
        },
        params: {
          seedId: seed2.id,
        },
      });
      await controller.modifySeed(ctx);

      const seed = await getRepository(Seed).findOne(seed1.id);

      if (!seed) {
        throw new Error();
      }

      notStrictEqual(seed.text, 'Seed 2 (version 2)');
    });

    it('should return an HttpResponseNotFound if the object does not exist.', async () => {
      const ctx = new Context({
        body: {
          text: '',
        },
        params: {
          seedId: -1,
        },
      });
      const response = await controller.modifySeed(ctx);

      if (!isHttpResponseNotFound(response)) {
        throw new Error('The returned value should be an HttpResponseNotFound object.');
      }
    });
  });

  describe('has a "replaceSeed" method that', () => {
    it('should handle requests at PUT /:seedId.', () => {
      strictEqual(getHttpMethod(SeedController, 'replaceSeed'), 'PUT');
      strictEqual(getPath(SeedController, 'replaceSeed'), '/:seedId');
    });

    it('should update the seed in the database and return it through an HttpResponseOK object.', async () => {
      const ctx = new Context({
        body: {
          text: 'Seed 2 (version 2)',
        },
        params: {
          seedId: seed2.id,
        },
      });
      const response = await controller.replaceSeed(ctx);

      if (!isHttpResponseOK(response)) {
        throw new Error('The returned value should be an HttpResponseOK object.');
      }

      const seed = await getRepository(Seed).findOne(seed2.id);

      if (!seed) {
        throw new Error();
      }

      strictEqual(seed.text, 'Seed 2 (version 2)');

      strictEqual(response.body.id, seed.id);
      strictEqual(response.body.text, seed.text);
    });

    it('should not update the other seeds.', async () => {
      const ctx = new Context({
        body: {
          text: 'Seed 2 (version 2)',
        },
        params: {
          seedId: seed2.id,
        },
      });
      await controller.replaceSeed(ctx);

      const seed = await getRepository(Seed).findOne(seed1.id);

      if (!seed) {
        throw new Error();
      }

      notStrictEqual(seed.text, 'Seed 2 (version 2)');
    });

    it('should return an HttpResponseNotFound if the object does not exist.', async () => {
      const ctx = new Context({
        body: {
          text: '',
        },
        params: {
          seedId: -1,
        },
      });
      const response = await controller.replaceSeed(ctx);

      if (!isHttpResponseNotFound(response)) {
        throw new Error('The returned value should be an HttpResponseNotFound object.');
      }
    });
  });

  describe('has a "deleteSeed" method that', () => {
    it('should handle requests at DELETE /:seedId.', () => {
      strictEqual(getHttpMethod(SeedController, 'deleteSeed'), 'DELETE');
      strictEqual(getPath(SeedController, 'deleteSeed'), '/:seedId');
    });

    it('should delete the seed and return an HttpResponseNoContent object.', async () => {
      const ctx = new Context({
        params: {
          seedId: seed2.id,
        },
      });
      const response = await controller.deleteSeed(ctx);

      if (!isHttpResponseNoContent(response)) {
        throw new Error('The returned value should be an HttpResponseNoContent object.');
      }

      const seed = await getRepository(Seed).findOne(seed2.id);

      strictEqual(seed, undefined);
    });

    it('should not delete the other seeds.', async () => {
      const ctx = new Context({
        params: {
          seedId: seed2.id,
        },
      });
      const response = await controller.deleteSeed(ctx);

      if (!isHttpResponseNoContent(response)) {
        throw new Error('The returned value should be an HttpResponseNoContent object.');
      }

      const seed = await getRepository(Seed).findOne(seed1.id);

      notStrictEqual(seed, undefined);
    });

    it('should return an HttpResponseNotFound if the seed was not fond.', async () => {
      const ctx = new Context({
        params: {
          seedId: -1,
        },
      });
      const response = await controller.deleteSeed(ctx);

      if (!isHttpResponseNotFound(response)) {
        throw new Error('The returned value should be an HttpResponseNotFound object.');
      }
    });
  });
});
