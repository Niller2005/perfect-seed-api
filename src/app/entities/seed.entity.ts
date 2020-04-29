import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seed {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  seed: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  badlands: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  badlands_plateau: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  bamboo_jungle: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  bamboo_jungle_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  basalt_deltas: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  beach: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  birch_forest: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  birch_forest_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  cold_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  crimson_forest: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  dark_forest: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  dark_forest_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  deep_cold_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  deep_frozen_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  deep_lukewarm_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  deep_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  deep_warm_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  desert: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  desert_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  desert_lakes: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  end_barrens: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  end_highlands: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  end_midlands: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  eroded_badlands: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  flower_forest: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  forest: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  frozen_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  frozen_river: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  giant_spruce_taiga: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  giant_spruce_taiga_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  giant_tree_taiga: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  giant_tree_taiga_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  gravelly_mountains: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  ice_spikes: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  jungle: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  jungle_edge: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  jungle_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  lukewarm_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  modified_badlands_plateau: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  modified_gravelly_mountains: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  modified_jungle: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  modified_jungle_edge: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  modified_wooded_badlands_plateau: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  mountain_edge: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  mountains: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  mushroom_fields: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  mushroom_field_shore: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  nether_wastes: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  plains: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  river: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  savanna: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  savanna_plateau: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  shattered_savanna: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  shattered_savanna_plateau: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  small_end_islands: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  snowy_beach: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  snowy_mountains: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  snowy_taiga: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  snowy_taiga_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  snowy_taiga_mountains: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  snowy_tundra: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  soul_sand_valley: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  stone_shore: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  sunflower_plains: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  swamp: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  swamp_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  taiga: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  taiga_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  taiga_mountains: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  tall_birch_forest: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  tall_birch_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  the_end: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  the_void: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  warm_ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  warped_forest: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  wooded_badlands_plateau: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  wooded_hills: number;

  @Column({ type: 'float', precision: 10, scale: 6 })
  wooded_mountains: number;
}
