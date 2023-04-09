export default async function Api(method='GET', body=null, url: string): Promise<string> {
  const response = await fetch(url,{
    method,
    body,
  })
  const result = response.text()
  return result
}