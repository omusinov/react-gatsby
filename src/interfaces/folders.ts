export const folderData = [
  {
    id: 1,
    name: "css",
    type: "folder",
    children: [
      { id: 2, name: "style.css", type: "file" },
      { id: 3, name: "reset.css", type: "file" },
    ],
  },
  {
    id: 4,
    name: "html",
    type: "folder",
    children: [{ id: 5, name: "index.html", type: "file" }],
  },
  {
    id: 6,
    name: "js",
    type: "folder",
    children: [
      { id: 7, name: "app.js", type: "file" },
      {
        id: 8,
        name: "utils",
        type: "folder",
        children: [{ id: 9, name: "helpers.js", type: "file" }],
      },
    ],
  },
  {
    id: 10,
    name: "assets",
    type: "folder",
    children: [
      {
        id: 11,
        name: "images",
        type: "folder",
        children: [{ id: 12, name: "logo.png", type: "file" }],
      },
    ],
  },
];
export default folderData