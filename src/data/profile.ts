import {
  BarChart3,
  Bot,
  DatabaseZap,
  FileSearch,
  GitBranch,
  Mail,
  ServerCog,
} from "lucide-react";

export const profile = {
  name: "李赢洲",
  englishName: "Yingzhou Li",
  role: "AI 应用开发实习",
  focus: "Python / FastAPI / RAG / Agent / LangGraph",
  email: "13054111853@163.com",
  github: "https://github.com/20082123",
  githubLabel: "github.com/20082123",
  resumePath: "/li-yingzhou-ai-application-intern.pdf",
  headline:
    "我主要做 AI 应用开发，偏 Python 后端、RAG 和 Agent 原型。最近在补 LangGraph、工具调用和人工确认这些应用链路。",
  summary:
    "贵州大学电子信息硕士在读。实习里参与过工业文档智能问答 PoC，做过文档解析、异步任务、模型调用缓存和图谱入库。个人项目更偏 Agent 和 RAG：意图路由、Tool Calling、Memory、Human-in-the-loop，还有 Bad Case 评测。",
};

export const proofPoints = [
  {
    label: "解析效率",
    value: "21.3min → 13s",
    detail: "混合工业 PDF 解析",
  },
  {
    label: "推理延迟",
    value: "144s → 1.2s",
    detail: "本地模型调用缓存",
  },
  {
    label: "Agent 原型",
    value: "LangGraph",
    detail: "意图路由 / Tool Calling / HITL",
  },
  {
    label: "RAG 运维",
    value: "Hybrid",
    detail: "混合检索 / Query Rewrite / Bad Case",
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
    highlights: ["河北省数据分析竞赛省三等奖", "两次校二等奖学金"],
  },
];

export const skills = [
  {
    icon: ServerCog,
    title: "Python 后端开发",
    items: [
      "Python、FastAPI、asyncio、Pydantic",
      "RESTful API、Worker 异步处理",
      "异常兜底、任务状态持久化、模型调用封装",
    ],
  },
  {
    icon: FileSearch,
    title: "RAG 与文档处理",
    items: [
      "文档解析清洗、语义分块、Prompt 约束",
      "pdfplumber、PaddleOCR、Unstructured / OCR",
      "Milvus、BM25 / 向量混合检索、Query Rewrite、ReRanker",
    ],
  },
  {
    icon: Bot,
    title: "Agent 应用开发",
    items: [
      "LangGraph / LangChain、Conditional Edges",
      "Tool Calling、意图识别、任务路由",
      "会话 Memory、Human-in-the-loop 原型实现",
    ],
  },
  {
    icon: BarChart3,
    title: "工程化与评测",
    items: [
      "Docker Compose、Git、Redis、SQLite、RabbitMQ",
      "日志分析、测试样例构造、Bad Case 归因",
      "了解 Dify 工作流与 LoRA / P-Tuning 数据准备",
    ],
  },
];

