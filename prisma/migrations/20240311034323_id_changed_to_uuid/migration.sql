/*
  Warnings:

  - The primary key for the `Cars` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cars_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Cars_id_seq";
