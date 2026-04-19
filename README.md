# qianshao-skill

把 [dontbesilent · 浪钱 · 前哨站 2025](https://www.dontbesilent.com) PART.1 共 14.7 万字课程文本，提炼成 Codex / Claude Code / GitHub Copilot CLI 通用的 5 个 skill。

参考 [`dbskill`](https://github.com/dontbesilent2025/dbskill) 的多 skill 路由架构。

## 安装

```bash
npx qianshao-skill install
```

默认会把 skill **copy** 到：

- `~/.codex/skills/`（OpenAI Codex CLI）
- `~/.copilot/skills/`（GitHub Copilot CLI）
- `~/.claude/skills/`（Claude Code）

只装一端：

```bash
npx qianshao-skill install --client=copilot
```

开发者模式（symlink，改一处全端生效）：

```bash
npx qianshao-skill install --symlink
```

## 使用

```bash
copilot
> /qianshao 我月薪 3 万想买 70 万的车
> 帮我跑一遍财务系统
> 我房贷 200 万车贷 50 万该不该提前还
> 我收入翻倍生活成本也翻倍是不是中产坑
```

`qianshao` 是路由器，会根据你说的话自动转给：

| 子 skill | 触发场景 |
|---|---|
| `qianshao-deserve` | 单笔决策 / 整体水位是否"配得上" |
| `qianshao-finance-system` | 真实/理想时薪 + 三类出血表 |
| `qianshao-debt` | 主动 vs 被动负债拆解 |
| `qianshao-life-curve` | 中产坑识别 + 生活成本钉死 |

## 命令

```
npx qianshao-skill install [--symlink] [--client=codex|copilot|claude]
npx qianshao-skill update
npx qianshao-skill uninstall
npx qianshao-skill status
npx qianshao-skill help
```

## License

MIT — skill 文本基于公开课程内容二次加工，仅用于学习交流。
