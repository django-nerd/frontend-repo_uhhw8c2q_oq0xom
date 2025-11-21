import Overview from './components/Overview'
import Timeline from './components/Timeline'
import KeyFacts from './components/KeyFacts'
import Resources from './components/Resources'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

      <header className="relative px-6 pt-10 pb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Russo-Ukrainian War
        </h1>
        <p className="mt-3 text-blue-200/90 max-w-3xl mx-auto">
          A concise, neutral overview with key milestones, facts, images, and links to reliable sources.
        </p>
        <p className="mt-1 text-xs text-blue-300/70 max-w-3xl mx-auto">
          For current developments, always consult multiple up-to-date, credible sources.
        </p>
      </header>

      <main className="relative max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="bg-slate-800/40 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6">
          <Overview />
        </section>

        <section className="bg-slate-800/40 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6">
          <Timeline />
        </section>

        <section className="bg-slate-800/40 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6">
          <KeyFacts />
        </section>

        <section className="bg-slate-800/40 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6">
          <Gallery />
        </section>

        <section className="bg-slate-800/40 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6">
          <Resources />
        </section>
      </main>

      <footer className="relative border-t border-blue-500/10 py-6 text-center text-blue-300/70 text-xs">
        Informational use only. Images are illustrative and not real-time.
      </footer>
    </div>
  )
}

export default App
