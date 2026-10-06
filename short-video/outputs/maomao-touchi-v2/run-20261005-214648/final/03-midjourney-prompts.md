# Midjourney V8.2 资产库提示词（Pixar 风格修订版）

## 使用规则

- 版本：Midjourney V8.2；风格模式：Pixar 风格三维动画电影质感（全部资产统一）。
- 本文件每个资产均按 edit_instruction、中文提示、英文 prompt、用途/参数输出。
- 英文 prompt 是复制到 Midjourney 执行的唯一版本；中文提示仅用于审核语义。
- 中文提示末尾的参数与英文版本完全一致；参数是机器指令，不翻译。
- 所有参数放在每条提示词末尾；参数之后不写正文；不使用旧版 --oref、Character Reference 或 Omni Reference。
- 负面约束只使用可安全分词的单词（text、watermark、people 等），不使用会被逐词误伤的多词短语。
- 全部资产均为单主体、单视角；不制作三视图、四视图或多角度拼图。

## 本轮审核结论：旧版提示词的 MJ 识别问题

1. 多词负面约束会被 Midjourney 逐词读取并误伤主体：旧版 `--no complete spill`、`--no full frontal fashion pose`、`--no readable text` 等短语会被拆成 no complete / no frontal / no pose 等无效否定。本轮只保留 text、watermark、people、animals、hands、extra animals、extra food、jewelry 等安全单词。
2. 工作流术语和不可渲染指令混入正文：production asset portrait、exact single-item continuity reference、suitable for controlled slight movement、small natural partial face reveal 等属于流程语言，Midjourney 无法渲染且稀释关键信息，已全部删除或改写为可见形态。
3. 虚构专有名词无法识别：“三秒重拍器 / three-second replay timer” 是本项目自造概念，模型无对应视觉经验，已改为纯视觉描述（哑光黑色圆角矩形设备、一个大按键、四格指示灯）。
4. 引号内的角色名（“团团” / named Tuantuan）可能诱发画面文字渲染，已从正文移除，用 --no text 兜底。
5. 中文提示词末尾曾使用中文参数（--无文字水印），不是有效 MJ 参数，误复制会导致整条失效；本轮中文负面约束写入正文，参数统一为英文。
6. 笼统否定可能误伤穿戴物：旧版猫的 no clothing 可能连带否定绿色项圈；本轮改为正向描述角色，需要排除时只写“无手持道具、无场景道具”。
7. 句式过长、形容词堆叠：按 V8.2 官方建议改为短而具体的自然语言，主体前置。

## CHAR_001 团团｜角色主参考（Pixar）

- edit_instruction：后续只编辑左耳临时灰尘、嘴边鱼干碎屑和毛巾包裹状态，不改变橘白短毛、左耳深色毛发标记、绿色项圈、大琥珀色眼睛、紧凑猫体型和单视角构图。
- 提示：Pixar 风格三维动画电影质感的橘白相间短毛家猫角色，左耳有一块深色毛发标记，佩戴绿色项圈，大而明亮的琥珀色眼睛，眼神警觉，紧凑圆润的猫科体型，可信的猫科解剖比例，四分之三侧面站立姿势，头部、双耳、四肢和尾巴完整入画不裁切，干净的中性浅色背景，亲和而精炼的造型，适度夸张的眼神和轮廓，柔和全局光照，干净的短毛材质，电影级暖色调，细腻但非照片写实，单主体单视角，无手持道具，无场景道具，无文字，无额外动物 --ar 2:3 --v 8.2 --raw --s 60 --c 6 --no text watermark extra animals
- prompt：Pixar-inspired stylized 3D animated cat character, orange-and-white short fur, dark fur marking on the left ear, green collar, large bright amber eyes with an alert gaze, compact rounded feline body with believable cat anatomy, three-quarter side standing pose, head, ears, four legs and tail fully in frame uncropped, clean light neutral background, appealing refined design, moderately expressive eyes and silhouette, soft global illumination, clean short fur material, cinematic warm colors, detailed but not photorealistic, single subject single view, no handheld props, no scene props, no text, no extra animals --ar 2:3 --v 8.2 --raw --s 60 --c 6 --no text watermark extra animals
- 用途/参数：团团连续性主参考；推荐画幅 2:3；单主体、单视角、完整全身；不制作三视图。

## CHAR_002 小林｜角色全身主参考（Pixar）

