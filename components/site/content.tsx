export const navItems = [
  { hash: "#about", label: "关于山海集" },
  { hash: "#business", label: "核心业务" },
  { hash: "#showcase", label: "IP 展示" },
  { hash: "#pipeline", label: "AI 能力" }
];

export const stats = [
  { value: "3", unit: "+", label: "自研 IP 同步孵化" },
  { value: "4", unit: "+", label: "业务矩阵全协同" },
  { value: "10", unit: "×", label: "AI 内容生产倍速" }
];

export const businesses: Array<{
  num: string;
  title: string;
  en: string;
  desc: string;
}> = [
  {
    num: "/01",
    title: "AI 宠物",
    en: "AI Virtual Pets",
    desc: "基于 AI 大模型的虚拟宠物伙伴，拥有独立性格、记忆系统与情感进化能力，为用户带来真实的陪伴体验。"
  },
  {
    num: "/02",
    title: "IP 游戏",
    en: "IP-Driven Games",
    desc: "围绕原创 IP 开发沉浸式游戏体验，将角色故事与游戏机制深度融合，构建玩家驱动的叙事宇宙。"
  },
  {
    num: "/03",
    title: "AI 互动漫剧",
    en: "AI Interactive Animation",
    desc: "运用 AI 生成与交互技术，打造观众可参与剧情走向的新型影视内容，重新定义观看体验。"
  },
  {
    num: "/04",
    title: "潮玩盲盒",
    en: "Designer Blind Box",
    desc: "将数字 IP 落地为实体潮玩，通过盲盒机制激发收集欲，打通虚拟与现实的 IP 消费闭环。"
  }
];

export const ips: Array<{
  className: string;
  imageSrc?: string;
  status: string;
  tag: string;
  title: string;
  en: string;
  desc: string;
  type: string;
  state: string;
}> = [
  {
    className: "s2",
    imageSrc: "/images/ip-1.png",
    status: "盲盒生产中 · IN PRODUCTION",
    tag: "/ Original IP · 002",
    title: "五行小兽",
    en: "Wǔ Xíng Beasts",
    desc: "围绕五行文化打造的萌系角色宇宙。盲盒首发系列已进入生产阶段，互动漫剧与游戏等延展产品线同步开发中。",
    type: "盲盒 · IP 矩阵",
    state: "盲盒生产中"
  },
  {
    className: "s3",
    imageSrc: "/images/ip-2.png",
    status: "研发中 · IN DEVELOPMENT",
    tag: "/ Original IP · 003",
    title: "ChaoPets",
    en: "AI Idle Pet Game",
    desc: "放置类 AI 宠物养成游戏。融合情感陪伴与旅行式探索玩法，AI 宠物拥有独立人格与记忆，会在你不在的时光里独自冒险，带回属于你们的故事。",
    type: "AI 陪伴宠物",
    state: "研发中"
  },
  {
    className: "s1",
    status: "制作中 · IN PRODUCTION",
    tag: "/ Original IP · 001",
    title: "我的AI实习男友",
    en: "My AI Intern Boyfriend",
    desc: "AI 原生互动漫剧。观众的每一个选择都将改变剧情走向，由 AI 生成的对话与分支让每一次观看都是独一无二的恋爱体验。",
    type: "AI 互动漫剧",
    state: "制作中"
  }
];

export const pipeline = [
  {
    num: "01",
    title: "概念生成 Ideation",
    desc: "AI 辅助世界观构建与角色概念快速迭代，将创意从灵感加速到可执行方案。",
    tags: ["LLM", "World Building", "Concept Art"]
  },
  {
    num: "02",
    title: "视觉设计 Visual Design",
    desc: "AI 图像生成结合人工精修，确保风格统一与品质管控，实现工业化视觉产出。",
    tags: ["Diffusion", "Style Control", "Quality Assurance"]
  },
  {
    num: "03",
    title: "内容制作 Production",
    desc: "AI 驱动动画、漫画与交互剧情内容的批量化生产，突破传统产能瓶颈。",
    tags: ["Animation", "Comics", "Interactive Engine"]
  },
  {
    num: "04",
    title: "智能交互 Intelligence",
    desc: "AI 人格引擎赋予 IP 角色自主对话与情感记忆能力，创造有温度的数字生命。",
    tags: ["Persona Engine", "Memory System", "Emotion AI"]
  },
  {
    num: "05",
    title: "商业落地 Commercialization",
    desc: "全渠道 IP 分发，虚实联动运营策略，最大化 IP 商业价值。",
    tags: ["Distribution", "Merch", "Cross-media"]
  }
];

export const strengths = [
  {
    title: "AI 原生团队",
    desc: "团队深度掌握前沿 AI 技术栈，从底层模型到应用层的全链路 AI 能力，非简单的工具调用。",
    iconSrc: "/images/why-1.svg"
  },
  {
    title: "IP 全生命周期",
    desc: "从概念孵化、视觉设计、内容生产到商业变现的完整闭环，一站式 IP 运营能力。",
    iconSrc: "/images/why-2.svg"
  },
  {
    title: "虚实融合生态",
    desc: "数字 IP 与实体潮玩联动，线上内容与线下消费打通，构建可持续增长的 IP 商业模型。",
    iconSrc: "/images/why-3.svg"
  }
];

export const contactIntents = [
  {
    title: "IP 联名 / 商务合作",
    desc: "品牌 · 内容方 · 渠道方",
    subject: "【IP 联名】合作意向"
  },
  {
    title: "投资洽谈",
    desc: "FA · 机构 · 战略投资人",
    subject: "【投资】洽谈"
  },
  {
    title: "加入山海集",
    desc: "AI 工程 · IP 创作 · 增长",
    subject: "【招聘】候选人投递"
  },
  {
    title: "媒体 / 报道",
    desc: "采访 · 内容合作 · 行业发声",
    subject: "【媒体】采访 / 报道"
  }
];
