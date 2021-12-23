const pool = require('./db/connect')

const getTask = async (req, res) => {
  const t_id = Number(req.body.t_id);
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
}

const putTask = async (req, res) => {
  const {activity} = req.body;
  try{
    let queryRes = await pool.query('INSERT INTO todo(activity, status) VALUES($1, $2) RETURNING *',
      [activity, 'N']);
    res.status(201).json(queryRes.rows[0]);
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({success: false, message : 'internal server error'});
  }
}

const allTask = async (req, res) => {
  try{
    let queryRes = await pool.query('SELECT * FROM todo ORDER BY t_id;')
    res.status(200).json(queryRes.rows);
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({success: false, message : 'internal server error'});
  }
}

const updateTask = async (req, res) => {
  let {t_id, activity, status} = req.body;
  t_id = Number(t_id);
  try{
    let queryRes = await pool.query('UPDATE todo SET activity = $1, status = $2 WHERE t_id = $3 RETURNING *',
    [activity, status, t_id]);
    if(!queryRes.rows.length){
      res.status(400).json({success: true, message : 'not found'})
    }
    res.status(200).json(queryRes.rows[0]);
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({success: false, message : 'internal server error'});
  }
}

const deleteTask = async (req, res) => {
  const t_id = Number(req.body.t_id);
  try{
    let queryRes = await pool.query('DELETE FROM todo WHERE t_id = $1 RETURNING *', [t_id]);
    if(!queryRes.rows.length){
      res.status(400).json({success: true, message : 'not found'})
    }
    res.status(200).json(queryRes.rows[0]);
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({success: false, message : 'internal server error'})
  }
}

module.exports = {getTask, putTask, allTask, updateTask, deleteTask};
