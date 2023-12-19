const db = require("../config/db");

const getAll = async (req) => {
  let query = `select name as 'Applicant Name', verification_flow as 'Verification Flow', timestamp as 'Last Updated', status as 'Status', * from MagicId.ApplicantVerification `
  if (req.query && req.query.search) {
    query += `where name like '%${req.query.search}%'`
  }
  return await db.executeQuery(query);
};

module.exports = {
    getAll
}