import { useEffect, useState } from 'react'

export default function Overview() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${base}/api/overview`)
        const json = await res.json()
        setData(json)
      } catch (e) {
        setData({ error: 'Failed to load overview' })
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="text-blue-200">Loading overview…</div>
  if (!data) return null

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">{data.title}</h2>
      <p className="text-blue-200/90 leading-relaxed">{data.intro}</p>
      <ul className="list-disc list-inside text-blue-200/90 space-y-1">
        {data.key_points?.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {data.disclaimer && (
        <p className="text-xs text-blue-300/70">{data.disclaimer}</p>
      )}
    </section>
  )
}
