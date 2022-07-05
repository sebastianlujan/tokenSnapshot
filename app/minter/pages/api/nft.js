// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pepe from "../../services/scrapper.js"

const handler = async (req, res) => {
  // console.log(req.method);
  // console.log(data)
  let response;

  try {
    response = await pepe()
    res.end(JSON.stringify(response))
  } catch (err) {
    console.log(err)
  }
}

export default handler