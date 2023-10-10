# sonik-react5cms

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/10/09 

 update  : 2023/10/09
***
### Summary

sonik + preact + D1 + cloudflare pages, CMS sample

***
### path
* /admin: editor page

***
### Setup
* wrangler.toml

```
[[d1_databases]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = ""
database_id = ""
```

***
### Start

```
yarn dev
```
* deploy

```
yarn build
yarn deploy
```
***
### blog 

***

