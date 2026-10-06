# Continuity Report

## 运行

- 项目：maomao-touchi-v2
- 运行 ID：run-20261005-214648
- 检查范围：Pixar 风格 Midjourney 资产提示词修订运行

## 提示词审核结论（Midjourney 识别问题）

| 问题类型 | 旧版示例 | 影响 | 修复方式 |
|---|---|---|---|
| 多词负面约束逐词误伤 | --no complete spill / --no full frontal fashion pose / --no readable text | 被拆成 no complete、no pose 等无效否定，可能误伤主体 | 只保留安全单词项：text、watermark、people、animals、hands、extra animals、extra food、jewelry |
| 工作流术语混入正文 | production asset portrait、exact single-item continuity reference、suitable for controlled slight movement | 不可渲染，稀释关键信息 | 全部删除或改写为可见形态 |
| 虚构专有名词 | three-second replay timer | 模型无对应视觉经验 | 改为纯视觉描述：哑光黑色圆角矩形设备、一个大按键、四格指示灯 |
| 引号角色名 | named “团团”/Tuantuan | 可能诱发画面文字渲染 | 从正文移除，用 --no text 兜底 |
| 中文参数 | --无文字水印 | 非有效 MJ 参数，误复制整条失效 | 中文负面约束写入正文，参数统一英文 |
| 笼统否定误伤穿戴物 | no clothing（猫） | 可能连带否定绿色项圈 | 改为“无手持道具、无场景道具” |
| 形容词堆叠长句 | 多处 | 降低可控性 | 改为短而具体的自然语言，主体前置 |

## 连续性检查

- 角色锁定项未被改写：团团橘白短毛、左耳深色毛、绿色项圈；小林浅灰/米白上衣、深色长裤、室内拖鞋。通过。
- 资产 ID（CHAR_001、CHAR_002、ASSET_001—006、ASSET_101、ASSET_103）与资产库一一对应；ASSET_102 已并入 ASSET_101（用户修订）。通过。
- 全部资产统一 Pixar 风格锚点（中文与英文逐项对应）。通过。
- 全部资产单主体、单视角、完整入画；未生成三视图。通过。
- 每条提示词参数位于末尾，参数后无正文；中文提示与英文 prompt 参数完全一致。通过。
- 负面约束均为可安全分词的单词项。通过。
- ASSET_007 扫地机器人仅声音，未生成图像提示词，与资产库约定一致。通过。
- 角色事实、道具状态、场景关系与 run-20261005-205155 批准版一致；仅表达方式改为 Pixar 风格，无剧情、动作或设定变更。通过。

## 遗留风险

- Midjourney 对“Pixar”一词的品牌理解存在轻微风格漂移可能；已在每条提示词中加入完整的风格锚点短语（非仅品牌词）降低风险。
- 浅灰或米白上衣在小林资产中保留为二选一区间，属于批准版设定；后续如需完全锁定单色，需用户确认后在新运行中修改。
