import useSWR from "swr";

import Layout from '../../components/layout';
import Message from "../../components/message";
import Link from "../../components/link";
import ReportCard from "../../components/reportCard";

export default function AllReports() {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const url = `/api/reports`;
    const { data, error } = useSWR(url, fetcher);

    if(error) return <Layout><Message>Could not load reports!</Message><Link href="/">Go Home</Link></Layout>
    if(!data) return <Layout><Message>Loading reports...</Message><Link href="/">Go Home</Link></Layout>

    return(
        <Layout>
            <p className="text-lg font-mono mt-5 text-center text-gray-500">RECENT REPORTS</p>
            <ReportCards data={data}/>
            <Link href="/">Go Home</Link>
        </Layout>
    );
}

function ReportCards(data) {
    console.log(data.data.reports);
    let reports = data.data.reports;
    if(reports.length == 0) return <Message>No Reports Today!</Message>
    let cards = reports.map(report => {
        return <ReportCard id={report._id} date={report.createdOn} location={report.location} />
    })
    return (
        <div className="h-full w-full mt-3 mb-3">
            {cards}
        </div>
    );
}