//! УДАЛИТЬ

// import { useState, useEffect, axios, useParams } from 'services/imports-npm';

// export const useMouseIdBg = () => {
//   const [mouse, setMouse] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     async function fetchMiceIdBg() {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/bg-items/${id}?populate=*`
//         );
//         const data = response.data;
//         setMouse(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     fetchMiceIdBg();
//   }, [id]);

//   return mouse;
// };

// export const useMouseIdColors = () => {
//   const [mouse, setMouse] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     async function fetchMiceIdColors() {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/product-colors/${id}?populate[colorsScheme][populate]=*`
//         );
//         const data = response.data;
//         setMouse(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     fetchMiceIdColors();
//   }, [id]);

//   return mouse;
// };

// export const useMouseIdShortDesc = () => {
//   const [mouse, setMouse] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     async function fetchMiceIdShortDesc() {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/short-descs/${id}?populate[ShortDesc][populate]=*`
//         );
//         const data = response.data;
//         setMouse(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     fetchMiceIdShortDesc();
//   }, [id]);

//   return mouse;
// };

// export const useMouseIdDesc = () => {
//   const [mouse, setMouse] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     async function fetchMiceIdDesc() {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/descriptions/${id}?populate[description][populate]=*`
//         );
//         const data = response.data;
//         setMouse(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     fetchMiceIdDesc();
//   }, [id]);

//   return mouse;
// };

// export const useMouseIdInfo = () => {
//   const [mouse, setMouse] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     async function fetchMiceIdInfo() {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/info-products/${id}`
//         );
//         const data = response.data;
//         setMouse(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     fetchMiceIdInfo();
//   }, [id]);

//   return mouse;
// };

// export const useMouseIdSize = () => {
//   const [mouse, setMouse] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     async function fetchMiceIdSize() {
//       try {
//         const response = await axios.get(
//           `http://localhost:1337/api/product-sizes/${id}?populate=*`
//         );
//         const data = response.data;
//         setMouse(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//     fetchMiceIdSize();
//   }, [id]);

//   return mouse;
// };
