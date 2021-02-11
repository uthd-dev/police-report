import Report from '../lib/db/schema/reports'

export async function getReports() {
    const reports = await Report.find({createdOn: new Date().setUTCHours(0, 0, 0).toUTCString()})
    return reports;
}