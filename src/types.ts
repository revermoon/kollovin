/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Core business entities for the KOL Commercialization Platform

export interface UserKOL {
  id: string;
  name: string;
  avatar: string;
  niche: string; // Tech, Fashion, Food, Finance, Gaming, Travel, Lifestyle etc.
  followersCount: number;
  platforms: { name: string; username: string; followers: number }[];
  creditScore: number; // For Traffic Exchange reliability
  balance: number; // Current withdrawable earnings (70% share)
  totalEarnings: number; // Lifetime earnings
  platformFeesPaid: number; // 30% platform portion
}

export interface Advertiser {
  id: string;
  name: string;
  logo: string;
  category: string;
}

export interface Campaign {
  id: string;
  title: string;
  advertiserId: string;
  advertiserName: string;
  advertiserLogo: string;
  type: 'CPS' | 'CPA';
  commissionRate?: number; // e.g., 0.15 for 15% CPS
  payoutAmount: number; // payout per sale (CPS) or action (CPA)
  cpaThresholdDescription?: string; // CPA limit description e.g., "Requires user retention > 3 days"
  description: string;
  targetAudience: string;
  productUrl: string;
  productImg: string;
  banners: string[]; // Materials
  totalBudget: number;
  spent: number;
  status: 'active' | 'completed' | 'paused';
}

export interface KOLAppCampaign {
  id: string;
  campaignId: string;
  kolId: string;
  status: 'pending' | 'approved' | 'rejected';
  promotionLink: string;
  views: number;
  clicks: number;
  conversions: number;
  earningsGenerated: number; // 100% gross
}

export interface ExchangeListing {
  id: string;
  kolId: string;
  kolName: string;
  kolAvatar: string;
  kolNiche: string;
  kolFollowers: number;
  targetPlatform: string; // Douyin, Little Red Book, Weibo, etc.
  minFollowersRequired: number;
  exchangeDetails: string;
  postSlotsAvailable: number;
  status: 'open' | 'matched' | 'completed';
  createdAt: string;
}

export interface ExchangeRequest {
  id: string;
  listingId: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  senderNiche: string;
  senderFollowers: number;
  proposalDetails: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: string;
}

export interface OrderTransaction {
  id: string;
  campaignId: string;
  campaignTitle: string;
  kolId: string;
  userId: string; // Paying fan or end buyer
  userName: string;
  userAvatar: string;
  userContact?: string;
  type: 'CPS' | 'CPA';
  orderValue?: number; // For CPS, e.g., $99
  grossPayout: number; // Payout before split
  kolShare: number; // 70% of gross
  platformShare: number; // 30% of gross
  status: 'pending_confirmation' | 'confirmed' | 'disputed';
  highValueUser: boolean; // Flag if user spends highly or performs well
  orderTime: string;
}

export interface PremiumFan {
  id: string;
  username: string;
  avatar: string;
  tier: 'free' | 'premium' | 'super_premium';
  totalPaid: number; // Lifetime spending in local currency
  membershipSince: string;
  isHighValue: boolean;
  notes: string;
  lastActive: string;
}

export interface ChatMessage {
  id: string;
  senderId: string; // 'kol' or fan's id
  senderName: string;
  text: string;
  timestamp: string;
  isPremiumUnlock?: boolean; // Locked text/file behind subscription/pay-to-view
  unlockPrice?: number;
  isUnlocked?: boolean;
}

export interface ExclusivePost {
  id: string;
  kolId: string;
  title: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'audio';
  isPremiumLocked: boolean;
  unlockPrice?: number; // Price in currency to unlock (like OnlyFans)
  unlockedByUserIds: string[]; // List of fans who have unlocked it
  likes: number;
  commentsCount: number;
  createdAt: string;
}

export interface PrivateGroup {
  id: string;
  platform: 'WeChat' | 'QQ' | 'Telegram' | 'Discord' | 'Other';
  name: string;
  qrCode?: string;
  joinLink: string;
  requiredTier: 'any_fan' | 'premium' | 'super_premium';
  activeMembers: number;
  rulesDescription: string;
}

export interface AICreativeInput {
  platform: string;
  productName: string;
  productCategory: string;
  sellingPoints: string;
  tone: string; // professional, humorous, emotional, energetic, salesy etc.
  audience: string;
}

export interface AICreativeOutput {
  adTitle: string;
  adCopy: string;
  creativeImgPrompt: string;
  interactionIdeas: string[];
}
