import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'
import type { Context } from '../../../types'
const app = new Hono()
interface Env {
    DB: Database
}
//
app.get('/', async (c: Context) => {
    try{
console.log(c.env);
        const sql = `SELECT * FROM Task ORDER BY id DESC`;
        const { results } = await c.env.DB.prepare(sql).all();
console.log(sql);
console.log(results);
        return c.json({
            msg: "dbtest", data: results,
        })
    } catch (e) {
      console.error(e);
//      throw new Error('Error , delete_movie');
    }
})
export default app