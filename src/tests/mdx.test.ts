import { getAllBlogPosts } from "../lib/mdx-utils";
import { metaScheme } from "../lib/types";
import { describe } from "node:test";

describe("MDX Blog Posts", () => {
  it("Should contain all required meta properties", async () => {
    const posts = await getAllBlogPosts();

    posts.forEach((post) => {
      try {
        metaScheme.parse(post.meta);
      } catch (e) {
        throw new Error(`Parsing schema failed with: ${e}`);
      }
    });
  });
  it("Should not contain any draft posts", async () => {
    const posts = await getAllBlogPosts();

    posts.forEach((post) => {
      if (post.draft) {
        throw new Error(`Found draft post: ${post.slug}`);
      }
    });
  });
});
