#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS = ['qianshao', 'qianshao-deserve', 'qianshao-finance-system', 'qianshao-debt', 'qianshao-life-curve', 'qianshao-shared'];
const TARGETS = {
  codex: path.join(os.homedir(), '.codex', 'skills'),
  copilot: path.join(os.homedir(), '.copilot', 'skills'),
  claude: path.join(os.homedir(), '.claude', 'skills'),
};
const SRC = path.join(__dirname, '..', 'skills');

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function rmrf(p) {
  try {
    fs.lstatSync(p);
    fs.rmSync(p, { recursive: true, force: true });
  } catch {}
}

function isInstalled(t) {
  return fs.existsSync(path.join(t, 'qianshao', 'SKILL.md'));
}

const cmd = process.argv[2] || 'install';
const flag = process.argv.slice(3);
const useSymlink = flag.includes('--symlink') || flag.includes('-s');
const onlyClient = flag.find(a => a.startsWith('--client='))?.split('=')[1];

function targetsForRun() {
  if (onlyClient) {
    if (!TARGETS[onlyClient]) { console.error(`Unknown client: ${onlyClient}. Use codex|copilot|claude`); process.exit(1); }
    return { [onlyClient]: TARGETS[onlyClient] };
  }
  return TARGETS;
}

if (cmd === 'install' || cmd === 'update') {
  for (const [name, base] of Object.entries(targetsForRun())) {
    fs.mkdirSync(base, { recursive: true });
    for (const sk of SKILLS) {
      const src = path.join(SRC, sk);
      const dst = path.join(base, sk);
      rmrf(dst);
      if (useSymlink) fs.symlinkSync(src, dst, 'dir');
      else copyDir(src, dst);
    }
    console.log(`✅ ${name.padEnd(8)} → ${base}  (${SKILLS.length} skills, ${useSymlink ? 'symlink' : 'copy'})`);
  }
  console.log('\n下一步：');
  console.log('  codex   → 启动 codex 后 /qianshao');
  console.log('  copilot → copilot -p "/qianshao 我月薪 3 万想买 70 万的车"');
} else if (cmd === 'uninstall') {
  for (const [name, base] of Object.entries(targetsForRun())) {
    for (const sk of SKILLS) rmrf(path.join(base, sk));
    console.log(`🗑  ${name} ← removed ${SKILLS.length} skills`);
  }
} else if (cmd === 'list' || cmd === 'status') {
  for (const [name, base] of Object.entries(TARGETS)) {
    console.log(`${isInstalled(base) ? '✅' : '⬜'} ${name.padEnd(8)} ${base}`);
  }
} else if (cmd === 'help' || cmd === '--help' || cmd === '-h') {
  console.log(`qianshao-skill — 前哨站 skill 包

用法:
  npx qianshao-skill install            # 默认 copy 到 codex/copilot/claude
  npx qianshao-skill install --symlink  # 用 symlink (开发者模式)
  npx qianshao-skill install --client=codex
  npx qianshao-skill update             # 同 install (覆盖)
  npx qianshao-skill uninstall
  npx qianshao-skill status             # 看安装状态

包含 5 个 skill: qianshao(路由) / qianshao-deserve / qianshao-finance-system / qianshao-debt / qianshao-life-curve + qianshao-shared 共享公理库。`);
} else {
  console.error(`Unknown command: ${cmd}. Try: npx qianshao-skill help`);
  process.exit(1);
}
