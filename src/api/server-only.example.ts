import 'server-only'

// only be called by the server component
export async function getData () {
  const resp = await fetch('https://external-service.com/data', {
    headers: {
      authorization: ''
    }
  })
  return resp.json()
}
