//! УДАЛИТЬ

// import { useState, useEffect, axios } from 'services/imports-npm';

// export const useMiceShortInfo = () => {
//   const [mise, setMice] = useState(null);

//   useEffect(() => {
//     async function fetchMice() {
//       try {
//         const response = await axios.get(
//           'http://localhost:1337/api/list-mice?populate=*'
//         );
//         const data = response.data;
//         setMice(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     fetchMice();
//   }, []);

//   return mise;
// };
