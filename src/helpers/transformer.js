export function formatToKilo(from, suffix = true) {
  if (typeof from === "string") {
    from = parseInt(from);
  }

  if (isNaN(from)) {
    return "NaN";
  }

  const result = from / 1000;

  return result + (suffix ? "k" : "");
}
