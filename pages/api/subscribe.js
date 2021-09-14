import FormData from 'form-data'
import fetch from 'node-fetch'
	
const url = 'https://www.getrevue.co/api/v2/subscribers'
const secret = process.env.REVUE_SECRET_KEY
	
export default async function (req, res) {
  const { email } = JSON.parse(req.body)
	
  if (!email) {
    res.status(400).json({ error: 'No email submitted' })
    return
  }
	
  const formData = new FormData()
  formData.append('email', email)
  formData.append('double_opt_in', 'false')
	
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Token ${secret}`
    },
    body: formData
  })
  const data = await result.json()
	
  if (!result.ok) {
    res.status(500).json({ error: data.error.email[0] })
    return
  }
	
  res.status(200).json({ data })
}