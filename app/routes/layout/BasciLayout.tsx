//import type { LayoutHandler } from '@sonikjs/preact'
import type { Context } from 'sonik'

let title = "Welcome";
export const BasciLayout = (c: Context) => { 
//  console.log(c.children); 
//  if(props.title){title = props.title;}
  return (
    <div>
      {/* navi */}
      <div className="text-center pt-2 pb-2" >
        <a href="/">[Top]</a>
        <hr />
      </div>
      {/* child */}
      <div className="h-screen">{c.children}</div>
    </div>
  )
}

/*
className="bg-gray-200 h-screen"
*/