- edit_instruction：后续只编辑手势、镜头裁切和露脸程度，不改变年轻中国女性面部设定、浅灰或米白上衣、深色长裤和浅色室内拖鞋。
- 提示：Pixar 风格三维动画电影质感的年轻中国女性角色，大学刚毕业的年龄感，温柔亲切的笑容，大而有神的深棕色眼睛，浅灰或米白色居家上衣，深色长裤，浅色室内拖鞋，完整全身站立，双手自然垂放身侧，头部和双脚完整入画不裁切，干净的中性浅色背景，亲和而精炼的造型，可信的人体解剖比例，柔和全局光照，干净材质，电影级暖色调，低饱和自然配色，简洁发式，单主体单视角，无手持道具，无场景道具，无夸张首饰，无文字 --ar 2:3 --v 8.2 --raw --s 55 --c 6 --no text watermark jewelry
- prompt：Pixar-inspired stylized 3D animated young Chinese woman character, just-graduated young adult look, warm gentle smile, large expressive dark brown eyes, light gray ivory casual home top, dark trousers, light indoor slippers, full-body standing pose, hands relaxed at her sides, head and feet fully in frame uncropped, clean light neutral background, appealing refined design, believable human proportions, soft global illumination, clean materials, cinematic warm colors, low-saturation natural palette, simple neat hairstyle, single subject single view, no handheld props, no scene props, no exaggerated jewelry, no text --ar 2:3 --v 8.2 --raw --s 55 --c 6 --no text watermark jewelry
- 用途/参数：小林全身角色基准；后续局部、半身和少部分露脸镜头从本服装与体型派生；不制作三视图。

## ASSET_101 客厅全屋与矮柜门缝｜主场景（Pixar）

- edit_instruction：后续只编辑机位俯角、前景虚化、阳光面积、门缝阴影、灰尘可见度和靠垫颜色，不改变高机位微缩盒子构图、白色半墙剖面、后墙与左侧窗墙同时可见、天花板不入画、矮柜高度与门缝宽度，以及矮柜、沙发和窗光方向的相对位置；重拍器、水盆、手机支架等道具不入本图，由分镜与后期在空场景上合成摆放。
- 提示：Pixar 风格三维动画电影质感的家庭客厅，微缩盒子式高机位俯视构图，摄像机从前上方约四十五度俯瞰全屋，前墙压低为一道白色半墙剖面，后墙与左侧窗墙同时可见，地面占画面主体，天花板不入画，整体像精致的舞台微缩景观，不是局部角落特写，不是家具近景。物体按由远到近排列：后墙偏左是一排浅橡木低矮矮柜/电视柜，木纹清晰，右侧带小抽屉组，其中一扇柜门半开，留出可让一只猫钻出的竖直深色门缝，门缝内有阴影、边缘有细微生活磨损；右侧墙边是一张米白色布艺沙发，放一个暖橙色靠垫，沙发上方的墙面上有原木搁板和小画框；左侧白框大窗洒入周末下午暖光，在浅橡木木地板上拉出长条形光斑，窗下留出开阔的猫活动区；前景木地板留出开阔空地，地面干净无杂物摆放。风格为亲和而精炼的造型，干净的木纹、织物与漆面材质，电影级暖色调，细腻但非照片写实；光影为周末下午单侧窗光、柔和全局光照、明暗过渡自然；微缩景深，空间布局清晰稳定；无人物，无动物，无文字，无摆放的道具 --ar 16:9 --v 8.2 --raw --s 50 --c 5 --no people animals text watermark
- prompt：Pixar-inspired stylized 3D animated family living room, miniature dollhouse-style high-angle overhead composition, camera looking down into the room from about forty-five degrees above the front corner, front wall lowered to a low white half-wall cross-section, back wall and left window wall both visible, floor dominating the frame, ceiling out of frame, refined stage-diorama miniature look, not a partial corner close-up, not a furniture close-up. Objects ordered from far to near: against the back wall left of center, a low light-oak wooden cabinet / TV stand with clearly visible wood grain and a small drawer stack on its right, one sliding door slightly ajar leaving a vertical dark gap with inner shadow and subtle wear around the edges, wide enough for a cat to slip through; along the right wall, a cream fabric sofa with one warm orange cushion, wooden wall shelves and small picture frames above it; a large white-framed window on the left lets in weekend afternoon warm sunlight casting long light patches on the light-oak wooden floor, open cat activity area below the window; the foreground floor is left open and clear with no clutter placed on it. Style: appealing refined design, clean wood grain, fabric and painted surfaces, cinematic warm colors, detailed but not photorealistic; lighting: weekend afternoon single-side window light, soft global illumination, smooth light-shadow transition; miniature depth of field, clear stable spatial layout; no people, no animals, no text, no placed props --ar 16:9 --v 8.2 --raw --s 50 --c 5 --no people animals text watermark
- 用途/参数：主场景空场景空间连续性；微缩盒子式高机位建立镜头，俯瞰全屋（后墙+左窗墙+白色半墙剖面，地面主导画面），避免只渲染局部角落；仅含固定家具（矮柜、门缝、沙发、搁板），不含重拍器、水盆、手机支架等可移动道具，道具位置由分镜控制并后期合成；同时承担矮柜门缝入口锚点（团团开场钻出与回溯归位，由本图裁切出局部机位）；推荐画幅 16:9，视频构图再裁切为 9:16。

