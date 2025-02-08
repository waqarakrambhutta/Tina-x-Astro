import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
process.env.GITHUB_BRANCH ||
process.env.VERCEL_GIT_COMMIT_REF ||
process.env.HEAD ||
"main";

export default defineConfig({
  branch,

  // Get this from tina.io
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // // Get this from tina.io
  // token: process.env.TINA_TOKEN,

  clientId: 'e38f9851-5845-45fb-8a05-b19dbccde711',
  token: 'd62b3dc982bff90b6c82111659e91eba927bcbdc',

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Image'
          }
        ],
      },
      {
        name: "blog",
        label: "Blogs",
        path: "src/content/blogs",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Image'
          }
        ],
      },
    ],
  },
});
