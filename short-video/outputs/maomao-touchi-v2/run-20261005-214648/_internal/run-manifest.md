# Run Manifest

## 运行信息

- 项目：maomao-touchi-v2
- 运行 ID：run-20261005-214648
- 运行状态：已完成
- 执行入口：Asset Prompt Director Agent（由用户直接发起资产提示词修订）
- 创建时间：2026-10-05 21:46（Asia/Shanghai）
- 来源运行：run-20261005-212914（只读；03 提示词基线取自 run-20261005-205155 的双语修订版）
- 运行关系：Pixar 风格资产效果图 + Midjourney 识别问题修复运行

## 输入与确认

- 剧本：D:/AIGCProject/video-project-2/video-project/script/output/short-film/maomao-touchi-v2/07_final_screenplay.md
- 用户要求：重新产出资产库提示词，生成 Pixar 风格效果图；不生成三视图；审核当前提示词中 Midjourney 无法识别的内容并修改。
- 角色审核状态：角色已确认（沿用 run-20261005-205155 批准版角色设计，本轮未修改角色核心特征）。

## 运行步骤

1. 读取来源运行的角色设计、资产库和 Midjourney 提示词。
2. 审核旧版提示词的 Midjourney 识别问题：多词负面约束逐词误伤、工作流术语混入正文、虚构专有名词、引号角色名诱发文字渲染、中文参数无效、笼统否定误伤穿戴物。
3. 按 asset-prompt-pack 的 Pixar 风格模式重写全部资产提示词：统一 Pixar 风格锚点、单主体单视角、完整入画、参数置于末尾。
4. 修复负面约束：只保留可安全分词的单词项（text、watermark、people、animals、hands、extra animals、extra food、jewelry）。
5. 删除虚构名称的视觉依赖：重拍器改为纯视觉描述（哑光黑色圆角矩形设备、一个大按键、四格指示灯）。
6. 中文提示末尾参数统一为与英文一致的英文机器指令；中文负面约束移入正文。
7. 复核双语一致性、风格锚点统一性和连续性约束。
8. 从来源运行复制 01、02、04、05、06 五个主文件作为本轮完整运行快照。

## 最终文件

- final/01-character-design.md（来源运行快照）
- final/02-asset-library.md（来源运行快照）
- final/03-midjourney-prompts.md（本轮重产）
- final/04-storyboard.md（来源运行快照）
- final/05-video-prompts-h3.md（来源运行快照）
- final/06-video-prompts-seedance.md（来源运行快照）

## 不可变记录

- 本轮没有修改来源运行或任何历史文件。
- 本轮仅重写 final/03-midjourney-prompts.md；其余主文件从来源运行复制到新目录，作为本轮完整运行快照。

## 修订记录

- 2026-10-05 用户修订 ASSET_101 客厅主场景：明确锁定「全屋中远景、完整客厅空间、全部墙面 + 家具布局可见，不是局部角落」；物体按由远到近顺序罗列并锁定矮柜（含猫可钻门缝）、沙发、重拍器、水盆、手机支架全部资产位置；风格、光影、约束分段书写；参数保持 --ar 16:9 --v 8.2 --raw --s 50 --c 5 --no people animals text watermark 不变。
- 2026-10-05 用户修订（融合）：ASSET_102 矮柜与储物柜门缝并入 ASSET_101 客厅全屋主场景，两者合并为一张全屋图生成；矮柜木纹、门缝宽度、门缝阴影和灰尘可见度等编辑项并入 ASSET_101 的 edit_instruction；局部机位（团团钻出门缝）由 ASSET_101 裁切派生。已同步修改 final/02-asset-library.md、final/04-storyboard.md 的 ASSET_102 引用及 _internal/continuity-report.md 的资产 ID 清单。
- 2026-10-05 用户修订：全部道具参考图（ASSET_001 重拍器、ASSET_002 浴巾、ASSET_003 温毛巾、ASSET_004 水盆、ASSET_005 小鱼干、ASSET_006 手机支架）统一改为干净纯色浅暖灰背景，删除道具提示词中的场景语境（浅暖灰色表面、客厅地面、窗边阳光、旁边木柜、地面表面），统一补写「单主体居中构图」；ASSET_006 edit_instruction 的「靠近矮柜的位置」改为场景位置由分镜控制并后期合成；各道具参数保持不变。
- 2026-10-05 用户修订：ASSET_101 改为纯空场景，去掉全部可移动道具（重拍器、灰色水盆、黑色手机支架及小木桌），仅保留固定家具（浅橡木矮柜+门缝、米白布艺沙发+暖橙靠垫、搁板小画框、白框大窗）；正文新增「前景木地板留空、地面干净无杂物」与「无摆放的道具」；参数保持不变；道具位置改由分镜控制并后期合成到空场景上。已同步更新 final/03-midjourney-prompts.md 与 final/02-asset-library.md（含跨资产关系）。
- 2026-10-05 用户根据新场景参考图（微缩盒子式客厅效果图）再次修订 ASSET_101：构图从「平视广角建立镜头」改为「微缩盒子式高机位约四十五度俯视，前墙压低为白色半墙剖面，后墙与左窗墙可见，地面主导画面，天花板不入画」；布局更新为后墙偏左浅橡木矮柜（抽屉组+一扇柜门半开成竖直猫门缝）、矮柜右侧地面重拍器、右侧米白布艺沙发配暖橙靠垫与搁板画框、左侧白框大窗暖光长条光斑、前景左下木地板灰色水盆（取消地毯）、前景右侧白色半墙前小木桌上黑色手机支架；参数保持 --ar 16:9 --v 8.2 --raw --s 50 --c 5 --no people animals text watermark 不变。已同步更新 final/02-asset-library.md 视觉描述与 LOCKED/SHOT_VARIABLE。
