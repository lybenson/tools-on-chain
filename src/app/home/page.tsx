// server component
export default async function Home () {
  const data = await getData()
  return <div className="font-bold font-pixel p-2 text-success text-xl8">{data.count}</div>
}

const getData = async () => {
  await pause()
  return { count: Math.random() }
}

function pause () {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

// disable static cache
export const revalidate = 0
