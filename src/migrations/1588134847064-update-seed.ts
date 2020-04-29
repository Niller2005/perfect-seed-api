import {MigrationInterface, QueryRunner} from "typeorm";

export class updateSeed1588134847064 implements MigrationInterface {
    name = 'updateSeed1588134847064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer NOT NULL, "ocean" float NOT NULL, "desert" float NOT NULL, "plains" float NOT NULL, "extremeHills" float NOT NULL, "jungle" float NOT NULL, "forest" float NOT NULL, "roofedForest" float NOT NULL, "mesa" float NOT NULL, "swamp" float NOT NULL, "savanna" float NOT NULL, "icePlains" float NOT NULL, "taiga" float NOT NULL, "hut1" varchar NOT NULL, "hut2" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_seed"("id", "seed", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga", "hut1", "hut2") SELECT "id", "seed", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga", "hut1", "hut2" FROM "seed"`, undefined);
        await queryRunner.query(`DROP TABLE "seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_seed" RENAME TO "seed"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seed" RENAME TO "temporary_seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer NOT NULL, "ocean" integer NOT NULL, "desert" integer NOT NULL, "plains" integer NOT NULL, "extremeHills" integer NOT NULL, "jungle" integer NOT NULL, "forest" integer NOT NULL, "roofedForest" integer NOT NULL, "mesa" integer NOT NULL, "swamp" integer NOT NULL, "savanna" integer NOT NULL, "icePlains" integer NOT NULL, "taiga" integer NOT NULL, "hut1" varchar NOT NULL, "hut2" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "seed"("id", "seed", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga", "hut1", "hut2") SELECT "id", "seed", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga", "hut1", "hut2" FROM "temporary_seed"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_seed"`, undefined);
    }

}