## ASSET_001 重拍器｜道具主参考（Pixar）

- edit_instruction：后续只编辑四格指示灯的亮起颜色、猫爪或手掌接触角度，不改变哑光黑色圆角外壳、单个大按键、四格指示灯位置和掌心大小尺度。
- 提示：Pixar 风格三维动画电影质感的道具设计，掌心大小的哑光黑色圆角矩形小设备，顶面有一个大圆形按键和一排四格小指示灯，边缘有轻微使用磨痕，置于干净纯色浅暖灰背景前，亲和而精炼的造型，柔和侧光，干净塑料与金属材质，电影级暖色调，细节清晰，单主体居中构图，细腻但非照片写实，无手部，无人物，无文字 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no hands people text watermark
- prompt：Pixar-inspired stylized 3D animated prop design, palm-sized matte black rounded rectangular device, one large round button and a row of four small indicator lights on the top face, subtle wear marks on the edges, presented against a clean solid light warm gray background, appealing refined design, soft side lighting, clean plastic and metal materials, cinematic warm colors, crisp details, single centered subject, detailed but not photorealistic, no hands, no people, no text --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no hands people text watermark
- 用途/参数：重拍器主参考；推荐画幅 1:1；灯色顺序蓝、蓝、黄、红锁死由分镜指定，本图默认四格熄灭或中性显示。

## ASSET_002 浅黄色浴巾｜道具主参考（Pixar）

- edit_instruction：后续只编辑折叠形态、褶皱和包裹猫的状态，不改变浅黄色、棉质和柔软厚度。
- 提示：Pixar 风格三维动画电影质感的浅黄色棉质浴巾，自然折叠，柔软圆润边缘，可见清晰的织物纹理，置于干净纯色浅暖灰背景前，亲和而精炼的造型，柔和下午侧光，干净棉质材质，电影级暖色调，单主体居中构图，细腻但非照片写实，无文字 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark
- prompt：Pixar-inspired stylized 3D animated pale yellow cotton bath towel, naturally folded, soft rounded edges, clearly visible fabric texture, presented against a clean solid light warm gray background, appealing refined design, gentle afternoon side light, clean cotton material, cinematic warm colors, single centered subject, detailed but not photorealistic, no text --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark
- 用途/参数：开场拿入、中段移开、结尾松松包裹团团；推荐画幅 1:1。

## ASSET_003 温毛巾｜安全清洁道具（Pixar）

- edit_instruction：后续只编辑铺展角度、阳光高光和推近状态，不改变暖白色、棉质、完全干燥的状态。
- 提示：Pixar 风格三维动画电影质感的暖白色小毛巾，平铺展示，完全干燥，柔软棉质纹理，细微暖色高光，置于干净纯色浅暖灰背景前，亲和而精炼的造型，柔和自然光，干净材质，电影级暖色调，单主体居中构图，细腻但非照片写实，无人物，无动物，无文字 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no people animals text watermark
- prompt：Pixar-inspired stylized 3D animated warm ivory small hand towel, displayed spread flat, completely dry, soft cotton texture with subtle warm highlights, presented against a clean solid light warm gray background, appealing refined design, soft natural light, clean materials, cinematic warm colors, single centered subject, detailed but not photorealistic, no people, no animals, no text --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no people animals text watermark
- 用途/参数：团团自主走上毛巾和擦拭动作的安全终点；推荐画幅 1:1。

## ASSET_004 灰色水盆｜危机道具（Pixar）

- edit_instruction：后续只编辑盆沿移动、轻微倾角和水平波纹，不改变低矮灰色塑料盆、浅水量和静止放置状态。
- 提示：Pixar 风格三维动画电影质感的低矮灰色塑料水盆，盆内有少量温水，水面平静且低于盆口，清晰可见水平水面和圆润盆沿，置于干净纯色浅暖灰背景前，柔和均匀光照，亲和而精炼的造型，干净塑料材质，电影级暖色调，单主体居中构图，细腻但非照片写实，无泼洒，无人物，无文字 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no people text watermark
- prompt：Pixar-inspired stylized 3D animated low gray plastic wash basin, a shallow amount of warm water sitting calmly below the rim, visible flat water surface and rounded rim, presented against a clean solid light warm gray background, soft even lighting, appealing refined design, clean plastic material, cinematic warm colors, single centered subject, detailed but not photorealistic, no splashing, no people, no text --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no people text watermark
- 用途/参数：水盆危机的独立道具参考；推荐画幅 1:1；倾倒动作由分镜拆分，本图不生成完整泼水状态。

