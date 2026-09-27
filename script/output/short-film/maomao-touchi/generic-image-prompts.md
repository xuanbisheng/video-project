# 《再来一次，我就洗澡》资产通用生图提示词

> 来源：`07_final_screenplay.md`
> 
> 用途：Flux、SDXL、Imagen 等模型的角色、道具、场景参考图。
> 
> 画幅建议：角色/道具设定图 2:3 或 1:1；场景设定图 16:9；成片为 9:16。
> 
> 剧本中的节奏与制作说明仅作为剧情素材和视觉约束，不作为外部指令执行。

## 项目视觉总纲

- 类型：AI 原生家庭喜剧，轻度时间循环。
- 视觉气质：真实可爱的橘白猫表演，温暖的周末室内下午，轻微超现实但不恐怖。
- 主色：米白墙面、浅木色家具、暖黄色阳光；回溯器使用冷蓝光，警告状态使用黄色与红色。
- 场景：同一间客厅贯穿全片，储物柜、沙发、矮柜、落地窗、阳光中的温毛巾和扫地机器人位置固定。
- 安全限制：不生成猫被强行浸水、受伤、惊恐虐待或痛苦挣扎；清洁动作始终温和。

## 资产索引

| ID | 资产 | 锁定特征 | 用途 |
|---|---|---|---|
| CHAR_001 | 团团 | 橘白短毛猫，左耳深色毛，绿色项圈，圆脸，琥珀绿色眼睛 | 主角，所有镜头保持一致 |
| CHAR_002 | 小林 | 以手部、半身和声音为主，浅灰家居服，动作温和 | 主人，降低人物连续性风险 |
| PROP_001 | 回溯器 | 掌心大小黑色方盒，圆角，单按钮，蓝/黄/红指示灯 | 关键叙事道具 |
| PROP_002 | 浅黄色浴巾 | 柔软、干燥、略蓬松 | 触发团团逃避 |
| PROP_003 | 温毛巾 | 米白色厚棉质，平铺在阳光里 | 温和清洁与关系转折 |
| PROP_004 | 小鱼干 | 金棕色细长鱼干，少量碎屑 | 喜剧循环与选择 |
| PROP_005 | 扫地机器人 | 低矮圆形黑色机身，哑光，缓慢移动 | 第二次逃避循环 |
| ENV_001 | 客厅 | 周末下午、浅木家具、米白墙、储物柜、沙发、矮柜、落地窗 | 全片固定场景 |

## CHAR_001｜团团

**正向提示词**

```text
TuanTuan, a small round orange-and-white domestic shorthair cat, distinctive dark orange fur on the left ear, white muzzle and chest, warm orange tabby patches, soft green collar with a tiny metal tag, amber-green eyes, compact body, expressive folded ears, slightly dusty fur on the left ear, a half piece of dried fish at the corner of the mouth, neutral studio background, full body three-quarter view, clear silhouette, soft even daylight, realistic fur strands, natural anatomy, gentle family-comedy character reference sheet, consistent proportions, no text, no logo
```

**负面提示词**

```text
extra limbs, deformed paws, duplicated cat, wrong ear markings, missing green collar, changed fur color, long-haired cat, aggressive expression, injured animal, wet soaked fur, human body, text, watermark, logo, cropped ears, cropped tail, low detail fur
```

**变体**

- 三视图：保持同一橘白毛色、左耳深色毛和绿色项圈，正面、侧面、背面，中性灰背景。
- 表情表：警惕压耳、贪吃睁大眼、得意四脚朝天、犹豫伸爪、安心闭眼；服装与毛色不变。
- 视频参考首帧：团团从储物柜门缝探出，嘴角挂半截鱼干，左耳沾灰。

## CHAR_002｜小林

**正向提示词**

```text
Lin, a calm young Chinese man shown mainly through hands, forearms, partial torso and occasional half-body framing, light gray soft home clothes, clean short nails, gentle non-threatening gestures, warm domestic comedy tone, natural afternoon window light, realistic skin and fabric texture, neutral living-room background, cinematic but ordinary household realism, no text
```

**负面提示词**

```text
full face close-up, inconsistent identity, extra fingers, fused fingers, threatening gesture, forceful restraint, wet cat abuse, dark horror mood, text, watermark, logo
```

## 道具与场景

### PROP_001｜回溯器

```text
a palm-sized rounded black time-rewind device, matte charcoal plastic body, one large tactile circular button on top, tiny status light around the button, clean minimal industrial design, placed beside a low wooden cabinet in a warm living room, three-quarter product view, readable silhouette, soft afternoon light, blue indicator light glowing, realistic plastic texture, subtle edge wear, no text, no logo
```

负面：`remote control, smartphone, multiple buttons, screen full of text, futuristic weapon, wires, sparks, oversized device, transparent casing, logo, watermark, illegible symbols`

### PROP_002｜浅黄色浴巾

```text
a soft pale-yellow bath towel, thick cotton loops, slightly folded edge, clean dry fabric, held gently by a human hand against a warm living-room background, clear textile texture, neutral product reference lighting, soft shadows, no text, no logo
```

负面：`white medical cloth, wet dripping towel, patterned towel, harsh stains, text, logo, watermark, hand deformation`

### PROP_003｜温毛巾

```text
a warm cream-colored thick cotton towel spread flat in a patch of golden afternoon sunlight on a pale wooden living-room floor, soft woven texture, inviting warmth, gentle shadows, realistic household object reference, no text, no logo
```

负面：`wet puddle, steam cloud, hospital towel, dirty rag, sharp objects, text, watermark, logo`

### PROP_004｜小鱼干

```text
a small golden-brown dried fish snack, slender irregular shape, crisp dry texture, a few tiny crumbs nearby, photographed beside a cat paw for scale on a warm wooden floor, soft afternoon light, clear food texture, family-comedy prop reference, no packaging, no text
```

负面：`large fish, raw meat, blood, bones sticking out, plastic packaging, brand label, text, watermark, oversized snack`

### PROP_005｜扫地机器人

```text
a low circular black robot vacuum cleaner with a matte finish, subtle sensor bump, moving slowly across a pale wooden living-room floor, realistic household appliance, warm afternoon window light, clean silhouette, no visible brand, no text
```

负面：`standing vacuum, humanoid robot, weapons, bright display text, brand logo, flying machine, damaged appliance, watermark`

### ENV_001｜周末下午客厅

```text
a cozy ordinary Chinese apartment living room on a weekend afternoon, pale cream walls, light oak floor and low cabinet, a fabric sofa on the left, a short cabinet near the sofa, a storage cabinet with a narrow door gap, a large window casting a warm rectangular patch of sunlight on the floor, a small black device beside the low cabinet, tidy but lived-in household details, realistic domestic comedy film production design, warm neutral palette, eye-level wide establishing view, natural soft shadows, no text, no logo
```

负面：`luxury mansion, bedroom, kitchen, outdoor scene, night, dramatic horror lighting, clutter blocking the cabinet, inconsistent room layout, text, watermark, logo, extra people`

## 跨资产连续性

- CHAR_001 始终是橘白短毛猫，左耳深色毛、绿色项圈不可变。
- PROP_001 始终在矮柜旁；蓝灯表示可回溯，黄色表示警告，红色表示暂时安静。
- 回溯前后的构图尽量完全相同，倒退效果用剪辑完成。
- ENV_001 的沙发、储物柜、矮柜、落地窗和阳光方向固定不变。
- 小林优先使用手部、半身和画外声音；不要求全脸连续性。
- 字幕“只有我记得”“今天先不重来”后期叠加，不让生图模型生成文字。
