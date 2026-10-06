---
name: asset-prompt-pack
description: "将剧本中的角色、场景、道具等视觉资产整理为资产库，并只输出 Midjourney 专用资产提示词。"
---

# Asset Prompt Pack

把影视剧本或已确认项目设定转成可跨镜头复用的资产库和 Midjourney 提示词。通用生图提示词不再是本项目交付物。

## 前置条件

- 角色资产必须读取已确认的角色设计和 CHAR_* ID；未确认时返回角色设计闸门。
- 场景和道具可独立提取，但所有推断设定必须显式标记。
- 主 Agent 已创建运行目录时直接写入该目录，不另建资产目录。

## 工作流

1. 提取并去重角色、场景、道具、服装、交通工具和关键特效。
2. 建立稳定 ASSET_* ID 和优先级：P0 主角/主场景/关键道具，P1 配角/次要场景/辅助道具，P2 背景和氛围元素。
3. 为每个资产写资产卡：视觉设定、锁定项、可变项、比例/尺度关系、出现镜头和生成职责。提示词文件不输出 reference_images：字段；如需说明后续编辑，只使用 edit_instruction：。
4. 本项目资产图默认使用单主体、单视角；禁止生成角色三视图、四视图、多视角设定板或把多个角度拼在同一张图中。角色主参考使用一个完整全身或单一三分之四视角；动作资产另行单镜头描述。H3 不要求三视图或默认身份参考图。
5. 生成 Midjourney 提示词：主体、展示方式、环境、材质、光线、色彩、Pixar 风格锚点、构图和连续性约束；每个资产必须同时输出中文 提示： 和英文 prompt：，两者语义、主体、状态、参数和负面约束一一对应；所有参数放在每条提示词末尾。
6. 检查资产 ID、角色锁定项、场景关系和道具状态可被分镜引用。

## Midjourney 提示词固定格式

每个资产按以下顺序输出，不得省略中文版本，也不得生成 reference_images 字段：

- edit_instruction：中文编辑说明；只描述后续允许编辑的临时状态、动作或材质变化，并明确不得改变的锁定特征。
- 提示：中文 Midjourney 提示词；使用自然中文描述主体、展示方式、环境、材质、光线、色彩、构图和连续性约束，末尾保留与英文版本对应的参数和中文负面约束。
- prompt：English Midjourney prompt；用于直接复制到 Midjourney，内容与中文提示逐项对应，参数置于末尾，负面约束使用英文 --no。
- 用途/参数：说明资产用途、推荐画幅和可变状态；不得改写或替代前两条提示词。

中文提示示例：

提示：一只名为“团团”的橙白相间短毛家猫，左耳有深色毛发标记，佩戴绿色项圈，眼神警觉聪慧，体型紧凑，以四分之三侧面站立姿势位于干净中性色调的影棚地板上，毛发真实细腻，柔和的窗边光线，温暖自然的色彩，用于制作素材的肖像，轮廓清晰，无衣物，无其他动物 --ar 2:3 --v 8.2 --raw --s 60 --c 6 --无文字水印 无额外动物

英文提示示例：

prompt：A single orange-and-white short-haired domestic cat named Tuantuan, dark fur marking on the left ear, green collar, alert intelligent eyes, compact cat body, three-quarter standing pose on a clean neutral studio floor, realistic short fur, soft window light, warm natural colors, production asset portrait, clear silhouette, no clothing, no extra animals --ar 2:3 --v 8.2 --raw --s 60 --c 6 --no text watermark extra animals

中文与英文提示不得混成一段；中文用于审核语义，英文用于 Midjourney 执行。不要输出通用生图提示词、豆包提示词或额外的参考图字段。

## Pixar 风格资产模式

当用户要求 Pixar 风格、Pixar 效果图或同类三维动画电影质感时，所有资产提示词统一加入以下风格方向，并保持中英文对应：

- 中文风格锚点：Pixar 风格三维动画电影质感，亲和而精炼的造型，可信的基础解剖比例，适度夸张的眼神和轮廓，柔和全局光照，干净的材质，电影级暖色调，细腻但非照片写实。
- English style anchor：Pixar-inspired stylized 3D animated feature aesthetic, appealing refined design, believable base anatomy, moderately expressive eyes and silhouettes, soft global illumination, clean materials, cinematic warm color, detailed but not photorealistic。

Pixar 风格模式的约束：

- 静态角色主参考只写可见形态，不把“敏捷、聪明、温柔”等动态或心理词当作主要视觉事实；需要表达时转换为眼神、姿势、手势或嘴角等可见证据。
- 避免同义词堆叠，例如不要同时写“写实比例”和“可信的猫科解剖比例”；保留一个更具体的表述即可。
- 毛色和材质必须限定范围，例如“口鼻周围奶油白色毛发”，不要使用会扩大到整张脸的含混范围。
- 穿戴物属于角色造型；不要写笼统的“无道具”来否定项圈、金属牌、鞋子或服装。需要排除时写“无手持道具、无场景道具”或对应英文 “no handheld props, no scene props”。
- 不使用“生活感”等无法稳定渲染的抽象材质词；改写为“整洁自然的短毛、少量可见毛束、干净表面”等可视描述。
- 角色提示词必须明确完整入画：头部、双手/前爪、双脚/后爪或鞋子均不裁切；但仍只生成一个视角，不通过多视图拼图解决连续性。

## 输出

- 02-asset-library.md：角色、场景、道具和跨资产关系。
- 03-midjourney-prompts.md：按当前 Midjourney 版本编写的提示词。

内部资产字段、运行清单和检查结果可写入 _internal/。不得生成 generic-image-prompts.md。

## 版本规则

执行前读取 references/midjourney-v8.2-guide.md。未指定版本时按项目当前默认版本；用户指定版本优先。不要默认使用旧版 oref 方案。未有剧本依据的外观标记为“推断设定”。
