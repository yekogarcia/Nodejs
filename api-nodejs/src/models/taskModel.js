const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    database: 'tasks',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
});


const get = async () => {
    const result = await pool.query('SELECT * FROM tasks');
    console.log(result.rows);
    return result.rows;
};

const create = async ({title, description, finish_date}) => {
    const result = await pool.query('INSERT INTO tasks (title, description, finish_date) VALUES ($1, $2, $3) RETURNING *', [title, description, finish_date]);
    return result.rows[0];
};

const update = async ({title, description, finish_date}, id) => {
    const result = await pool.query('UPDATE tasks SET title=$1, description=$2, finish_date=$3 WHERE id=$4 RETURNING *', [title, description, finish_date, id]);
    return result.rows[0];
};

const deleteRow = async (id) => {
    const result = await pool.query('DELETE FROM tasks WHERE id=$1', [id]);
    // console.log(result);
    return [{"ok": true, "msg": "Tarea  eliminada con exito"}];
    // return result.rowCount;
};

module.exports = {
    get,
    create,
    update,
    deleteRow,
};