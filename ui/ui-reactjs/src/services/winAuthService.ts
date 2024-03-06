import { httpClient } from "@/helpers/httpClient";

const getUser = ()=> httpClient.get('https://localhost:44387/WeatherForecast');

export default {
    getUser
}

// import { handleResponse, requestBase } from "../helpers/fetchHelpers";
// const apiBase = "https://localhost:44364";

// class WinAuthService {   
//   getWinUser() {
//     let request = Object.assign({}, requestBase, { method: "GET" });
//     let url = `${apiBase}/api/login`;

//     return fetch(url, {
//       method: "POST",
//       credentials: "include",
//       mode: "cors",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//     }).then(handleResponse);
//   }
// }
// const instance = Object.freeze(new WinAuthService());
// export { instance as WinAuthService };
