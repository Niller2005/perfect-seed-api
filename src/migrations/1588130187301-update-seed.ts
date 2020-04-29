import {MigrationInterface, QueryRunner} from "typeorm";

export class updateSeed1588130187301 implements MigrationInterface {
    name = 'updateSeed1588130187301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_seed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_seed"("id") SELECT "id" FROM "seed"`, undefined);
        await queryRunner.query(`DROP TABLE "seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_seed" RENAME TO "seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_seed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "seed" integer NOT NULL, "huts" text NOT NULL, "ocean" integer NOT NULL, "desert" integer NOT NULL, "plains" integer NOT NULL, "extremeHills" integer NOT NULL, "jungle" integer NOT NULL, "forest" integer NOT NULL, "roofedForest" integer NOT NULL, "mesa" integer NOT NULL, "swamp" integer NOT NULL, "savanna" integer NOT NULL, "icePlains" integer NOT NULL, "taiga" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_seed"("id") SELECT "id" FROM "seed"`, undefined);
        await queryRunner.query(`DROP TABLE "seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_seed" RENAME TO "seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_seed" ("id" varchar PRIMARY KEY NOT NULL, "seed" integer NOT NULL, "huts" text NOT NULL, "ocean" integer NOT NULL, "desert" integer NOT NULL, "plains" integer NOT NULL, "extremeHills" integer NOT NULL, "jungle" integer NOT NULL, "forest" integer NOT NULL, "roofedForest" integer NOT NULL, "mesa" integer NOT NULL, "swamp" integer NOT NULL, "savanna" integer NOT NULL, "icePlains" integer NOT NULL, "taiga" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_seed"("id", "seed", "huts", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga") SELECT "id", "seed", "huts", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga" FROM "seed"`, undefined);
        await queryRunner.query(`DROP TABLE "seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_seed" RENAME TO "seed"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seed" RENAME TO "temporary_seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "seed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "seed" integer NOT NULL, "huts" text NOT NULL, "ocean" integer NOT NULL, "desert" integer NOT NULL, "plains" integer NOT NULL, "extremeHills" integer NOT NULL, "jungle" integer NOT NULL, "forest" integer NOT NULL, "roofedForest" integer NOT NULL, "mesa" integer NOT NULL, "swamp" integer NOT NULL, "savanna" integer NOT NULL, "icePlains" integer NOT NULL, "taiga" integer NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "seed"("id", "seed", "huts", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga") SELECT "id", "seed", "huts", "ocean", "desert", "plains", "extremeHills", "jungle", "forest", "roofedForest", "mesa", "swamp", "savanna", "icePlains", "taiga" FROM "temporary_seed"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "seed" RENAME TO "temporary_seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "seed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "seed"("id") SELECT "id" FROM "temporary_seed"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_seed"`, undefined);
        await queryRunner.query(`ALTER TABLE "seed" RENAME TO "temporary_seed"`, undefined);
        await queryRunner.query(`CREATE TABLE "seed" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "seed"("id") SELECT "id" FROM "temporary_seed"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_seed"`, undefined);
    }

}
