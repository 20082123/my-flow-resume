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
  skills,
} from "@/data/profile";

const navItems = [
  { href: "#fit", label: "匹配" },
  { href: "#projects", label: "案例" },
  { href: "#evidence", label: "证据" },
  { href: "#contact", label: "联系" },
];

const capabilityTracks = [
  {
    title: "复杂文档进入 RAG",
    summary:
      "把 PDF、表格、OCR、结构化输出和检索链路组织成可运行的后端流程。",
    proof: "21.3 分钟解析链路降至约 13 秒",
  },
  {
    title: "模型调用变成服务",
    summary:
      "关注队列、缓存、失败重试、显存压力和接口边界，而不是只停留在 prompt 调试。",
    proof: "单 Chunk 推理延迟 144s 降至 1.2s",
  },
  {
    title: "评测闭环定位问题",
    summary:
      "用批量脚本、指标口径和失败归因验证真实业务约束下的 LLM / RAG 效果。",
    proof: "1500+ 样本并发评测与 JSON 清洗",
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
            我把 LLM / RAG 的实验能力，推进到可以部署、评测和维护的后端链路。
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {profile.summary}
          </p>
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
              下载公开简历
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
            按招聘方阅读路径继续
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </aside>
      </section>

      <FlowSection
        id="fit"
        step="01"
        eyebrow="Fit"
        title="不是简历复刻，而是岗位匹配说明"
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
        title="项目按工程问题讲，而不是按经历堆"
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
        id="evidence"
        step="03"
        eyebrow="Evidence"
        title="技能只作为证据链的一部分出现"
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
        step="04"
        eyebrow="Education"
        title="教育背景保留，但不抢主叙事"
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
            title="如果岗位需要 RAG 后端、LLM 评测或 AI 应用工程落地，可以直接联系。"
          >
            <p>
              页面正文不展示手机号或微信。完整联系方式请通过邮件沟通，或下载公开版 PDF 简历。
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
              <span>下载公开版 PDF 简历</span>
              <Download className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
