// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import pepe from "../../services/scrapper.js"
import getSchema from "../../services/fetcher.js"

const handler = async (req, res) => {
  
  let response;
  try{
    response = await getSchema();
    res.end(JSON.stringify(response))
  }catch(err){
    console.log(err)
  }
}

export default handler