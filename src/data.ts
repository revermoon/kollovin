/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserKOL, Campaign, ExchangeListing, OrderTransaction, PremiumFan, ExclusivePost, PrivateGroup } from "./types";

// Dynamic pre-populated high-quality initial states for full simulation

export const INITIAL_KOL_USER: UserKOL = {
  id: "kol_user_01",
  name: "艾米米Amy_Tech",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  niche: "数码科技 & 智能家居",
  followersCount: 45200,
  platforms: [
    { name: "小红书", username: "@艾米数码日记", followers: 28000 },
    { name: "抖音", username: "@艾米爱开箱", followers: 15200 },
    { name: "微博", username: "@Amy_Tech", followers: 2000 }
  ],
  creditScore: 98, // Fair exchange rating
  balance: 3820.00, // 70% share withdrawable
  totalEarnings: 12450.00, // Lifetime total income (70%)
  platformFeesPaid: 5335.71 // 30% service fee paid to platform (12450 / 0.7 * 0.3)
};

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: "camp_01",
    title: "【科大摩登】智能空气净化器PRO 测评招募",
    advertiserId: "adv_01",
    advertiserName: "摩登生活电器",
    advertiserLogo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=100",
    type: "CPS",
    commissionRate: 0.20,
    payoutAmount: 119.80, // $599 sale * 20%
    description: "推广全新科技感流线空气净化器，小红书图文/抖音1分钟视频推荐，下单即返大额佣金。佣金分配：广告主销售结算 -> 30%平台服务费支出，70%归微KOL所有。",
    targetAudience: "年轻白领、精致宝妈、高品质家居追求者",
    productUrl: "https://example.com/products/modern-air-purifier",
    productImg: "https://images.unsplash.com/photo-1585338111848-d3e9caddfd1d?auto=format&fit=crop&q=80&w=400",
    banners: [
      "科技流线机身广告主KV海报.jpg",
      "智能APP绑定操控图库.png",
      "静音除菌实验对比动图.gif"
    ],
    totalBudget: 40000,
    spent: 12400,
    status: "active"
  },
  {
    id: "camp_02",
    title: "【云极云端】AI英语提分助手App 新增注册推广",
    advertiserId: "adv_02",
    advertiserName: "北京极速未来教育",
    advertiserLogo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=100",
    type: "CPA",
    payoutAmount: 18.00, // 18 CNY per verified registration
    cpaThresholdDescription: "需注册并完成至少1分钟AI英语水平评估测试（有效防作弊）",
    description: "适合学生党、宝妈自媒体博主。引导粉丝下载并体验AI口语互动。CPA佣金18元。30/70拆分后，KOL实得12.6元每次转换。",
    targetAudience: "中小学家长、大学生、口语自学者",
    productUrl: "https://example.com/products/ai-english-tutor",
    productImg: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400",
    banners: [
      "亲子互动体验名师力荐切片.jpg",
      "注册领取5篇精选AI范文流程图.png"
    ],
    totalBudget: 15000,
    spent: 6200,
    status: "active"
  },
  {
    id: "camp_03",
    title: "【洛斐复古】极地机械键盘 潮玩测评分享",
    advertiserId: "adv_03",
    advertiserName: "Lofree洛斐精工",
    advertiserLogo: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=100",
    type: "CPS",
    commissionRate: 0.15,
    payoutAmount: 74.85, // $499 sale * 15%
    description: "复古机械开箱美图分享。自带流光背光与温暖键帽音，契合书桌面美学自媒体或科技极简数码KOL投放。",
    targetAudience: "桌面美学党、数码男、潮玩博主、程序员",
    productUrl: "https://example.com/products/retro-keyboard",
    productImg: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=400",
    banners: [
      "莫兰迪暖黄背光精工美感插图.jpg",
      "键轴声波段测试音频下载.wav"
    ],
    totalBudget: 50000,
    spent: 18500,
    status: "active"
  }
];

