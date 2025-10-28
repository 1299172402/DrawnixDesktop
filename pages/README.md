<p align="center">
  <picture style="width: 320px">
    <source media="(prefers-color-scheme: light)" srcset="https://cdn.jsdelivr.net/gh/1299172402/DrawnixDesktop/apps/web/public/logo/logo_drawnix_h.svg" />
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/1299172402/DrawnixDesktop/apps/web/public/logo/logo_drawnix_h_dark.svg" />
    <img src="https://cdn.jsdelivr.net/gh/1299172402/DrawnixDesktop/apps/web/public/logo/logo_drawnix_h.svg" width="360" alt="Drawnix logo and name" />
  </picture>
</p>
<div align="center">
  <h2>
  DrawnixDesktop - Drawnix 桌面版
  <br />
  开源白板工具，一体化白板，包含思维导图、流程图、自由画等
  <br />
  </h2>
</div>

<div align="center">
  <figure>
    <a target="_blank" rel="noopener">
      <img src="https://cdn.jsdelivr.net/gh/1299172402/DrawnixDesktop/apps/web/public/product_showcase/case-2.png" alt="Product showcase" width="80%" />
    </a>
    <figcaption>
      <p align="center">
        All in one 白板，思维导图、流程图、自由画等
      </p>
    </figcaption>
  </figure>
</div>

[*English README*](README_en.md)

## 📦 下载桌面版

<div style="text-align: center; margin: 20px 0;">
  <button onclick="toggleMirror()" id="mirror-btn" style="padding: 10px 20px; border-radius: 8px; border: 2px solid #667eea; background: white; color: #667eea; font-weight: bold; cursor: pointer; font-size: 14px; transition: all 0.3s;">
    🌍 未镜像加速，通过原始源下载
  </button>
  <p style="font-size: 12px; color: #666; margin-top: 8px;">
    中国大陆用户可启用镜像加速下载
  </p>
</div>

<script>
let useMirror = localStorage.getItem('useMirror') === 'true';

function toggleMirror() {
  useMirror = !useMirror;
  const btn = document.getElementById('mirror-btn');
  const links = document.querySelectorAll('a[href*="github.com/1299172402/DrawnixDesktop"]');
  const mirrorPrefix = 'https://gh-proxy.com/';
  
  if (useMirror) {
    btn.textContent = '🚀 镜像加速中';
    btn.style.background = '#667eea';
    btn.style.color = 'white';
    links.forEach(link => {
      if (!link.href.includes(mirrorPrefix)) {
        link.href = mirrorPrefix + link.href;
      }
    });
  } else {
    btn.textContent = '🌍 未镜像加速，通过原始源下载';
    btn.style.background = 'white';
    btn.style.color = '#667eea';
    links.forEach(link => {
      link.href = link.href.replace(mirrorPrefix, '');
    });
  }
  
  localStorage.setItem('useMirror', useMirror);
}

// 自动为中文用户启用镜像
window.addEventListener('DOMContentLoaded', function() {
  const isChina = /cn|zh/i.test(navigator.language);
  if (useMirror || (isChina && !localStorage.getItem('useMirror'))) {
    useMirror = true;
    const btn = document.getElementById('mirror-btn');
    if (btn) {
      btn.textContent = '🚀 镜像加速中';
      btn.style.background = '#667eea';
      btn.style.color = 'white';
    }
    const links = document.querySelectorAll('a[href*="github.com/1299172402/DrawnixDesktop"]');
    const mirrorPrefix = 'https://gh-proxy.com/';
    links.forEach(link => {
      if (!link.href.includes(mirrorPrefix)) {
        link.href = mirrorPrefix + link.href;
      }
    });
    localStorage.setItem('useMirror', 'true');
  }
});
</script>

### 🪟 Windows

<p>
  <a href="https://github.com/1299172402/DrawnixDesktop/releases/latest/download/Drawnix-win-x64-Setup.exe" style="display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; background: linear-gradient(135deg, #0078D6 0%, #0078D6 100%); color: white; box-shadow: 0 4px 6px rgba(0,120,214,0.3);">
    🪟 Windows Setup (x64)
  </a>
  <a href="https://github.com/1299172402/DrawnixDesktop/releases/latest/download/Drawnix-win-x64-Portable.exe" style="display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; background: linear-gradient(135deg, #00A4EF 0%, #00A4EF 100%); color: white; box-shadow: 0 4px 6px rgba(0,164,239,0.3);">
    💼 Windows Portable (x64)
  </a>
</p>

### 🍎 macOS

<p>
  <a href="https://github.com/1299172402/DrawnixDesktop/releases/latest/download/Drawnix-mac-x64.dmg" style="display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; background: linear-gradient(135deg, #555555 0%, #333333 100%); color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
    🍎 macOS Intel (x64)
  </a>
  <a href="https://github.com/1299172402/DrawnixDesktop/releases/latest/download/Drawnix-mac-arm64.dmg" style="display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; background: linear-gradient(135deg, #333333 0%, #000000 100%); color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
    🍎 macOS Apple Silicon (ARM64)
  </a>
</p>

### 🐧 Linux

<p>
  <a href="https://github.com/1299172402/DrawnixDesktop/releases/latest/download/Drawnix-linux-amd64.deb" style="display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; background: linear-gradient(135deg, #E95420 0%, #E95420 100%); color: white; box-shadow: 0 4px 6px rgba(233,84,32,0.3);">
    🐧 Linux DEB
  </a>
  <a href="https://github.com/1299172402/DrawnixDesktop/releases/latest/download/Drawnix-linux-x86_64.AppImage" style="display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; background: linear-gradient(135deg, #34A853 0%, #34A853 100%); color: white; box-shadow: 0 4px 6px rgba(52,168,83,0.3);">
    🐧 Linux AppImage
  </a>
</p>

### 🔗 所有版本

<p>
  <a href="https://github.com/1299172402/DrawnixDesktop/releases" style="display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; background: linear-gradient(135deg, #5865F2 0%, #5865F2 100%); color: white; box-shadow: 0 4px 6px rgba(88,101,242,0.3);">
    📦 查看所有版本
  </a>
</p>

## 💻 桌面版特性

- 🖥️ **跨平台支持**：Windows、macOS、Linux
- 🚀 **原生性能**：基于 Electron，提供流畅的桌面体验
- 💾 **本地存储**：数据保存在本地，隐私安全
- 🔄 **离线使用**：无需网络连接即可使用

## ✨ 核心功能

继承自 [Drawnix](https://github.com/plait-board/drawnix) 的所有功能：

- 💯 免费 + 开源
- ⚒️ 思维导图、流程图
- 🖌 画笔
- 😀 插入图片
- 🚀 基于插件机制
- 🖼️ 📃 导出为 PNG, JSON(`.drawnix`)
- 💾 自动保存（浏览器缓存）
- ⚡ 编辑特性：撤销、重做、复制、粘贴等
- 🌌 无限画布：缩放、滚动
- 🎨 主题模式
- 📱 移动设备适配
- 📈 支持 mermaid 语法转流程图
- ✨ 支持 markdown 文本转思维导图（新支持 🔥🔥🔥）

## 📄 许可证

本项目基于 [Drawnix](https://github.com/plait-board/drawnix) 开发，遵循其 MIT License。

桌面版本的打包和配置代码采用 [LICENSE](./LICENSE) 许可文件。

## 🙏 致谢

- 感谢 [Drawnix](https://github.com/plait-board/drawnix) 项目提供的优秀基础

---

<div align="center">
  <sub>Created with ❤️ by <a href="https://github.com/1299172402">之雨</a> on 🌏</sub>
</div>