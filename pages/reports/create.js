import { motion } from "framer-motion";
import { geolocated } from "react-geolocated";
import Router from 'next/router'
import axios from "axios";

import Map from "../../components/map";
import Layout from "../../components/layout";
import Message from "../../components/message";
import Link from "../../components/link";


function CreateReport(props) {
  /* BROWSER INCOMPATIBLE */
  if (!props.isGeolocationAvailable)
    return (
      <Layout>
        <Message>Sorry, your browser is not compatible with our location services.</Message>
        <Link href="/">Go Home</Link>
      </Layout>
    );

  /* GEOLOCATION DISABLED */
  if (!props.isGeolocationEnabled)
    return (
      <Layout>
        <Message>Sorry, location tracking is required for creating reports</Message>
        <Link href="/">Go Home</Link>
      </Layout>
    );

  /* GEOLOCATION ENABLED */
  if (props.coords)
    return (
      <Layout>
        <Message>
          {`Longitude: ${props.coords.longitude}, Latitude: ${props.coords.latitude}.`}
        </Message>
        <motion.div
          className="w-60 h-80 bg-black-100 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          layoutId="create-report-map"
        >
          <Map mapLat={props.coords.latitude} mapLng={props.coords.longitude} />
        </motion.div>
        <motion.div
          id="create-report-button"
          onClick={() => submitReport(props)}
          className="flex justify-center w-40 h-14 bg-gray-600 m-5 rounded-lg shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out m-10 mx-auto cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
          layoutId="create-report-button"
        >
          <p id="create-report-button-text" className="font-mono text-gray-50 self-center mx-auto">SUBMIT REPORT</p>
        </motion.div>
        <Link href="/">Go Home</Link>
      </Layout>
    );

  return (
    <Layout>
      <Message>Loading...</Message>
      <Link href="/">Go Home</Link>
    </Layout>
  );
}

function submitReport(props) {
  document.getElementById("create-report-button-text").innerHTML = "Loading..."
  axios.post("/api/reports/create", {
    lat: props.coords.latitude,
    lng: props.coords.longitude
  })
  .then(response => {
    Router.push(`/reports/${response.data.id}`);
    document.getElementById("create-report-button-text").innerHTML = "Success!"
  })
  .catch(err => console.log(err));
}

/* WRAP IN GEO HOC */
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 10000, //in ms
})(CreateReport);
