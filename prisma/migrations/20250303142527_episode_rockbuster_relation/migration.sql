/*
  Warnings:

  - Added the required column `episodeId` to the `Rockbuster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rockbuster" ADD COLUMN     "episodeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Rockbuster" ADD CONSTRAINT "Rockbuster_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
