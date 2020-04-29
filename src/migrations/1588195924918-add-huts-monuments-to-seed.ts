import {MigrationInterface, QueryRunner} from "typeorm";

export class addHutsMonumentsToSeed1588195924918 implements MigrationInterface {
    name = 'addHutsMonumentsToSeed1588195924918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer NOT NULL, "ocean" float(10,6) NOT NULL, "desert" float(10,6) NOT NULL, "plains" float(10,6) NOT NULL, "jungle" float(10,6) NOT NULL, "forest" float(10,6) NOT NULL, "swamp" float(10,6) NOT NULL, "savanna" float(10,6) NOT NULL, "taiga" float(10,6) NOT NULL, "badlands" float(10,6) NOT NULL, "badlands_plateau" float(10,6) NOT NULL, "bamboo_jungle" float(10,6) NOT NULL, "bamboo_jungle_hills" float(10,6) NOT NULL, "basalt_deltas" float(10,6) NOT NULL, "beach" float(10,6) NOT NULL, "birch_forest" float(10,6) NOT NULL, "birch_forest_hills" float(10,6) NOT NULL, "cold_ocean" float(10,6) NOT NULL, "crimson_forest" float(10,6) NOT NULL, "dark_forest" float(10,6) NOT NULL, "dark_forest_hills" float(10,6) NOT NULL, "deep_cold_ocean" float(10,6) NOT NULL, "deep_frozen_ocean" float(10,6) NOT NULL, "deep_lukewarm_ocean" float(10,6) NOT NULL, "deep_ocean" float(10,6) NOT NULL, "deep_warm_ocean" float(10,6) NOT NULL, "desert_hills" float(10,6) NOT NULL, "desert_lakes" float(10,6) NOT NULL, "end_barrens" float(10,6) NOT NULL, "end_highlands" float(10,6) NOT NULL, "end_midlands" float(10,6) NOT NULL, "eroded_badlands" float(10,6) NOT NULL, "flower_forest" float(10,6) NOT NULL, "frozen_ocean" float(10,6) NOT NULL, "frozen_river" float(10,6) NOT NULL, "giant_spruce_taiga" float(10,6) NOT NULL, "giant_spruce_taiga_hills" float(10,6) NOT NULL, "giant_tree_taiga" float(10,6) NOT NULL, "giant_tree_taiga_hills" float(10,6) NOT NULL, "gravelly_mountains" float(10,6) NOT NULL, "ice_spikes" float(10,6) NOT NULL, "jungle_edge" float(10,6) NOT NULL, "jungle_hills" float(10,6) NOT NULL, "lukewarm_ocean" float(10,6) NOT NULL, "modified_badlands_plateau" float(10,6) NOT NULL, "modified_gravelly_mountains" float(10,6) NOT NULL, "modified_jungle" float(10,6) NOT NULL, "modified_jungle_edge" float(10,6) NOT NULL, "modified_wooded_badlands_plateau" float(10,6) NOT NULL, "mountain_edge" float(10,6) NOT NULL, "mountains" float(10,6) NOT NULL, "mushroom_fields" float(10,6) NOT NULL, "mushroom_field_shore" float(10,6) NOT NULL, "nether_wastes" float(10,6) NOT NULL, "river" float(10,6) NOT NULL, "savanna_plateau" float(10,6) NOT NULL, "shattered_savanna" float(10,6) NOT NULL, "shattered_savanna_plateau" float(10,6) NOT NULL, "small_end_islands" float(10,6) NOT NULL, "snowy_beach" float(10,6) NOT NULL, "snowy_mountains" float(10,6) NOT NULL, "snowy_taiga" float(10,6) NOT NULL, "snowy_taiga_hills" float(10,6) NOT NULL, "snowy_taiga_mountains" float(10,6) NOT NULL, "snowy_tundra" float(10,6) NOT NULL, "soul_sand_valley" float(10,6) NOT NULL, "stone_shore" float(10,6) NOT NULL, "sunflower_plains" float(10,6) NOT NULL, "swamp_hills" float(10,6) NOT NULL, "taiga_hills" float(10,6) NOT NULL, "taiga_mountains" float(10,6) NOT NULL, "tall_birch_forest" float(10,6) NOT NULL, "tall_birch_hills" float(10,6) NOT NULL, "the_end" float(10,6) NOT NULL, "the_void" float(10,6) NOT NULL, "warm_ocean" float(10,6) NOT NULL, "warped_forest" float(10,6) NOT NULL, "wooded_badlands_plateau" float(10,6) NOT NULL, "wooded_hills" float(10,6) NOT NULL, "wooded_mountains" float(10,6) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "huts" integer NOT NULL, "monuments" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_seed"("id", "seed", "ocean", "desert", "plains", "jungle", "forest", "swamp", "savanna", "taiga", "badlands", "badlands_plateau", "bamboo_jungle", "bamboo_jungle_hills", "basalt_deltas", "beach", "birch_forest", "birch_forest_hills", "cold_ocean", "crimson_forest", "dark_forest", "dark_forest_hills", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", "desert_hills", "desert_lakes", "end_barrens", "end_highlands", "end_midlands", "eroded_badlands", "flower_forest", "frozen_ocean", "frozen_river", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills", "gravelly_mountains", "ice_spikes", "jungle_edge", "jungle_hills", "lukewarm_ocean", "modified_badlands_plateau", "modified_gravelly_mountains", "modified_jungle", "modified_jungle_edge", "modified_wooded_badlands_plateau", "mountain_edge", "mountains", "mushroom_fields", "mushroom_field_shore", "nether_wastes", "river", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "small_end_islands", "snowy_beach", "snowy_mountains", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra", "soul_sand_valley", "stone_shore", "sunflower_plains", "swamp_hills", "taiga_hills", "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "the_end", "the_void", "warm_ocean", "warped_forest", "wooded_badlands_plateau", "wooded_hills", "wooded_mountains", "created_at", "updated_at") SELECT "id", "seed", "ocean", "desert", "plains", "jungle", "forest", "swamp", "savanna", "taiga", "badlands", "badlands_plateau", "bamboo_jungle", "bamboo_jungle_hills", "basalt_deltas", "beach", "birch_forest", "birch_forest_hills", "cold_ocean", "crimson_forest", "dark_forest", "dark_forest_hills", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", "desert_hills", "desert_lakes", "end_barrens", "end_highlands", "end_midlands", "eroded_badlands", "flower_forest", "frozen_ocean", "frozen_river", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills", "gravelly_mountains", "ice_spikes", "jungle_edge", "jungle_hills", "lukewarm_ocean", "modified_badlands_plateau", "modified_gravelly_mountains", "modified_jungle", "modified_jungle_edge", "modified_wooded_badlands_plateau", "mountain_edge", "mountains", "mushroom_fields", "mushroom_field_shore", "nether_wastes", "river", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "small_end_islands", "snowy_beach", "snowy_mountains", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra", "soul_sand_valley", "stone_shore", "sunflower_plains", "swamp_hills", "taiga_hills", "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "the_end", "the_void", "warm_ocean", "warped_forest", "wooded_badlands_plateau", "wooded_hills", "wooded_mountains", "created_at", "updated_at" FROM "seed"`, undefined);
        await queryRunner.query(`DROP TABLE "seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_seed" RENAME TO "seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer NOT NULL, "ocean" float(10,6) NOT NULL, "desert" float(10,6) NOT NULL, "plains" float(10,6) NOT NULL, "jungle" float(10,6) NOT NULL, "forest" float(10,6) NOT NULL, "swamp" float(10,6) NOT NULL, "savanna" float(10,6) NOT NULL, "taiga" float(10,6) NOT NULL, "badlands" float(10,6) NOT NULL, "badlands_plateau" float(10,6) NOT NULL, "bamboo_jungle" float(10,6) NOT NULL, "bamboo_jungle_hills" float(10,6) NOT NULL, "basalt_deltas" float(10,6) NOT NULL, "beach" float(10,6) NOT NULL, "birch_forest" float(10,6) NOT NULL, "birch_forest_hills" float(10,6) NOT NULL, "cold_ocean" float(10,6) NOT NULL, "crimson_forest" float(10,6) NOT NULL, "dark_forest" float(10,6) NOT NULL, "dark_forest_hills" float(10,6) NOT NULL, "deep_cold_ocean" float(10,6) NOT NULL, "deep_frozen_ocean" float(10,6) NOT NULL, "deep_lukewarm_ocean" float(10,6) NOT NULL, "deep_ocean" float(10,6) NOT NULL, "deep_warm_ocean" float(10,6) NOT NULL, "desert_hills" float(10,6) NOT NULL, "desert_lakes" float(10,6) NOT NULL, "end_barrens" float(10,6) NOT NULL, "end_highlands" float(10,6) NOT NULL, "end_midlands" float(10,6) NOT NULL, "eroded_badlands" float(10,6) NOT NULL, "flower_forest" float(10,6) NOT NULL, "frozen_ocean" float(10,6) NOT NULL, "frozen_river" float(10,6) NOT NULL, "giant_spruce_taiga" float(10,6) NOT NULL, "giant_spruce_taiga_hills" float(10,6) NOT NULL, "giant_tree_taiga" float(10,6) NOT NULL, "giant_tree_taiga_hills" float(10,6) NOT NULL, "gravelly_mountains" float(10,6) NOT NULL, "ice_spikes" float(10,6) NOT NULL, "jungle_edge" float(10,6) NOT NULL, "jungle_hills" float(10,6) NOT NULL, "lukewarm_ocean" float(10,6) NOT NULL, "modified_badlands_plateau" float(10,6) NOT NULL, "modified_gravelly_mountains" float(10,6) NOT NULL, "modified_jungle" float(10,6) NOT NULL, "modified_jungle_edge" float(10,6) NOT NULL, "modified_wooded_badlands_plateau" float(10,6) NOT NULL, "mountain_edge" float(10,6) NOT NULL, "mountains" float(10,6) NOT NULL, "mushroom_fields" float(10,6) NOT NULL, "mushroom_field_shore" float(10,6) NOT NULL, "nether_wastes" float(10,6) NOT NULL, "river" float(10,6) NOT NULL, "savanna_plateau" float(10,6) NOT NULL, "shattered_savanna" float(10,6) NOT NULL, "shattered_savanna_plateau" float(10,6) NOT NULL, "small_end_islands" float(10,6) NOT NULL, "snowy_beach" float(10,6) NOT NULL, "snowy_mountains" float(10,6) NOT NULL, "snowy_taiga" float(10,6) NOT NULL, "snowy_taiga_hills" float(10,6) NOT NULL, "snowy_taiga_mountains" float(10,6) NOT NULL, "snowy_tundra" float(10,6) NOT NULL, "soul_sand_valley" float(10,6) NOT NULL, "stone_shore" float(10,6) NOT NULL, "sunflower_plains" float(10,6) NOT NULL, "swamp_hills" float(10,6) NOT NULL, "taiga_hills" float(10,6) NOT NULL, "taiga_mountains" float(10,6) NOT NULL, "tall_birch_forest" float(10,6) NOT NULL, "tall_birch_hills" float(10,6) NOT NULL, "the_end" float(10,6) NOT NULL, "the_void" float(10,6) NOT NULL, "warm_ocean" float(10,6) NOT NULL, "warped_forest" float(10,6) NOT NULL, "wooded_badlands_plateau" float(10,6) NOT NULL, "wooded_hills" float(10,6) NOT NULL, "wooded_mountains" float(10,6) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "huts" integer NOT NULL, "monuments" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_seed"("id", "seed", "ocean", "desert", "plains", "jungle", "forest", "swamp", "savanna", "taiga", "badlands", "badlands_plateau", "bamboo_jungle", "bamboo_jungle_hills", "basalt_deltas", "beach", "birch_forest", "birch_forest_hills", "cold_ocean", "crimson_forest", "dark_forest", "dark_forest_hills", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", "desert_hills", "desert_lakes", "end_barrens", "end_highlands", "end_midlands", "eroded_badlands", "flower_forest", "frozen_ocean", "frozen_river", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills", "gravelly_mountains", "ice_spikes", "jungle_edge", "jungle_hills", "lukewarm_ocean", "modified_badlands_plateau", "modified_gravelly_mountains", "modified_jungle", "modified_jungle_edge", "modified_wooded_badlands_plateau", "mountain_edge", "mountains", "mushroom_fields", "mushroom_field_shore", "nether_wastes", "river", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "small_end_islands", "snowy_beach", "snowy_mountains", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra", "soul_sand_valley", "stone_shore", "sunflower_plains", "swamp_hills", "taiga_hills", "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "the_end", "the_void", "warm_ocean", "warped_forest", "wooded_badlands_plateau", "wooded_hills", "wooded_mountains", "created_at", "updated_at", "huts", "monuments") SELECT "id", "seed", "ocean", "desert", "plains", "jungle", "forest", "swamp", "savanna", "taiga", "badlands", "badlands_plateau", "bamboo_jungle", "bamboo_jungle_hills", "basalt_deltas", "beach", "birch_forest", "birch_forest_hills", "cold_ocean", "crimson_forest", "dark_forest", "dark_forest_hills", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", "desert_hills", "desert_lakes", "end_barrens", "end_highlands", "end_midlands", "eroded_badlands", "flower_forest", "frozen_ocean", "frozen_river", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills", "gravelly_mountains", "ice_spikes", "jungle_edge", "jungle_hills", "lukewarm_ocean", "modified_badlands_plateau", "modified_gravelly_mountains", "modified_jungle", "modified_jungle_edge", "modified_wooded_badlands_plateau", "mountain_edge", "mountains", "mushroom_fields", "mushroom_field_shore", "nether_wastes", "river", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "small_end_islands", "snowy_beach", "snowy_mountains", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra", "soul_sand_valley", "stone_shore", "sunflower_plains", "swamp_hills", "taiga_hills", "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "the_end", "the_void", "warm_ocean", "warped_forest", "wooded_badlands_plateau", "wooded_hills", "wooded_mountains", "created_at", "updated_at", "huts", "monuments" FROM "seed"`, undefined);
        await queryRunner.query(`DROP TABLE "seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_seed" RENAME TO "seed"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seed" RENAME TO "temporary_seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer NOT NULL, "ocean" float(10,6) NOT NULL, "desert" float(10,6) NOT NULL, "plains" float(10,6) NOT NULL, "jungle" float(10,6) NOT NULL, "forest" float(10,6) NOT NULL, "swamp" float(10,6) NOT NULL, "savanna" float(10,6) NOT NULL, "taiga" float(10,6) NOT NULL, "badlands" float(10,6) NOT NULL, "badlands_plateau" float(10,6) NOT NULL, "bamboo_jungle" float(10,6) NOT NULL, "bamboo_jungle_hills" float(10,6) NOT NULL, "basalt_deltas" float(10,6) NOT NULL, "beach" float(10,6) NOT NULL, "birch_forest" float(10,6) NOT NULL, "birch_forest_hills" float(10,6) NOT NULL, "cold_ocean" float(10,6) NOT NULL, "crimson_forest" float(10,6) NOT NULL, "dark_forest" float(10,6) NOT NULL, "dark_forest_hills" float(10,6) NOT NULL, "deep_cold_ocean" float(10,6) NOT NULL, "deep_frozen_ocean" float(10,6) NOT NULL, "deep_lukewarm_ocean" float(10,6) NOT NULL, "deep_ocean" float(10,6) NOT NULL, "deep_warm_ocean" float(10,6) NOT NULL, "desert_hills" float(10,6) NOT NULL, "desert_lakes" float(10,6) NOT NULL, "end_barrens" float(10,6) NOT NULL, "end_highlands" float(10,6) NOT NULL, "end_midlands" float(10,6) NOT NULL, "eroded_badlands" float(10,6) NOT NULL, "flower_forest" float(10,6) NOT NULL, "frozen_ocean" float(10,6) NOT NULL, "frozen_river" float(10,6) NOT NULL, "giant_spruce_taiga" float(10,6) NOT NULL, "giant_spruce_taiga_hills" float(10,6) NOT NULL, "giant_tree_taiga" float(10,6) NOT NULL, "giant_tree_taiga_hills" float(10,6) NOT NULL, "gravelly_mountains" float(10,6) NOT NULL, "ice_spikes" float(10,6) NOT NULL, "jungle_edge" float(10,6) NOT NULL, "jungle_hills" float(10,6) NOT NULL, "lukewarm_ocean" float(10,6) NOT NULL, "modified_badlands_plateau" float(10,6) NOT NULL, "modified_gravelly_mountains" float(10,6) NOT NULL, "modified_jungle" float(10,6) NOT NULL, "modified_jungle_edge" float(10,6) NOT NULL, "modified_wooded_badlands_plateau" float(10,6) NOT NULL, "mountain_edge" float(10,6) NOT NULL, "mountains" float(10,6) NOT NULL, "mushroom_fields" float(10,6) NOT NULL, "mushroom_field_shore" float(10,6) NOT NULL, "nether_wastes" float(10,6) NOT NULL, "river" float(10,6) NOT NULL, "savanna_plateau" float(10,6) NOT NULL, "shattered_savanna" float(10,6) NOT NULL, "shattered_savanna_plateau" float(10,6) NOT NULL, "small_end_islands" float(10,6) NOT NULL, "snowy_beach" float(10,6) NOT NULL, "snowy_mountains" float(10,6) NOT NULL, "snowy_taiga" float(10,6) NOT NULL, "snowy_taiga_hills" float(10,6) NOT NULL, "snowy_taiga_mountains" float(10,6) NOT NULL, "snowy_tundra" float(10,6) NOT NULL, "soul_sand_valley" float(10,6) NOT NULL, "stone_shore" float(10,6) NOT NULL, "sunflower_plains" float(10,6) NOT NULL, "swamp_hills" float(10,6) NOT NULL, "taiga_hills" float(10,6) NOT NULL, "taiga_mountains" float(10,6) NOT NULL, "tall_birch_forest" float(10,6) NOT NULL, "tall_birch_hills" float(10,6) NOT NULL, "the_end" float(10,6) NOT NULL, "the_void" float(10,6) NOT NULL, "warm_ocean" float(10,6) NOT NULL, "warped_forest" float(10,6) NOT NULL, "wooded_badlands_plateau" float(10,6) NOT NULL, "wooded_hills" float(10,6) NOT NULL, "wooded_mountains" float(10,6) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "huts" integer NOT NULL, "monuments" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "seed"("id", "seed", "ocean", "desert", "plains", "jungle", "forest", "swamp", "savanna", "taiga", "badlands", "badlands_plateau", "bamboo_jungle", "bamboo_jungle_hills", "basalt_deltas", "beach", "birch_forest", "birch_forest_hills", "cold_ocean", "crimson_forest", "dark_forest", "dark_forest_hills", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", "desert_hills", "desert_lakes", "end_barrens", "end_highlands", "end_midlands", "eroded_badlands", "flower_forest", "frozen_ocean", "frozen_river", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills", "gravelly_mountains", "ice_spikes", "jungle_edge", "jungle_hills", "lukewarm_ocean", "modified_badlands_plateau", "modified_gravelly_mountains", "modified_jungle", "modified_jungle_edge", "modified_wooded_badlands_plateau", "mountain_edge", "mountains", "mushroom_fields", "mushroom_field_shore", "nether_wastes", "river", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "small_end_islands", "snowy_beach", "snowy_mountains", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra", "soul_sand_valley", "stone_shore", "sunflower_plains", "swamp_hills", "taiga_hills", "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "the_end", "the_void", "warm_ocean", "warped_forest", "wooded_badlands_plateau", "wooded_hills", "wooded_mountains", "created_at", "updated_at", "huts", "monuments") SELECT "id", "seed", "ocean", "desert", "plains", "jungle", "forest", "swamp", "savanna", "taiga", "badlands", "badlands_plateau", "bamboo_jungle", "bamboo_jungle_hills", "basalt_deltas", "beach", "birch_forest", "birch_forest_hills", "cold_ocean", "crimson_forest", "dark_forest", "dark_forest_hills", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", "desert_hills", "desert_lakes", "end_barrens", "end_highlands", "end_midlands", "eroded_badlands", "flower_forest", "frozen_ocean", "frozen_river", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills", "gravelly_mountains", "ice_spikes", "jungle_edge", "jungle_hills", "lukewarm_ocean", "modified_badlands_plateau", "modified_gravelly_mountains", "modified_jungle", "modified_jungle_edge", "modified_wooded_badlands_plateau", "mountain_edge", "mountains", "mushroom_fields", "mushroom_field_shore", "nether_wastes", "river", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "small_end_islands", "snowy_beach", "snowy_mountains", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra", "soul_sand_valley", "stone_shore", "sunflower_plains", "swamp_hills", "taiga_hills", "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "the_end", "the_void", "warm_ocean", "warped_forest", "wooded_badlands_plateau", "wooded_hills", "wooded_mountains", "created_at", "updated_at", "huts", "monuments" FROM "temporary_seed"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "seed" RENAME TO "temporary_seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer NOT NULL, "ocean" float(10,6) NOT NULL, "desert" float(10,6) NOT NULL, "plains" float(10,6) NOT NULL, "jungle" float(10,6) NOT NULL, "forest" float(10,6) NOT NULL, "swamp" float(10,6) NOT NULL, "savanna" float(10,6) NOT NULL, "taiga" float(10,6) NOT NULL, "badlands" float(10,6) NOT NULL, "badlands_plateau" float(10,6) NOT NULL, "bamboo_jungle" float(10,6) NOT NULL, "bamboo_jungle_hills" float(10,6) NOT NULL, "basalt_deltas" float(10,6) NOT NULL, "beach" float(10,6) NOT NULL, "birch_forest" float(10,6) NOT NULL, "birch_forest_hills" float(10,6) NOT NULL, "cold_ocean" float(10,6) NOT NULL, "crimson_forest" float(10,6) NOT NULL, "dark_forest" float(10,6) NOT NULL, "dark_forest_hills" float(10,6) NOT NULL, "deep_cold_ocean" float(10,6) NOT NULL, "deep_frozen_ocean" float(10,6) NOT NULL, "deep_lukewarm_ocean" float(10,6) NOT NULL, "deep_ocean" float(10,6) NOT NULL, "deep_warm_ocean" float(10,6) NOT NULL, "desert_hills" float(10,6) NOT NULL, "desert_lakes" float(10,6) NOT NULL, "end_barrens" float(10,6) NOT NULL, "end_highlands" float(10,6) NOT NULL, "end_midlands" float(10,6) NOT NULL, "eroded_badlands" float(10,6) NOT NULL, "flower_forest" float(10,6) NOT NULL, "frozen_ocean" float(10,6) NOT NULL, "frozen_river" float(10,6) NOT NULL, "giant_spruce_taiga" float(10,6) NOT NULL, "giant_spruce_taiga_hills" float(10,6) NOT NULL, "giant_tree_taiga" float(10,6) NOT NULL, "giant_tree_taiga_hills" float(10,6) NOT NULL, "gravelly_mountains" float(10,6) NOT NULL, "ice_spikes" float(10,6) NOT NULL, "jungle_edge" float(10,6) NOT NULL, "jungle_hills" float(10,6) NOT NULL, "lukewarm_ocean" float(10,6) NOT NULL, "modified_badlands_plateau" float(10,6) NOT NULL, "modified_gravelly_mountains" float(10,6) NOT NULL, "modified_jungle" float(10,6) NOT NULL, "modified_jungle_edge" float(10,6) NOT NULL, "modified_wooded_badlands_plateau" float(10,6) NOT NULL, "mountain_edge" float(10,6) NOT NULL, "mountains" float(10,6) NOT NULL, "mushroom_fields" float(10,6) NOT NULL, "mushroom_field_shore" float(10,6) NOT NULL, "nether_wastes" float(10,6) NOT NULL, "river" float(10,6) NOT NULL, "savanna_plateau" float(10,6) NOT NULL, "shattered_savanna" float(10,6) NOT NULL, "shattered_savanna_plateau" float(10,6) NOT NULL, "small_end_islands" float(10,6) NOT NULL, "snowy_beach" float(10,6) NOT NULL, "snowy_mountains" float(10,6) NOT NULL, "snowy_taiga" float(10,6) NOT NULL, "snowy_taiga_hills" float(10,6) NOT NULL, "snowy_taiga_mountains" float(10,6) NOT NULL, "snowy_tundra" float(10,6) NOT NULL, "soul_sand_valley" float(10,6) NOT NULL, "stone_shore" float(10,6) NOT NULL, "sunflower_plains" float(10,6) NOT NULL, "swamp_hills" float(10,6) NOT NULL, "taiga_hills" float(10,6) NOT NULL, "taiga_mountains" float(10,6) NOT NULL, "tall_birch_forest" float(10,6) NOT NULL, "tall_birch_hills" float(10,6) NOT NULL, "the_end" float(10,6) NOT NULL, "the_void" float(10,6) NOT NULL, "warm_ocean" float(10,6) NOT NULL, "warped_forest" float(10,6) NOT NULL, "wooded_badlands_plateau" float(10,6) NOT NULL, "wooded_hills" float(10,6) NOT NULL, "wooded_mountains" float(10,6) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`, undefined);
        await queryRunner.query(`INSERT INTO "seed"("id", "seed", "ocean", "desert", "plains", "jungle", "forest", "swamp", "savanna", "taiga", "badlands", "badlands_plateau", "bamboo_jungle", "bamboo_jungle_hills", "basalt_deltas", "beach", "birch_forest", "birch_forest_hills", "cold_ocean", "crimson_forest", "dark_forest", "dark_forest_hills", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", "desert_hills", "desert_lakes", "end_barrens", "end_highlands", "end_midlands", "eroded_badlands", "flower_forest", "frozen_ocean", "frozen_river", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills", "gravelly_mountains", "ice_spikes", "jungle_edge", "jungle_hills", "lukewarm_ocean", "modified_badlands_plateau", "modified_gravelly_mountains", "modified_jungle", "modified_jungle_edge", "modified_wooded_badlands_plateau", "mountain_edge", "mountains", "mushroom_fields", "mushroom_field_shore", "nether_wastes", "river", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "small_end_islands", "snowy_beach", "snowy_mountains", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra", "soul_sand_valley", "stone_shore", "sunflower_plains", "swamp_hills", "taiga_hills", "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "the_end", "the_void", "warm_ocean", "warped_forest", "wooded_badlands_plateau", "wooded_hills", "wooded_mountains", "created_at", "updated_at") SELECT "id", "seed", "ocean", "desert", "plains", "jungle", "forest", "swamp", "savanna", "taiga", "badlands", "badlands_plateau", "bamboo_jungle", "bamboo_jungle_hills", "basalt_deltas", "beach", "birch_forest", "birch_forest_hills", "cold_ocean", "crimson_forest", "dark_forest", "dark_forest_hills", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "deep_warm_ocean", "desert_hills", "desert_lakes", "end_barrens", "end_highlands", "end_midlands", "eroded_badlands", "flower_forest", "frozen_ocean", "frozen_river", "giant_spruce_taiga", "giant_spruce_taiga_hills", "giant_tree_taiga", "giant_tree_taiga_hills", "gravelly_mountains", "ice_spikes", "jungle_edge", "jungle_hills", "lukewarm_ocean", "modified_badlands_plateau", "modified_gravelly_mountains", "modified_jungle", "modified_jungle_edge", "modified_wooded_badlands_plateau", "mountain_edge", "mountains", "mushroom_fields", "mushroom_field_shore", "nether_wastes", "river", "savanna_plateau", "shattered_savanna", "shattered_savanna_plateau", "small_end_islands", "snowy_beach", "snowy_mountains", "snowy_taiga", "snowy_taiga_hills", "snowy_taiga_mountains", "snowy_tundra", "soul_sand_valley", "stone_shore", "sunflower_plains", "swamp_hills", "taiga_hills", "taiga_mountains", "tall_birch_forest", "tall_birch_hills", "the_end", "the_void", "warm_ocean", "warped_forest", "wooded_badlands_plateau", "wooded_hills", "wooded_mountains", "created_at", "updated_at" FROM "temporary_seed"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_seed"`, undefined);
    }

}
