import type { Context } from 'sonik'
import dayjs from 'dayjs/esm'
import {AdminLayout} from '../../layout/AdminLayout';
const title = "PostCreate";
//
export default async function AdminBlogsCreate(c: Context) {
  try{
//    const items = await PageIndex.getList(c.env.DB);
//console.log(items);
    //
    return (
    <AdminLayout title={title}>
      <div class="container_base">
        <h1 class="text-4xl font-bold">PostsCreate</h1>
        <hr class="my-2" />
        <label class="text-2xl block text-gray-700 font-bold mb-2">Title:</label>
        <input type="text" id="title" 
        class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
        <hr />
        <div class="mb-2">
          <label  class="text-2xl block text-gray-700 font-bold mb-2">Content</label>
          <textarea id="content" name="content"
          class="input_textarea"
          placeholder="" required
          ></textarea>
        </div>
        <hr />
        <button id="btn_save" class="btn-purple ms-2 my-2">Save</button>  
        {/* JS  */}
        <script type='module' src="/static/js/posts/PostCreate.js"></script>              
      </div>
    </AdminLayout>
    )
  } catch (e) {
    console.error(e);
  }  
}
