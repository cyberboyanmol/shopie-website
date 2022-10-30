export const check = (text) => text.replace(/[^a-zA-Z0-9 ]/g, "");

export function formatPrice(price) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return formatter.format(price);
}