export const projects = [
  {
    title: "工业文档智能问答 PoC",
    org: "上海波士内智能科技有限公司 | AI 应用工程实习",
    tags: ["工业文档 RAG", "异步任务", "模型调用优化", "Neo4j"],
    problem:
      "工业 PDF 里表格多、版式复杂，人工查询慢。PoC 要先把上传、解析、任务状态、模型调用和图谱入库这几段跑通，否则问答效果没法稳定验证。",
    method:
      "在导师指导下参与“逐页检测 + 动态路由”解析方案，独立完成 pdfplumber 字符数阈值判定模块，并联调 PaddleOCR 切换逻辑。异步任务部分用 FastAPI + SQLite + Worker 改造长文档处理，补了上传、状态查询、失败记录和重试接口。LightRAG 侧做了模型客户端常驻缓存，Neo4j 侧实现 UNWIND 批量写入脚本。",
    result:
      "7 页混合 PDF 样例解析耗时从 21.3 分钟降到约 13 秒；单 Chunk 推理延迟从 144s 降到 1.2s，VRAM 峰值占用降低 96%。图谱写入时处理了特殊字符转义、重复关系合并等细节。",
    stack: ["FastAPI", "SQLite", "Worker", "pdfplumber", "PaddleOCR", "LightRAG", "Neo4j"],
  },
  {
    title: "基于 LangGraph 的无人机集群多智能体指挥原型",
    org: "个人项目",
    tags: ["LangGraph", "Intent Routing", "Tool Calling", "HITL"],
    problem:
      "无人机任务指挥里，自然语言指令经常混着查询、规划和控制动作。如果都交给一个 Prompt 处理，工具边界和敏感操作会变得很模糊。",
    method:
      "用 LangGraph 搭了“总指挥 Agent + 航线规划 / 状态诊断 / 载荷任务 / 运维问答专员 Agent”的分层结构。通过 LLM 意图识别和 Conditional Edges 做路由，复合指令先拆解再按顺序执行。工具侧封装 get_drone_status、plan_route、check_battery、return_home、land 等模拟接口，并用 Pydantic 校验入参和业务约束。",
    result:
      "原型可以维护 Thread 级会话状态，记录当前无人机、任务目标、关键槽位和工具结果。对返航、降落等高风险动作加入 Human-in-the-loop 中断确认，并整理了测试指令和 Bad Case 用来检查路由稳定性。",
    stack: ["LangGraph", "LangChain", "Pydantic", "Tool Calling", "Memory", "Human-in-the-loop"],
  },
  {
    title: "基于 RAG 的无人机智能运维知识库原型",
    org: "个人项目",
    tags: ["文档解析", "混合检索", "Query Rewrite", "RAG 评估"],
    problem:
      "无人机维修手册里有故障代码、跨页表格和图文混排。直接检索经常找不到关键片段，回答也不容易追溯来源。",
    method:
      "用 Unstructured / OCR 解析维修手册、故障码表和保养记录，按章节层级、故障对象和语义边界分块，并保留来源、页码、部件型号等 metadata。检索链路采用向量检索 + 关键词召回，针对故障代码和部件型号做精确词召回，再用 Query Rewrite 把口语化描述改成更适合检索的问题。",
    result:
      "回答被约束为引用来源片段，并输出故障原因、排查步骤和注意事项。后续用测试问答集和 Bad Case 表按未命中、错召回、答案不完整等类型迭代分块、检索和 Prompt。",
    stack: ["RAG", "Unstructured", "OCR", "Milvus", "BM25", "Query Rewrite", "Prompt"],
  },
];

export const sideProjects = [
  {
    title: "AI News Weekly",
    org: "个人开源项目",
    tags: ["Python 自动化", "邮件生成"],
    description:
      "把 AI 资讯整理、邮件模板生成和自动发送串成轻量脚本，主要用来练习配置化信息流处理。",
    href: "https://github.com/20082123/ai-news-weekly",
  },
  {
    title: "GEO Radar",
    org: "个人实践",
    tags: ["Playwright", "asyncio", "LLM 抽取"],
    description:
      "采集豆包、Qwen 等平台的推荐回答，再把品牌、车型、预算和推荐理由抽成结构化字段，观察不同平台的排序稳定性。",
  },
];

export const highlights = [
  {
    icon: Bot,
    title: "能从应用链路往下做",
    text: "不只写提示词，也会处理接口、队列、文档解析、工具调用和人工确认这些环节。",
  },
  {
    icon: DatabaseZap,
    title: "RAG 项目里愿意看脏细节",
    text: "解析、分块、metadata、召回策略和 Bad Case 往往比页面上的回答更早暴露问题。",
  },
  {
    icon: GitBranch,
    title: "Agent 原型关注边界",
    text: "会把查询、规划建议和敏感控制动作拆开处理，高风险动作加人工确认。",
  },
  {
    icon: Mail,
    title: "适合的实习方向",
    text: "AI 应用开发、RAG 后端、Agent 工具链、文档处理和评测脚本。",
  },
];
