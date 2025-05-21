import axios from 'axios';

const URL= '';





export const getPlacesData=async (south,north,west,east)=>{
  console.log("inside"+south+"outside"+north)
try {
    //  destructing data from respomnse and then hotels from data
	const {data:{data}} = await axios.get(URL,{
    params: {
    bl_latitude: south,
    tr_latitude: north,
    bl_longitude: west,
    tr_longitude: east,
    
  },
  headers: {
    'x-rapidapi-key': 'ebcce4d98amsh12383ac79f0ca2fp126e55jsn2d01205cf130',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }});
    return data;
	
} catch (error) {
	console.error(error);
}
}