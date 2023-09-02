export const getAllContacts = () => {
    return fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/usuario24`)
        .then(res => {
            if (!res.ok) {
                throw Error('Request Error');
            }
            return res.json();
        })
        .then(res => {
            // console.log(res)
        
            return res
                })
        .catch(err => console.log(err))
    
};


// import { getResourceList } from "./getResourceList"
// import { getResourceDetails } from "./getResorceDetails"

// export const getAllDetails = (resource) => {
//     return getResourceList(resource)
//       .then((resourceList) => {
//         return Promise.all(
//           resourceList.map((resource) => {
//             return getResourceDetails(resource.url);
//           })
//         );
//       })
//       .catch((err) => console.log(err));
// }
