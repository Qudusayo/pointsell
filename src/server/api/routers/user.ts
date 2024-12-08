import { z } from "zod";

import { createTRPCRouter, generalManagerProcedure } from "@/server/api/trpc";
import { Role } from "@prisma/client";

export const userRouter = createTRPCRouter({
  addStaff: generalManagerProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        role: z.nativeEnum(Role),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          role: input.role,
        },
      });
    }),

  getStaffs: generalManagerProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany();
  }),

  getStaff: generalManagerProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.user.findUnique({
        where: { id: input.id },
      });
    }),

  removeStaff: generalManagerProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.delete({
        where: { id: input.id },
      });
    }),
});