export const INITIAL_EXCHANGE_LISTINGS: ExchangeListing[] = [
  {
    id: "exch_01",
    kolId: "kol_other_01",
    kolName: "七哥爱做饭",
    kolAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    kolNiche: "美食探店 & 美味烹饪",
    kolFollowers: 32000,
    targetPlatform: "小红书",
    minFollowersRequired: 15000,
    exchangeDetails: "【小红书互推】我发布你的数码办公好物件探店/生活文案，你帮我在你的科技号上推我的“程序员周末便当系列”。双方粉丝调性匹配！",
    postSlotsAvailable: 2,
    status: "open",
    createdAt: "2026-06-15"
  },
  {
    id: "exch_02",
    kolId: "kol_other_02",
    kolName: "喵姐爱穿搭",
    kolAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    kolNiche: "时尚穿搭 & 每日好物",
    kolFollowers: 58000,
    targetPlatform: "抖音",
    minFollowersRequired: 25000,
    exchangeDetails: "【抖音视频互推】寻找数码/3C好物博主，我可以把你们的高颜值充电宝/耳机作为我的闺房开箱EDC背景展示，并艾特博主。你需要在1周内做出穿搭开箱带货梦幻联动！",
    postSlotsAvailable: 1,
    status: "open",
    createdAt: "2026-06-14"
  },
  {
    id: "exch_03",
    kolId: "kol_other_03",
    kolName: "金融小墨客",
    kolAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    kolNiche: "数码数科 - 金融理财",
    kolFollowers: 12000,
    targetPlatform: "小红书 / 微信公众号",
    minFollowersRequired: 8000,
    exchangeDetails: "【文书置换】互发推荐文案，可挂二维码沉淀私域。我推你的优质科技号，你推我的宏观科普。保证公平，相互审查文案，杜绝违规内容。",
    postSlotsAvailable: 3,
    status: "open",
    createdAt: "2026-06-15"
  }
];

export const INITIAL_ORDERS: OrderTransaction[] = [
  {
    id: "order_1001",
    campaignId: "camp_01",
    campaignTitle: "摩登生活智能空气净化器PRO",
    kolId: "kol_user_01",
    userId: "fan_vip_01",
    userName: "林晨晨 (Lins)",
    userAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    userContact: "135****4852",
    type: "CPS",
    orderValue: 599.00,
    grossPayout: 119.80,
    kolShare: 83.86, // 70% of 119.80
    platformShare: 35.94, // 30% of 119.80
    status: "confirmed",
    highValueUser: true, // Spent high
    orderTime: "2026-06-15 14:32"
  },
  {
    id: "order_1002",
    campaignId: "camp_02",
    campaignTitle: "云极AI英语提分助手App",
    kolId: "kol_user_01",
    userId: "fan_vip_02",
    userName: "张晓白",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    userContact: "微信 zxb_math_010",
    type: "CPA",
    grossPayout: 18.00,
    kolShare: 12.60,
    platformShare: 5.40,
    status: "confirmed",
    highValueUser: false,
    orderTime: "2026-06-15 11:15"
  },
  {
    id: "order_1003",
    campaignId: "camp_01",
    campaignTitle: "摩登生活智能空气净化器PRO",
    kolId: "kol_user_01",
    userId: "fan_vip_03",
    userName: "顾明勋",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    type: "CPS",
    orderValue: 599.00,
    grossPayout: 119.80,
    kolShare: 83.86,
    platformShare: 35.94,
    status: "pending_confirmation", // User has paid, KOL checks / platform auto marks but can dispute
    highValueUser: true,
    orderTime: "2026-06-15 18:22"
  },
  {
    id: "order_1004",
    campaignId: "camp_03",
    campaignTitle: "洛斐极地机械键盘 CPS",
    kolId: "kol_user_01",
    userId: "fan_vip_04",
    userName: "键盘收藏家Tony",
    userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    userContact: "WX id: custom-key-fans",
    type: "CPS",
    orderValue: 499.00,
    grossPayout: 74.85,
    kolShare: 52.40,
    platformShare: 22.45,
    status: "pending_confirmation",
    highValueUser: true,
    orderTime: "2026-06-15 21:05"
  }
];

