import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (
  price: number
): { integerPart: string; decimalPart: string } => {
  const formattedPrice = price.toFixed(2) // Ensure it always has two decimal places
  const [integerPart, decimalPart] = formattedPrice.split(".")
  return {
    integerPart,
    decimalPart,
  }
}

export function getSizeName(value: string) {
  switch (value) {
    case "xs":
      return "X-Small"
    case "s":
      return "Small"
    case "m":
      return "Medium"
    case "l":
      return "Large"
    case "xl":
      return "X-Large"
    case "one-size":
      return "One Size"
  }
}

export function getShareable(value: string) {
  switch (value) {
    case "true":
      return "shareable"
    case "false":
      return "non-share"
  }
}
export function translateShareable(value: string) {
  switch (value) {
    case "true":
      return "可共享"
    case "false":
      return "不可共享"
  }
}

export function getFeatures(value: string) {
  switch (value) {
    case "unlimitedData":
      return "Unlimited free data beyond the plan at a reduced speed"
    case "callerId":
      return "Caller ID Display"
    case "freeLong":
      return "Free long distance(China, Bangladesh, UK, India, Mexico)"
    case "international":
      return "Unlimited international texting and picture/video messaging from Canada"
    case "overageProtection":
      return "Data overage protection"
    case "voicemail":
      return "Enhance Voicemail"
    case "conference":
      return "Conference Call"
    case "callWait":
      return "Call Waiting"
    case "freeInstall":
      return "Free installation"
    case "freeDevice":
      return "Free devices rental"
    case "installTime":
      return "3-4 days for installation"
  }
}

export function translateFeatures(value: string) {
  switch (value) {
    case "unlimitedData":
      return "超出计划高速部分免费无限流量, 超出部分将会限速"
    case "callerId":
      return "来电显示"
    case "freeLong":
      return "永久免费国际长途(印尼,韩国,马来西亚,菲律宾,泰国,越南)"
    case "international":
      return "加拿大境内免费任打及免费无限收发短信"
    case "overageProtection":
      return "超流量自动提醒服务"
    case "voicemail":
      return "语音信箱"
    case "conference":
      return "三方通话"
    case "callWait":
      return "呼叫等待"
    case "freeInstall":
      return "免安装费"
    case "freeDevice":
      return "免设备费"
    case "installTime":
      return "3-4天可安装完成"
  }
}

export function getTagRegion(value: string) {
  switch (value) {
    case "ca":
      return "Canada(exclude QC)"
    case "qc":
      return "Quebec"
    case "bc":
      return "British Columbia"
    case "ab":
      return "Alberta"
    case "sk":
      return "Saskatchewan"
    case "mb":
      return "Manitoba"
    case "on":
      return "Ontario"
    case "nl":
      return "Newfoundland and Labrador"
    case "nb":
      return "New Brunswick"
    case "ns":
      return "Nova Scotia"
    case "pe":
      return "Prince Edward Island"
    case "yt":
      return "Yukon"
    case "nt":
      return "Northwest Territories"
    case "nu":
      return "Nunavut"
  }
}

export function translateTagRegion(value: string) {
  switch (value) {
    case "ca":
      return "加拿大(除魁省)"
    case "qc":
      return "魁北克"
    case "bc":
      return "不列颠哥伦比亚"
    case "ab":
      return "艾伯塔"
    case "sk":
      return "萨斯喀彻温"
    case "mb":
      return "马尼托巴"
    case "on":
      return "安大略"
    case "nl":
      return "纽芬兰和拉布拉多"
    case "nb":
      return "新不伦瑞克"
    case "ns":
      return "新斯科舍"
    case "pe":
      return "爱德华王子岛"
    case "yt":
      return "育空"
    case "nt":
      return "西北地区"
    case "nu":
      return "努纳武特"
  }
}

export function getPlanType(value: string) {
  switch (value) {
    case "mobile":
      return "Mobile"
    case "internet":
      return "Internet"
  }
}

export function getCoverage(value: string) {
  switch (value) {
    case "ca":
      return "Canada-Wide"
    case "caus":
      return "Canada + US"
    case "causmx":
      return "Canada + US + Mexico"
  }
}

export function translateCoverage(value: string) {
  switch (value) {
    case "Canada-Wide":
      return "加拿大"
    case "Canada + US":
      return "加拿大 + 美国"
    case "Canada + US + Mexico":
      return "加拿大 + 美国 + 墨西哥"
  }
}

export function getSpecial(value: string) {
  switch (value) {
    case "none":
      return null
    case "smb":
      return "SMB"
    case "migrate":
      return "migrate"
    case "emb":
      return "EMB"
  }
}

export function getDisplayNameToInternal(value: string) {
  switch (value) {
    case "fan":
      return "fido"
    case "top":
      return "telus"
    case "red":
      return "rogers"
    case "key":
      return "koodo"
    case "bloom":
      return "bell"
    case "vibe":
      return "virgin"
    case "phonebox":
      return "phonebox"
    case "ctexcel":
      return "ctexcel"
    case "tvbox":
      return "tvbox"
    default:
      return null
  }
}

export function getJobType(value: string) {
  switch (value) {
    case "fullTime":
      return "Full-Time"
    case "partTime":
      return "Part-Time"
  }
}

export function translateJobType(value: string) {
  switch (value) {
    case "fullTime":
      return "全职工作"
    case "partTime":
      return "兼职工作"
  }
}