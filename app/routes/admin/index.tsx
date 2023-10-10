import type { Context } from 'sonik'
import PageIndex from './blogs/PageIndex'
import dayjs from 'dayjs/esm'
import {AdminLayout} from '../layout/AdminLayout';
const title = "Admin";
//
export default async function AdminBlogs(c: Context) {
  try{
//    const items = await PageIndex.getList(c.env.DB);
//console.log(items);
    //
    return (
      <AdminLayout title={title}>
        <div className="container_base">admin123
        </div>
      </AdminLayout>
    )
  } catch (e) {
    console.error(e);
  }  
}
