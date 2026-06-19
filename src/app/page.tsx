import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Github,
  Mail,
  MoveRight,
} from "lucide-react";
import {
  education,
  highlights,
  profile,
  projects,
  proofPoints,
  sideProjects,
  skills,
} from "@/data/profile";

const navItems = [
  { href: "#fit", label: "能力" },
  { href: "#projects", label: "项目" },
  { href: "#evidence", label: "技术" },
  { href: "#contact", label: "联系" },
];

const roleFit = ["AI 应用开发实习", "Python / FastAPI 后端", "RAG 或 Agent 工具链"];

const capabilityTracks = [
  {
    title: "把 AI 功能接成后端接口",
    summary:
      "做过 FastAPI、异步 Worker、任务状态、失败重试和模型调用缓存。功能能跑起来之后，还要能被调试。",
    proof: "FastAPI + SQLite + Worker",
  },
  {
    title: "RAG 先看文档和召回",
    summary:
      "处理过工业 PDF、维修手册、表格、OCR、metadata、混合检索和 Query Rewrite。回答不好时，我会先看数据链路。",
    proof: "21.3 分钟解析降到约 13 秒",
  },
  {
    title: "Agent 要有工具边界",
    summary:
      "LangGraph 原型里会区分查询、规划建议和敏感控制动作。返航、降落这类动作要进 Human-in-the-loop。",
    proof: "Intent Routing / Tool Calling / HITL",
  },
];

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blueprint">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-base leading-8 text-muted sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function FlowSection({
  id,
  step,
  eyebrow,
  title,
  children,
}: {
  id: string;
  step: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.34fr_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs tracking-[0.22em] text-muted">
            {step}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-blueprint">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-xs font-display text-3xl leading-tight text-ink">
            {title}
          </h2>
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="site-shell min-h-screen overflow-hidden">
      <a href="#fit" className="skip-link">
        跳到主要内容
      </a>

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-line/80 bg-canvas/86 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-md bg-ink text-sm font-semibold text-canvas">
              李
            </span>
            <span className="hidden text-sm font-medium text-ink sm:inline">
              {profile.name}
            </span>
          </a>
          <nav className="flex items-center gap-1 text-sm text-muted">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 transition hover:bg-ink hover:text-canvas sm:px-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative mx-auto grid min-h-dvh max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.7fr] lg:pt-32"
      >
        <div className="reveal">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-20 bg-ink hairline" />
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              AI Application Engineer
            </p>
          </div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-line bg-white/45 px-3 py-2 text-sm text-muted">
            <CheckCircle2 className="size-4 text-blueprint" aria-hidden="true" />
            求职方向：{profile.role}
          </p>
          <h1 className="font-display text-6xl leading-[0.94] text-ink sm:text-7xl lg:text-8xl">
            {profile.name}
            <span className="block pt-3 text-3xl text-muted sm:text-4xl">
              {profile.englishName}
            </span>
          </h1>
          <p className="mt-8 max-w-3xl text-2xl leading-10 text-ink sm:text-4xl sm:leading-[1.16]">
            我现在找 AI 应用开发实习。偏 Python 后端，做过工业文档 RAG，也在用 LangGraph 练 Agent 编排和工具调用。
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-7 flex max-w-2xl flex-wrap gap-2">
            {roleFit.map((item) => (
              <span
                key={item}
                className="rounded-md border border-line bg-white/50 px-3 py-2 text-xs font-medium text-ink/74"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:bg-blueprint"
            >
              <Mail className="size-4" aria-hidden="true" />
              邮件联系
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-white/55 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
            >
              <Download className="size-4" aria-hidden="true" />
              下载 PDF 简历
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/55"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <aside className="reveal [animation-delay:120ms]">
          <div className="rounded-lg border border-line bg-white/50 p-5 shadow-soft">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Hiring Snapshot
            </p>
            <div className="mt-6 grid gap-4">
              {proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[0.42fr_1fr] items-baseline gap-4 border-t border-line pt-4 first:border-t-0 first:pt-0"
                >
                  <p className="text-xs font-semibold text-blueprint">
                    {item.label}
                  </p>
                  <div>
                    <p className="text-2xl font-semibold tabular-nums text-ink">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="#fit"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink"
          >
            看具体能做什么
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </aside>
      </section>

      <FlowSection
        id="fit"
        step="01"
        eyebrow="Fit"
        title="我能做什么"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {capabilityTracks.map((track, index) => (
            <article
              key={track.title}
              className="rounded-lg border border-line bg-white/42 p-6 transition hover:-translate-y-1 hover:bg-white/62"
            >
              <p className="font-mono text-xs text-muted">
                0{index + 1}
              </p>
              <h3 className="mt-8 text-2xl font-semibold leading-tight text-ink">
                {track.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {track.summary}
              </p>
              <p className="mt-6 border-t border-line pt-4 text-sm font-semibold text-blueprint">
                {track.proof}
              </p>
            </article>
          ))}
        </div>
      </FlowSection>

      <FlowSection
        id="projects"
        step="02"
        eyebrow="Case Studies"
        title="主线项目"
      >
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-lg border border-line bg-white/48 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white/66 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <div className="flex items-start justify-between gap-6">
                    <p className="font-mono text-xs tracking-[0.2em] text-muted">
                      CASE 0{index + 1}
                    </p>
                  </div>
                  <h3 className="mt-8 font-display text-3xl leading-tight text-ink sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {project.org}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-line bg-canvas/70 px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5">
                  {[
                    ["我负责", project.owned],
                    ["问题", project.problem],
                    ["方法", project.method],
                    ["结果", project.result],
                  ].map(([label, text]) => (
                    <div key={label} className="grid gap-3 sm:grid-cols-[5rem_1fr]">
                      <p className="font-mono text-xs font-semibold tracking-[0.22em] text-blueprint">
                        {label}
                      </p>
                      <p className="text-sm leading-7 text-ink/78 sm:text-base">
                        {text}
                      </p>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-2 border-t border-line pt-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-ink/5 px-3 py-1 text-xs text-ink/70"
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
      </FlowSection>

      <FlowSection
        id="more"
        step="03"
        eyebrow="More Work"
        title="更多小项目"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {sideProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-line bg-white/42 p-6 transition hover:-translate-y-1 hover:bg-white/62"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm leading-7 text-muted">{project.org}</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-ink">
                    {project.title}
                  </h3>
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-line p-2 text-muted transition hover:border-ink hover:text-ink"
                    aria-label={`${project.title} GitHub`}
                  >
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
              <p className="mt-5 text-sm leading-7 text-ink/78">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-line bg-canvas/70 px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </FlowSection>

      <FlowSection
        id="evidence"
        step="04"
        eyebrow="Evidence"
        title="实际用过的技术"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article
                  key={skill.title}
                  className="rounded-lg border border-line bg-white/42 p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-blueprint/10 text-blueprint">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">
                        {skill.title}
                      </h3>
                      <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
                        {skill.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <MoveRight
                              className="mt-1 size-4 shrink-0 text-blueprint"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-t border-line pt-5">
                  <Icon className="size-5 text-blueprint" aria-hidden="true" />
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
      </FlowSection>

      <FlowSection
        id="education"
        step="05"
        eyebrow="Education"
        title="教育背景"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.school}
              className="rounded-lg border border-line bg-white/42 p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-ink">
                    {item.school}
                  </h3>
                  <p className="mt-2 text-muted">{item.degree}</p>
                </div>
                <p className="text-sm font-medium text-blueprint">
                  {item.period}
                </p>
              </div>
              <ul className="mt-6 grid gap-2 text-sm leading-7 text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </FlowSection>

      <footer id="contact" className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <SectionIntro
            eyebrow="Contact"
            title="如果有 AI 应用开发、RAG 后端或 Agent 原型相关实习，可以邮件联系我。"
          >
            <p>
              页面正文不放手机号和微信，新版 PDF 简历里有完整联系方式。
            </p>
          </SectionIntro>
          <div className="flex flex-col justify-end gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-between rounded-lg border border-line bg-white/55 px-5 py-4 text-sm font-semibold text-ink transition hover:border-ink"
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
              className="group flex items-center justify-between rounded-lg border border-line bg-white/55 px-5 py-4 text-sm font-semibold text-ink transition hover:border-ink"
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
              className="group flex items-center justify-between rounded-lg bg-ink px-5 py-4 text-sm font-semibold text-canvas transition hover:bg-blueprint"
            >
              <span>下载 PDF 简历</span>
              <Download className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
