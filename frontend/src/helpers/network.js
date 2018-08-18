function safeGet(url){
  return new Promise((resolve, reject) => {
    return fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": localStorage.getItem("token")
      },
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  })
};

export function getDashboard(){
  const url = "https://localhost:3000/dashboard";
  return safeGet(url);
}
