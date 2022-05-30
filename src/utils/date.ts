import dayjs from "dayjs";

dayjs.locale("ja");

export default function formatDate(date: string) {
  return dayjs(date).format("YYYY/MM/DD");
}
