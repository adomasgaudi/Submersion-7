
import {ref} from 'vue'


const getCards = () =>{

  const cardsjson = ref([]);
  const linksjson = ref([]);
  const error = ref([]);

  const load = async (obj, xjson) =>{
    try{
      let res = await fetch('http://localhost:3000/' + obj)
      if(!res.ok){throw Error('response not ok')}
      xjson.value = await res.json()        
      // console.log(xjson.value)
    }
    catch(err){error.value = err.message}
  }

  return {load, error, linksjson, cardsjson}

}



export default getCards