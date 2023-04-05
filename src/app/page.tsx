import DepositsTable from "@/components/DepositsTable";
import fetchPath from "@/utils/fetchPath";

async function getData() {
  const res = await fetchPath("api/redbank-deposits");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return <DepositsTable data={data} />;
}
