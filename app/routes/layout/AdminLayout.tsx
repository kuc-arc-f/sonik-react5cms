//import type { LayoutHandler } from '@sonikjs/preact'
import type { Context } from 'sonik'

let title = "Welcome";
export const AdminLayout = (c: Context) => { 
//  console.log(c.children); 
//  if(props.title){title = props.title;}
  return (
    <div>
      {/* navi */}
      <div className="text-center pt-2" >
        Admin
        <a href="/">[Top]</a>
        <a href="/admin"> [ Admin ]</a>
        <a href="/admin/blogs"> [ Posts ]</a>
        <hr />
      </div>
      {/* child */}
      <div className="h-screen">{c.children}</div>
    </div>
  )
}

//export default AdminLayout
/*
className="bg-gray-200 h-screen"
*/
