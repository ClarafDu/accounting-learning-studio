# 会计 · Accounting

一个以 Financial Accounting 课程课件为线索的个人自学网站。以完整知识地图为入口，随时查阅、学习和记录，无每日打卡或强制学习时长。

**计划发布地址（Pages待启用）：[会计 / Accounting](https://clarafdu.github.io/accounting-learning-studio/)**

## 当前版本

- Lecture 1–7，70个双语知识节点、140道自编英文选择题。
- 中文 / English 切换覆盖导航、地图、讲解、例题、规则、提示及逐选项解析。
- 按课件PDF页序标注来源；先修与关联链接可跨讲次跳转。
- 交易、收入与现金、存货、预付保险、应计利息5类交互实验。
- 错题与提示后答对题进入复习；支持独立重做、同概念题和间隔复测。
- 逐题反馈练习与全英文整组测验；不预测考试成绩。
- 知识点笔记、疑问、课堂补充、随手记自动保存在本机。
- JSON完整备份与合并恢复；Markdown笔记导出。
- 响应式布局，适配电脑、平板和手机；首次成功缓存后可离线阅读与记录。

## 数据保存

本次按用户要求暂不创建数据库。**当前没有登录或跨设备自动同步。**

1. 在原设备的「数据与备份」导出完整JSON备份。
2. 在另一台设备打开网站，使用「合并导入JSON备份」。
3. 不同ID的记录保留；同一条笔记和手动状态以较新的编辑时间为准，删除标记保留。
4. 避免两台设备同时编辑同一条笔记。Markdown供阅读，恢复请使用JSON。

清理浏览器、使用无痕模式、更换浏览器或设备时，本机记录可能丢失。学习记录不会随源码上传GitHub；原始课程PDF、课堂纪要、个人材料也不在公开仓库中。

## 课程内容边界

本站为基于已提供课件的原创教学解释与练习，包含明确标注的辅助概念。不是教师原题、官方答案或课程考试范围的保证。后续课件到达后按稳定知识点ID扩充。

考试日期暂记为2026年11月23日，待教师确认；范围为考试前已教内容。后续课程方向依据Lecture 1安排预留，未冒充已收到的课件。

内容覆盖、来源与数值处理见 [docs/CONTENT.md](docs/CONTENT.md)。验收记录见 [docs/QA.md](docs/QA.md)。

## 本地运行与更新

无第三方运行依赖，也无需编译。使用Node.js 22+运行检查：

```sh
npm test
npm run validate
npm run dev
```

打开终端显示的本机地址。页面为原生HTML、CSS和ES modules；不能直接使用file协议打开。

GitHub Pages使用main分支根目录。更新内容后运行检查，再提交推送。更新离线资源时更改`sw.js`中的缓存版本。用户记录采用稳定ID，不应因标题、翻译或页面样式变更而清除。

## English

Accounting is a personal learning studio based on the supplied Financial Accounting lectures. The site covers Lectures 1–7 through 70 bilingual concepts and 140 original English questions. Switch languages in the top bar; personal notes retain their original text.

Records are stored in the current browser. Cloud sync is not connected in this version. Export a full JSON backup and merge it on another device to transfer progress and notes. Markdown is a readable notes export, not a restorable backup. Original slides and personal study records are not included in this repository.

The content is a study aid, not instructor exam questions or a score predictor. The review schedule is optional. Offline access requires a successful initial cache and does not protect browser data from deletion.
