import { useRouter } from "next/router";
import useSWR from "swr";
import { motion } from "framer-motion";

import Layout from "../../components/layout";
import Message from "../../components/message";
import Map from "../../components/map";
import Link from "../../components/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ReportsPage() {
  const router = useRouter();
  const { id } = router.query;

  const url = `/api/reports/${id}`;
  const { data, error } = useSWR(url, fetcher);

  if (error)
    return (
      <Layout>
        <Message>Error: {error}</Message>
      </Layout>
    );
  if (!data)
    return (
      <Layout>
        <Message>Loading...</Message>
      </Layout>
    );
  return (
    <Layout>
      <Message>
        Report from{" "}
        <span className="text-blue-400 hover:underline">
          {data.location.locality}
        </span>
      </Message>

      <div className="flex justify-center">
        <div className="w-2/4 h-80 rounded-sm m-5">
          <Map mapLat={data.location.lat} mapLng={data.location.lng} />
        </div>
        <div className="flex flex-col justify-center m-5 w-1/4">
          <DataText title="Locality: " data={data.location.locality}/>
          <DataText title="Latitude: " data={data.location.lat}/>
          <DataText title="Longitude: " data={data.location.lng}/>
          <DataText title="Date Created: " data={data.createdOn}/>
        </div>
      </div>
      <Link href="/reports">Back to Reports</Link>
    </Layout>
  );
}

function DataText({ title, data }) {
  return (
    <motion.p
      className="font-mono m-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >{title}: {data}</motion.p>
  );
}
