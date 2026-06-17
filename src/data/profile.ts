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
    "做过 RAG 后端、模型调用优化和批量评测，更关心系统最后能不能稳定跑起来。",
  summary:
    "电子信息硕士在读，方向偏大模型应用工程。做过工业 PDF 问答后端、GraphRAG 数据同步、本地模型缓存和 LLM 批量评测。相比只调 prompt，我更熟悉解析、入库、检索、队列、模型调用和评测这些后端工作。",
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
    label: "图谱吞吐",
    value: "680+ nodes/s",
    detail: "Neo4j 批量写入",
  },
  {
    label: "评测规模",
    value: "1500+ samples",
    detail: "离线并发评测",
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
    title: "数据处理与自动化",
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
    tags: ["AI 后端服务", "工业文档 RAG", "GraphRAG 数据同步"],
    problem:
      "工业标准 PDF 里表格多、版式乱，人工查资料很慢。问答系统不只是把文件丢给模型，还要处理上传、解析、检索、图谱同步和本地模型调用。",
    method:
      "参与后端搭建，做了逐页检测和动态路由：文本页走 pdfplumber，低字符密度或复杂表格页切到 PaddleOCR。上传流程改成 FastAPI + SQLite + 独立 Worker，LightRAG 的本地模型调用也做了常驻缓存。",
    result:
      "7 页混合工业 PDF 解析从 21.3 分钟降到约 13 秒，MVP Pipeline 控制在 1.5 分钟内。单 Chunk 推理从 144 秒降到 1.2 秒，VRAM 峰值占用下降 96%。Neo4j 批量同步达到 680+ 节点/秒。",
    stack: ["FastAPI", "SQLite", "Worker", "pdfplumber", "PaddleOCR", "LightRAG", "Neo4j"],
  },
  {
    title: "TKE 电梯虚拟教练系统",
    org: "上海波士内智能科技有限公司",
    tags: ["批量评测脚本", "数据时间线校验", "RAG 效果分析"],
    problem:
      "故障预测要按真实业务时间线来评估。否则模型可能用到当时根本看不到的字段，分数好看，但上线没意义。",
    method:
      "逐项检查工单、运行日志和维修记录的可见时间，发现“维修描述”字段有时间泄漏。剔除问题字段后重切窗口，并写了 Python 脚本做并发评测、JSON 清洗和失败样本归因。",
    result:
      "重新建立了 68.4% 的模型基准。后续对 1500+ 验证样本做批量评测，用同一套脚本比较检索策略和 Prompt 版本，避免每次靠手工判断。",
    stack: ["Python", "asyncio", "JSON", "RAG Evaluation", "日志分析"],
  },
  {
    title: "AI News Weekly",
    org: "个人开源项目",
    tags: ["Python 自动化", "邮件生成", "信息流处理"],
    problem:
      "AI 资讯太散，手工整理周报很耗时间。我想把收集、整理、排版和发送变成一个轻量流程。",
    method:
      "用 Python 管理主题、收件人和内容字段，生成邮件模板并自动发送。项目尽量保持配置化，方便以后换成日报、招聘进度简报或知识订阅。",
    result:
      "现在它已经能跑通从内容整理到邮件发送的流程。这个项目更多是办公自动化练习，也让我更熟悉脚本化信息流处理。",
    stack: ["Python", "Email Automation", "Templates", "Workflow"],
    href: "https://github.com/20082123/ai-news-weekly",
  },
  {
    title: "GEO Radar",
    org: "个人实践",
    tags: ["Playwright", "asyncio", "LLM 结构化分析"],
    problem:
      "同一个推荐问题，不同 AI 平台给出的品牌、排序和理由差异很大，单看聊天记录很难比较。",
    method:
      "用 Playwright + asyncio 采集豆包、Qwen 等平台的回答，再用 LLM 把自然语言结果抽成品牌、车型、预算和推荐理由等字段。",
    result:
      "可以统计品牌出现频次、推荐顺序和回答稳定性。这个方向后面还能继续做成更完整的 GEO / AI 搜索评测作品。",
    stack: ["Playwright", "asyncio", "LLM Extraction", "Analytics"],
  },
];

export const highlights = [
  {
    icon: Bot,
    title: "能把 AI 应用接完整",
    text: "不只调用模型，也会处理文档入口、队列、检索、图谱同步、评测和部署中的具体问题。",
  },
  {
    icon: GitBranch,
    title: "结果导向的工程优化",
    text: "做优化时会先看瓶颈在哪里，再用延迟、显存、吞吐或评测口径说明改动是否真的有效。",
  },
  {
    icon: Trophy,
    title: "科研与竞赛基础",
    text: "电子信息硕士在读，有数学建模、强化学习和随机配置网络相关学习背景。",
  },
  {
    icon: Mail,
    title: "面向实习协作",
    text: "更适合偏后端和 AI 应用工程的实习，尤其是 RAG 系统、LLM 工具、数据评测和自动化脚本。",
  },
];
