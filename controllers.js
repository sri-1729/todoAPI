const pool = require('./db/connect')

const getTask = async (req, res) => {
  const t_id = Number(req.body.t_id);
  //console.log(t_id);
  try{
    let queryRes = await pool.query('SELECT * FROM todo WHERE t_id = $1', [t_id]);
    if(!queryRes.rows.length){
      res.status(400).json({success: true, message : 'not found'})
    }
    res.status(200).json(queryRes.rows[0]);
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({success: false, message : 'internal server error'})
  }
  // if(!queryRes.rows.length){
  //   res.status(400).json({success: true, error: 'not found'})
  // }

}

module.exports = {getTask};
