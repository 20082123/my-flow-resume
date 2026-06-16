import {
  BarChart3,
  Bot,
  DatabaseZap,
  FileSearch,
  GitBranch,
  Mail,
  ServerCog,
  Trophy,
} from "lucide-react";

export const profile = {
  name: "李赢洲",
  englishName: "Yingzhou Li",
  role: "大模型应用工程实习",
  focus: "RAG / Agent / GraphRAG / FastAPI 工程化",
  email: "13054111853@163.com",
  github: "https://github.com/20082123",
  githubLabel: "github.com/20082123",
  resumePath: "/li-yingzhou-resume-public.pdf",
  headline:
    "把复杂文档、检索增强和模型调用落到稳定后端服务中的 AI 应用工程候选人。",
  summary:
    "电子信息硕士在读，主攻大模型应用工程落地。具备 RAG/GraphRAG、FastAPI 服务、异步任务队列、本地模型调用优化和 LLM 批量评测实践，熟悉从文档解析、检索增强、任务调度、模型调用到部署评测的工程化流程。",
};

export const proofPoints = [
  {
    label: "解析效率",
    value: "21.3min → 13s",
    detail: "工业 PDF 混合解析路径优化",
  },
  {
    label: "推理延迟",
    value: "144s → 1.2s",
    detail: "本地模型常驻缓存与调用链路优化",
  },
  {
    label: "图谱吞吐",
    value: "680+ nodes/s",
    detail: "Neo4j UNWIND 批量同步",
  },
  {
    label: "评测规模",
    value: "1500+ samples",
    detail: "并发评测与失败归因",
  },
];

export const education = [
  {
    school: "贵州大学",
    degree: "电子信息（硕士）",
    period: "2024.09 - 至今",
    highlights: [
      "研究方向：随机配置网络、强化学习",
      "华为杯中国研究生数学建模竞赛国家二等奖",
      "校三等奖学金",
    ],
  },
  {
    school: "防灾科技学院",
    degree: "信息管理与信息系统（本科）",
    period: "2020.09 - 2024.06",
    highlights: ["两次校二等奖学金"],
  },
];

export const skills = [
  {
    icon: ServerCog,
    title: "大模型后端工程化",
    items: [
      "LLM API / 本地模型接入",
      "FastAPI、asyncio、Worker 队列",
      "模型调用缓存、异常兜底、Docker Compose",
    ],
  },
  {
    icon: FileSearch,
    title: "RAG 与文档处理",
    items: [
      "RAG / GraphRAG、Prompt 约束、结构化输出",
      "pdfplumber、PaddleOCR、UnstructuredLoader",
      "Milvus、混合检索、ReRanker、Neo4j",
    ],
  },
  {
    icon: DatabaseZap,
    title: "数据链路与自动化",
    items: [
      "Python、SQLite、批量入库、JSON 清洗",
      "日志分析、脚本自动化、离线评测流水线",
      "Git 与工程协作基础",
    ],
  },
  {
    icon: BarChart3,
    title: "评测与问题定位",
    items: [
      "LLM / RAG 批量并发评测",
      "指标口径设计、特征泄漏审查",
      "失败原因分析与业务约束校验",
    ],
  },
];

export const projects = [
  {
    title: "焊接工艺智能决策平台",
    org: "上海波士内智能科技有限公司",
    tags: ["AI 后端服务", "工业文档 RAG", "GraphRAG 数据链路"],
    problem:
      "工业标准 PDF 表格多、版式复杂，人工查询效率低，问答系统需要稳定处理上传、解析、检索、图谱同步和本地模型调用。",
    method:
      "参与后端链路搭建，设计逐页检测与动态路由机制；将同步上传改造成 FastAPI + SQLite + 独立 Worker 异步队列；优化 LightRAG 本地模型调用，开发 Neo4j 图谱同步模块。",
    result:
      "7 页混合工业 PDF 解析由 21.3 分钟降至约 13 秒，MVP Pipeline 控制在 1.5 分钟内；单 Chunk 推理延迟由 144 秒降至 1.2 秒，VRAM 峰值占用下降 96%；图谱同步吞吐达到 680+ 节点/秒。",
    stack: ["FastAPI", "SQLite", "Worker", "pdfplumber", "PaddleOCR", "LightRAG", "Neo4j"],
  },
  {
    title: "TKE 电梯虚拟教练系统",
    org: "上海波士内智能科技有限公司",
    tags: ["批量评测脚本", "数据链路校验", "RAG 效果分析"],
    problem:
      "故障预测与历史案例检索需要贴近真实业务时间线，避免训练和评测中混入不可见特征或泄漏字段。",
    method:
      "审查工单、运行日志与维修记录的数据可见时间，剔除泄漏特征并重切窗口；编写 Python 自动化评测脚本，对验证样本做并发评测、JSON 清洗和失败样本归因。",
    result:
      "建立 68.4% 的真实可靠模型基准；完成 1500+ 验证样本批量评测，沉淀可复用的离线评测链路，支持不同检索策略和 Prompt 版本对比。",
    stack: ["Python", "asyncio", "JSON", "RAG Evaluation", "日志分析"],
  },
  {
    title: "AI News Weekly",
    org: "个人开源项目",
    tags: ["Python 自动化", "邮件生成", "信息流处理"],
    problem:
      "AI 资讯过载且人工整理周报成本高，需要轻量流程完成信息组织、排版和自动发送。",
    method:
      "使用 Python 实现邮件内容组织、模板生成和自动发送逻辑，通过配置化方式管理主题、收件人和内容字段。",
    result:
      "形成“信息整理 - 摘要改写 - 邮件生成 - 自动发送”的可迁移工作流，可用于日报、周报、招聘进度简报和知识订阅场景。",
    stack: ["Python", "Email Automation", "Templates", "Workflow"],
    href: "https://github.com/20082123/ai-news-weekly",
  },
  {
    title: "GEO Radar",
    org: "个人实践",
    tags: ["Playwright", "asyncio", "LLM 结构化分析"],
    problem:
      "AI 平台在垂直推荐场景中的品牌召回、排序和回答稳定性难以直接比较。",
    method:
      "使用 Playwright + asyncio 自动化采集豆包、Qwen 等平台回答，并设计 LLM 结构化抽取流程，将自然语言结果转为品牌、车型、预算和推荐理由等字段。",
    result:
      "支持统计品牌出现频次、推荐排序与回答稳定性，为后续个人作品集中的 GEO/AI 搜索评测方向预留扩展空间。",
    stack: ["Playwright", "asyncio", "LLM Extraction", "Analytics"],
  },
];

export const highlights = [
  {
    icon: Bot,
    title: "端到端 AI 应用落地",
    text: "不只调用模型，也关注文档入口、队列调度、检索质量、图谱同步、评测回路和部署稳定性。",
  },
  {
    icon: GitBranch,
    title: "结果导向的工程优化",
    text: "项目叙事以瓶颈、方案和指标闭环展开，能把性能、显存、吞吐和评测口径讲清楚。",
  },
  {
    icon: Trophy,
    title: "科研与竞赛基础",
    text: "电子信息硕士在读，具备数学建模、强化学习和随机配置网络相关学习背景。",
  },
  {
    icon: Mail,
    title: "面向实习协作",
    text: "偏后端与 AI 应用工程岗位，适合参与 RAG 系统、LLM 平台工具、数据评测和自动化链路建设。",
  },
];
