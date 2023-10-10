import type { Context } from 'sonik'
import PageIndex from '../blogs/PageIndex'
import dayjs from 'dayjs/esm'
import {AdminLayout} from '../../layout/AdminLayout';
const title = "Admin";
//
export default async function AdminBlogs(c: Context) {
  try{
    const items = await PageIndex.getList(c.env.DB);
//console.log(items);
    //
    return (
    <AdminLayout title={title}>
      <div class="container_base">
        <h1 class="text-4xl font-bold">AdminPosts</h1>
        <hr class="my-2" />
        <div class="my-4">
          <a href="/admin/blogs/create" class="btn-purple ms-2 my-2">Create</a>
        </div>
        <hr class="my-2" />
        <ul>
          {items.map((item) => (
            <li class="bg-white p-6 rounded-lg shadow-lg mb-4" key={item.id}>
              <a href={`/admin/blogs/show/${item.id}`}>
                <h3 class="text-3xl font-bold mb-2 text-gray-800 hover:text-gray-600 hover:text-underline">
                  {item.title}
                </h3>
                <span>ID: {item.id} , {item.createdAt} , </span>
                <time class="text-gray-500 text-sm" dateTime={item.createdAt}>
                  {dayjs(item.createdAt).fromNow()}
                </time>
              </a>
            </li>
          ))}
        </ul>       
      </div>
    </AdminLayout>
    )
  } catch (e) {
    console.error(e);
  }  
}
