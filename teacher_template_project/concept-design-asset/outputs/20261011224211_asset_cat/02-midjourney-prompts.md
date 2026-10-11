# 《团团送星星回家》Midjourney 提示词审核稿

> 本文件汇总角色、道具、场景三项 asset skills 的第一批基准提示词。所有条目均处于审核阶段；未锁定资产不得用于派生、同框或关键帧。本文件没有执行任何图片生成。

## 项目参数头

- 项目：`《团团送星星回家》`
- 目标模型版本：`[MJ_VERSION]`（待用户提供，不猜测）
- 画幅基线：横屏 16:9（用户确认）；角色全身 2:3；表情 1:1；道具主参考 1:1；空间总览 16:9
- 风格基线：`[STYLE_BASELINE]` = 原创温暖电影感 3D 家庭动画；圆润而结构清楚的造型、可信可辨的材质、亲切克制的表演；夜间柔和冷色环境光与温暖局部星光；避免塑料玩具质感、幼儿比例、过度拟人及霓虹色污染。
- 风格载体：文字画风基线（未提供 Moodboard；四联测试待实测，风格漂移风险仍在）
- 参考图占位符：角色 `[CHAR_TUANTUAN_URL]`、`[CHAR_XIAOMAN_URL]`；道具 `[PROP_STAR_URL]`、`[PROP_CAT_WAND_URL]`、`[PROP_CARTON_URL]`、`[PROP_BOOK_STACK_URL]`；场景 `[ENV_XIAOMAN_ROOM_URL]`
- 参考图机制：待确认目标模型分支后再选择；本第一批主参考不使用参考图。MJ 主线 `--oref` 与 Niji `--sref` 不混用；兼容性未实测前标注未验证。
- 负面约束基线：identity drift、changed markings、changed clothing、extra limbs、missing hands/paws、text、logo、watermark、cropped head or feet；按资产类别增加约束，完整双语条目见下文。
- 锁定日期与版本：`[LOCK_DATE]` / `[LOCK_VERSION]`（尚无代表图；未锁定）
- 参数策略：本稿只在每条提示词末尾注明所需 `--ar`；不猜测或硬编码 `--v`、`--oref`、`--sref`、`--raw`、`--s`、`--c` 或 Moodboard 参数。模型版本确定后统一复核。

## A. 角色资产｜第一批：无参考图的单体全身主参考

### CHAR_TUANTUAN｜主参考｜状态：已确认方向，未锁定

**中文审核版：** 单只成年橘白短毛家猫，身体略圆润但敏捷，真实猫科四足比例；琥珀金眼睛，橘色头顶与背部，暖白口鼻、胸腹与四爪，尾巴有清晰橘色环纹，不戴项圈、不穿衣；正面自然站立，耳尖、四爪和整条尾巴完整入画，四周留白，简洁暖灰背景，柔和均匀棚拍光，短毛层次细腻可辨；原创温暖电影感 3D 家庭动画，造型亲切而非玩具感。

**English execution version:** A single adult orange-and-white domestic shorthair cat, slightly rounded yet agile, with natural quadruped feline proportions; amber-gold eyes, orange crown and back, warm-white muzzle, chest, belly and all four paws, a clearly ringed orange tail; no collar and no clothing. Front-facing neutral standing pose, ear tips, all four paws and the full tail visible with clear margins, simple warm-gray background, soft even studio lighting, finely readable short fur; original warm cinematic 3D family-animation look, appealing but never toy-like. --ar 2:3

**中文负面约束：** 不要品种或物种漂移、毛色/花纹改变、眼睛变色、尾巴环纹消失、项圈或服装、拟人化身体或人手、额外/缺失肢体或爪子、攻击或恐惧表情、文字、Logo、水印、裁掉耳尖/脚爪/尾巴。

**English negative constraints:** No breed or species drift, no changed coat colors or markings, no eye-color change, no missing tail rings, no collar or clothing, no humanoid body or human hands, no extra or missing limbs or paws, no aggressive or frightened expression, no text, logo, watermark, or cropped ear tips, paws, or tail.

### CHAR_XIAOMAN｜主参考｜状态：已确认方向，未锁定

