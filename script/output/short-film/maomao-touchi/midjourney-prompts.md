# 《再来一次，我就洗澡》Midjourney V8.2 资产提示词

> 来源：`07_final_screenplay.md`
> 
> 默认版本：Midjourney V8.2。所有参数放在每条提示词末尾，参数后不再写正文。
> 
> V8.x 一致性优先使用 Edit Model；本文件不默认使用 V7 的 `--oref`。

## 项目设定

- 视觉：温暖真实的家庭喜剧，轻微超现实时间循环。
- 角色参考：先生成 CHAR_001 三视图，再用 Edit Model 做表情/动作变体。
- 场景参考：先生成 ENV_001 宽幅空间图，再用 Edit Model 保持家具和光线方向。
- 成片画幅：9:16；资产参考图按角色 2:3、道具 1:1、场景 16:9 生成。

## CHAR_001｜团团

**三视图设定图**

```text
TuanTuan, a small round orange-and-white domestic shorthair cat, distinctive dark orange fur on the left ear, white muzzle and chest, orange tabby patches, soft green collar with a tiny metal tag, amber-green eyes, compact body, neutral gray studio background, front view side view and back view arranged as a clean character turnaround sheet, soft even daylight, realistic fur, consistent proportions, family comedy character design --ar 2:3 --raw --s 80 --c 5 --v 8.2 --no text watermark logo
```

**表情与动作参考**

```text
TuanTuan, the same orange-and-white domestic shorthair cat with dark fur on the left ear and a green collar, three expressions in one clean reference sheet: folded ears in suspicion, bright greedy eyes while holding dried fish, smug upside-down victory pose, neutral warm studio background, realistic fur and anatomy --ar 2:3 --raw --s 90 --c 6 --v 8.2 --no text watermark logo extra limbs
```

**Edit Model 指令**

保留团团的橘白毛色、左耳深色毛、绿色项圈、脸型和体型，只改变耳朵角度、眼神和姿态；不要改变品种、毛色、项圈或比例。

## CHAR_002｜小林

```text
Lin, a calm young Chinese man represented mainly by hands, forearms and partial torso, light gray soft home clothes, gentle non-threatening gestures, holding a pale yellow bath towel in a warm ordinary living room, natural afternoon window light, realistic skin and fabric, understated family comedy film reference --ar 2:3 --raw --s 70 --c 5 --v 8.2 --no text watermark logo full face close-up extra fingers threatening gesture
```

## PROP_001｜回溯器

```text
a palm-sized rounded black time-rewind device, matte charcoal plastic, one large tactile circular button, tiny status light around the button, beside a low light-wood cabinet in a warm living room, three-quarter product reference view, blue indicator glowing, subtle edge wear, realistic household prop design --ar 1:1 --raw --s 70 --c 4 --v 8.2 --no text watermark logo multiple buttons screen wires
```

**Edit Model 指令**

保留黑色圆角方盒、顶部单按钮和按钮周围的指示灯，只把指示灯从蓝色改为黄色或红色；保持尺寸、材质、位置和结构不变。

## PROP_002｜浅黄色浴巾

```text
a soft pale-yellow thick cotton bath towel, clean dry woven texture, slightly folded edge, held gently by a human hand against a warm ordinary living-room background, soft afternoon light, clear textile detail, simple household prop reference --ar 1:1 --raw --s 70 --c 4 --v 8.2 --no text watermark logo wet dripping cloth patterned towel
```

## PROP_003｜温毛巾

```text
a warm cream-colored thick cotton towel spread flat in a golden patch of afternoon sunlight on a pale wooden living-room floor, soft woven texture, inviting gentle warmth, realistic household prop reference, clean composition --ar 1:1 --raw --s 80 --c 4 --v 8.2 --no text watermark logo dirty rag puddle
```

## PROP_004｜小鱼干

```text
a small golden-brown dried fish snack, slender irregular shape, crisp dry texture, a few tiny crumbs on a warm wooden floor beside a cat paw for scale, soft afternoon light, clear food texture, family comedy prop reference --ar 1:1 --raw --s 80 --c 4 --v 8.2 --no text watermark logo packaging brand label blood
```

## PROP_005｜扫地机器人

```text
a low circular black robot vacuum cleaner with matte finish and subtle sensor bump, slowly moving across a pale wooden living-room floor, warm afternoon window light, realistic ordinary household appliance, clean silhouette, no visible brand --ar 1:1 --raw --s 60 --c 4 --v 8.2 --no text watermark logo humanoid robot weapons
```

## ENV_001｜周末下午客厅

```text
a cozy ordinary Chinese apartment living room on a weekend afternoon, pale cream walls, light oak floor, fabric sofa on the left, short cabinet beside the sofa, storage cabinet with a narrow door gap, large window casting a warm rectangular patch of sunlight on the floor, small black device beside the low cabinet, tidy lived-in details, realistic domestic comedy film production design, warm neutral palette, eye-level wide establishing view --ar 16:9 --raw --s 90 --c 6 --v 8.2 --no text watermark logo extra people night bedroom kitchen
```

**竖屏场景变体**

```text
a cozy ordinary Chinese apartment living room on a weekend afternoon, pale cream walls, light oak floor, sofa on the lower left, storage cabinet and low cabinet clearly visible in the middle distance, a large window creating a warm vertical patch of sunlight, black time-rewind device near the low cabinet, realistic domestic comedy film production design, vertical establishing composition --ar 9:16 --raw --s 90 --c 6 --v 8.2 --no text watermark logo extra people night
```

## 参考图与连续性

- 推荐工作流：生成 CHAR_001、PROP_001、ENV_001 初始图后，在 V8.2 Edit Model 中制作状态变体。
- Image Prompt 只提供启发式参考，不能保证精确复制；需要锁定团团外观时使用角色参考图和编辑指令。
- `--seed` 只用于测试复现，不等于角色身份锁定。
- 字幕不要交给 Midjourney 生成，后期添加。
