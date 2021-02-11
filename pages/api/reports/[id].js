import { data } from "autoprefixer";
import Report from "../../../lib/db/schema/reports";
import databaseConnect from "../../../utils/databaseConnect";

export default async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { id },
    } = req;

    if (id && id !== "undefined") {
      console.log(id);
      await databaseConnect();
      await Report.findById(id)
        .then((report) => res.json(report))
        .catch((err) => console.log(err));
    }
  }
};