**中文审核版：** 单人，20 岁年轻成年女性，大学刚毕业，清瘦自然的成年身形、普通亲切的柔和椭圆脸、自然暖调肤色、深色眼睛；深色头发自然偏分并在颈后扎成低马尾，少量自然碎发；浅灰纯色棉质居家短袖、深灰直筒家居长裤、浅色简洁室内拖鞋；不戴眼镜、不加饰品、无妆感或仅极淡自然妆。正面放松站姿，头顶至拖鞋完整入画，双手和双脚可见，简洁中性暖灰背景，柔和均匀光线；原创温暖电影感 3D 家庭动画，年轻自然、亲切克制。

**English execution version:** A single 20-year-old young adult woman, recently graduated from university, with a naturally slim adult build, an ordinary approachable soft oval face, a natural warm complexion and dark eyes. Dark hair with a natural side part tied in a low ponytail at the nape, with a few loose strands. Plain light-gray cotton home T-shirt, dark-gray straight-leg lounge pants and simple light-colored indoor slippers; no glasses or accessories, no visible makeup or only very subtle natural makeup. Relaxed front-facing standing pose, fully visible from head to slippers, both hands and feet clear, simple neutral warm-gray background, soft even lighting; original warm cinematic 3D family-animation look, youthful, natural and restrained. --ar 2:3

**中文负面约束：** 不要年龄漂移、明显浓妆、成熟职业造型、长发披散、发色改变、服装换色/换款/增加图案、鞋袜缺失、眼镜或饰品、额外/缺失手指或肢体、文字、Logo、水印、裁掉头顶或拖鞋。

**English negative constraints:** No age drift, heavy makeup, mature professional styling, loose long hair, changed hair color, changed clothing colors or design, added patterns, missing slippers or feet, glasses or accessories, extra or missing fingers or limbs, text, logo, watermark, or cropped head or slippers.

### 第一批说明

以上两条不使用任何角色参考图。提示词中明确的角色细节来源于用户已确认设定或用户接受的推荐；若主参考结果未通过连续性审核，先调整主参考，不派生角度或动作图。

### 第二批增量模板（仅在主参考图锁定后启用）

以下模板当前仅供审核，尚不可执行；`[CHAR_*_URL]` 必须替换为已锁定主参考。

| 模板 | 中文增量变量 | English incremental variable | 建议画幅 |
|---|---|---|---|
| 三分之四角度 | 使用 `[CHAR_TUANTUAN_URL]` 或 `[CHAR_XIAOMAN_URL]`，保持所有身份锚点不变；仅将视角改为三分之四，完整全身，背景与光线不变。 | Use `[CHAR_TUANTUAN_URL]` or `[CHAR_XIAOMAN_URL]`; preserve every identity anchor and change only the view to a full-body three-quarter angle, with the same background and lighting. | `--ar 2:3` |
| 头部表情 | 引用对应已锁定主参考；只表现温柔好奇／专注温柔表情和头肩构图，不改变脸、眼睛、毛纹、发型或配饰。 | Reference the corresponding locked master; change only to a gentle-curious / focused-gentle expression in a head-and-shoulders framing; keep face, eyes, markings, hairstyle and accessories unchanged. | `--ar 1:1` |
| 团团动作 | 引用 `[CHAR_TUANTUAN_URL]`；动作变量仅为 `[轻轻嗅闻星星／抬一只前爪轻拍／追逐羽毛／坐入纸箱打哈欠]`；保持四足猫科动作，不表现攻击、恐惧、失控或受伤。 | Reference `[CHAR_TUANTUAN_URL]`; change only the action to `[gently sniffing the star / lightly tapping with one front paw / chasing the feather / sitting in a box and yawning]`; retain quadruped feline anatomy, with no aggression, fear, loss of control or injury. | 横屏镜头 `--ar 16:9`；竖屏单镜头 `--ar 9:16` |
| 小满动作 | 引用 `[CHAR_XIAOMAN_URL]`；动作变量仅为 `[坐地整理书本／双手轻捧星星／拉开窗帘／在画面另一侧轻晃逗猫棒／坐在纸箱旁望向窗外]`；保持已确认服装、发型与成年比例。 | Reference `[CHAR_XIAOMAN_URL]`; change only the action to `[sitting on the floor sorting books / gently holding the star with both hands / opening the curtains / lightly moving the teaser wand on the opposite side of the room / sitting beside a box and looking outside]`; preserve the approved clothing, hairstyle and adult proportions. | 横屏镜头 `--ar 16:9`；竖屏单镜头 `--ar 9:16` |

