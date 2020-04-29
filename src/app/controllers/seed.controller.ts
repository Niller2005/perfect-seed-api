import {
  ApiOperationDescription,
  ApiOperationId,
  ApiOperationSummary,
  ApiResponse,
  ApiUseTag,
  Context,
  Delete,
  Get,
  HttpResponseConflict,
  HttpResponseCreated,
  HttpResponseNoContent,
  HttpResponseNotFound,
  HttpResponseOK,
  Patch,
  Post,
  Put,
  ValidateBody,
  ValidateParams,
  ValidateQuery,
} from '@foal/core';
import { getRepository } from 'typeorm';

import { Seed } from '../entities';

const seedSchema = {
  additionalProperties: false,
  properties: {
    seed: { type: 'number', maxLength: 255 },
  },
  required: ['seed'],
  type: 'object',
};

@ApiUseTag('seed')
export class SeedController {
  @Get()
  @ApiOperationId('findSeeds')
  @ApiOperationSummary('Find seeds.')
  @ApiOperationDescription(
    'The query parameters "skip" and "take" can be used for pagination. The first ' +
      'is the offset and the second is the number of elements to be returned.'
  )
  @ApiResponse(400, { description: 'Invalid query parameters.' })
  @ApiResponse(200, { description: 'Returns a list of seeds.' })
  @ValidateQuery({
    properties: {
      skip: { type: 'number' },
      take: { type: 'number' },
    },
    type: 'object',
  })
  async findSeeds(ctx: Context) {
    let skip = 0;
    let take = 20;
    if (ctx.request.query.skip != undefined) {
      skip = parseInt(ctx.request.query.skip.toString());
      take = parseInt(ctx.request.query.take.toString());
    }

    const seeds = await getRepository(Seed).find({ skip, take });
    return new HttpResponseOK(seeds);
  }

  @Get('/:seedId')
  @ApiOperationId('findSeedById')
  @ApiOperationSummary('Find a seed by ID.')
  @ApiResponse(404, { description: 'Seed not found.' })
  @ApiResponse(200, { description: 'Returns the seed.' })
  @ValidateParams({ properties: { seedId: { type: 'number' } }, type: 'object' })
  async findSeedById(ctx: Context) {
    const seed = await getRepository(Seed).findOne(ctx.request.params.seedId);

    if (!seed) {
      return new HttpResponseNotFound();
    }

    return new HttpResponseOK(seed);
  }

  @Post()
  @ApiOperationId('createSeed')
  @ApiOperationSummary('Create a new seed.')
  @ApiResponse(400, { description: 'Invalid seed.' })
  @ApiResponse(201, { description: 'Seed successfully created. Returns the seed.' })
  @ValidateBody(seedSchema)
  async createSeed(ctx: Context) {
    const seedCheck = await getRepository(Seed).find({ where: { seed: ctx.request.body.seed } });
    if (!seedCheck) {
      const seed = await getRepository(Seed).save(ctx.request.body);
      return new HttpResponseCreated(seed);
    }
    return new HttpResponseConflict({ msg: 'Seed already found' });
  }

  @Patch('/:seedId')
  @ApiOperationId('modifySeed')
  @ApiOperationSummary('Update/modify an existing seed.')
  @ApiResponse(400, { description: 'Invalid seed.' })
  @ApiResponse(404, { description: 'Seed not found.' })
  @ApiResponse(200, { description: 'Seed successfully updated. Returns the seed.' })
  @ValidateParams({ properties: { seedId: { type: 'number' } }, type: 'object' })
  @ValidateBody({ ...seedSchema, required: [] })
  async modifySeed(ctx: Context) {
    const seed = await getRepository(Seed).findOne(ctx.request.params.seedId);

    if (!seed) {
      return new HttpResponseNotFound();
    }

    Object.assign(seed, ctx.request.body);

    await getRepository(Seed).save(seed);

    return new HttpResponseOK(seed);
  }

  @Put('/:seedId')
  @ApiOperationId('replaceSeed')
  @ApiOperationSummary('Update/replace an existing seed.')
  @ApiResponse(400, { description: 'Invalid seed.' })
  @ApiResponse(404, { description: 'Seed not found.' })
  @ApiResponse(200, { description: 'Seed successfully updated. Returns the seed.' })
  @ValidateParams({ properties: { seedId: { type: 'number' } }, type: 'object' })
  @ValidateBody(seedSchema)
  async replaceSeed(ctx: Context) {
    const seed = await getRepository(Seed).findOne(ctx.request.params.seedId);

    if (!seed) {
      return new HttpResponseNotFound();
    }

    Object.assign(seed, ctx.request.body);

    await getRepository(Seed).save(seed);

    return new HttpResponseOK(seed);
  }

  @Delete('/:seedId')
  @ApiOperationId('deleteSeed')
  @ApiOperationSummary('Delete a seed.')
  @ApiResponse(404, { description: 'Seed not found.' })
  @ApiResponse(204, { description: 'Seed successfully deleted.' })
  @ValidateParams({ properties: { seedId: { type: 'string' } }, type: 'object' })
  async deleteSeed(ctx: Context) {
    const seed = await getRepository(Seed).findOne(ctx.request.params.seedId);

    if (!seed) {
      return new HttpResponseNotFound();
    }

    await getRepository(Seed).delete(ctx.request.params.seedId);

    return new HttpResponseNoContent();
  }
}
