import http from 'http'
import {request,response} from './tony/serverHelper'
import serveStatic from "./middlewares/serve-static";
import cookies from "./middlewares/cookies";

import home from "./routers";

const fileServer = serveStatic("public")
http.createServer(async (req,res)=>{
  request(req)
  response(res)
  await fileServer(req,res)!
  await cookies(req,res)!

  await home(req,res)!
}).listen(3000)
