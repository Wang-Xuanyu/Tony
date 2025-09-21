import { parse } from "url";
import path from 'path'
function request(req) {
  const parsed = parse(req.url);
  console.log(parsed);
  req.path = parsed.pathname
  req.query = parsed.query
}


function response(res) {
  res.sendFile = function(path){
    const absPath = path.resolve(filePath);
    fs.createReadStream(absPath)
      .on("error", () => {
        res.writeHead(404);
        res.end("File not found");
      })
      .pipe(res);
  };

  res.json = function (obj) {
    this.writeHead(200, { 'Content-Type': 'application/json' });
    this.end(JSON.stringify(obj));
  };
}

export {response,request}
