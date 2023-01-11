import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.example.findMany();
    }),

    test2: protectedProcedure.query(async ({ ctx }) => {
        try {
            const user = await ctx.prisma.user.findUnique({
                where: {
                    id: ctx.session.user.id
                },
            });
            return user;
        } catch (e) {
            console.log("error", e);
        }
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),
});
