

const obj = {
  "data": {
    "premiumAccess": true
  }
};
$done({status: 'HTTP/1.1 200 OK', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(obj)});
