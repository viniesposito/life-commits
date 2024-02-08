import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  habits: defineTable({
    title: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    effectiveDate: v.string(),
    count: v.number(),
  }).index("by_author", ["authorId"]),
});
