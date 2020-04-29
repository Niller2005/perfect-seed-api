import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  seed: number;

  @Column({ nullable: true })
  hut1: string;

  @Column({ nullable: true })
  hut2: string;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  ocean: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  desert: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  plains: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  extremeHills: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  jungle: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  forest: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  roofedForest: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  mesa: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  swamp: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  savanna: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  icePlains: number;

  @Column({ type: 'float', precision: 10, scale: 6, nullable: true })
  taiga: number;
}
