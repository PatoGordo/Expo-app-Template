import moment, { Moment } from "moment";

export function getMonthFullname(value: string | number | Moment | Date) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return months[moment(value).get("M")];
}
