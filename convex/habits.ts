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
