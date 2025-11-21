import { useEffect, useState } from 'react'

export default function Timeline() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${base}/api/timeline`)
        const json = await res.json()
        setEvents(json.events || [])
      } catch (e) {
        setEvents([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="text-blue-200">Loading timeline…</div>

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Timeline</h2>
      <div className="space-y-3">
        {events.map((ev, i) => (
          <div key={i} className="relative pl-6">
            <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-400"></span>
            <div className="text-blue-300 text-sm">{ev.date}</div>
            <div className="text-blue-100">{ev.event}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
