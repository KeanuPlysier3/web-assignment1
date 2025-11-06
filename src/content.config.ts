import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const skillsCollection = defineCollection({ //“Hey, I’m going to have a set of content files (like Markdown or MDX) stored in a specific folder, and here’s the structure (schema) they must follow.”
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }), //“Look inside src/content/skills and load every .md file you find (including those in subfolders). Each of those files will be an entry in the skills collection.”
  schema: () => //“Each content entry must be an object with these three string properties.”
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});


const workCollection = defineCollection({ //“Hey, I’m going to have a set of content files (like Markdown or MDX) stored in a specific folder, and here’s the structure (schema) they must follow.”
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }), //“Look inside src/content/skills and load every .md file you find (including those in subfolders). Each of those files will be an entry in the skills collection.”
  schema: () => //“Each content entry must be an object with these three string properties.”
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.string()
    }),
});

export const collections = {
  skills: skillsCollection,
  work: workCollection,
};
