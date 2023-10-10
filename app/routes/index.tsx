import type { Context } from '../types'
//import { findAllArticles } from '../db'
import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
dayjs.extend(relativeTime)
import PageIndex from './blogs/PageIndex';

const title = 'welcome';

export default async function Index(c: Context) {
  const items = await PageIndex.getList(c.env.DB);
  console.log(items);
  //
  return c.render(
    <div class="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col">
      <h1 class="font-extrabold text-5xl text-gray-800">{title}</h1>
      <hr class="my-2" />
      <ul>
        {items.map((item) => (
          <li class="bg-white p-6 rounded-lg shadow-lg mb-4" key={item.id}>
            <a href={`/blogs/${item.id}`}>
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
    </div>,
    {
      title
    }
  )
}
