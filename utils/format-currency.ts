export function formatCurrency(value: string | number): string {
  const signal = Number(value) < 0 ? "-" : "";

  value = Number(Number(value).toFixed(2));

  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return signal + value.replace(".", ",");
}

export function addZeros(num: string) {
  return Number(String(num).replace(",", "."))
    .toFixed(
      Math.max(
        ((String(num).replace(",", ".") + "").split(".")[1] || "").length,
        2
      )
    )
    .toString()
    .replace(".", ",");
}

export function formatToReal(i: number) {
  return i
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
