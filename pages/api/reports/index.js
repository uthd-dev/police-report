import Report from "../../../lib/db/schema/reports";
import databaseConnect from "../../../utils/databaseConnect";
import getCurrentDate from "../../../utils/currentDate";

export default async (req, res) => {
    if(req.method === "GET") {
        await databaseConnect();
        await Report.find({ createdOn: getCurrentDate()})
        .then(reports => res.json({reports}))
        .catch(err => console.log(err));
    }
}