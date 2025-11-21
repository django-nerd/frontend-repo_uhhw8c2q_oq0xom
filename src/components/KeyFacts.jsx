import { useEffect, useState } from 'react'

export default function KeyFacts() {
  const [data, setData] = useState({ facts: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${base}/api/key-facts`)
        const json = await res.json()
        setData(json)
      } catch (e) {
        setData({ facts: [] })
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="text-blue-200">Loading facts…</div>

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Key Facts</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {data.facts.map((f, i) => (
          <div key={i} className="bg-slate-800/50 border border-blue-500/10 rounded-lg p-4">
            <div className="text-blue-300/80 text-sm">{f.label}</div>
            <div className="text-white">{f.value}</div>
          </div>
        ))}
      </div>
      {data.note && <p className="text-xs text-blue-300/70">{data.note}</p>}
    </section>
  )
}
