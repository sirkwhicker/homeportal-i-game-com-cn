// assets/content-map.js
// 站点内容分区与搜索过滤

const siteConfig = {
  baseUrl: "https://homeportal-i-game.com.cn",
  keywords: ["爱游戏", "游戏门户", "游戏资讯", "游戏攻略"],
};

const contentSections = [
  {
    id: "news",
    name: "新闻动态",
    tags: ["爱游戏", "新闻", "更新"],
    items: [
      { title: "新版本上线", summary: "爱游戏平台迎来重大更新" },
      { title: "活动预告", summary: "周末登录送好礼" },
    ],
  },
  {
    id: "guides",
    name: "攻略中心",
    tags: ["爱游戏", "攻略", "技巧"],
    items: [
      { title: "新手入门", summary: "快速上手爱游戏" },
      { title: "进阶技巧", summary: "高手进阶攻略" },
    ],
  },
  {
    id: "community",
    name: "社区",
    tags: ["爱游戏", "论坛", "讨论"],
    items: [
      { title: "热门话题", summary: "玩家热议中" },
      { title: "同人创作", summary: "玩家作品展示" },
    ],
  },
];

function searchSections(query) {
  if (!query || typeof query !== "string") {
    return [];
  }

  const lowerQuery = query.toLowerCase().trim();
  const results = [];

  for (const section of contentSections) {
    const matchedItems = section.items.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const summaryMatch = item.summary.toLowerCase().includes(lowerQuery);
      const tagMatch = section.tags.some((tag) =>
        tag.toLowerCase().includes(lowerQuery)
      );
      return titleMatch || summaryMatch || tagMatch;
    });

    if (matchedItems.length > 0) {
      results.push({
        sectionId: section.id,
        sectionName: section.name,
        matchedItems: matchedItems,
      });
    }
  }

  return results;
}

function getSectionById(id) {
  return contentSections.find((section) => section.id === id) || null;
}

function getAllKeywords() {
  const allTags = [];
  for (const section of contentSections) {
    for (const tag of section.tags) {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    }
  }
  return allTags;
}

// 示例使用
const exampleQuery = "爱游戏";
const searchResult = searchSections(exampleQuery);
console.log("搜索 [", exampleQuery, "] 的结果:", searchResult);

const allKeywords = getAllKeywords();
console.log("全部关键词:", allKeywords);

const newsSection = getSectionById("news");
console.log("新闻分区:", newsSection);