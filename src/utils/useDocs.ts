const files = import.meta.glob("../docs/**/*.md", {
  eager: true,
  as: "raw",
});

export function loadDoc(path: string) {
  return files[`../docs/${path}.md`] || "";
}

export const allDocs = Object.keys(files).map((k) =>
  k.replace("../docs/", "").replace(".md", "")
);