## B. 道具资产｜第一批：独立主参考

### PROP_STAR｜单颗小星星｜状态：待审核

**造型建议（推断，待审核）：** 圆角五角星，暖白金柔光，无脸、无文字、无表情；形体在所有状态中固定，变化只限发光强度与画面位置。

**中文审核版：** 单独一颗小型圆角五角星，形状简洁、边缘柔和，表面像细腻半透明的暖白色发光材质，柔和金色内光，轮廓清楚但不过曝；在中性深灰背景中央悬浮，单体产品设定图，无投影文字，无其他物体。原创温暖电影感 3D 家庭动画，光晕克制、可保留轮廓细节。

**English execution version:** A single small rounded five-point star, with a simple soft-edged shape and a subtly translucent warm-white luminous surface, a gentle golden inner glow, and a clear silhouette without blown highlights. Centered and floating against a neutral dark-gray background as a single-object design study, with no lettering and no other objects. Original warm cinematic 3D family-animation look; restrained halo that preserves the star's shape and surface detail. --ar 1:1

**中文负面约束：** 不要多颗星星、星形变化、尖锐危险边缘、脸或卡通五官、文字、符号、Logo、水印、过曝光团、材质或颜色漂移、重复物件。

**English negative constraints:** No multiple stars, changed star shape, sharp hazardous points, face or cartoon features, text, symbols, logo, watermark, blown-out glow, material or color drift, or duplicate objects.

**状态顺序（均只改变亮度，不改变形状）：** A 微亮；B 柔和发光并可照亮附近表面；C 被遮挡时变暗；D 手心里微弱闪两次；E 月光照入后逐渐变亮；F 温暖明亮并朝窗外升起，随后离开画面。亮度描述为剧情状态变量，不在一张图内拼接多个阶段。

**状态模板中文：** 引用已锁定 `[PROP_STAR_URL]`，只将状态改为 `[A/B/C/D/E/F]`，保持同一颗圆角五角星、同一尺寸比例、表面和色相；不要增加第二颗星或改变形状。

**State template English:** Reference the locked `[PROP_STAR_URL]` and change only the state to `[A/B/C/D/E/F]`; keep the same single rounded five-point star, proportions, surface and hue. Do not add another star or alter its shape.

### PROP_CAT_WAND｜逗猫棒｜状态：待审核

**中文审核版：** 单独一根简洁家用逗猫棒，细长轻质杆体，末端连接一簇柔软羽毛；杆体与羽毛使用低饱和、无品牌的中性色，连接结构清楚，羽毛自然分叉且数量克制；中性浅灰背景，完整物件平放或轻微悬起，无角色、无包装、无文字。具体杆体材质与羽毛颜色待审核。

**English execution version:** A single simple household cat teaser wand with a slim lightweight rod and one small soft feather tuft attached at the tip. Use muted unbranded neutral colors for the rod and feathers, with a clearly visible connection and a restrained number of naturally separated feathers. Show the complete object on a neutral light-gray background, lying flat or slightly lifted, with no character, packaging or text. Rod material and feather color remain subject to review. --ar 1:1

**中文负面约束：** 不要多根逗猫棒、多个羽毛头、铃铛、品牌、文字、Logo、水印、形状/材质变化、折断或尖锐端头、重复道具。

**English negative constraints:** No multiple teaser wands, multiple feather tufts, bells, brands, text, logo, watermark, changed shape or material, broken or sharp ends, or duplicate props.

**状态模板中文：** 引用已锁定 `[PROP_CAT_WAND_URL]`，只改变位置和轻微摆动方向；保持同一根杆体、同一簇羽毛和相同颜色，不增加配件。

**State template English:** Reference the locked `[PROP_CAT_WAND_URL]` and change only its position and gentle swaying direction; preserve the same rod, single feather tuft and colors, with no added accessories.

### PROP_CARTON｜纸箱｜状态：待审核

