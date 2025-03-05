import { Prisma } from '@prisma/client';

type RockbusterWithEpisode = Prisma.RockbusterGetPayload<{
  include: { episode: true }
}>;

export type { RockbusterWithEpisode };