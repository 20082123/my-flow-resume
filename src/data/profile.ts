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
    "我主要做 RAG 和大模型应用后端。最近一段时间都在处理文档解析、模型调用和评测脚本这些工程细节。",
  summary:
    "贵州大学电子信息硕士在读。实习里做过工业 PDF 问答后端、GraphRAG 数据同步、本地模型缓存，也写过 LLM 批量评测脚本。现在找大模型应用工程相关实习，偏后端，愿意从脏数据和接口细节做起。",
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
      "那套工业标准 PDF 很难直接喂给 RAG。表格多，扫描页也多，人工查起来慢；解析再慢一点，用户就会觉得系统不可用。",
    method:
      "我主要做后端链路。先按页面情况分流：普通文本页走 pdfplumber，低字符密度或复杂表格页走 PaddleOCR。上传任务放进 FastAPI + SQLite + Worker 队列。LightRAG 本地模型调用也做了常驻缓存，减少重复加载。",
    result:
      "最后，7 页混合 PDF 解析从 21.3 分钟降到约 13 秒，MVP Pipeline 控制在 1.5 分钟内。单 Chunk 推理从 144 秒降到 1.2 秒，VRAM 峰值占用下降 96%。Neo4j 批量同步达到 680+ 节点/秒。",
    stack: ["FastAPI", "SQLite", "Worker", "pdfplumber", "PaddleOCR", "LightRAG", "Neo4j"],
  },
  {
    title: "TKE 电梯虚拟教练系统",
    org: "上海波士内智能科技有限公司",
    tags: ["批量评测脚本", "数据时间线校验", "RAG 效果分析"],
    problem:
      "这个项目让我印象比较深的是数据时间线。预测故障时，如果把维修后的描述拿来当输入，离线分数会变好，但上线时根本拿不到。",
    method:
      "我重新看了工单、运行日志和维修记录的可见时间，发现“维修描述”存在泄漏，于是去掉这个字段并重切窗口。评测部分写了 Python 脚本，批量跑验证样本、清洗 JSON、记录失败原因。",
    result:
      "模型基准回到 68.4%。这个数字没那么漂亮，但更接近真实使用场景。后来 1500+ 验证样本都用同一套脚本跑，方便比较检索策略和 Prompt 版本。",
    stack: ["Python", "asyncio", "JSON", "RAG Evaluation", "日志分析"],
  },
  {
    title: "AI News Weekly",
    org: "个人开源项目",
    tags: ["Python 自动化", "邮件生成", "信息流处理"],
    problem:
      "AI 资讯每天都很多，我不想每周再手工复制粘贴。",
    method:
      "用 Python 把主题、收件人和内容字段放进配置，生成邮件模板后自动发送。",
    result:
      "目前可以跑完整流程。它不算复杂，但很适合练习把零散信息变成稳定的脚本任务。",
    stack: ["Python", "Email Automation", "Templates", "Workflow"],
    href: "https://github.com/20082123/ai-news-weekly",
  },
  {
    title: "GEO Radar",
    org: "个人实践",
    tags: ["Playwright", "asyncio", "LLM 结构化分析"],
    problem:
      "同一个推荐问题，豆包、Qwen 这类平台给出的品牌和顺序经常不一样。只看聊天截图，很难说谁更稳定。",
    method:
      "用 Playwright + asyncio 采集豆包、Qwen 等平台的回答，再用 LLM 把自然语言结果抽成品牌、车型、预算和推荐理由等字段。",
    result:
      "先做到了频次和排序统计。后面如果继续做，会把它扩展成个人作品集里的 AI 搜索评测工具。",
    stack: ["Playwright", "asyncio", "LLM Extraction", "Analytics"],
  },
];

export const highlights = [
  {
    icon: Bot,
    title: "愿意把细节补齐",
    text: "RAG 项目里，解析、队列、缓存、失败样本这些小地方经常决定体验。我比较愿意钻这些地方。",
  },
  {
    icon: GitBranch,
    title: "优化先看瓶颈",
    text: "做优化时会先看慢在哪里，再用延迟、显存、吞吐或评测结果说明改动有没有用。",
  },
  {
    icon: Trophy,
    title: "有一点科研训练",
    text: "电子信息硕士在读，接触过数学建模、强化学习和随机配置网络。",
  },
  {
    icon: Mail,
    title: "适合的实习方向",
    text: "偏后端的大模型应用工程，尤其是 RAG 系统、LLM 工具、评测脚本和数据处理。",
  },
];