**中文审核版：** 单独一个普通瓦楞纸纸箱，简洁矩形结构，棕色纤维纸板与清楚的折边，空箱、无印刷、无胶带品牌标记；正面三分之四视图，完整展示箱口、侧面与底部结构，浅灰中性背景，柔和均匀光线。箱体尺寸、箱盖打开状态和磨损程度待审核。

**English execution version:** A single ordinary corrugated-cardboard carton with a simple rectangular form, brown fiberboard and clearly defined folded edges; empty, unprinted, with no branded tape or markings. Three-quarter front view showing the opening, sides and base, fully visible on a neutral light-gray background under soft even lighting. Carton dimensions, flap position and wear remain subject to review. --ar 1:1

**中文负面约束：** 不要额外纸箱、纸箱数量变化、文字、物流标签、Logo、水印、箱体材质或颜色变化、变形破损、箱内物品。

**English negative constraints:** No extra cartons or quantity changes, text, shipping labels, logo, watermark, changed cardboard material or color, distorted or damaged structure, or objects inside the box.

**状态模板中文：** 引用已锁定 `[PROP_CARTON_URL]`，只改变 `[静置／轻微晃动／敞口空箱]` 状态；保持箱体尺寸、折边、颜色和材质一致，晃动幅度轻微、安全。

**State template English:** Reference the locked `[PROP_CARTON_URL]` and change only the state to `[stationary / gently wobbling / open empty box]`; preserve the carton dimensions, folds, color and material, with only a slight safe wobble.

### PROP_BOOK_STACK｜书本组｜状态：待审核

**中文审核版：** 一小组普通无品牌书本整齐叠放，纸张与封面材质可辨，封面为无图案或低细节纯色，不出现可读文字、标题或标志；单组物件完整入画，浅灰中性背景，柔和均匀光线。书本具体数量、厚薄与配色待审核。

**English execution version:** A small group of ordinary unbranded books stacked neatly, with readable paper and cover materials. Covers are plain or minimally detailed solid colors, with no readable text, titles or logos. Show the complete single stack against a neutral light-gray background under soft even lighting. The exact book count, thickness and colors remain subject to review. --ar 1:1

**中文负面约束：** 不要可读文字、书名、Logo、水印、额外书堆、书本数量变化、封面图案突变、材质漂移或散落纸张。

**English negative constraints:** No readable text, titles, logo, watermark, extra stacks, changes in book count, sudden cover-pattern changes, material drift, or loose scattered pages.

**状态模板中文：** 引用已锁定 `[PROP_BOOK_STACK_URL]`，只改变书本的整齐叠放或小满正在整理的摆放位置；保持同一组书、数量和封面颜色，不生成可读文字。

**State template English:** Reference the locked `[PROP_BOOK_STACK_URL]` and change only the neat stack or its placement while being sorted by Xiaoman; preserve the same group, count and cover colors, with no readable text.

### 道具尺度关系模板（锁定后才可派生）

**中文：** 只有相关角色与道具均已锁定后才能使用。引用 `[PROP_ID_URL]` 和对应的 `[CHAR_ID_URL]`；道具外观固定，只增加单一接触/尺度关系 `[星星在猫爪旁／星星由双手轻托／逗猫棒握在手中／纸箱位于猫身旁]`；不重新设计角色或物件，不增加数量。

**English:** Use only after both the prop and the relevant character are locked. Reference `[PROP_ID_URL]` and the corresponding `[CHAR_ID_URL]`; keep the prop design fixed and add only one contact or scale relation `[star beside the cat's paw / star gently held in both hands / teaser wand held in one hand / carton beside the cat]`. Do not redesign the character or prop, and do not increase quantities.

## C. 场景资产｜ENV_XIAOMAN_ROOM

### 空场横屏空间总览母版｜状态：待审核

**中文审核版：** 夜间普通居家卧室的横屏空间总览，原创温暖电影感 3D 家庭动画。画面只表现空房间，不出现人物、动物、纸箱、书本、星星或逗猫棒。门位于画面左侧、窗与窗帘位于画面右侧（空间关系为待审核建议）；墙面和地板使用低饱和居家中性色，保留朴素生活尺度，不增添剧本未指定的显眼家具或装饰。中央留出连续、安全、无遮挡的活动地面，从门口通向窗边；窗帘闭合，仅一线柔和冷色月光从缝隙投到地板。房间一角的广角、低畸变固定视点，门、窗、中央空地关系清晰；柔和夜间环境光，材质可信、布光稳定。

