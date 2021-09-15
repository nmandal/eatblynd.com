const url = 'https://www.getrevue.co/api/v2/subscribers'
const secret = process.env.REVUE_SECRET_KEY
	
export default async function (req, res) {
  console.log(req.body)
  const { email } = req.body
  console.log(email)
	
  if (!email) {
    res.status(400).json({ error: 'No email submitted' })
    return
  }
	
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Token ${secret}`
    },
    body: JSON.stringify({email})
  })

  console.log(result)
  const data = await result.json()
	
  if (!result.ok) {
    res.status(500).json({ error: data.error.email[0] })
    return
  }
	
  res.status(200).json({ data })
}