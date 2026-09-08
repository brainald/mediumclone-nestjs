import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1788604668720 implements MigrationInterface {
  name = 'SeedDb1788604668720';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'),('coffee'), ('nestjs')`,
    );

    await queryRunner.query(
      // password is 123
      `INSERT INTO users (username,email,password) VALUES ('foo', 'foo@gmail.com', '$2b$10$t3Z5noAKqVyf7.ZOF7Xyle2QV7kaZl1GgxV4MgWBgem.5t.eode1e')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'first article', 'first article description', 'first article body', 'coffee,dragon','1')`,
    );
  }

  public async down(): Promise<void> {}
}
