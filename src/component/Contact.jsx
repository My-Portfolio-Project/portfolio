


const Contact = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

        <div className="space-y-6">
          <h2 className="text-4xl font-medium text-white tracking-tight">
            Let&apos;s build something<br />extraordinary.
          </h2>
          <p className="text-zinc-500 max-w-md text-sm leading-relaxed">
            Currently available for freelance projects and open to full-time opportunities. If you have an idea, let&apos;s discuss how we can make it happen.
          </p>
          <a
            href="mailto:hello@alex.dev"
            className="inline-flex items-center text-white font-medium border-b border-white/20 pb-0.5 hover:border-white transition-colors"
          >
            wisdomteitei@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg border border-white/5 w-48"
          >
            <i className="devicon-github-original text-lg"></i>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg border border-white/5 w-48"
          >
            <i className="devicon-twitter-original text-lg"></i>
            <span className="text-sm font-medium">Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg border border-white/5 w-48"
          >
            <i className="devicon-linkedin-plain text-lg"></i>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact;
