export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-6 text-sm text-slate-600 gap-3">
        <p>&copy; {new Date().getFullYear()} Ahmad Hassan. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:contact@ahmadhassan.dev">contact@ahmadhassan.dev</a>
        </div>
      </div>
    </footer>
  )
}


