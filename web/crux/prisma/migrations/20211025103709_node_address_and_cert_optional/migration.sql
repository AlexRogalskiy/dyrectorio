-- AlterTable
ALTER TABLE "Node" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "keyFilePath" DROP NOT NULL,
ALTER COLUMN "certFilePath" DROP NOT NULL;
