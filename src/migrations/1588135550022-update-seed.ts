import {MigrationInterface, QueryRunner} from "typeorm";

export class updateSeed1588135550022 implements MigrationInterface {
    name = 'updateSeed1588135550022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer, "ocean" float(10,6), "desert" float(10,6), "plains" float(10,6), "extremeHills" float(10,6), "jungle" float(10,6), "forest" float(10,6), "roofedForest" float(10,6), "mesa" float(10,6), "swamp" float(10,6), "savanna" float(10,6), "icePlains" float(10,6), "taiga" float(10,6), "hut1" varchar, "hut2" varchar)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_seed"("id", "seed", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga", "hut1", "hut2") SELECT "id", "seed", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga", "hut1", "hut2" FROM "seed"`, undefined);
        await queryRunner.query(`DROP TABLE "seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_seed" RENAME TO "seed"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seed" RENAME TO "temporary_seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer NOT NULL, "ocean" float(10,6), "desert" float(10,6), "plains" float(10,6), "extremeHills" float(10,6), "jungle" float(10,6), "forest" float(10,6), "roofedForest" float(10,6), "mesa" float(10,6), "swamp" float(10,6), "savanna" float(10,6), "icePlains" float(10,6), "taiga" float(10,6), "hut1" varchar NOT NULL, "hut2" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "seed"("id", "seed", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga", "hut1", "hut2") SELECT "id", "seed", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga", "hut1", "hut2" FROM "temporary_seed"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_seed"`, undefined);
    }

}
