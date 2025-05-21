// import axios from 'axios';

// const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


// const options = {
  
  
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
    
//   },
//   headers: {
//     'x-rapidapi-key': 'cb07d9aa0dmsh930e25f601d4dfcp1d45e7jsne55f706a57ed',
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//   }
// };


// export const getPlacesData=async ()=>{
// try {
//     //  destructing data from respomnse and then hotels from data
// 	const {data:{data}} = await axios.get(URL,options);
//     return data;
	
// } catch (error) {
// 	console.error(error);
// }
// }