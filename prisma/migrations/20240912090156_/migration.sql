/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Account` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_id_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "id",
ADD COLUMN     "_id" SERIAL NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("_id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "plan" TEXT;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account__id_fkey" FOREIGN KEY ("_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
