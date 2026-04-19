# qianshao 工具箱

dontbesilent · 浪钱 · 2025 前哨站方法论 skill 集。

**版本**：v0.2.0（多 skill 架构 / dbskill 同款形态）
**覆盖范围**：2025 前哨站 PART.1 共 5 集（002–006），约 14.7 万字

| 集次 | 日期 | 主题 |
|---|---|---|
| 002 | 2025.09.14 | 主动选择的负债人生状态 |
| 003 | 2025.09.21 | 关于「买得起」和「配得上」的重要辨析 |
| 004 | 2025.09.28 | 从户子被封和雷总翻车获得的一些启发 |
| 005 | 2025.10.09 | 融合此前分享的财务系统落地实践更新 |
| 006 | 2025.10.12 | 继续优化财务系统关于「配得上」的部分 |

> 001（开营）为开营须知，未纳入。007 起的「小创造」概念为后续版本待办。

---

## 架构

从 v0.1.0 的单文件 skill 重构为 **1 个路由 + 4 个子 skill + 1 个共享 references** 的 dbskill 同款多 skill 架构：

```
~/.codex/skills/
├── qianshao/                     ← 入口路由（不诊断、只问路）
│   └── SKILL.md
├── qianshao-deserve/             ← 「配得上」诊断（双模式：快诊 / 体检）
│   └── SKILL.md
├── qianshao-finance-system/      ← 财务系统跑表（5 维度：真实/理想时薪 + 三类出血表）
│   └── SKILL.md
├── qianshao-debt/                ← 主动 vs 被动负债拆解 + 重组建议
│   └── SKILL.md
├── qianshao-life-curve/          ← 生活曲线（舒适点 + 长期纯平 + 后期缓升）
│   └── SKILL.md
└── qianshao-shared/              ← 5 个 skill 共享的深度参考（不是 skill）
    ├── 公理与方法论.md            ← 10 条公理 + 财务系统落地步骤 + 配得上判定框架
    ├── 案例与金句库.md            ← 10 案例 + 12 反面模式 + 42 金句（按集次）
    └── atoms.jsonl                ← 85 条原子知识，覆盖 002–006 五集
```

---

## 5 个 skill 各自的边界

| skill | 管什么 | 不管什么 |
|---|---|---|
| `qianshao` | 听用户问题，路由到 4 个子 skill 之一 | 任何诊断、计算、判定 |
| `qianshao-deserve` | 一笔具体支出能不能花 / 整体配得上水位 | 不算被动负债压迫指数（→ debt）、不算曲线斜率（→ life-curve） |
| `qianshao-finance-system` | 真实时薪 / 理想时薪 / 持有 / 续费 / 体验出血表 | 不做单笔配得上判定（→ deserve）、不做负债重组（→ debt） |
| `qianshao-debt` | 主动 vs 被动负债拆解、压迫指数、兑现率、重组方案 | 不跑出血表（→ finance-system）、不判单笔配得上（→ deserve） |
| `qianshao-life-curve` | 舒适点 + 12–24 月斜率 + 中产坑信号 + 钉死方案 | 不算单项出血（→ finance-system）、不判单笔配得上（→ deserve） |

---

## 互相之间的路由关系

```
                    qianshao（路由）
                         │
       ┌─────────────┬───┴───┬─────────────┐
       ▼             ▼       ▼             ▼
   deserve  ←→  finance-system  ←→  debt   ←→  life-curve
       │             │         │           │
       └────┬────────┴────┬────┘           │
            ▼             ▼                 ▼
         dbskill      dbskill           dbskill
       /dbs-unblock /dbs-diagnosis   /dbs-unblock
```

主要互引：

- 任何子 skill 算不出基础数据 → 推 `/qianshao-finance-system` 先建表
- 单笔具体支出判定 → 推 `/qianshao-deserve` 快诊
- 检测到生活成本爬坡 → 推 `/qianshao-life-curve`
- 检测到负债结构混乱 → 推 `/qianshao-debt`
- 越界到生产侧 → 推 dbskill 的 `/dbs-diagnosis` / `/dbs-content` / `/dbs-benchmark`
- "知道该做做不动" → 推 `/dbs-unblock`

qianshao 是 dbskill 的**消费侧 / 生活侧**补集——dbskill 管你怎么赚，qianshao 管你怎么活、怎么花、怎么扛。

---

## 怎么用

在 Codex / Claude Code / Copilot CLI 中：

```
/qianshao            ← 不知道走哪个，从这里开始
/qianshao-deserve    ← 我配得上吗 / 这个能不能买
/qianshao-finance-system  ← 钱去哪了 / 帮我跑财务系统
/qianshao-debt       ← 我负债太重 / 该不该提前还
/qianshao-life-curve ← 收入涨开销也涨 / 中产坑
```

或自然语言触发，路由 skill 会自动分流。

---

## v0.1.0 → v0.2.0 改了什么

- 单个 18k 字 SKILL.md → 拆成 1 路由 + 4 子 skill，每个子 skill 都按 dbskill 模板写
- 增加 dbskill 的 11 项要素：双模式 / Phase 化 / 每步停下来等回应 / 报告模板 / 全程信号追踪 / 前提挑战 / 下一步条件触发表 / 绝对不做清单 / 说话风格 / 语言段
- references 从 `qianshao/references/` 移到独立的 `qianshao-shared/`，5 个 skill 都引用同一份
- 路由 skill 严格遵循 dbs/SKILL.md 的"只路由不诊断"范式

---

## 引用与版权

本 skill 集全部公理、概念、案例、金句均来源于 dontbesilent 浪钱前哨站 2025 PART.1 的公开直播课程内容。

- 仅供学习研究使用，**非商业用途**。
- 立场参考 dbskill 的 CC BY-NC。
- 转写为 OpenAI Whisper 自动转写，已过滤大段字幕泄漏与试音填充语。如有理解偏差以原始直播为准。
- 原始直播课程版权归 dontbesilent 本人所有。
