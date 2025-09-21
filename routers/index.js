export default async function home(req, res) {
  console.log(111111,req.path,req.method);
  if (req.path === "/" && req.method === "GET") {
    res.end("<h1>Welcome to Tony ES6 Server</h1>");
    return false;
  }
  if (req.path === "/json") {
    res.json({ message: "Hello JSON!" });
    return false;
  }
  return true;
}