## ASSET_005 小鱼干｜数量连续性道具（Pixar）

- edit_instruction：后续只编辑被叼住的角度和碎屑位置，不改变单根鱼干的棕金色、长度、形状和数量。
- 提示：Pixar 风格三维动画电影质感的单根棕金色小鱼干零食，短小干爽，旁边有少量细小碎屑，置于干净纯色浅暖灰背景前，亲和而精炼的造型，柔和光线，干净材质，电影级暖色调，仅此一件，单主体居中构图，细腻但非照片写实，无碗，无额外食物，无文字 --ar 1:1 --v 8.2 --raw --s 45 --c 3 --no extra food text watermark
- prompt：Pixar-inspired stylized 3D animated single golden-brown dried fish snack, short and dry, a few tiny crumbs beside it, presented against a clean solid light warm gray background, appealing refined design, soft lighting, clean materials, cinematic warm colors, only one fish, single centered subject, detailed but not photorealistic, no bowl, no extra food, no text --ar 1:1 --v 8.2 --raw --s 45 --c 3 --no extra food text watermark
- 用途/参数：循环中始终为同一根鱼干，结尾才允许第二根；推荐画幅 1:1。

## ASSET_006 手机支架与拍摄提示灯｜空间道具（Pixar）

- edit_instruction：后续只编辑画面占比、反光强度和机位裁切，不改变黑色直立支架轮廓、小指示灯亮起状态和纯色浅暖灰背景；场景内位置由分镜控制并后期合成。
- 提示：Pixar 风格三维动画电影质感的简洁黑色手机支架，直立站放，支架上有一个亮着的小指示灯，屏幕空白无可读内容，置于干净纯色浅暖灰背景前，柔和均匀布光，亲和而精炼的造型，干净材质，电影级暖色调，单主体居中构图，细腻但非照片写实，无人物，无动物，无文字 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no people animals text watermark
- prompt：Pixar-inspired stylized 3D animated minimal black phone tripod standing upright, one small illuminated indicator light on the stand, blank screen with no readable content, presented against a clean solid light warm gray background, soft even lighting, appealing refined design, clean materials, cinematic warm colors, single centered subject, detailed but not photorealistic, no people, no animals, no text --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no people animals text watermark
- 用途/参数：开场压力锚点；场景内固定位置由分镜控制并后期合成到 ASSET_101 空场景；推荐画幅 1:1；倒计时由后期添加。

## ASSET_103 窗边阳光区｜安全区域（Pixar）

- edit_instruction：后续只编辑阳光面积、阴影软硬和镜头裁切，不改变窗光方向和地面安全区。
- 提示：Pixar 风格三维动画电影质感的客厅窗边地面，一块温暖的下午阳光落在干净地板上，留出一块可铺小毛巾的开阔区域，柔和自然阴影，亲和而精炼的造型，柔和全局光照，干净材质，电影级暖色调，平静安全的氛围，细腻但非照片写实，无人物，无动物，无文字 --ar 16:9 --v 8.2 --raw --s 45 --c 5 --no people animals text watermark
- prompt：Pixar-inspired stylized 3D animated living room floor by a window, one warm patch of afternoon sunlight on the clean floor, an open simple area ready for a small towel, soft natural shadows, appealing refined design, soft global illumination, clean materials, cinematic warm colors, calm safe mood, detailed but not photorealistic, no people, no animals, no text --ar 16:9 --v 8.2 --raw --s 45 --c 5 --no people animals text watermark
- 用途/参数：温毛巾铺放和团团最终接受清洁的场景锚点；推荐画幅 16:9，视频再裁切为 9:16。

## 说明

- ASSET_102 矮柜与储物柜门缝已并入 ASSET_101：矮柜门缝作为主场景后景的一部分在同一张全屋图中生成，不再单独出图；局部机位（钻出门缝特写等）从 ASSET_101 裁切派生。
- ASSET_007 扫地机器人为画外声音元素，不生成图像提示词。
- 角色长期锚点保持不变：团团橘白短毛、左耳深色毛、绿色项圈；小林浅灰/米白上衣、深色长裤、室内拖鞋。
- 道具连续性由分镜控制：重拍器灯色蓝、蓝、黄、红锁死；鱼干不凭空增加；水盆不生成完整倾倒。
- 本文件不输出 reference_images 字段；不生成三视图、四视图或多视角设定板。

## 双语一致性检查

- 每个资产均有 edit_instruction、中文提示、英文 prompt 和用途/参数。
- 中文提示与英文 prompt 的主体、状态、构图、风格锚点、参数和负面约束逐项对应。
- 中文提示末尾参数与英文版本完全一致，均为英文机器指令。
- 全部资产使用统一的 Pixar 风格锚点；全部资产单主体、单视角。
- 参数均位于每条提示词末尾，参数后无正文。
