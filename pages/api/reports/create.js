import axios from "axios";
import Report from "../../../lib/db/schema/reports";
import databaseConnect from "../../../utils/databaseConnect";
import getCurrentDate from "../../../utils/currentDate";

export default async (req, res) => {
  if (req.method === "POST" && req.body.lat && req.body.lng) {
    await databaseConnect();
    let date = await getCurrentDate();

    await Report.find({
      "location.lat": req.body.lat,
      "location.lng": req.body.lng,
      createdOn: date,
    }).then(async (result) => {
      if (result.length != 0) res.json({ id: result[0].id })
      else {
        let area = await getLocalityfromLatLng(req);

        let report = await new Report({
          location: {
            lat: req.body.lat,
            lng: req.body.lng,
            locality: area,
          },
          createdOn: date,
        });

        await report
          .save()
          .then((result) => {
            res.json({ id: result.id });
          })
          .catch((err) => console.log(err));
      }
    })
    .catch(err => console.log(err));
  }
};

async function getLocalityfromLatLng(req) {
  try {
    var url =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      req.body.lat +
      "," +
      req.body.lng +
      "&key=" +
      process.env.GOOGLE_MAPS_API_KEY;

    const result = await axios.get(url);

    return result.data.results[0].address_components[3].long_name;
  } catch (err) {
    console.log(err);
  }
}
