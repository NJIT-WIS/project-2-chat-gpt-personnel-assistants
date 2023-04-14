// menu.js
export const menu = {
    name: "menu",
    title: "Menu",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "items",
        title: "Menu Items",
        type: "array",
        of: [{ type: "menuItem" }],
      },
    ],
  };
  
  export const menuItem = {
    name: "menuItem",
    title: "Menu Item",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "link",
        title: "Link",
        type: "string",
      },
      {
        name: "submenu",
        title: "Submenu",
        type: "array",
        of: [{ type: "menuItem" }],
      },
    ],
    preview: {
      select: {
        title: "title",
      },
    },
  };