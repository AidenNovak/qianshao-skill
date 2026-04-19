# qianshao-skill

> 把 **dontbesilent · 浪钱 · 前哨站 2025** 的方法论，装进你常用的 AI CLI 里。

把前哨站 6 期共 14.7 万字的课程文稿，提炼成 **5 个互相协作的 skill**，让你在终端里随时能问：

- 「我月薪 3 万想买 70 万的车，能不能买？」
- 「我房贷 200 万车贷 50 万，该不该提前还？」
- 「我收入翻倍了，可生活成本也翻倍了，是不是中产坑？」
- 「我又月光了，钱去哪了？」

它不会跟你打鸡血。它会按前哨站的诊断流程，一步一步把你逼到答案前面。

参考形态：[`dbskill`](https://github.com/dontbesilent2025/dbskill)（方法论同源，dbskill 管「怎么赚」，qianshao 管「怎么花、怎么扛、怎么活」）。

---

## 30 秒装好

```bash
npx qianshao-skill install
```

默认会同时装到三端 CLI（已装哪端就只装哪端）：

| CLI | 安装路径 | 触发 |
|---|---|---|
| OpenAI **Codex CLI** | `~/.codex/skills/` | `/qianshao` |
| GitHub **Copilot CLI** | `~/.copilot/skills/` | `copilot -p "/qianshao ..."` |
| Anthropic **Claude Code** | `~/.claude/skills/` | `/qianshao` |

只装一端：

```bash
npx qianshao-skill install --client=copilot
```

开发者模式（symlink，改一处全端生效）：

```bash
npx qianshao-skill install --symlink
```

升级 / 卸载 / 看安装状态：

```bash
npx qianshao-skill update
npx qianshao-skill uninstall
npx qianshao-skill status
```

---

## 一分钟试一下

随便挑一个 CLI（这里用 Copilot CLI 举例）：

```bash
copilot
```

然后说一句话：

```
> /qianshao 我月薪 3 万，看上一台 70 万的车，能不能买
```

它会：

1. **路由 skill** 听完，判断这是「单笔配得上」问题
2. 自动交给 `qianshao-deserve` 子 skill
3. 走 **5 步消解漏斗**：项目存在性 → 资金来源 → 持有出血 → 风险扛力 → 时间机会成本
4. 每一步**停下来等你回答**，不会一次性把你判完
5. 最后给你一份 Markdown 报告：能花 / 不能花 / 缓花的具体条件

中途如果发现你连真实时薪都没算过，它会让你先去跑 `/qianshao-finance-system`。这就是多 skill 互相调用的方式。

---

## 5 个 skill 都干嘛

```
                  你 ─►  /qianshao  （路由器，不诊断）
                              │
       ┌────────────┬─────────┼─────────────┬────────────┐
       ▼            ▼         ▼             ▼            ▼
   qianshao-    qianshao-   qianshao-    qianshao-    qianshao-
   deserve      finance-    debt         life-curve   shared
                system                                （公理库 +
   单笔/整体    真实时薪 +  主动 vs       中产坑 +     案例 +
   配得上       三类出血表   被动负债      生活曲线     金句库）
```

| Skill | 干嘛的 | 什么时候用 |
|---|---|---|
| **`qianshao`** | 路由 | 不知道该用哪个就喊它 |
| **`qianshao-deserve`** | 「配得上」诊断 · 5 步漏斗 / 七项体检 | 拿不准要不要花一笔钱；想看自己整体水位扛不扛得住 |
| **`qianshao-finance-system`** | 财务系统 5 维跑表 | 月光、钱不知道去哪、想算真实/理想时薪 |
| **`qianshao-debt`** | 主动 vs 被动负债拆解 | 房贷车贷消费贷一锅粥、不知道哪些该还哪些该扛 |
| **`qianshao-life-curve`** | 中产坑识别 + 生活曲线 | 收入涨开销也涨、看不清自己正在变富还是变穷 |

`qianshao-shared/` 是公理库（10 条核心公理 + 案例库 + 85 条 atoms），所有子 skill 都从这里取料。

---

## 它跟「让 AI 给你理财建议」有什么不同

普通 prompt 是这样的：

> 「你是一个理财顾问，请帮我分析……」  
> AI：「您可以考虑分散投资，每月储蓄 30%……」（标准答案，毫无杀伤力）

qianshao 是这样的：

> **你**：我月薪 3 万想买 70 万的车  
> **它**：先停。这台车你**持有出血**算过没？保险、保养、停车、年折旧，72 个月加起来你愿意为它付出多少**真实工时**？算完再来。  
> **你**：（算了一下，30 万）  
> **它**：你按 200 元真实时薪算，这是 1500 个工时。一年工作 2000 小时。你愿意把 9 个月的活全为这台车干吗？  
> **你**：……不愿意  
> **它**：行。所以不是「能不能买」，是「值不值得 9 个月只为这台车活」。要么换便宜的，要么把真实时薪从 200 拉到 600。继续？

它的工作方式来自前哨站本身——**不给答案，把问题问回去**，直到你自己看清楚。

---

## 6 期原始文稿

放在 [`transcripts/`](./transcripts) 目录下（**只在 GitHub 仓库里**，不会被 `npx install` 下载）：

| 集 | 日期 | 主题 | 字数 |
|---|---|---|---|
| 002 | 2025.9.14 | 主动选择的负债人生状态 | ~24k |
| 003 | 2025.9.21 | 关于「买得起」和「配得上」的重要辨析 | ~42k |
| 004 | 2025.9.28 | 从户子被封和雷总翻车获得的一些启发 | ~31k |
| 005 | 2025.10.9 | 财务系统落地实践更新 | ~27k |
| 006 | 2025.10.12 | 继续优化财务系统关于「配得上」的部分 | ~22k |

你可以：

- 想验证某条公理出处 → 在对应 `.txt` 里搜
- 想自己重新提炼一套 → 这就是干净输入
- 想接 RAG → 直接 chunk 这 6 个文件

---

## 给前哨站的兄弟们

**这套 skill 是从你和我一起听过的那 6 节前哨站课里逼出来的**。

不是另起炉灶讲一套理财，更不是把课程内容做成搜索引擎。是把「真实时薪 / 三类出血 / 配得上漏斗 / 主动被动负债 / 中产坑曲线」这些核心方法论，做成 CLI 里随时可以呼出来的 **会问问题的诊断器**。

它继承前哨站的几个原则：

- **不发鸡汤**，要么帮你算清账，要么把你问到自己回答不上来
- **每步停下来等你**，不一次性跑完，因为人不在自己写下数字之前不会真信
- **越界就路由**：到了「怎么赚」就交给 dbskill，不在 qianshao 里假装能教你做生意
- **金句保留原话**，不是改写，不是 paraphrase，前哨站那几句刺痛的话原样在 atoms 里

所以欢迎：

- **直接 `npx qianshao-skill install`** 装上自己用，遇到不准的话**开 issue 直接挂段对话**
- **拿 `transcripts/` 自己改一套**，这个仓库 MIT 协议，方法论是浪钱老师的，工具壳是大家可以共建的
- **PR 加新的子 skill**，比如 `qianshao-asset`（资产盘点）、`qianshao-cashflow`（现金流年化），路由表加一行就能接进来
- **bug / 体验差** 直接喊我，我就在前哨站群里

不要客气。这工具的目的不是好用，是**让你少花冤枉钱**。

---

## 给开发者

**仓库结构**：

```
qianshao-skill/
├── bin/cli.js                安装器
├── skills/                   6 个 skill 源文件（npm + GitHub 都包含）
│   ├── qianshao/             路由
│   ├── qianshao-deserve/
│   ├── qianshao-finance-system/
│   ├── qianshao-debt/
│   ├── qianshao-life-curve/
│   └── qianshao-shared/      公理 / 案例 / atoms.jsonl
├── transcripts/              6 期文稿（仅 GitHub）
└── package.json              files 白名单排除 transcripts
```

**改一个 skill**：

1. 改 `skills/qianshao-xxx/SKILL.md`
2. `npm version patch`
3. `npm publish`
4. 用户跑 `npx qianshao-skill update`

**本地调试**（不发 npm，直接 link 到三端）：

```bash
git clone https://github.com/AidenNovak/qianshao-skill
cd qianshao-skill
node bin/cli.js install --symlink
```

---

## License

工具代码 **MIT**。

skill 文本基于 dontbesilent · 浪钱 · 前哨站 2025 公开课程的二次提炼，**仅供学习交流，请勿商用转载**。方法论著作权归 dontbesilent。

---

## 致谢

- **dontbesilent / 浪钱**：方法论的源头。前哨站值回票价的不止 14.7 万字。
- **[`dbskill`](https://github.com/dontbesilent2025/dbskill)**：路由器架构 / Phase 化 / 七项体检 / 漏斗等模式的范式参考。
- **前哨站社群**：每一次群里的拷问，都让 atoms.jsonl 里多一条原话。