export const INITIAL_PREMIUM_FANS: PremiumFan[] = [
  {
    id: "fan_vip_01",
    username: "林晨晨 (Lins)",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    tier: "super_premium",
    totalPaid: 1530.00, // Bought purifying air and locked posts
    membershipSince: "2026-03-12",
    isHighValue: true,
    notes: "每次数码测评必看。购买了空气净化器。对智能穿戴、桌面小物件极其有兴趣，乐于高粉赞助。",
    lastActive: "10分钟前"
  },
  {
    id: "fan_vip_03",
    username: "顾明勋",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    tier: "premium",
    totalPaid: 618.00,
    membershipSince: "2026-04-20",
    isHighValue: true,
    notes: "广州粉丝。支持本站桌面升级计划！购买了大摩登净化器。常留言互动讨论降噪效率。",
    lastActive: "1小时前"
  },
  {
    id: "fan_vip_04",
    username: "键盘收藏家Tony",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    tier: "premium",
    totalPaid: 520.00,
    membershipSince: "2026-05-01",
    isHighValue: true,
    notes: "键圈资深玩家。已申请置换洛斐键盘团购福利。高净值桌面垂直粉。",
    lastActive: "刚刚"
  },
  {
    id: "fan_vip_02",
    username: "张晓白",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    tier: "free",
    totalPaid: 18.00, // Downloaded cpa English app
    membershipSince: "2026-06-05",
    isHighValue: false,
    notes: "关注了大学生科技备考。通过AI口语CPA广告进入，活跃度一般。",
    lastActive: "1天前"
  }
];

export const INITIAL_EXCLUSIVE_POSTS: ExclusivePost[] = [
  {
    id: "post_01",
    kolId: "kol_user_01",
    title: "🔒 桌面美学深度拆解 (2026升版计划未公开草案)",
    content: "铁子们！这是我筹备已久的“赛博朋克暖色桌面”的核心配置清单和布光底层公式。包含了3个小众无logo支架品牌、以及双显示器色温平衡技巧。本文章为尊享粉丝专属，解锁后可随时向我私信索要对应精修定制壁纸压缩包！",
    mediaUrl: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800",
    mediaType: "image",
    isPremiumLocked: true,
    unlockPrice: 5.00, // Requires 5 credits / CNY standard
    unlockedByUserIds: ["fan_vip_01", "fan_vip_03"], // Unlocked by VIP
    likes: 24,
    commentsCount: 9,
    createdAt: "2026-06-12"
  },
  {
    id: "post_02",
    kolId: "kol_user_01",
    title: "🔒 极密数码种草避坑：这6款网红家电，谁买谁心碎！",
    content: "很多厂商找过我做这几款的高额CPS，但我良心过不去。今天在闺圈VIP这里，吐槽揭露一些设计存在明显寿命死穴的商品（附带品牌与实机拆解对比图），帮助大家绕开至少上千元的智商税坑！",
    isPremiumLocked: true,
    unlockPrice: 8.00,
    unlockedByUserIds: ["fan_vip_01"],
    likes: 42,
    commentsCount: 15,
    createdAt: "2026-06-14"
  },
  {
    id: "post_03",
    kolId: "kol_user_01",
    title: "📢 【免费放送】自媒体新人的10个无偿工具包（已沉淀私域自取）",
    content: "大家好！今天整理了科技数码排布中我长期使用，不需要版权并且完全可以套用的AE过渡模板、Pr色彩映射LUT预设包、以及无损音频噪音消除软件！全部免费公布！大家可以随时在我右侧「私域社群」卡片扫码加入微信群在群公告大礼包直接抱走！",
    mediaUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    mediaType: "image",
    isPremiumLocked: false,
    unlockedByUserIds: [],
    likes: 125,
    commentsCount: 38,
    createdAt: "2026-06-15"
  }
];

export const INITIAL_PRIVATE_GROUPS: PrivateGroup[] = [
  {
    id: "group_01",
    platform: "WeChat",
    name: "「艾米Amy_Tech」尊享交流大本营（微信）",
    qrCode: "微信群二维码_模拟.png",
    joinLink: "https://u.wechat.com/mock-amy-tech-private-group",
    requiredTier: "premium",
    activeMembers: 148,
    rulesDescription: "限定黄金/白金VIP尊享关注者加入。每周一三五，群内直接发数码样品、键帽拆箱白嫖福利！严禁打广告与外发死链，打造最纯粹的书桌数码沙龙。"
  },
  {
    id: "group_02",
    platform: "Telegram",
    name: "賽博極簡愛好者頻道 (Telegram channel)",
    joinLink: "https://t.me/mock_amy_cyber_minimalist",
    requiredTier: "any_fan",
    activeMembers: 840,
    rulesDescription: "日常更新未剪辑版科技好物视频灵感脑图、桌面壁纸推荐源文件，支持匿名匿名QA提问。"
  }
];

// Helper to simulate earning metrics
export interface EarningMetrics {
  totalGrossSales: number; // Advertisements total value (e.g. 599+599+599...)
  grossCommissions: number; // Gross payout before split
  kolShare: number; // 70%
  platformShare: number; // 30%
  completedOrdersCount: number;
}
