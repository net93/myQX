/*
 * $request.scheme, $request.method, $request.url, $request.path, $request.headers
 * $response.statusCode, $response.headers, $response.body
**/


view($request.body)
view($response.body)
$done()

function view(obj){
  obj = typeof(obj)===typeof('') ? obj : JSON.stringify(obj)
  return console.log('\n'+ obj)
}
