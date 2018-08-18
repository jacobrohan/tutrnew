function loginRequest(email, password){
  return new Promise((resolve, reject) => {
    return fetch("https://localhost:5000/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
      email,
      password
    })
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

function getDashboard(url){
  return new Promise((resolve, reject) => {
    return fetch("https://localhost:5000/dashboard", {
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

function registerRequest({name, email, password}){
 return new Promise((resolve, reject) => {
   fetch("http://localhost:5000/users/register", {
     method: "post",
     headers: {
       "Content-Type": "application/json; charset=utf-8"
     },
     body: JSON.stringify({
       name,
       email,
       password
     })
   }).then(response => {
     response.json().then(json => {
       if (!response.ok){
         return reject(json);
       }
       resolve(json);
     }).catch(e => reject(e));
   }).catch(e => reject(e))
 });
}

export {
  loginRequest,
  getDashboard,
  registerRequest
}

// export function registerRequest()
//
// export function loginRequest(email, password) {
//   const url = "https://localhost:3000/users/login";
//   const body = {
//     email: email,
//     password: password
//   }
//   return safePost(url,body);
// }
//
// export function getDashboard(){
//   const url = "https://localhost:3000/dashboard";
//   return safeGet(url);
// }
