/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  INITIAL_KOL_USER,
  INITIAL_CAMPAIGNS,
  INITIAL_EXCHANGE_LISTINGS,
  INITIAL_ORDERS,
  INITIAL_PREMIUM_FANS,
  INITIAL_EXCLUSIVE_POSTS,
  INITIAL_PRIVATE_GROUPS,
} from "./data";
import {
  UserKOL,
  Campaign,
  ExchangeListing,
  ExchangeRequest,
  OrderTransaction,
  PremiumFan,
  ExclusivePost,
  PrivateGroup,
  AICreativeInput,
  AICreativeOutput,
} from "./types";
import {
  TrendingUp,
  Users,
  Percent,
  Sparkles,
  ArrowRightLeft,
  Crown,
  Share2,
  Wallet,
  Settings,
  Plus,
  CheckCircle2,
  AlertCircle,
  Copy,
  FolderLock,
  MessageSquare,
  QrCode,
  ExternalLink,
  ChevronRight,
  TrendingDown,
  Gift,
  Flame,
  ThumbsUp,
  Lock,
  Unlock,
  Radio,
  Clock,
  Search,
  Filter,
  LogOut,
  AppWindow,
  RotateCcw,
  Download
} from "lucide-react";

export default function App() {
  // Navigation views: "landing" (default official presentation portal) or "app" (simulated creator admin workspace)
  const [viewMode, setViewMode] = useState<"landing" | "app">("landing");

  // Navigation tabs
  const [activeTab, setActiveTab] = useState<
    "analytics" | "campaigns" | "ai-generator" | "traffic-exchange" | "premium-feed" | "private-domain"
  >("analytics");

  // State engines with initialized mock metrics
  const [kolUser, setKolUser] = useState<UserKOL>(INITIAL_KOL_USER);
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [listings, setListings] = useState<ExchangeListing[]>(INITIAL_EXCHANGE_LISTINGS);
  const [orders, setOrders] = useState<OrderTransaction[]>(INITIAL_ORDERS);
  const [premiumFans, setPremiumFans] = useState<PremiumFan[]>(INITIAL_PREMIUM_FANS);
  const [exclusivePosts, setExclusivePosts] = useState<ExclusivePost[]>(INITIAL_EXCLUSIVE_POSTS);
  const [privateGroups, setPrivateGroups] = useState<PrivateGroup[]>(INITIAL_PRIVATE_GROUPS);

  // Exchange Requests list (simulated applications)
  const [exchangeRequests, setExchangeRequests] = useState<ExchangeRequest[]>([
    {
      id: "req_01",
      listingId: "exch_01", // Applying to 七哥爱做饭
      senderId: "kol_user_01",
      senderName: "艾米米Amy_Tech",
      senderAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      senderNiche: "数码科技 & 智能家居",
      senderFollowers: 45200,
      proposalDetails: "七哥你好！我非常喜欢你的‘程序员周末便当系列’，我自己粉丝中大约有35%是IT从业人员和程序员，对便当和桌面好物关注度极其重合。我可以在我的小红书视频中以‘程序员书桌上的小零嘴/温热便当盒’为场景植入推荐你！期待合作！",
      status: "pending",
      createdAt: "2026-06-15"
    }
  ]);

  // Traffic exchange creation state
  const [showCreateListingModal, setShowCreateListingModal] = useState(false);
  const [newListing, setNewListing] = useState({
    targetPlatform: "小红书",
    minFollowersRequired: 10000,
    exchangeDetails: "",
    postSlotsAvailable: 2,
  });

  // KOL Promotion Application States
  const [appliedCampaignIds, setAppliedCampaignIds] = useState<string[]>(["camp_01", "camp_02"]);
  const [showApplyPromoLink, setShowApplyPromoLink] = useState<string | null>(null);

  // AI Creative Generator states
  const [aiInput, setAiInput] = useState<AICreativeInput>({
    platform: "小红书",
    productName: "【科大摩登】智能空气净化器PRO",
    productCategory: "智能家居家电",
    sellingPoints: "1. 净化率高达99.9%, 极速祛除二手烟与甲醛\n2. 卧室超静音温润设计，不打扰睡眠\n3. 极速绑定米家App，手机智能风道监测",
    tone: "精打细算干货风",
    audience: "精致白领、新生代宝妈及敏感鼻患者",
  });
  const [aiOutput, setAiOutput] = useState<AICreativeOutput | null>({
    adTitle: "✨ 敏感鼻自救指南！为了孩子和猫咪，我挑剔对比半个月才选出它！",
    adCopy: "🔥 家里有猫主子、吸烟家属或者小宝宝的铁子们看过来！\n今天艾米必须强推这款【智能空气净化器PRO】。这绝对是我今年买过最不后悔的智能家电了！\n\n💡 深度测评干货拆解：\n🌱 **硬核净化力**：活性炭网+医用级过滤，实测甲醛能迅速降到0.01以下，二手烟雾3分钟吸干净！\n🔇 **极致静音**：晚上睡眠档只有21分贝，安静得完全听不到声音，还有温润小夜灯，特别贴心。\n📱 **全屋联动**：一键配网，出门在外也能通过手机实时调节风道，检测空气质量。\n\n📢 **KOL专属变现通道福利**：\n点击我的置顶评论专属粉丝包邮券购买，直降200元！下单还赠送原装可替换滤芯，赶紧为全家健康囤起来！\n#空气净化器推荐 #数码好物推荐 #家居美学 #赛博桌面 #KOL好物合伙人",
    creativeImgPrompt: "A cozy high-aesthetic bedroom corner setup. The white sleek 'Modern Air Purifier PRO' sits next to a warm nightstand. Delicate ambient light glows. In the background, a pet cat sleeps comfortably on a knit blanket. Natural soft shadows, photorealistic, 4k resolution.",
    interactionIdeas: [
      "🎁 【超级宠粉】在评论区留言晒出你和家里的毛孩子或宝宝合照，下周抽1位粉丝送同款空气净化器滤芯一套！",
      "💬 【互动提问】‘经常觉得鼻炎发作，你觉得是柳絮、油烟还是空气浮尘最大元凶？’ 欢迎在下方大PK！",
      "👑 【特权私域】想深入了解除甲醛效果对比报告的宝子，点击右侧‘VIP私域群’私聊发你极密对比PDF手册！"
    ]
  });
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // OnlyFans Style custom post creation
  const [unlockModalPost, setUnlockModalPost] = useState<ExclusivePost | null>(null);
  const [privatePostTitle, setPrivatePostTitle] = useState("");
  const [privatePostText, setPrivatePostText] = useState("");
  const [privatePostPrice, setPrivatePostPrice] = useState(5);
  const [privatePostLocked, setPrivatePostLocked] = useState(true);

  // Private domain custom input
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  // Temporary notifications toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Run initial call check to API health
  const [serverOnline, setServerOnline] = useState(false);
  useEffect(() => {
    fetch("/api/health")
      .then((res) => {
        if (res.ok) setServerOnline(true);
      })
      .catch((err) => {
        console.log("Local Express endpoint unreachable. Running with robust simulated mock backup.", err);
      });
  }, []);

  // Request material from Gemini express endpoint
  const handleGenerateAICopy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.productName.trim()) {
      triggerToast("⚠️ 请先输入推广的产品名称");
      return;
    }
    setAiLoading(true);
    setAiError(null);

    try {
      const response = await fetch("/api/creatives/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aiInput),
      });

      if (!response.ok) {
        throw new Error(`Server returned code: ${response.status}`);
      }
      const data = await response.json();
      setAiOutput({
        adTitle: data.adTitle,
        adCopy: data.adCopy,
        creativeImgPrompt: data.creativeImgPrompt,
        interactionIdeas: data.interactionIdeas || []
      });
      triggerToast("🚀 AI 广告创意素材生成成功！");
    } catch (err: any) {
      console.error(err);
      setAiError(err.message || "An error occurred");
      triggerToast("⚠️ 无法连接到AI服务器，使用内置极速生成器输出模板。");
    } finally {
      setAiLoading(false);
    }
  };

  // Approve a pending CPS tracking order
  const handleApproveOrder = (orderId: string) => {
    const updated = orders.map((ord) => {
      if (ord.id === orderId) {
        // Adjust balance! Platform fees paid, earnings accrued
        if (ord.status !== "confirmed") {
          const userUpdated = { ...kolUser };
          userUpdated.balance += ord.kolShare;
          userUpdated.totalEarnings += ord.kolShare;
          userUpdated.platformFeesPaid += ord.platformShare;
          setKolUser(userUpdated);
        }
        return { ...ord, status: "confirmed" as const };
      }
      return ord;
    });
    setOrders(updated);
    triggerToast(`💰 成功核销订单并入账佣金：+¥${orders.find(o => o.id === orderId)?.kolShare.toFixed(2)}`);
  };

  // Toggle order dispute
  const handleDisputeOrder = (orderId: string) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: o.status === "disputed" ? "pending_confirmation" : "disputed" } : o));
    triggerToast("⚖️ 订单异常记录已提交。平台审计人员将在24小时内联系品牌方对账。");
  };

  // Export CSV finance statement for tax declarations and external reconciliation
  const handleExportCSV = () => {
    try {
      const headers = [
        "订单/结算ID",
        "推广商品/项目名称",
        "业务类型(CPS/CPA)",
        "订单总金额(元)",
        "预估总收益(元)",
        "自媒体分成经得70%(元)",
        "平台保留服务费30%(元)",
        "当前核实与结算状态",
        "下单记录时间",
        "推广关联粉丝/支持者",
        "客户联系信息"
      ];

      const rows = orders.map((ord) => {
        const escapeString = (str: string) => `"${str.replace(/"/g, '""')}"`;
        const typeStr = ord.type === "CPS" ? "CPS销售分成" : "CPA注册拉新";
        const valStr = ord.orderValue !== undefined ? ord.orderValue.toFixed(2) : "0.00";
        const totalPayout = ord.grossPayout.toFixed(2);
        const kolShare = ord.kolShare.toFixed(2);
        const platformShare = ord.platformShare.toFixed(2);
        
        let statusStr = "未知状态";
        if (ord.status === "confirmed") statusStr = "已确权/已入账";
        else if (ord.status === "pending_confirmation") statusStr = "待品牌方确权(在途)";
        else if (ord.status === "disputed") statusStr = "商户核销异常争议";

        return [
          ord.id,
          escapeString(ord.campaignTitle),
          typeStr,
          valStr,
          totalPayout,
          kolShare,
          platformShare,
          statusStr,
          ord.orderTime,
          escapeString(ord.userName),
          ord.userContact ? escapeString(ord.userContact) : "未记录"
        ];
      });

      const csvStr = "\uFEFF" + [headers.join(","), ...rows.map(row => row.join(","))].join("\n");
      const blob = new Blob([csvStr], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `Kollovin_自媒体财务明细与对账报表_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      triggerToast("📥 KOL 财务报表 (CSV) 导出成功！已包含所有结算明细及 70/30 分税模型。");
    } catch (err: any) {
      console.error(err);
      triggerToast("⚠️ 导出报表失败，发生异常: " + (err.message || err));
    }
  };

  // Add exclusive post
  const handleCreateExclusivePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privatePostTitle.trim() || !privatePostText.trim()) {
      triggerToast("⚠️ 请填写完整的标题与正文内容");
      return;
    }

    const newPost: ExclusivePost = {
      id: `post_${Date.now()}`,
      kolId: kolUser.id,
      title: privatePostTitle,
      content: privatePostText,
      isPremiumLocked: privatePostLocked,
      unlockPrice: privatePostLocked ? privatePostPrice : undefined,
      unlockedByUserIds: [],
      likes: 0,
      commentsCount: 0,
      createdAt: new Date().toISOString().split("T")[0]
    };

    setExclusivePosts([newPost, ...exclusivePosts]);
    setPrivatePostTitle("");
    setPrivatePostText("");
    triggerToast("✨ 秘圈专属动态已成功广播给订阅粉丝！");
  };

  // Pay to unlock a simulation post (OnlyFans emulation)
  const handleUnlockPostSimulated = (post: ExclusivePost) => {
    if (post.unlockedByUserIds.includes(kolUser.id) || !post.isPremiumLocked) return;

    // Direct simulate fan unlocking (add direct CNY to KOL's mock earnings)
    const price = post.unlockPrice || 5;
    const kolShare = parseFloat((price * 0.70).toFixed(2));
    const platformShare = parseFloat((price * 0.30).toFixed(2));

    const updatedPosts = exclusivePosts.map((p) => {
      if (p.id === post.id) {
        return {
          ...p,
          unlockedByUserIds: [...p.unlockedByUserIds, kolUser.id]
        };
      }
      return p;
    });

    setExclusivePosts(updatedPosts);

    // Increase user balance on behalf of random VIP fan support
    const updatedUser = { ...kolUser };
    updatedUser.balance += kolShare;
    updatedUser.totalEarnings += kolShare;
    updatedUser.platformFeesPaid += platformShare;
    setKolUser(updatedUser);

    setUnlockModalPost(null);
    triggerToast(`🎉 解锁成功！KOL实得变现分成：+¥${kolShare} (70%)，平台分成：¥${platformShare} (30%)`);
  };

  // Traffic Exchange application logic
  const handleApplyToExchange = (listing: ExchangeListing) => {
    // Check if duplicate
    const exists = exchangeRequests.some(r => r.listingId === listing.id && r.senderId === kolUser.id);
    if (exists) {
      triggerToast("⚠️ 您已提交过此置换申请，正在等待对方确认");
      return;
    }

    const newReq: ExchangeRequest = {
      id: `req_${Date.now()}`,
      listingId: listing.id,
      senderId: kolUser.id,
      senderName: kolUser.name,
      senderAvatar: kolUser.avatar,
      senderNiche: kolUser.niche,
      senderFollowers: kolUser.followersCount,
      proposalDetails: `你好！我是「${kolUser.name}」，专注于${kolUser.niche}。我的各个平台粉丝总量是${kolUser.followersCount}，非常期待与你在${listing.targetPlatform}进行公平1:1置换推量，我将会在下期黄金推荐位为你做曝光导流。`,
      status: "pending",
      createdAt: new Date().toISOString().split("T")[0]
    };

    setExchangeRequests([...exchangeRequests, newReq]);
    triggerToast(`🤝 换量意向书已成功送达 【${listing.kolName}】！`);
  };

  // Accept incoming request on My listings
  const handleCreateOwnListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newListing.exchangeDetails.trim()) {
      triggerToast("⚠️ 请先写明您的互推置换要求说明");
      return;
    }

    const listing: ExchangeListing = {
      id: `exch_own_${Date.now()}`,
      kolId: kolUser.id,
      kolName: kolUser.name,
      kolAvatar: kolUser.avatar,
      kolNiche: kolUser.niche,
      kolFollowers: kolUser.followersCount,
      targetPlatform: newListing.targetPlatform,
      minFollowersRequired: newListing.minFollowersRequired,
      exchangeDetails: newListing.exchangeDetails,
      postSlotsAvailable: newListing.postSlotsAvailable,
      status: "open",
      createdAt: new Date().toISOString().split("T")[0]
    };

    setListings([listing, ...listings]);
    setShowCreateListingModal(false);
    setNewListing({
      targetPlatform: "小红书",
      minFollowersRequired: 10000,
      exchangeDetails: "",
      postSlotsAvailable: 2,
    });
    triggerToast("✨ 您的免费互推送量需求已广播至微KOL换量集市！");
  };

  // Withdraw simulation
  const handleWithdrawal = () => {
    if (kolUser.balance < 100) {
      triggerToast("⚠️ 当前余额不足¥100起提门槛，快快通过推广赚取吧！");
      return;
    }
    const amt = kolUser.balance;
    setKolUser({
      ...kolUser,
      balance: 0
    });
    triggerToast(`🏦 提现成功！已向您的预留账户划款：¥${amt.toFixed(2)} 元 (到账中)`);
  };

  // Filter analytics summaries
  const totalGrossOrderSales = orders.reduce((sum, o) => sum + (o.orderValue || 0), 0);
  const totalPlatformFeesCollected = orders.reduce((sum, o) => sum + (o.status === 'confirmed' ? o.platformShare : 0), 0);
  const totalEarningsConfirmed = orders.reduce((sum, o) => sum + (o.status === 'confirmed' ? o.kolShare : 0), 0);
  const pendingEarnings = orders.reduce((sum, o) => sum + (o.status === 'pending_confirmation' ? o.kolShare : 0), 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
      
      {/* Simulation Master Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white px-4 py-2.5 text-xs flex flex-wrap items-center justify-between gap-2 shadow-inner border-b border-indigo-900">
        <div className="flex items-center gap-2">
          <span className="inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-semibold tracking-wider">
            ● LOCAL SIMULATED DUAL-MODE
          </span>
          <span className="text-slate-300">
            Kollovin - 中小KOL商业化一站式成长与变现网站 (Vite + Cloud Run Fullstack)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-300 text-[11px]">
            当前浏览：
            <span className="font-extrabold text-amber-400">
              {viewMode === "landing" ? "🌍 官方公开门户首页" : "⚙️ 创作者工作后台"}
            </span>
          </span>
          <button
            onClick={() => {
              setViewMode(viewMode === "landing" ? "app" : "landing");
              triggerToast(viewMode === "landing" ? "⚙️ 已加载自媒体全功能模拟后台" : "🌍 已加载Kollovin官方品牌门户");
            }}
            className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-[10px] font-black rounded-lg transition-all flex items-center gap-1 border border-white/10"
          >
            {viewMode === "landing" ? "⚙️ 切换至后台工作台" : "🌍 返回官方门户首页"}
          </button>
          <div className="h-4 w-[1px] bg-indigo-900/60"></div>
          <span className="text-slate-300 text-[11px]">
            后端服务器: {serverOnline ? (
              <span className="text-emerald-400 font-semibold font-mono">● 已连接 Express (Gemini API 可调)</span>
            ) : (
                <span className="text-amber-400 font-semibold font-mono">● Fallback 本地模拟器运行中</span>
            )}
          </span>
        </div>
      </div>

      {viewMode === "landing" ? (
        <div className="flex-1 flex flex-col animate-fade-in bg-slate-50">
          {/* Custom Landing Page Header */}
          <header className="bg-white/80 sticky top-0 z-40 backdrop-blur-md border-b border-slate-200/50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-gradient-to-tr from-indigo-600 to-rose-500 rounded-xl flex items-center justify-center text-white font-extrabold shadow-md shadow-indigo-600/20">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black tracking-tight text-slate-900">Kollovin 平台</span>
                    <span className="text-[10px] bg-indigo-50 text-indigo-700 font-extrabold px-1.5 py-0.5 rounded-md">
                      官方网站
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">中小KOL一站式自媒体成长与自主商业变现网站</p>
                </div>
              </div>

              {/* Nav menu links */}
              <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
                <a href="#services" className="hover:text-indigo-600 transition-colors">核心服务矩阵</a>
                <a href="#stats" className="hover:text-indigo-600 transition-colors">平台真实绩优</a>
                <a href="#vision" className="hover:text-indigo-600 transition-colors">去中心化愿景</a>
              </nav>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setViewMode("app");
                    setActiveTab("analytics");
                    triggerToast("🛠️ 已登录并进入创作者数据对账后台");
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-all"
                >
                  后台对账演示
                </button>
                <button
                  onClick={() => {
                    setViewMode("app");
                    triggerToast("🚀 已快速接入中小博主变现工作台网站！");
                  }}
                  className="px-4.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl text-xs shadow-md shadow-indigo-600/15 flex items-center gap-1.5 transition-all"
                >
                  <span>立即入驻后台</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative overflow-hidden pt-12 pb-20 px-6 bg-radial from-indigo-50/40 via-transparent to-transparent">
            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 font-extrabold text-[11px] px-3.5 py-1.5 rounded-full mb-6 tracking-wide shadow-sm animate-pulse pointer-events-none">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
                <span>🏆 创作者商业化 · 中小自媒体「高分成、透明对账、自主私域」一站式解绑成长平台</span>
              </div>

              <h1 className="text-3xl sm:text-4.5xl font-black tracking-tight text-slate-900 leading-[1.12]">
                摆脱算法限流与不合规抽成<br />
                <span className="relative inline-block bg-gradient-to-r from-teal-600 via-indigo-600 to-rose-600 bg-clip-text text-transparent px-2.5 py-1">
                  让中小 KOL 拥有高分成、透明的商业化主权
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
                不作流量的奴隶，不做平台与大MCN压榨下的白工。Kollovin 网站为成长型博主量身研制，主打
                <strong>「安全透明的 70% 高分成 CPS / CPA 选品库」与「OnlyFans 挚粉解密圈」</strong>。
                您辛勤获取的每一份带货实销，皆享行业最高的 <strong>70% 真实分成</strong>，透明结算。
                更有 <strong>Google Gemini 多端文案智写、名片引流 CRM 及精细漏斗数据复盘</strong>，助中小创作者全方位实现体面自由的生活！
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setViewMode("app");
                    setActiveTab("analytics");
                    triggerToast("📊 欢迎！已为您进入创作者精细化数据与收益控制台");
                  }}
                  className="w-full sm:w-auto px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-sm shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-102"
                >
                  <span>立即进入自媒体商业控制后台</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-sm transition-all text-center"
                >
                  了解核心商业化成长套件
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500 font-semibold" id="stats">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  <span>KOL 专属 70% 直分高提成结算</span>
                </div>
                <div className="h-3 w-[1px] bg-slate-300 hidden sm:block"></div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500" />
                  <span>CPS / CPA 品牌安全高分成实销货源</span>
                </div>
                <div className="h-3 w-[1px] bg-slate-300 hidden sm:block"></div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Google Gemini 生态爆款写作提效 100%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Core Trust Statistics Banner */}
          <section className="py-8 bg-slate-900 text-white border-y border-slate-800 shadow-md">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-2 space-y-1">
                <p className="text-3xl md:text-4.5xl font-black text-indigo-400 font-mono">24,800 +</p>
                <p className="text-[11px] text-slate-400 font-semibold tracking-wider">已入驻变现的中小博主与KOL</p>
              </div>
              <div className="p-2 space-y-1">
                <p className="text-3xl md:text-4.5xl font-black text-cyan-400 font-mono">70 %</p>
                <p className="text-[11px] text-slate-400 font-semibold tracking-wider">自媒体直结净得分成比例</p>
              </div>
              <div className="p-2 space-y-1">
                <p className="text-3xl md:text-4.5xl font-black text-rose-400 font-mono">98.6 %</p>
                <p className="text-[11px] text-slate-400 font-semibold tracking-wider">CPS 防丢单自动对账准确率</p>
              </div>
              <div className="p-2 space-y-1">
                <p className="text-3xl md:text-4.5xl font-black text-emerald-400 font-mono">¥8,940,200</p>
                <p className="text-[11px] text-slate-400 font-semibold tracking-wider">已累计发放博主佣金钱包</p>
              </div>
            </div>
          </section>

          {/* Core Services Section with Direct Sandbox Redirection */}
          <section className="py-16 px-6 max-w-7xl mx-auto" id="services">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">核心商业矩阵</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">打通中小 KOL 闭环商业通路</h2>
              <p className="text-xs text-slate-500 max-w-lg mx-auto">
                聚焦高提成货源、私域变现沉淀、智能创作和精细化多端对账，拿回收益主导权。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1: CPS Store */}
              <div
                onClick={() => {
                  setViewMode("app");
                  setActiveTab("campaigns");
                  triggerToast("🛒 已为您直达首发旗舰：CPS / CPA 高佣金智能选品中心");
                }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-rose-500 hover:shadow-lg hover:shadow-rose-500/5 group cursor-pointer transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center font-extrabold group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <Percent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-rose-600 flex items-center gap-2">
                      <span>CPS/CPA 高分账推广选品中心</span>
                      <span className="text-[9px] bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded-full font-bold">高收益</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      汇聚最新爆款智能家居、个人数码与高成长零食好货。佣金率均在50%-70%范围，由供应链直接结算，杜绝压低分成，拿回每一笔应得款项。
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-rose-600">
                  <span>精选高额佣金商品 (核心变现)</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 2: OnlyFans Circle */}
              <div
                onClick={() => {
                  setViewMode("app");
                  setActiveTab("premium-feed");
                  triggerToast("🔒 已为您跳转至：OnlyFans 挚粉加密独立秘圈");
                }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/5 group cursor-pointer transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-extrabold group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-purple-600 flex items-center justify-between">
                      <span>OnlyFans 挚粉加密独立秘圈</span>
                      <span className="text-[9px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded-md font-bold">挚粉专属</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      深度粉丝的溢价变现自留地。为高级干货文章、特定极客好物测评设定特定打赏或购买解锁，直接将忠心追随的长尾用户转化为高客单净值支持。
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-purple-600">
                  <span>发布加密内容打赏解锁</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 3: Gemini AI Copywriter */}
              <div
                onClick={() => {
                  setViewMode("app");
                  setActiveTab("ai-generator");
                  triggerToast("✨ 已为您跳转至：Gemini AI 种草文案智写台");
                }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/5 group cursor-pointer transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-extrabold group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-amber-600 flex items-center justify-between">
                      <span>Gemini AI 种草与带货文案智写</span>
                      <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-md font-bold">尖端 AI</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      依托内置 Google Gemini 大模型系列，提供高热小红书风格带货标题、多端痛点安利文案、社群促单话术与带货脚本，高效赋能内容提效 10 倍。
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-600">
                  <span>智能诊断并生成爆款内容</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 4: Private CRM */}
              <div
                onClick={() => {
                  setViewMode("app");
                  setActiveTab("private-domain");
                  triggerToast("📱 已为您跳转至：微信私域蓄水池与自建 CRM");
                }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/5 group cursor-pointer transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-emerald-600 flex items-center gap-2">
                      <span>微信私域蓄水池与自建 CRM</span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-bold">资产自主</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      一键快速配发专属二维码名片与裂变素材引流包。将公域散客粉丝无损、长期、高效沉淀至各人微信、社群中，确保粉丝资产终身掌控。
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                  <span>设计并获取专属名片</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 5: Analytics */}
              <div
                onClick={() => {
                  setViewMode("app");
                  setActiveTab("analytics");
                  triggerToast("📊 已为您跳转至：推广数据精密诊断与透明对账系统");
                }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/5 group cursor-pointer transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-indigo-600 flex items-center gap-2">
                      <span>推广数据精密诊断与透明对账</span>
                      <span className="text-[9px] bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded-full font-bold">对账不漏</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      拒绝任何一笔漏单、扣量或延期。实时检测交易流水分期记录、对订单待打款进度标记跟踪，提供无懈可击的技术化可视转化率分析面板。
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                  <span>查询带货分成对账单</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </section>

          {/* Visions and Corporate Mission Section */}
          <section className="bg-slate-100 py-16 px-6" id="vision">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
                <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">我们的立足底色跟愿景</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">消除变现鸿沟 · 拿回个体主动权</h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  为什么在全民自媒体时代，最勤恳创作的中尾部博主生活最无确定性？
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Pain Points */}
                <div className="bg-white rounded-2xl p-7 border border-slate-200 flex flex-col justify-between shadow-xs">
                  <div className="space-y-4">
                    <div className="inline-flex px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 font-extrabold text-xs">
                      昔日困局：暗黑榨取与头部围猎
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      在传统的变现丛林中，规则往往令小博主无措：
                    </p>
                    <ul className="space-y-3.5 text-xs text-slate-600 font-medium">
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-500 flex-none text-base">✕</span>
                        <span><strong>MCN低级压榨</strong>：吃掉大部分利益，分成账目黑盒不公开，KOL净得极少甚至零佣金。</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-500 flex-none text-base">✕</span>
                        <span><strong>高不可攀的接带门槛</strong>：公域平台将派单门槛限死。中尾部博主内容再好也无处获款。</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-500 flex-none text-base">✕</span>
                        <span><strong>刷单与黑产骚扰</strong>：本想寻找博主免费互推引流，却遭遇刷屏机刷，损伤核心账号权重。</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-500 flex-none text-base">✕</span>
                        <span><strong>算法清流蒸发</strong>：没有私域沉淀支持，一旦公域平台策略调整，多年的积蓄随封号化为泡影。</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-400">
                    * 导致海量创作者长期陷入付出无变现反馈的死胡同。
                  </div>
                </div>

                {/* Our Mission */}
                <div className="bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 flex flex-col justify-between shadow-lg relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>
                  <div className="space-y-4 relative z-10">
                    <div className="inline-flex px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-extrabold text-xs">
                      Kollovin远景：共赢共享的平权绿野
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      我们坚信，长尾内容创作者是支撑未来真实的信誉底牌：
                    </p>
                    <ul className="space-y-3.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-400 flex-none text-base">✓</span>
                        <span><strong>固定 70% 极高直分分成</strong>：实到每一元的 70% 稳妥归拨入账，平台仅提 30% 做技术托管和AI服务。</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-400 flex-none text-base">✓</span>
                        <span><strong>安全平等的换量大联盟</strong>：无需高昂资本。依靠累积的信用等级进行安全、去水分、1-on-1 联合推量。</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-400 flex-none text-base">✓</span>
                        <span><strong>Gemini智能化创客辅助</strong>：给个人配备抗衡4A公司的顶级人工智能，高效攻克标题、文案编写难关。</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-400 flex-none text-base">✓</span>
                        <span><strong>完全自治的去中心化私域</strong>：提供高度自动化的社群承接及海报名片输出，让忠粉彻底附属于个体。</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 relative z-10">
                    * 赋能尾部毛细血管绽放，让我们依靠内容热忱也能过上体面的自由生活。
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 px-6 max-w-7xl mx-auto" id="testimonials">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">博主真实代言与见证</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">在这里找到前行的底气</h2>
              <p className="text-xs text-slate-500">
                看加入本平台的创作者真实反馈：
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-2xl p-6 shadow-xs space-y-4">
                <p className="text-xs text-slate-600 italic leading-relaxed font-serif">
                  “ 以前一个人在家拍视频做自媒体，好物品牌一看我是百粉小号根本不搭理。入驻Kollovin后，有了透明可控的CPS带货体系、一键生成的Gemini科技文案，让我第一期空气净化器就卖出了20几单，实打实分成入账了几百块！还可以顺畅在互推大集市跟其他优秀美食博主无偿匹配换量，太友善了！”
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="Amy"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs text-left">艾米米Amy_Tech</h4>
                    <span className="text-[10px] text-slate-400">数码科技博主 (4.5w 粉丝小红书)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-xs space-y-4">
                <p className="text-xs text-slate-600 italic leading-relaxed font-serif">
                  “ 自媒体做大最怕公域突然限流。Kollovin教我学会了利用‘独家秘图纸’、‘闭门私域名片’打通去中心化引流微信群的操作。在平台的纯挚粉单篇解锁 and 带货分配模型下，我上个月收益已经顺利超过万元，资金由系统透明对账入账，让人非常有依靠感。”
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                    alt="Qi"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs text-left">美食探店 @七哥爱做饭</h4>
                    <span className="text-[10px] text-slate-400">生活美食KOL (12.4w 粉丝大V)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Landing CTA Card */}
          <section className="px-6 pb-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-indigo-800">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 via-indigo-500 to-emerald-500"></div>
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-rose-500/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 max-w-xl mx-auto space-y-6">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                  重掌选择权，兑现长尾价值。<br />
                  免费开启您的自媒体自主时代。
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  加入博主一站式成长生态，无额外隐性扣费，享有行业最具安全保护力量的7:3拆扣引擎。我们为您的热忱铺好底层资产。
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 font-semibold text-xs text-slate-200">
                  <button
                    onClick={() => {
                      setViewMode("app");
                      triggerToast("✨ 成功启动自媒体博主极速商业控制面板！");
                    }}
                    className="w-full sm:w-auto px-8 py-3 bg-white text-indigo-950 hover:bg-slate-100 font-extrabold rounded-xl shadow-lg shadow-black/10 transition-all hover:scale-102 text-xs"
                  >
                    立即进入创作者后台系统 (演示)
                  </button>
                  <button
                    onClick={() => {
                      setViewMode("app");
                      setActiveTab("ai-generator");
                      triggerToast("🤖 已为您拉起内置 Gemini 智能生成大写引擎");
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-indigo-500/20 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-500/35 rounded-xl transition-all text-xs"
                  >
                    体验 Gemini AI 文案工坊
                  </button>
                </div>

                <p className="text-[10px] text-slate-500 pt-1 font-mono">
                  * 平台搭载原生 Express 后端和 Google Cloud 高级安全架构认证
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex flex-1 flex-col md:flex-row max-w-7xl w-full mx-auto p-4 lg:p-6 gap-6">
        
        {/* Left Side Navigation & User Badge Card */}
        <aside className="w-full md:w-64 flex flex-col gap-6" id="aside-sidebar">
          
          {/* KOL User Profile Panel */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 overflow-hidden relative" id="profile-card">
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-rose-500/0 rounded-full blur-xl pointer-events-none"></div>

            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
              <div className="relative">
                <img
                  src={kolUser.avatar}
                  alt={kolUser.name}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-indigo-500/10"
                />
                <span className="absolute -bottom-1 -right-1 bg-indigo-600 text-white p-0.5 rounded-md text-[9px] font-bold shadow">
                  PRO
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 leading-tight flex items-center gap-1">
                  {kolUser.name}
                </h3>
                <p className="text-xs text-indigo-600 bg-indigo-50/70 inline-block px-1.5 py-0.5 rounded mt-1 font-medium">
                  {kolUser.niche}
                </p>
              </div>
            </div>

            {/* Metrics Overview inside dashboard sidebar */}
            <div className="py-4 space-y-3.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">总发稿渠道粉丝数</span>
                <span className="font-bold text-slate-700 font-mono">{(kolUser.followersCount / 10000).toFixed(1)}w</span>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">互推信誉星级</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                  <StarIcon className="w-3 h-3 fill-current" /> {kolUser.creditScore} 分
                </span>
              </div>

              {/* Sub Platforms Split */}
              <div className="bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 space-y-1.5">
                {kolUser.platforms.map((plat, idx) => (
                  <div key={idx} className="flex justify-between text-[11px]">
                    <span className="text-slate-500">{plat.name}</span>
                    <span className="text-slate-700 font-medium font-mono">{plat.username} ({(plat.followers / 1000).toFixed(1)}k)</span>
                  </div>
                ))}
              </div>

              {/* Balances */}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-1">
                <span className="text-[11px] text-slate-400">可分配余额 (实得70%分成后)</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-black text-indigo-700 font-mono">¥{kolUser.balance.toFixed(2)}</span>
                  <button
                    onClick={handleWithdrawal}
                    className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    即刻提现
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-2" id="navigation-list">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3.5 py-2 block">
              平台工作台
            </span>
            <div className="space-y-1">
              <button
                id="tab-analytics"
                onClick={() => setActiveTab("analytics")}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                  activeTab === "analytics"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>数据精细化中心</span>
                </div>
                <ChevronRight className="w-3 h-3 opacity-60" />
              </button>

              <button
                id="tab-campaigns"
                onClick={() => setActiveTab("campaigns")}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                  activeTab === "campaigns"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Percent className="w-4 h-4" />
                  <span>CPS / CPA 广告平台</span>
                </div>
                <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded-full ${activeTab === 'campaigns' ? 'bg-white/20 text-white' : 'bg-rose-50 text-rose-500'}`}>
                  HOT
                </span>
              </button>

              <button
                id="tab-ai-generator"
                onClick={() => setActiveTab("ai-generator")}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                  activeTab === "ai-generator"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4" />
                  <span>AI 广告素材工坊</span>
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 ml-auto mr-1" />
              </button>

              <button
                id="tab-traffic-exchange"
                onClick={() => setActiveTab("traffic-exchange")}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                  activeTab === "traffic-exchange"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ArrowRightLeft className="w-4 h-4" />
                  <span>公平流量换量社区</span>
                </div>
                <span className="text-[10px] px-1.5 font-bold bg-indigo-50 text-indigo-600 rounded">
                  免费
                </span>
              </button>

              <button
                id="tab-premium-feed"
                onClick={() => setActiveTab("premium-feed")}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                  activeTab === "premium-feed"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Crown className="w-4 h-4" />
                  <span>OnlyFans式 独家秘圈</span>
                </div>
                <ChevronRight className="w-3 h-3 opacity-60" />
              </button>

              <button
                id="tab-private-domain"
                onClick={() => setActiveTab("private-domain")}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                  activeTab === "private-domain"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Share2 className="w-4 h-4" />
                  <span>私域蓄水池 & 长期沉淀</span>
                </div>
                <ChevronRight className="w-3 h-3 opacity-60" />
              </button>
            </div>
          </nav>

          {/* Quick Platform Info */}
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-4.5 border border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-bold text-slate-200">CPS / CPA 提成分配率</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              平台通过系统订单追溯和防假量风控技术，获得 30% 基础服务费（提供AI、换量系统），KOL 直享专属包销分成 70%。
            </p>
            <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
              <span>平台扣除比例: 30%</span>
              <span className="text-indigo-400">KOL净得: 70%</span>
            </div>
          </div>

        </aside>

        {/* Right Area - Displaying targeted TAB components */}
        <main className="flex-1 flex flex-col gap-6" id="main-content">
          
          {/* Main Dashboard Panel */}
          {activeTab === "analytics" && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Header section inside Analytics */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-800">自媒体精细化运营中心</h1>
                  <p className="text-sm text-slate-500 mt-1">
                    实时监控CPS/CPA推广单、佣金返利点及高价值忠客画像，提升长期转化率。
                  </p>
                </div>
                <div className="flex items-center gap-3 self-start sm:self-center">
                  <button
                    id="export-csv-report-btn"
                    onClick={handleExportCSV}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-black px-4 py-2.5 rounded-xl shadow-md shadow-emerald-500/15 text-xs transition-all cursor-pointer group"
                  >
                    <Download className="w-4 h-4 text-emerald-100 group-hover:translate-y-0.5 transition-transform" />
                    <span>导出CSV财务报表</span>
                  </button>
                  <div className="flex items-center gap-2 bg-white rounded-xl shadow-sm border border-slate-200 p-2.5 text-xs">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold text-slate-600">昨日打款日期: 2026-06-15</span>
                  </div>
                </div>
              </div>

              {/* Grid 1: Basic stats block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col">
                  <span className="text-slate-400 font-semibold text-xs">KOL 已确权实得佣金 (70%)</span>
                  <span className="text-2xl font-black text-slate-800 mt-2 font-mono">¥{totalEarningsConfirmed.toFixed(2)}</span>
                  <div className="flex items-center gap-1.5 mt-2.5 text-xs text-emerald-600 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>环比上周增长 +12.4%</span>
                  </div>
                  <div className="absolute top-4 right-4 text-emerald-500/10 bg-emerald-500/5 p-2 rounded-xl">
                    <Wallet className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col">
                  <span className="text-slate-400 font-semibold text-xs">未核销在途待发佣金</span>
                  <span className="text-2xl font-black text-slate-800 mt-2 font-mono">¥{pendingEarnings.toFixed(2)}</span>
                  <span className="text-[10px] text-slate-400 mt-3">需等待在下方的 [订单核销审核] 确认核实</span>
                  <div className="absolute top-4 right-4 text-indigo-500/10 bg-indigo-500/5 p-2 rounded-xl">
                    <Percent className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col">
                  <span className="text-slate-400 font-semibold text-xs">广告主确认订单总销售额</span>
                  <span className="text-2xl font-black text-slate-800 mt-2 font-mono">¥{totalGrossOrderSales.toFixed(2)}</span>
                  <div className="flex items-center gap-1 mt-2.5 text-xs text-indigo-600">
                    <span>平均客单价 ¥{totalGrossOrderSales > 0 ? (totalGrossOrderSales / orders.length).toFixed(1) : "0"} 元</span>
                  </div>
                  <div className="absolute top-4 right-4 text-cyan-500/10 bg-cyan-500/5 p-2 rounded-xl">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col">
                  <span className="text-slate-400 font-semibold text-xs">累计上缴平台 30% 服务费</span>
                  <span className="text-2xl font-black text-slate-800 mt-2 font-mono">¥{totalPlatformFeesCollected.toFixed(2)}</span>
                  <span className="text-[10px] text-emerald-500 font-semibold mt-3">
                    换量集市+AI生成工具均享双重保障
                  </span>
                  <div className="absolute top-4 right-4 text-amber-500/10 bg-amber-500/5 p-2 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Interactive graph & statistics analysis card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-rose-50/50 mb-4">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      每日粉丝增长及CPS/CPA高阶运营数据图表
                    </h3>
                    <p className="text-xs text-slate-400">折线展现流量汇聚到佣金变现的转化波动链路</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full inline-block"></span>
                      <span className="text-slate-500">粉丝自然日增 (人)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="w-2.5 h-2.5 bg-rose-500 rounded-full inline-block"></span>
                      <span className="text-slate-500">CPS日佣金 (¥)</span>
                    </div>
                  </div>
                </div>

                {/* Bespoke Custom SVG interactive Chart Area - Fully type safe, responsive and stunning */}
                <div className="relative pt-2">
                  <div className="h-64 w-full flex flex-col justify-between relative">
                    
                    {/* Background helper gridlines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      <div className="border-b border-slate-100 w-full h-[1px]"></div>
                      <div className="border-b border-slate-100 w-full h-[1px]"></div>
                      <div className="border-b border-slate-100 w-full h-[1px]"></div>
                      <div className="border-b border-slate-100 w-full h-[1px]"></div>
                    </div>

                    {/* SVG Drawn charts */}
                    <svg className="w-full h-full absolute inset-0 pt-4 z-10 overflow-visible" preserveAspectRatio="none">
                      {/* Gradient for Areas */}
                      <defs>
                        <linearGradient id="indigo-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0"/>
                        </linearGradient>
                        <linearGradient id="rose-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.15"/>
                          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0"/>
                        </linearGradient>
                      </defs>

                      {/* Line 1: Fan Growth (simulated points over 6 days: x coordinates spread, y heights) */}
                      {/* points: 6/10: 50, 6/11: 120, 6/12: 80, 6/13: 250, 6/14: 310, 6/15: 450 */}
                      <path
                        d="M 10 180 Q 200 160 380 140 T 750 90 T 1100 40 L 1100 240 L 10 240 Z"
                        fill="url(#indigo-grad)"
                      />
                      <path
                        d="M 10 180 Q 200 160 380 140 T 750 90 T 1100 40"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Line 2: Commission yield: 100, 240, 150, 390, 520, 480 */}
                      <path
                        d="M 10 210 Q 200 190 380 160 T 750 110 T 1100 75"
                        fill="none"
                        stroke="#f43f5e"
                        strokeWidth="2.5"
                        strokeDasharray="4,4"
                        strokeLinecap="round"
                      />

                      {/* Interactive dots representing key milestones */}
                      <circle cx="1100" cy="40" r="6" fill="#4f46e5" className="animate-pulse" />
                      <circle cx="1100" cy="75" r="5" fill="#f43f5e" />
                    </svg>

                    {/* Left vertical metrics indicators */}
                    <div className="absolute left-2 top-2 z-20 text-[10px] text-slate-400 font-mono flex flex-col justify-between h-48 pointer-events-none">
                      <span>400 (最高)</span>
                      <span>200</span>
                      <span>50 (最低)</span>
                    </div>

                    {/* Space reserve */}
                    <div className="flex-1"></div>

                    {/* Bottom Day-Axis indicators */}
                    <div className="flex justify-between text-xs text-slate-400 pt-2 border-t border-slate-200">
                      <span>06-10 (周三)</span>
                      <span>06-11 (周四)</span>
                      <span>06-12 (周五)</span>
                      <span>06-13 (周六)</span>
                      <span>06-14 (周天)</span>
                      <span className="font-bold text-indigo-600">06-15 (昨日/核对)</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* Two-Column split below: Left is order payment checkout verification block, right is High-Value user dashboard */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Orders checking to verify high-value and cashouts */}
                <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">订单真实度确认与佣金划扣 (CPS防作弊)</h4>
                      <p className="text-xs text-slate-400">核对订单编号与带货日志，确认后佣金即入账至可结资金中</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 font-bold text-xs">
                      待确认: {orders.filter(o => o.status === 'pending_confirmation').length} 笔
                    </span>
                  </div>

                  <div className="mt-4 space-y-3.5">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className={`p-3.5 rounded-xl border transition-all ${
                          order.status === "confirmed"
                            ? "bg-slate-50/50 border-slate-100 opacity-80"
                            : order.status === "disputed"
                            ? "bg-rose-50/50 border-rose-200"
                            : "bg-white border-slate-200 hover:shadow"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={order.userAvatar}
                              alt={order.userName}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-slate-800 text-xs">{order.userName}</span>
                                {order.highValueUser && (
                                  <span className="px-1 text-[8px] bg-rose-500 text-white font-black rounded uppercase">
                                    HIGH LTV
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-slate-400 mt-0.5">
                                下单时间: {order.orderTime} | ID: {order.id}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-bold text-slate-500 block">
                              返金率: {order.type === 'CPS' ? 'CPS (20%)' : 'CPA 单发'}
                            </span>
                            <span className="font-mono text-xs font-extrabold text-indigo-700 block">
                              KOL得: +¥{order.kolShare.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs gap-2">
                          <p className="text-slate-500 text-[11px]">
                            广告归属: <span className="text-slate-700 font-semibold">{order.campaignTitle}</span>
                          </p>

                          <div className="flex items-center gap-2">
                            {order.status === "pending_confirmation" ? (
                              <>
                                <button
                                  onClick={() => handleDisputeOrder(order.id)}
                                  className="px-2 py-1 text-[11px] font-bold text-slate-500 hover:text-rose-600 hover:bg-slate-100 rounded"
                                >
                                  标记申诉
                                </button>
                                <button
                                  onClick={() => handleApproveOrder(order.id)}
                                  className="px-2.5 py-1 text-[11px] font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center gap-1"
                                >
                                  <CheckCircle2 className="w-3 h-3" />
                                  确认付款
                                </button>
                              </>
                            ) : order.status === "disputed" ? (
                              <div className="flex items-center gap-1.5 text-rose-600 text-[11px] font-bold">
                                <AlertCircle className="w-3.5 h-3.5" />
                                <span>申诉对账中 · 等待核实</span>
                                <button
                                  onClick={() => handleDisputeOrder(order.id)}
                                  className="text-slate-500 hover:underline ml-1 font-semibold"
                                >
                                  撤销
                                </button>
                              </div>
                            ) : (
                              <span className="flex items-center gap-1 text-emerald-600 font-bold text-[11px]">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                佣金已结算至钱包 (¥{order.kolShare.toFixed(2)})
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: High-Value User Profile Database with private conversion support */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                  <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">高价值付费粉丝画像 (精细化运营)</h4>
                      <p className="text-xs text-slate-400">
                        基于高消费LTV和强活跃度锁定核心贡献粉丝
                      </p>
                    </div>
                    <Crown className="w-4 h-4 text-amber-500 animate-bounce" />
                  </div>

                  <div className="mt-4 space-y-4">
                    {premiumFans.map((fan) => (
                      <div key={fan.id} className="group transition-all">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={fan.avatar}
                              alt={fan.username}
                              className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 ring-offset-1 group-hover:scale-105 transition-transform"
                            />
                            <div>
                              <div className="flex items-center gap-1">
                                <span className="font-bold text-slate-800 text-xs">{fan.username}</span>
                                <span className={`text-[8px] px-1 py-0.2 rounded font-black uppercase ${
                                  fan.tier === 'super_premium'
                                    ? 'bg-rose-500 text-white'
                                    : fan.tier === 'premium'
                                    ? 'bg-amber-500 text-white'
                                    : 'bg-slate-200 text-slate-600'
                                }`}>
                                  {fan.tier === 'super_premium' ? 'SVIP 挚爱' : fan.tier === 'premium' ? '黄金 VIP' : '普通会员'}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-400">活跃状态: {fan.lastActive}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] text-slate-400 font-medium">累计支持消费</span>
                            <p className="text-xs font-black text-slate-800 font-mono">¥{fan.totalPaid.toFixed(2)}</p>
                          </div>
                        </div>

                        {/* Note & specific promotion recommendation */}
                        <div className="mt-2 text-[11px] text-slate-500 bg-slate-50 border border-slate-100 rounded-lg p-2 leading-relaxed">
                          <span className="font-semibold text-indigo-600">运营备注: </span>
                          {fan.notes}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>粉丝回访跟进管理</span>
                    <button
                      onClick={() => setActiveTab("premium-feed")}
                      className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>进入独家密圈发放特权</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* CPS/CPA Campaign board */}
          {activeTab === "campaigns" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-800">CPS / CPA 品牌营销联盟投放库</h1>
                  <p className="text-sm text-slate-500 mt-1">
                    这里是各大广告主发布的优质投放需求。30%由平台完成链路防伪监控及基础税服核销，70%佣金全归KOL。
                  </p>
                </div>
                <div className="text-xs font-bold text-slate-400 bg-white border border-slate-200 shadow-sm p-2 rounded-xl flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5" />
                  <span>全部主流媒体推广挂链</span>
                </div>
              </div>

              {/* Campaign Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {campaigns.map((camp) => (
                  <div
                    key={camp.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow relative"
                  >
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`px-2 py-0.5 rounded-full font-black text-[10px] tracking-wider uppercase text-white ${
                        camp.type === 'CPS' ? 'bg-indigo-600' : 'bg-rose-500'
                      }`}>
                        {camp.type}
                      </span>
                    </div>

                    <div className="p-5 flex-1">
                      {/* Advertiser info */}
                      <div className="flex items-center gap-2 mb-3">
                        <img
                          src={camp.advertiserLogo}
                          alt={camp.advertiserName}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-xs font-bold text-slate-500">{camp.advertiserName}</span>
                      </div>

                      <h3 className="font-black text-slate-800 text-base leading-snug hover:text-indigo-600 transition-colors">
                        {camp.title}
                      </h3>

                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                        {camp.description}
                      </p>

                      {/* Display image related */}
                      <div className="mt-4 rounded-xl overflow-hidden h-40 relative bg-slate-100">
                        <img
                          src={camp.productImg}
                          alt={camp.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Core parameters */}
                      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100 text-xs">
                        <div>
                          <span className="text-slate-400">单笔确认佣金点</span>
                          <p className="font-extrabold text-indigo-700 text-sm font-mono mt-0.5">
                            ¥{camp.payoutAmount.toFixed(2)}
                            {camp.commissionRate && ` (${camp.commissionRate * 100}%)`}
                          </p>
                        </div>
                        <div>
                          <span className="text-slate-400">目标群体画像</span>
                          <p className="font-bold text-slate-700 text-[11px] line-clamp-1 mt-0.5">
                            {camp.targetAudience}
                          </p>
                        </div>
                      </div>

                      {camp.cpaThresholdDescription && (
                        <div className="mt-3 bg-rose-50/50 rounded-lg p-2 border border-rose-100 flex items-start gap-1.5 text-[11px] text-rose-700">
                          <AlertCircle className="w-3.5 h-3.5 flex-none mt-0.5" />
                          <span><strong>转化门槛限制：</strong>{camp.cpaThresholdDescription}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom promotion link panel */}
                    <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-between text-xs gap-3">
                      <div>
                        <span className="text-slate-400 block text-[10px]">总池预算情况</span>
                        <div className="w-24 bg-slate-200 rounded-full h-1.5 mt-1">
                          <div
                            className="bg-indigo-600 h-1.5 rounded-full"
                            style={{ width: `${(camp.spent / camp.totalBudget) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setAiInput({
                              ...aiInput,
                              productName: camp.title.split("】")[1]?.split(" ")[0] || camp.title,
                              productCategory: camp.type === 'CPS' ? '高端好物' : '科技App下载',
                              sellingPoints: camp.description
                            });
                            setActiveTab("ai-generator");
                            triggerToast("🔮 已将产品参数导入AI工坊，快去一键生成爆款引流文案吧！");
                          }}
                          className="px-2 py-1.5 font-bold text-indigo-600 hover:bg-white border border-indigo-100 rounded-xl"
                          title="去一键生成AI文案素材"
                        >
                          AI 素材
                        </button>

                        {appliedCampaignIds.includes(camp.id) ? (
                          <button
                            onClick={() => setShowApplyPromoLink(camp.id)}
                            className="px-3 py-1.5 font-black bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            <span>获取专属挂链</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setAppliedCampaignIds([...appliedCampaignIds, camp.id]);
                              setShowApplyPromoLink(camp.id);
                              triggerToast("🎉 分配专属CPS/CPA跟踪链接成功！");
                            }}
                            className="px-3.5 py-1.5 font-extrabold bg-indigo-600 hover:bg-slate-900 text-white rounded-xl shadow"
                          >
                            立即合作带货
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Expand Promo Link Panel */}
                    {showApplyPromoLink === camp.id && (
                      <div className="p-4 bg-emerald-950 text-emerald-200 text-xs border-t border-emerald-800 animate-fade-in flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold flex items-center gap-1">
                            <Radio className="w-3.5 h-3.5 animate-ping text-emerald-400" />
                            专属于您的推广追踪短链（佣金比例：70% 归您）
                          </span>
                          <button
                            onClick={() => setShowApplyPromoLink(null)}
                            className="text-[10px] hover:underline hover:text-white font-mono"
                          >
                            [关闭]
                          </button>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-900/40 p-2 rounded border border-emerald-800">
                          <span className="font-mono text-[11px] select-all flex-1 truncate">
                            {`https://kollink.com/p/${camp.id}?ref=${kolUser.id}&mode=${camp.type.toLowerCase()}`}
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(`https://kollink.com/p/${camp.id}?ref=${kolUser.id}`);
                              triggerToast("📋 专属带货链接已成功复制到剪贴板！可以直接挂置小红书和抖音评论区。");
                            }}
                            className="p-1 hover:bg-emerald-800 rounded transition-colors text-white"
                            title="复制链接"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] text-emerald-300">
                          💡 提示：本链接集成了防刷与CPA深度回传跟踪，用户每通过此链接下单支付/下载完成测评，佣金将立即显示在您的 [未核销在途] 列表中。
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI generator workshop */}
          {activeTab === "ai-generator" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-800">AI 智能广告素材工坊</h1>
                  <p className="text-sm text-slate-500 mt-1">
                    依托 Google Gemini 核心语言大模型，深度针对小红书和抖音算法量身定做高点击率、强转化的爆款CPS/CPA带货宣传文案。
                  </p>
                </div>
                <div className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-xl border border-indigo-100 flex items-center gap-2 self-start text-xs font-bold font-mono">
                  <Sparkles className="w-4 h-4 animate-spin text-indigo-500" />
                  <span>Powered by Gemini 3.5 Flash</span>
                </div>
              </div>

              {/* Column split: Form input and material preview output */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Inputs configuration form */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 self-start">
                  <h3 className="font-bold text-slate-800 text-sm pb-2.5 border-b border-slate-100 mb-4 flex items-center gap-2">
                    <Settings className="w-4 h-4 text-indigo-600" />
                    商品参数及风格设定
                  </h3>

                  <form onSubmit={handleGenerateAICopy} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">投放社交平台目标</label>
                      <select
                        value={aiInput.platform}
                        onChange={(e) => setAiInput({ ...aiInput, platform: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="小红书 (RED)">小红书(图文种草与干货文)</option>
                        <option value="抖音 (Douyin/Short Video)">抖音(短视频开箱对白与精编台词)</option>
                        <option value="微信朋友圈/社群">微信朋友圈/高价值群发私域沉淀文</option>
                        <option value="快手 / 微博极速版">快手 & 微博 (下沉市场CPA强推文)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">主打产品/App 名字</label>
                      <input
                        type="text"
                        value={aiInput.productName}
                        onChange={(e) => setAiInput({ ...aiInput, productName: e.target.value })}
                        placeholder="例如: 智能空气净化器 Pro"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">所属类目标签</label>
                      <input
                        type="text"
                        value={aiInput.productCategory}
                        onChange={(e) => setAiInput({ ...aiInput, productCategory: e.target.value })}
                        placeholder="例如: 智能家电 / 桌面数码配件 / 潮流玩具"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">核心卖点与亮点对账 (一行一个)</label>
                      <textarea
                        rows={4}
                        value={aiInput.sellingPoints}
                        onChange={(e) => setAiInput({ ...aiInput, sellingPoints: e.target.value })}
                        placeholder="例如:&#10;1. 性价比爆棚,首发立减150&#10;2. 独立低噪温控电机，极为省电&#10;3. 送专属加厚空气过滤网"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 leading-relaxed focus:ring-2 focus:ring-indigo-500 font-mono"
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-slate-500 block mb-1">写作情感基调</label>
                        <select
                          value={aiInput.tone}
                          onChange={(e) => setAiInput({ ...aiInput, tone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs text-slate-800"
                        >
                          <option value="精打细算干货风">精细干货测评</option>
                          <option value="震惊安利惊叹风">震惊安利咆哮风</option>
                          <option value="幽默自黑亲民风">自卑搞笑吐槽流</option>
                          <option value="温馨日常治愈风">温馨居家氛围感</option>
                          <option value="专业权威实测风">硬核极客参数流</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-500 block mb-1">核心受众人群</label>
                        <input
                          type="text"
                          value={aiInput.audience}
                          onChange={(e) => setAiInput({ ...aiInput, audience: e.target.value })}
                          placeholder="例如: 精致辣妈、敏感鼻白领"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs text-slate-800"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={aiLoading}
                      className="w-full py-3 px-4 bg-indigo-600 hover:bg-slate-900 text-white rounded-xl font-extrabold text-xs tracking-wider transition-all shadow-md shadow-indigo-600/10 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {aiLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>AI正在深度撰写中，请稍等...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 animate-bounce" />
                          <span>一键智能生成爆款文案</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Simulated / Real Material Output Preview panel */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {aiLoading && (
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm flex flex-col items-center justify-center text-center py-20">
                      <Sparkles className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
                      <h4 className="font-bold text-slate-800 text-base">正在联动 AI 大模型创作...</h4>
                      <p className="text-xs text-slate-400 max-w-sm mt-1">
                        正在针对所选的 {aiInput.platform} 平台用户喜好进行词云权重分析、加入爆款情绪Emoji和精准评论呼应套路...
                      </p>
                    </div>
                  )}

                  {!aiLoading && aiOutput && (
                    <div className="space-y-6">
                      
                      {/* Copy Title & Text Section */}
                      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm relative">
                        
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(`${aiOutput.adTitle}\n\n${aiOutput.adCopy}`);
                              triggerToast("📋 文案标题与正文已批量复制成功！");
                            }}
                            className="bg-slate-100 hover:bg-indigo-100 text-indigo-600 px-2.5 py-1 text-[11px] font-bold rounded-lg flex items-center gap-1 transition-all"
                          >
                            <Copy className="w-3 h-3" />
                            <span>复制全套文案</span>
                          </button>
                        </div>

                        <span className="text-[10px] bg-slate-100 font-bold px-2 py-0.5 rounded text-slate-500">
                          文案详情 (支持带货主干)
                        </span>

                        <h3 className="font-black text-slate-800 text-base mt-2.5 border-b border-dashed border-slate-100 pb-3 leading-snug">
                          {aiOutput.adTitle}
                        </h3>

                        <div className="whitespace-pre-wrap text-xs text-slate-600 leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100 font-mono mt-4 max-h-96 overflow-y-auto">
                          {aiOutput.adCopy}
                        </div>
                      </div>

                      {/* Image Prompt Concept Suggestion */}
                      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                        <span className="text-[10px] bg-indigo-50 font-bold px-2 py-0.5 rounded text-indigo-600">
                          视觉底稿概念 suggestion (KOL实物配图参考指南)
                        </span>
                        
                        <div className="mt-3.5 bg-slate-50 border border-indigo-100/60 p-4 rounded-xl flex items-start gap-3">
                          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                            <AppWindow className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">建议图像生成/配图提词</p>
                            <p className="text-xs text-slate-700 mt-1 leading-relaxed italic">
                              "{aiOutput.creativeImgPrompt}"
                            </p>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(aiOutput.creativeImgPrompt);
                                triggerToast("📋 视觉配图英文提词提示语已成功复制到剪贴板！");
                              }}
                              className="text-[11px] text-indigo-600 font-bold hover:underline mt-2 flex items-center gap-0.5"
                            >
                              <span>复制提示语</span>
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Comment section and fan attraction strategies */}
                      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                        <span className="text-[10px] bg-rose-50 font-bold px-2 py-0.5 rounded text-rose-600">
                          3步互动带转化高阶技巧 (引导评论/锁定私域)
                        </span>

                        <div className="mt-4 space-y-3">
                          {aiOutput.interactionIdeas.map((idea, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                              <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center flex-none font-bold text-[10px]">
                                {idx + 1}
                              </span>
                              <span>{idea}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {aiError && (
                    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs text-rose-800 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-none mt-0.5" />
                      <div>
                        <strong>API 请求异常：</strong> {aiError}
                        <p className="mt-2 text-slate-500">
                          本环境支持服务器级 Gemini SDK。如果您看到错误，可以在平台 [Secret] 配置有效密钥，或直接享用我们的智能本地响应生成。
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          )}

          {/* Traffic exchange bulletin board */}
          {activeTab === "traffic-exchange" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-800">公平无偿流量互换市集</h1>
                  <p className="text-sm text-slate-500 mt-1">
                    针对未满变现门槛的新秀中小KOL，初期提供【1比1等量互推置换】。平台采用智能信誉星级保护，避免跑单，助你零成本精准破圈。
                  </p>
                </div>
                <button
                  onClick={() => setShowCreateListingModal(true)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>发布我的互推置换要求</span>
                </button>
              </div>

              {/* Status Alert */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4.5 flex gap-3 text-xs text-indigo-800 leading-relaxed">
                <Radio className="w-5 h-5 text-indigo-500 flex-none animate-pulse mt-0.5" />
                <div>
                  <strong>置换保护法则：</strong> 置换行为不收受任何现金。KOL在完成互推并提供截图/曝光数据后，平台星级信用将获得累加（信用评分对后续高佣CPS/CPA投放带货权限极为关键）。若单方在互推期限内未能排稿发片，系统会自动扣减信用评级、冻结合作并优先理赔。
                </div>
              </div>

              {/* Create listing Modal Form */}
              {showCreateListingModal && (
                <div className="bg-indigo-950 text-white p-5 rounded-2xl border border-indigo-800 animate-fade-in space-y-4">
                  <div className="flex items-center justify-between pb-2.5 border-b border-indigo-900">
                    <span className="font-bold text-sm tracking-wide">发布等量换量导流帖</span>
                    <button
                      onClick={() => setShowCreateListingModal(false)}
                      className="text-indigo-300 hover:text-white text-xs"
                    >
                      [取消]
                    </button>
                  </div>

                  <form onSubmit={handleCreateOwnListing} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-800">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">主攻社交网络平台</label>
                      <select
                        value={newListing.targetPlatform}
                        onChange={(e) => setNewListing({ ...newListing, targetPlatform: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800"
                      >
                        <option value="小红书 (RED)">小红书(图文/视频互艾特)</option>
                        <option value="抖音 (Douyin)">抖音短视频(合拍/推荐/赞评联动)</option>
                        <option value="微信朋友圈/社群">微信私域公众号/群互推</option>
                        <option value="微博 (Weibo)">新浪微博(直发置顶互推)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">申请方粉丝门槛起步线</label>
                      <input
                        type="number"
                        value={newListing.minFollowersRequired}
                        onChange={(e) => setNewListing({ ...newListing, minFollowersRequired: parseInt(e.target.value) })}
                        placeholder="例如: 10000"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800 font-mono"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        置换企划内容描述 (说明你推别人的文案方向与契合度)
                      </label>
                      <textarea
                        rows={3}
                        value={newListing.exchangeDetails}
                        onChange={(e) => setNewListing({ ...newListing, exchangeDetails: e.target.value })}
                        placeholder="明确说明你的调性和意愿。例如：小红书我的数码桌面账号（4.5w粉）推你的桌搭外设。希望寻找同量级键盘或生活家居博主..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800 leading-relaxed font-mono"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">可用首推档位坑位</label>
                      <input
                        type="number"
                        value={newListing.postSlotsAvailable}
                        onChange={(e) => setNewListing({ ...newListing, postSlotsAvailable: parseInt(e.target.value) })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800"
                      />
                    </div>

                    <div className="md:col-span-2 pt-2 flex justify-end gap-2 text-white">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 hover:bg-slate-900 rounded-lg font-bold"
                      >
                        确认发布并全平台呼叫
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Exchange listings list */}
              <div className="space-y-4">
                {listings.map((listing) => (
                  <div key={listing.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm transition-all hover:scale-[1.005] flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3.5 mb-3">
                        <img
                          src={listing.kolAvatar}
                          alt={listing.kolName}
                          className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-black text-slate-800 text-sm">{listing.kolName}</span>
                            <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-600">
                              {listing.kolNiche}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400">目前粉丝数：{(listing.kolFollowers / 10000).toFixed(1)}万</p>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 space-y-2 max-w-2xl bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <p className="font-serif italic leading-relaxed text-slate-700">“ {listing.exchangeDetails} ”</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                        <span>发布时间: {listing.createdAt}</span>
                        <div className="h-3 w-[1px] bg-slate-200"></div>
                        <span>可用置换档期余: <strong className="text-indigo-600 font-bold">{listing.postSlotsAvailable}</strong> 档</span>
                      </div>
                    </div>

                    {/* Right action block */}
                    <div className="flex flex-col justify-between items-end gap-2 text-[11px] min-w-[150px] border-t md:border-t-0 pt-3 md:pt-0 border-dashed border-slate-200">
                      <div className="text-right">
                        <span className="text-slate-400 block">所需起步粉丝量</span>
                        <strong className="text-xs font-black text-indigo-700 font-mono">
                          ≥ {listing.minFollowersRequired.toLocaleString()} 粉丝
                        </strong>
                      </div>

                      {/* Check if already sent */}
                      {exchangeRequests.some((r) => r.listingId === listing.id && r.senderId === kolUser.id) ? (
                        <span className="inline-flex px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                          置换投递成功
                        </span>
                      ) : (
                        <button
                          onClick={() => handleApplyToExchange(listing)}
                          className="w-full py-2 px-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs text-center rounded-xl shadow-sm flex items-center justify-center gap-1"
                        >
                          <ArrowRightLeft className="w-3.5 h-3.5" />
                          申请无偿互推
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Submitted requests statistics list */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="font-extrabold text-slate-800 text-sm pb-2 border-b border-slate-100 mb-4 flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-slate-400" />
                  我已发送/收到的互推意向书进展 ({exchangeRequests.length})
                </h3>

                <div className="space-y-3.5 text-xs">
                  {exchangeRequests.map((req) => (
                    <div key={req.id} className="p-4 rounded-xl bg-slate-50 border border-indigo-100/60 leading-relaxed text-slate-600">
                      <div className="flex justify-between items-center pb-2 mb-2 border-b border-indigo-50/50">
                        <span className="font-bold text-slate-700">您发向了美食探店 @七哥爱做饭 的意向提案 🚀</span>
                        <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold text-[10px]">
                          等待对端品牌及截图排期
                        </span>
                      </div>
                      <p className="text-slate-600 italic">“ {req.proposalDetails} ”</p>
                      <p className="text-[10px] text-slate-400 mt-2">投送时间: {req.createdAt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Premium Fans Feed OnlyFans emulation */}
          {activeTab === "premium-feed" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-800">OnlyFans式 精细化私密秘圈</h1>
                  <p className="text-sm text-slate-500 mt-1">
                    高粘度核心粉丝是商业化的终极支撑。提供独家高价值干货、闭门家电评测、甚至个人彩蛋，设置单篇付费解锁，彻底释放LTV。
                  </p>
                </div>
                <div className="bg-rose-50 text-rose-700 px-3 py-1 text-xs rounded-xl border border-rose-100 font-bold flex items-center gap-1.5 self-start">
                  <Crown className="w-4 h-4 text-rose-500" />
                  <span>单篇解锁与订阅分成机制</span>
                </div>
              </div>

              {/* Column split: Write new private post, feed list stream */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Write panel */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 self-start">
                  <h3 className="font-extrabold text-slate-800 text-sm pb-2 border-b border-slate-100 mb-4 flex items-center gap-2">
                    <Crown className="w-4 h-4 text-indigo-600" />
                    广播一篇独家收费/免费秘圈动态
                  </h3>

                  <form onSubmit={handleCreateExclusivePost} className="space-y-4 text-xs">
                    <div>
                      <label className="font-bold text-slate-500 block mb-1">动态主旨标语</label>
                      <input
                        type="text"
                        value={privatePostTitle}
                        onChange={(e) => setPrivatePostTitle(e.target.value)}
                        placeholder="例如: 🔒 2026我的科技升版极密清单！"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800"
                        required
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-500 block mb-1">专属干货或文字正文内容 (支持富文本设定)</label>
                      <textarea
                        rows={5}
                        value={privatePostText}
                        onChange={(e) => setPrivatePostText(e.target.value)}
                        placeholder="支持书写干货方案、品牌智商税警告。如果选择收费，非付费用户仅只显示前两行并加上高质模糊毛玻璃毛片效果！"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 leading-relaxed font-mono"
                        required
                      ></textarea>
                    </div>

                    {/* Toggle lock or not */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-600">锁定该动态为付费专属解锁？</span>
                        <input
                          type="checkbox"
                          checked={privatePostLocked}
                          onChange={(e) => setPrivatePostLocked(e.target.checked)}
                          className="w-4 h-4 text-indigo-600 accent-indigo-600 cursor-pointer"
                        />
                      </div>

                      {privatePostLocked && (
                        <div className="animate-fade-in flex items-center justify-between gap-2 bg-white p-2 rounded-lg border border-slate-200">
                          <span className="text-slate-400">单篇解锁价格(元/CNY)</span>
                          <div className="flex items-center gap-1.5">
                            <span>¥</span>
                            <input
                              type="number"
                              min={1}
                              max={100}
                              value={privatePostPrice}
                              onChange={(e) => setPrivatePostPrice(parseInt(e.target.value) || 5)}
                              className="w-16 bg-slate-50 border rounded p-1 text-center font-bold text-indigo-700"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-xs shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>送达秘圈动态 🔒</span>
                    </button>
                  </form>
                </div>

                {/* Exclusive postings list stream */}
                <div className="lg:col-span-7 space-y-4">
                  {exclusivePosts.map((post) => {
                    const isUnlocked = !post.isPremiumLocked || post.unlockedByUserIds.includes(kolUser.id);
                    return (
                      <div key={post.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-3.5">
                            <span className={`px-2 py-0.5 rounded font-black text-[9px] ${
                              post.isPremiumLocked
                                ? isUnlocked
                                  ? 'bg-emerald-50 text-emerald-700'
                                  : 'bg-rose-50 text-rose-600'
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              {post.isPremiumLocked
                                ? isUnlocked
                                  ? '🔓 付费内容已解锁预览'
                                  : '🔒 付费特权动态'
                                : '🔓 免费广播内容'}
                            </span>
                            <span className="text-[10px] text-slate-400">更新日期: {post.createdAt}</span>
                          </div>

                          <h3 className="font-black text-slate-800 text-base leading-snug">
                            {post.title}
                          </h3>

                          {/* Render Blur effect for non unlocked */}
                          <div className="mt-3 relative text-xs text-slate-600 leading-relaxed">
                            {!isUnlocked ? (
                              <>
                                <p className="line-clamp-2 select-none opacity-40">
                                  {post.content}
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent/10 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
                                  <div className="bg-rose-50 border border-rose-100 p-4 rounded-2xl flex flex-col items-center justify-center max-w-xs shadow-md">
                                    <Lock className="w-6 h-6 text-rose-500 animate-bounce mb-2" />
                                    <span className="font-extrabold text-slate-800 text-xs">
                                      粉丝专属解锁特权
                                    </span>
                                    <p className="text-[10px] text-slate-400 mt-1">
                                      此篇文章属于限时付费密圈。解锁费用
                                      <strong className="text-rose-600 font-mono text-xs"> ¥{post.unlockPrice?.toFixed(2)} 元</strong>。下单提成将7/3拆分。
                                    </p>
                                    <button
                                      onClick={() => setUnlockModalPost(post)}
                                      className="mt-3.5 px-4 py-1.5 bg-rose-5050 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[11px] rounded-xl flex items-center gap-1 shadow-sm"
                                    >
                                      <span>支持KOL · 立刻解锁</span>
                                      <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <p className="whitespace-pre-wrap font-serif leading-relaxed text-slate-700 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                {post.content}
                              </p>
                            )}
                          </div>

                          {post.mediaUrl && isUnlocked && (
                            <div className="mt-4 rounded-xl overflow-hidden h-60 bg-slate-100 border">
                              <img
                                src={post.mediaUrl}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}

                          {/* Footer engagement metrics */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1 hover:text-indigo-600 cursor-pointer">
                                <ThumbsUp className="w-4 h-4" />
                                {post.likes} 赞
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {post.commentsCount} 回帖讨论
                              </span>
                            </div>
                            {post.isPremiumLocked && !isUnlocked && (
                              <span className="text-slate-400">
                                累计已有 <strong className="text-rose-600 font-mono font-bold">{post.unlockedByUserIds.length + 3}</strong> 位挚粉成功付资解锁
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          )}

          {/* Private domain settlement */}
          {activeTab === "private-domain" && (
            <div className="space-y-6 animate-fade-in z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-800">KOL 私域蓄水池与沉淀体系</h1>
                  <p className="text-sm text-slate-500 mt-1">
                    由于公域平台常常限流并对带货链接审查严苛，将粉丝导入到您可以自由通知的微信群、QQ群或Telegram频道，是进行高变现二次CPS复购的底气。
                  </p>
                </div>
                <div className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-xl border border-indigo-100 flex items-center gap-2 self-start text-xs font-bold">
                  <ExternalLink className="w-4 h-4 text-indigo-500" />
                  <span>多域高效率跳转挂接</span>
                </div>
              </div>

              {/* Private domains configure list */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Visualizer invitation card */}
                <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm self-start flex flex-col items-center text-center">
                  <span className="text-[10px] bg-indigo-50 font-black px-2 py-0.5 rounded text-indigo-600 mb-4 tracking-wider uppercase">
                    智能私域海报名片 (可直接下载挂载公域)
                  </span>

                  <div className="bg-gradient-to-b from-indigo-50 via-white to-slate-50 p-5 rounded-2xl border border-indigo-100 w-full flex flex-col items-center relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500"></div>

                    <img
                      src={kolUser.avatar}
                      alt={kolUser.name}
                      className="w-14 h-14 rounded-full border-2 border-white shadow mt-2"
                    />

                    <h4 className="font-extrabold text-slate-800 text-sm mt-2">{kolUser.name} 的私密自留地</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">扫上方或加入下方链接尊享KOL大礼包</p>

                    {/* Simulating a styled QR code placeholder */}
                    <div className="my-5 p-3.5 bg-white rounded-xl border shadow-inner flex flex-col items-center justify-center w-36 h-36 border-indigo-50">
                      <QrCode className="w-24 h-24 text-slate-900" />
                      <span className="text-[9px] font-mono text-slate-400 mt-1">
                        [{privateGroups[activeGroupIndex].platform} 渠道安全回传]
                      </span>
                    </div>

                    <div className="w-full bg-indigo-600/5 border border-indigo-100/50 rounded-xl p-2.5 text-left text-[11px] text-slate-600 space-y-1">
                      <span className="font-bold text-indigo-700 block text-[10px]">准入条件:</span>
                      <p className="line-clamp-2">
                        {privateGroups[activeGroupIndex].rulesDescription}
                      </p>
                    </div>

                    <button
                      onClick={() => triggerToast("💾 专属粉丝私域海报图包已开始导出 (512x512PNG格式) ...")}
                      className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-sm"
                    >
                      保存并导出独立分享海报
                    </button>
                  </div>
                </div>

                {/* Settings & configure fields list */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <h3 className="font-extrabold text-slate-800 text-sm pb-2 border-b border-slate-100 mb-4">
                      我已映射维护的核心私域社区通道 ({privateGroups.length} 个)
                    </h3>

                    <div className="space-y-4">
                      {privateGroups.map((group, idx) => (
                        <div
                          key={group.id}
                          onClick={() => setActiveGroupIndex(idx)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            activeGroupIndex === idx
                              ? "bg-slate-50 border-indigo-500 shadow-sm"
                              : "bg-white border-slate-200 hover:bg-slate-50/50"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className={`p-2.5 rounded-xl text-white ${
                                group.platform === 'WeChat' ? 'bg-emerald-500' : 'bg-sky-500'
                              }`}>
                                <Users className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-extrabold text-slate-800 text-xs flex items-center gap-2">
                                  {group.name}
                                  <span className="px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 text-[9px] font-black uppercase">
                                    {group.requiredTier === 'premium' ? '限定黄金VIP以上' : '任何普通粉丝'}
                                  </span>
                                </h4>
                                <p className="text-[10px] text-slate-400 mt-1">目前活跃团员数: {group.activeMembers} 玩家 | 通道首选: {group.platform}</p>
                              </div>
                            </div>

                            <span className="text-[11px] font-mono text-slate-400">
                              {activeGroupIndex === idx ? "👉 当前选中名片" : "点击切换名片"}
                            </span>
                          </div>

                          <div className="mt-3.5 pt-3 border-t border-slate-100/80 text-xs text-slate-600 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <strong className="text-slate-500 block">社群群规及白嫖福利说明:</strong>
                              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{group.rulesDescription}</p>
                            </div>
                            <div>
                              <strong className="text-slate-500 block">跳转直连地址 (可写入引流话术)</strong>
                              <div className="flex items-center gap-1.5 bg-slate-100 border p-1 rounded mt-1">
                                <span className="font-mono text-[10px] flex-1 truncate select-all">{group.joinLink}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigator.clipboard.writeText(group.joinLink);
                                    triggerToast("📋 私域直通跳转短链已复制！");
                                  }}
                                  className="p-1 hover:bg-slate-200 text-slate-700 rounded"
                                  title="复制链接"
                                >
                                  <Copy className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Private message templates list to retain premium fans values */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-sm pb-2 border-b border-slate-100 mb-3 flex items-center gap-2">
                      <Gift className="w-4 h-4 text-indigo-600 animate-pulse" />
                      高忠客私聊沉淀话术模板 (粉丝变现赋能)
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      结合已购买空气净化器的VIP用户画像，系统自动通过私域聊天群推荐以下联动话术，促进粉丝进行下一期洛斐机械键盘(CPS 15%比例)二次复购：
                    </p>

                    <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="flex items-start gap-2 text-slate-600">
                        <span className="font-bold text-indigo-600 flex-none bg-indigo-50 px-1 py-0.5 rounded text-[10px]">微信尊享大本营群发</span>
                        <p className="font-mono">
                          📢 「私域挚粉特权福利来袭！」：晨晨和晓白前天在群里咨询的【洛斐机械键盘-极地款】！今天Amy跟品牌主理人硬要来了一个<strong>独家无门槛20元降温券</strong>！只有本私域社群的铁粉可领。CPS佣金已绑定，大家戳右侧卡片专享大优惠！👇
                        </p>
                      </div>
                      <div className="flex items-start gap-2 text-slate-600 pt-2 border-t border-dashed border-slate-200">
                        <span className="font-bold text-rose-600 flex-none bg-rose-50 px-1 py-0.5 rounded text-[10px]">SVIP林晨晨专属私戳语</span>
                        <p className="font-mono">
                          嗨晨晨宝贝！感谢你上周支持了我的摩登空气净化器，体验过程还舒服吧？知道你特别在乎书桌一站式软装，这次咱们内部有一批洛斐机械键盘白嫖试打团活动。我直接把免费返现的测试链接给你，你可以优先白给开箱写反馈！😘
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

        </main>
      </div>
      )}

      {/* OnlyFans Locked Post Unlock Simulated Modal */}
      {unlockModalPost && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-slate-200 shadow-2xl animate-scale-up">
            <div className="flex items-center gap-2.5 text-rose-600 border-b pb-3 mb-3.5">
              <Crown className="w-5 h-5 flex-none" />
              <h4 className="font-black text-sm text-slate-800">核对支持并解锁博主独家干货</h4>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              这里是针对粉丝支持消费的闭试模拟：解锁当前选中的 <strong>“{unlockModalPost.title}”</strong>。
            </p>

            <div className="my-4 bg-slate-50 p-3.5 rounded-xl border text-center">
              <span className="text-[10px] text-slate-400 block tracking-widest uppercase">解锁单片所需赞助</span>
              <strong className="text-2xl font-black text-slate-800 font-mono">¥{unlockModalPost.unlockPrice?.toFixed(2)}</strong>
              
              <div className="mt-2 text-[10px] text-slate-400 leading-snug flex items-center justify-center gap-1">
                <span>分成比例一览: </span>
                <span className="text-indigo-600 font-bold">KOL自得 ¥{((unlockModalPost.unlockPrice || 5) * 0.70).toFixed(2)} (70%)</span>
                <span>/</span>
                <span className="text-slate-500">平台收取服务费 ¥{((unlockModalPost.unlockPrice || 5) * 0.30).toFixed(2)} (30%)</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed mb-4">
              💡 本项目为商业分成系统示范（CPS/CPA 佣金模型）。在实际产品中支持微信H5支付、微信小程序直接起付并在对公账户中 7/3 拆账，确保安全正规。
            </p>

            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setUnlockModalPost(null)}
                className="flex-1 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-lg text-center"
              >
                再想想
              </button>
              <button
                onClick={() => handleUnlockPostSimulated(unlockModalPost)}
                className="flex-1.5 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-lg text-center shadow"
              >
                模拟粉丝付款并解锁
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Toast Message Notification popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-slate-100 px-4 py-3 rounded-2xl border border-slate-800 shadow-xl flex items-center gap-2.5 max-w-sm animate-fade-in-up">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-none" />
          <span className="text-xs font-semibold leading-relaxed">{toastMessage}</span>
        </div>
      )}

      {/* Elegant minimalist footer */}
      <footer className="mt-auto bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-400">
        <p>© 2026 Kollovin - 中小KOL一站式商业化成长与自主变现网站. 70/30 分享引擎商业版权所有.</p>
        <p className="mt-1 text-[10px] text-slate-300">
          基于 Vite、Tailwind CSS 与 Google Gemini APIs 实时素材分析技术提供技术支持
        </p>
      </footer>

    </div>
  );
}

// Simple internal icon helper for ratings
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
