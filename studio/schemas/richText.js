export const richText = {
    name: "richText",
    title: "Rich Text",
    type: "object",
    fields: [
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  };