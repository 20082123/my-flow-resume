import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Mail,
  MapPin,
} from "lucide-react";
import {
  education,
  highlights,
  profile,
  projects,
  proofPoints,
  skills,
} from "@/data/profile";

const navItems = [
  { href: "#projects", label: "项目" },
  { href: "#skills", label: "技能" },
  { href: "#education", label: "教育" },
  { href: "#contact", label: "联系" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-paper" : "text-ink";
  const descriptionColor = tone === "dark" ? "text-paper/68" : "text-muted";

  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-copper">
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl leading-tight sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="grain min-h-screen overflow-hidden">
      <a href="#projects" className="skip-link">
        跳到主要内容
      </a>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-line/60 bg-paper/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-ink text-sm font-semibold text-paper">
              李
            </span>
            <span className="hidden text-sm font-medium text-ink sm:inline">
              {profile.name}
            </span>
          </a>
          <nav className="flex items-center gap-1 rounded-full border border-line bg-white/38 p-1 text-sm text-muted shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-ink hover:text-paper sm:px-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:pt-32"
      >
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.72fr]">
          <div className="reveal">
            <div className="mb-8 h-px w-36 bg-ink hairline" />
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/42 px-4 py-2 text-sm text-muted shadow-sm">
              <MapPin className="size-4 text-moss" aria-hidden="true" />
              中文求职简历 MVP · AI 应用工程
            </p>
            <h1 className="max-w-5xl font-display text-6xl leading-[0.96] text-ink sm:text-7xl lg:text-8xl">
              {profile.name}
              <span className="block pt-3 text-3xl text-muted sm:text-4xl lg:text-5xl">
                {profile.englishName}
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-2xl leading-10 text-ink sm:text-4xl sm:leading-[1.18]">
              {profile.headline}
            </p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {profile.summary}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-cobalt"
              >
                <Mail className="size-4" aria-hidden="true" />
                邮件联系
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/48 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink hover:bg-white"
              >
                <Download className="size-4" aria-hidden="true" />
                下载公开简历
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/48"
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>

          <aside className="reveal grid gap-4 [animation-delay:120ms]">
            <div className="rounded-lg border border-line bg-white/48 p-6 shadow-soft backdrop-blur-md">
              <p className="text-sm font-semibold text-muted">求职方向</p>
              <p className="mt-3 text-3xl font-semibold leading-tight text-ink">
                {profile.role}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                {profile.focus}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-line bg-white/38 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold tabular-nums text-ink">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
        <a
          href="#projects"
          className="absolute bottom-6 left-5 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink sm:left-8"
        >
          向下浏览
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </section>

      <section id="projects" className="bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="用可验证指标讲清楚项目价值"
            description="每段经历都按问题、方法、结果重写，便于招聘方快速判断候选人与岗位的匹配度。"
            tone="dark"
          />
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group rounded-lg border border-white/12 bg-paper/[0.055] p-6 transition hover:border-white/28 hover:bg-paper/[0.08] sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="text-sm text-paper/50">
                        0{index + 1}
                      </p>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/14 p-2 text-paper/70 transition hover:border-paper hover:text-paper"
                          aria-label={`${project.title} GitHub`}
                        >
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                    <h3 className="mt-8 font-display text-3xl leading-tight sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-paper/62">
                      {project.org}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/12 px-3 py-1 text-xs text-paper/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-5">
                    {[
                      ["问题", project.problem],
                      ["方法", project.method],
                      ["结果", project.result],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className="border-l border-paper/20 pl-5"
                      >
                        <p className="text-xs font-semibold tracking-[0.2em] text-copper">
                          {label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-paper/78 sm:text-base">
                          {text}
                        </p>
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-paper/10 px-3 py-1 text-xs text-paper/78"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Skill Stack"
            title="围绕 AI 应用交付组织技能"
            description="技能不是堆技术名词，而是服务于文档处理、后端稳定性、检索质量和评测闭环。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article
                  key={skill.title}
                  className="rounded-lg border border-line bg-white/42 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/60 sm:p-8"
                >
                  <Icon className="size-6 text-cobalt" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-semibold text-ink">
                    {skill.title}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                    {skill.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-px w-5 shrink-0 bg-copper" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/32 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
              Strengths
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-5xl">
              适合进入团队后快速接手工程问题
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-t border-line pt-5">
                  <Icon className="size-5 text-moss" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Education"
            title="教育经历与基础背景"
          />
          <div className="mx-auto grid max-w-4xl gap-5">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-lg border border-line bg-white/42 p-6 backdrop-blur-sm sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-ink">
                      {item.school}
                    </h3>
                    <p className="mt-2 text-muted">{item.degree}</p>
                  </div>
                  <p className="text-sm font-medium text-cobalt">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-6 grid gap-2 text-sm leading-7 text-muted sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#ebe5d9] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-6xl">
              欢迎沟通 AI 应用工程、RAG 后端与评测实习机会。
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-between rounded-lg border border-line bg-paper px-5 py-4 text-sm font-semibold text-ink transition hover:border-ink"
            >
              <span className="min-w-0 break-all">{profile.email}</span>
              <ArrowUpRight
                className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-line bg-paper px-5 py-4 text-sm font-semibold text-ink transition hover:border-ink"
            >
              <span className="min-w-0 break-all">{profile.githubLabel}</span>
              <ArrowUpRight
                className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={profile.resumePath}
              download
              className="group flex items-center justify-between rounded-lg bg-ink px-5 py-4 text-sm font-semibold text-paper transition hover:bg-cobalt"
            >
              <span>下载公开版 PDF 简历</span>
              <Download className="size-4" aria-hidden="true" />
            </a>
            <p className="pt-4 text-xs leading-6 text-muted">
              页面正文不展示手机号或微信；如需更完整联系方式，请通过邮件或 PDF 简历联系。
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
