const db = require("../config/db");

const getAll = async (req) => {
  try {
    let query = `SELECT name AS 'Applicant Name', verification_flow AS 'Verification Flow', timestamp AS 'Last Updated', status AS 'Status', * FROM MagicId.ApplicantVerification`;
    let countQuery = 'SELECT COUNT(*) AS totalCount FROM MagicId.ApplicantVerification';

    if (req.query && req.query.search) {
      const searchCondition = ` WHERE name LIKE '%${req.query.search}%'`;
      query += searchCondition;
      countQuery += searchCondition;
    }

    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let offset = (page - 1) * limit;
    let orderBy = req.query.orderBy || 'id'

    query += ` ORDER BY id OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY`;

    console.log(query);
    console.log(countQuery);
    
    let result = await db.executeQuery(query);

    let countResult = await db.executeQuery(countQuery);
    const totalCount = countResult[0].totalCount;

    const totalPages = Math.ceil(totalCount / limit);

    return {
      data: result,
      totalPages,
      currentPage: page,
      totalCount,
    };
  } catch (error) {
    console.error('Error fetching paginated data:', error);
    throw error;
  }
};

module.exports = {
  getAll,
};
