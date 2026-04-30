# Vue Language Tools

<p>
  <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar"><img src="https://img.shields.io/visual-studio-marketplace/v/Vue.volar?labelColor=18181B&color=1584FC" alt="Version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar"><img src="https://img.shields.io/visual-studio-marketplace/i/Vue.volar?labelColor=18181B&color=1584FC" alt="Downloads"></a>
  <a href="https://github.com/vuejs/language-tools/tree/master/LICENSE"><img src="https://img.shields.io/github/license/vuejs/language-tools.svg?labelColor=18181B&color=1584FC" alt="License"></a>
</p>

> ⚡ Vue language toolset with native TypeScript performance based-on [Volar.js](https://volarjs.dev/)

💬 **#language-tools** on our [Discord Server](https://discord.gg/vue)

## Packages

- [Vue (Official)](https://github.com/vuejs/language-tools/tree/master/extensions/vscode) \
  _Vue, Vitepress, petite-vue language support extension for VSCode_
- [@azee/vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) \
  _Type-check and dts build command line tool_
- [@azee/vue-component-meta](https://github.com/vuejs/language-tools/tree/master/packages/component-meta) \
  _Component props, events, slots types information extract tool_
- [`@azee/vue-language-server`](/packages/language-server/) \
  _The language server itself_.
- [`@azee/vue-typescript-plugin`](/packages/typescript-plugin/) \
  _TypeScript LanguageService Plugin for Vue_.

## Community Integration

[yaegassy/coc-volar](https://github.com/yaegassy/coc-volar) \
_Vue language client for coc.nvim_

[neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) \
_Vue language server configuration for Neovim_, check documentation [here](https://github.com/vuejs/language-tools/wiki/Neovim) to set it up.

[mattn/vim-lsp-settings](https://github.com/mattn/vim-lsp-settings) \
_Vue language server auto configuration for vim-lsp_

[sublimelsp/LSP-volar](https://github.com/sublimelsp/LSP-volar) \
_Vue language client for Sublime_

[kabiaa/atom-ide-volar](https://github.com/kabiaa/atom-ide-volar) \
_Vue language client for Atom_

[emacs-lsp/lsp-mode](https://github.com/emacs-lsp/lsp-mode) ([jadestrong/lsp-volar](https://github.com/jadestrong/lsp-volar)) \
_Vue language client for Emacs_

[tommasongr/nova-vue](https://github.com/tommasongr/nova-vue) \
_Vue language client for Nova_

[xiaoxin-sky/lapce-vue](https://github.com/xiaoxin-sky/lapce-vue) \
_Vue language client for Lapce_

[Kingwl/monaco-volar](https://github.com/Kingwl/monaco-volar) \
_Vue language support for Monaco on Browser_

[WebStorm](https://www.jetbrains.com/webstorm/) \
_Built-in integration for `@azee/vue-language-server`_

[Eclipse WildWebDeveloper](https://github.com/eclipse-wildwebdeveloper/wildwebdeveloper) \
_Vue language server configuration for Eclipse_

<!-- Editor link: https://www.mermaidchart.com/app/projects/c62d8944-0e06-47f0-a8de-f89a7378490f/diagrams/91fd02c0-5c91-4f72-a8b4-7af21b7c4d86/version/v0.1/edit -->

<a href="https://www.mermaidchart.com/raw/91fd02c0-5c91-4f72-a8b4-7af21b7c4d86?theme=light&version=v0.1&format=svg">
	<img src="https://www.mermaidchart.com/raw/91fd02c0-5c91-4f72-a8b4-7af21b7c4d86?theme=light&version=v0.1&format=svg"/>
</a>

## Contribution Guide

If you want to work on the volar extension follow these commands to set up your local development environment.

🔎 Note that you will need pnpm - you can download it here: https://pnpm.io/installation.

```bash
git clone https://github.com/vuejs/language-tools.git
cd language-tools
pnpm install
pnpm run build
```

The recommended way to develop the volar extension is to use the [Debug Tools](https://code.visualstudio.com/Docs/editor/debugging) provided by VSCode.
Alternatively, you can run one of the scripts defined in the [package.json](https://github.com/vuejs/language-tools/blob/master/package.json) file.

❗ You should always use the debug launch configs or package.json scripts defined in the root of the project.

Additional info for contributing to open source projects can be found here: https://docs.github.com/en/get-started/quickstart/contributing-to-projects

To develop with upstream Volar.js modules, you can setup workspace with https://github.com/volarjs/workspace.

## ❤️ Thanks to Our Sponsors

This project is made possible thanks to our generous sponsors:

<p align="center">
	<a href="https://cdn.jsdelivr.net/gh/johnsoncodehk/sponsors/sponsors.svg">
		<img src="https://cdn.jsdelivr.net/gh/johnsoncodehk/sponsors/sponsors.png"/>
	</a>
</p>
