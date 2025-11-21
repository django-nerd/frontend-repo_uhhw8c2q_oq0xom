import { useEffect, useState } from 'react'

export default function Resources() {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${base}/api/resources`)
        const json = await res.json()
        setResources(json.resources || [])
      } catch (e) {
        setResources([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="text-blue-200">Loading resources…</div>

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Further Reading</h2>
      <ul className="space-y-2">
        {resources.map((r, i) => (
          <li key={i}>
            <a href={r.url} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-white underline">
              {r.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-blue-300/70">Links open in a new tab.</p>
    </section>
  )
}
