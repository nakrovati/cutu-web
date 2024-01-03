export default function (
  a: string,
  b: string,
  sortOrder: "asc" | "desc" = "asc",
) {
  const dateA = new Date(a).getTime();
  const dateB = new Date(b).getTime();

  return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
}
