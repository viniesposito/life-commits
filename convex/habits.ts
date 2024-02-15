import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    authorId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const habits = await ctx.db
      .query("habits")
      .withIndex("by_author", (q) => q.eq("authorId", args.authorId))
      .collect();

    return habits;
  },
});

export const getIdsByTitle = query({
  args: {
    authorId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const habits = await ctx.db
      .query("habits")
      .withIndex("by_author", (q) => q.eq("authorId", args.authorId))
      .filter((q) => q.eq(q.field("title"), args.title))
      .collect();

    return [...new Set(habits.map((x) => x._id))];
  },
});

export const getAllHabits = query({
  args: {
    authorId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const habits = await ctx.db
      .query("habits")
      .withIndex("by_author", (q) => q.eq("authorId", args.authorId))
      .collect();

    return [...new Set(habits.map((x) => x.title))];
  },
});
