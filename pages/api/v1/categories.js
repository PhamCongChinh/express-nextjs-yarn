import pool from "../../../utils/db"
export default function handler(req, res) {
    pool.query('SELECT * FROM categories', (error, results) => {
        if (error) throw error;
        const data = Object.values(JSON.parse(JSON.stringify(results)))
        return res.send(data);
    })
}

