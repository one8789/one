import React from 'react';
import { Solution } from './types';

// Icons are rendered as SVGs here to avoid external dependencies in constants if possible, 
// but usually we pass them from components. For simplicity in data structure, we'll keep data pure.

export const SOLUTIONS: Solution[] = [
  {
    id: 'rebind-github',
    title: '换绑 GitHub 账号 (Switch Account)',
    summary: '如何断开当前 GitHub 连接并绑定新账号。',
    icon: null, // Handled in UI
    steps: [
      {
        id: 's1',
        title: '理解机制',
        description: 'Google AI Studio 没有直接的“注销 GitHub”按钮。它依赖于浏览器 Cookies 和 GitHub 的授权设置。'
      },
      {
        id: 's2',
        title: '步骤 1: 在 GitHub 中撤销权限',
        description: '前往 GitHub 网站 -> Settings (设置) -> Applications -> Authorized OAuth Apps。找到 "Google AI Studio" 并点击 "Revoke" (撤销)。',
        warning: '这会强制 AI Studio 下次请求新的登录授权。'
      },
      {
        id: 's3',
        title: '步骤 2: 清除 AI Studio 缓存',
        description: '回到 Google AI Studio，尝试重新点击 "Save to GitHub"。由于权限已撤销，系统会提示你重新授权。此时你可以登录另一个 GitHub 账号。'
      },
      {
        id: 's4',
        title: '替代方案: 隐身模式',
        description: '如果你只是临时需要用另一个号，使用浏览器的“隐身模式/无痕模式”打开 AI Studio，这样不会读取你默认的 GitHub 登录状态。'
      }
    ]
  },
  {
    id: 'sync-code',
    title: '账号间代码同步 (Sync Code)',
    summary: '将代码从账号 A 转移到账号 B 的最佳实践。',
    icon: null,
    steps: [
      {
        id: 'sync1',
        title: '方法 A: 利用 GitHub (推荐)',
        description: '1. 在账号 A 的 AI Studio 中将 Prompts/代码保存到一个公开或私有的 GitHub 仓库。\n2. 登录账号 B，前往 GitHub Fork 该仓库，或者直接 Clone 下来。\n3. 目前 AI Studio 不支持直接“导入”整个仓库回到 UI，此方法主要用于代码备份。'
      },
      {
        id: 'sync2',
        title: '方法 B: 分享链接 (Share Link)',
        description: '在 AI Studio 右上角点击 "Share"。生成一个公共链接。在账号 B 的浏览器中打开该链接，然后点击 "Save" 或 "Copy" 将其保存到账号 B 的库中。',
        warning: '注意：包含 API Key 的 Prompt 可能无法直接分享，请确保移除敏感信息。'
      },
      {
        id: 'sync3',
        title: '方法 C: JSON 导出',
        description: '在文件列表或 Prompt 编辑器中，查看是否有 "Export" 选项（部分版本支持导出 JSON）。手动复制 JSON 内容到新账号的 Prompt 输入框中。'
      }
    ]
  },
  {
    id: 'upload-error',
    title: '解决 "Something went wrong" 错误',
    summary: '上传到 GitHub 失败的常见原因及修复。',
    icon: null,
    steps: [
      {
        id: 'err1',
        title: '原因 1: Token 过期或权限不足',
        description: 'GitHub 的授权 Token 可能已过期。解决方案：按照“换绑账号”中的步骤，在 GitHub 设置里撤销 AI Studio 授权，然后重新连接。'
      },
      {
        id: 'err2',
        title: '原因 2: 仓库名称冲突或不存在',
        description: '如果你试图保存到一个不存在的分支，或者没有写入权限的仓库（例如你只是 Member 但没有 Write 权限），会报错。尝试创建一个全新的 Repository 试一试。'
      },
      {
        id: 'err3',
        title: '原因 3: 文件名非法',
        description: '确保你的 Prompt 名称或文件名称不包含特殊字符（如 / \ : * ? " < > |）。GitHub 对文件名有严格限制。'
      },
      {
        id: 'err4',
        title: '原因 4: 空文件',
        description: '尝试保存一个完全空白的 Prompt 有时会触发错误。确保内容区有一些文字。'
      }
    ]
  }
];