**English execution version:** A wide horizontal overview of an ordinary lived-in bedroom at night, in an original warm cinematic 3D family-animation look. Show the empty room only: no people, animals, cartons, books, star or teaser wand. Place the doorway on the left side of frame and the window with curtains on the right (proposed layout subject to review); use muted domestic neutral walls and flooring, preserve modest realistic room scale, and add no prominent furniture or decoration not specified in the script. Keep a continuous safe unobstructed floor area through the center from the doorway toward the window. Curtains are closed, with only a thin line of soft cool moonlight passing through onto the floor. Fixed low-distortion wide view from one room corner, with the doorway, window and central clear area easy to read; soft nighttime ambient light, believable materials and stable lighting. --ar 16:9

**中文负面约束：** 不要人物、动物、剧情道具、额外门窗、窗户方向改变、家具重排、重复物件、可读文字、Logo、水印、样板间豪华装饰、霓虹光、强烈畸变、未经审核的新家具。

**English negative constraints:** No people, animals or story props; no extra doors or windows, changed window direction, rearranged furniture, duplicated objects, readable text, logo or watermark, luxurious showroom decor, neon lighting, strong distortion, or unapproved new furniture.

### 固定机位／光线增量模板（空间母版锁定后使用）

**中文：** 引用 `[ENV_XIAOMAN_ROOM_URL]`，严格保持门窗方向、墙地材质与空间尺度；只增加固定中景机位变量 `[机位位置/高度/朝向]` 和光线变量 `[窗帘缝月光／窗帘拉开后的月光落地区域]`。本模板不加入人物、动物或剧情道具。

**English:** Reference `[ENV_XIAOMAN_ROOM_URL]` and strictly preserve doorway/window orientation, wall and floor materials, and room scale. Add only the fixed medium-shot camera variable `[camera position / height / direction]` and lighting variable `[moonlight through the curtain gap / moonlight patch after the curtains are opened]`. Do not add people, animals or story props.

### 关键区域模板（空场景版本）

**中文：** 引用 `[ENV_XIAOMAN_ROOM_URL]`，只框选并呈现 `[门口进入区域／窗与窗帘区域／中央清空地面／窗边月光区域]`；保持同一户型、门窗方向与光线方向，不出现角色或剧情道具，不新造家具。

**English:** Reference `[ENV_XIAOMAN_ROOM_URL]` and frame only `[doorway entry area / window and curtains / clear central floor / moonlit area beside the window]`; preserve the same room layout, doorway/window orientation and light direction. Show no characters or story props and invent no furniture.

### 角色／道具同框模板｜暂不可执行

**中文：** 仅在场景、角色及相关道具全部锁定后使用。引用 `[ENV_XIAOMAN_ROOM_URL]`、`[CHAR_ID_URL]` 与 `[PROP_ID_URL]`，严格保持空间母版布局；只增加单一动作、站位和尺度变量。单张只表达一个动作，不画出星星发射、撞击或危险失控过程，不重排家具，不增减道具。

**English:** Use only after the environment, character and relevant prop are all locked. Reference `[ENV_XIAOMAN_ROOM_URL]`, `[CHAR_ID_URL]` and `[PROP_ID_URL]`, preserving the master layout exactly; add only one action, position and scale variable. Show one action per image; do not depict star launch, impact or dangerous loss of control, rearrange furniture, or change prop quantities.

### 画幅与连续性检查

- 空间总览使用 `--ar 16:9`；当前项目不另建竖屏空间母版。
- 门窗方向、固定机位、月光方向和中央活动区必须在空间母版审核后固定；后续镜头不重排布局。
- 空场母版不含角色、动物、书本、纸箱、星星或逗猫棒；这些资产仅在后续锁定后进入同框模板。
- 角色同框比例、猫爪接触与手持星星/逗猫棒等均待角色及道具锁定后审核。
- 全部文字、字幕、书封文字与 Logo 留给后期；夜景光效不得遮蔽角色或产生危险效果。
- 当前所有提示词尚未执行；实际模型、版本与参数机制待确认。
