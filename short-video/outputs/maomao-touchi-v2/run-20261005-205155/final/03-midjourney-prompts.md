# Midjourney V8.2 资产库提示词（双语修订版）

## 使用规则

- 版本：Midjourney V8.2
- 本文件每个资产均按 edit_instruction、中文提示、英文 prompt、用途/参数输出。
- 不输出 reference_images 字段；如需后续调整，只通过 edit_instruction 说明可编辑状态和不可改变的锁定项。
- 中文提示用于审核语义；英文 prompt 用于直接复制到 Midjourney。
- 中文与英文必须保持主体、状态、构图、参数和负面约束对应。
- 参数和负面约束放在每条提示词末尾；不使用旧版 --oref、Character Reference 或 Omni Reference 写法。

## CHAR_001 团团｜角色主参考

- edit_instruction：后续只编辑左耳临时灰尘、鱼干酱、嘴边鱼干和毛巾状态，不改变橙白毛色、左耳深色毛发标记、绿色项圈、猫体型和真实短毛质感。
- 提示：一只名为“团团”的橙白相间短毛家猫，左耳有深色毛发标记，佩戴绿色项圈，眼神警觉聪慧，体型紧凑，以四分之三侧面站立姿势位于干净中性色调的影棚地板上，毛发真实细腻，柔和的窗边光线，温暖自然的色彩，用于制作素材的肖像，轮廓清晰，无衣物，无其他动物 --ar 2:3 --v 8.2 --raw --s 60 --c 6 --无文字水印 无额外动物
- prompt：A single orange-and-white short-haired domestic cat named Tuantuan, dark fur marking on the left ear, green collar, alert intelligent eyes, compact cat body, three-quarter standing pose on a clean neutral studio floor, realistic short fur, soft window light, warm natural colors, production asset portrait, clear silhouette, no clothing, no extra animals --ar 2:3 --v 8.2 --raw --s 60 --c 6 --no text watermark extra animals
- 用途/参数：角色连续性主参考；推荐画幅 2:3；保持单主体、清晰轮廓和真实家猫比例。

## CHAR_002 小林｜角色全身主参考

- edit_instruction：后续只编辑手势、镜头裁切和少部分露脸程度，不改变大学刚毕业的年轻感、萌宠博主身份、浅灰或米白上衣、深色长裤、浅色室内拖鞋、温柔有爱心的表演气质。
- 提示：一位大学刚毕业的年轻中国女性萌宠博主，小林，温柔有爱心，亲切自然的表情，允许少部分自然露脸，穿浅灰或米白色居家上衣、深色长裤和浅色室内拖鞋，完整全身站立，双手自然垂放，普通周末居家姿态，真实生活电影角色设定，柔和的下午窗边光线，低饱和中性色彩，头到脚完整入画，背景简洁，无夸张首饰，无复杂图案，无文字水印 --ar 2:3 --v 8.2 --raw --s 55 --c 6 --无文字水印 无完整正面时尚摆拍
- prompt：A young Chinese woman just graduated from university, Xiaolin, a gentle caring pet blogger, warm natural expression, small natural partial face reveal, light gray or ivory casual home top, dark trousers, light indoor slippers, full-body standing character reference, hands relaxed at her sides, ordinary weekend home posture, realistic lifestyle film character design, soft afternoon window light, low-saturation neutral palette, head-to-toe framing, simple background, no exaggerated jewelry, no complex patterns, no text watermark --ar 2:3 --v 8.2 --raw --s 55 --c 6 --no text watermark full frontal fashion pose
- 用途/参数：小林全身角色基准；推荐画幅 2:3；后续局部镜头从此服装、体型和鞋型派生。

## ASSET_101 客厅｜主场景

- edit_instruction：后续只编辑机位裁切、前景虚化和阳光面积，不改变矮柜、沙发、储物柜门缝、窗边阳光区、手机支架、灰色水盆的相对位置。
- 提示：周末下午普通家庭客厅，后景有低矮木质矮柜和储物柜门缝，侧面有沙发，窗边洒入温暖阳光，地面留出猫的活动区域，黑色三秒重拍器、灰色水盆和手机支架靠近矮柜，写实室内场景资产参考，温暖自然光，生活化材质，空间布局稳定，无人物，无文字水印 --ar 16:9 --v 8.2 --raw --s 50 --c 5 --无文字水印 无额外人物
- prompt：Cozy ordinary family living room on a weekend afternoon, low wooden cabinet and storage door gap in the background, sofa on the side, warm sunlight from one window, clear open floor area for a cat, black three-second replay timer, gray water basin and phone tripod near the cabinet, realistic domestic interior, warm natural light, lived-in materials, stable spatial layout, no people, no text watermark --ar 16:9 --v 8.2 --raw --s 50 --c 5 --no text watermark extra people
- 用途/参数：主场景空间连续性；推荐画幅 16:9，视频构图再裁切为 9:16；锁定家具和道具关系。

## ASSET_102 矮柜与储物柜门缝｜入口区域

- edit_instruction：后续只编辑门缝阴影、灰尘可见度和镜头裁切，不改变矮柜高度、木纹、门缝宽度及黑色重拍器的相邻位置。
- 提示：低矮木质储物柜，柜门留有足够一只猫钻出的窄门缝，黑色三秒重拍器放在柜旁猫爪可触的位置，普通居家室内，下午窗边光线，真实木纹和地板材质，写实电影美术资产参考，平视中景，无人物，无文字水印 --ar 16:9 --v 8.2 --raw --s 45 --c 5 --无文字水印 无人物
- prompt：Low wooden storage cabinet with a narrow door gap large enough for a cat to emerge, small black three-second replay timer reachable beside the cabinet, ordinary lived-in apartment interior, afternoon window light, realistic wood grain and floor texture, cinematic production design reference, eye-level medium framing, no people, no text watermark --ar 16:9 --v 8.2 --raw --s 45 --c 5 --no text watermark people
- 用途/参数：团团开场钻出和回溯归位的空间锚点；推荐画幅 16:9。

## ASSET_001 黑色三秒重拍器｜道具主参考

- edit_instruction：后续只编辑灯光状态、猫爪或手掌接触角度，不改变黑色圆角外壳、单个按键、四格指示灯位置和设备尺度。
- 提示：小型黑色三秒重拍器，哑光黑色圆角矩形外壳，顶部有一个可触按键和四个均匀排列的指示灯，轻微使用痕迹，置于中性暖灰色影棚表面，电影连续性道具产品摄影，柔和侧光，按键和灯位清晰，真实塑料与金属材质，无手，无人物，无文字水印 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --无文字水印 无手部
- prompt：Small black three-second replay timer device, matte black rounded rectangular body, one tactile button and four evenly spaced indicator lights on the top face, subtle use marks, isolated on a neutral warm gray studio surface, film continuity prop product photography, soft side light, precise button and light layout, realistic plastic and metal texture, no hands, no people, no text watermark --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark hands people
- 用途/参数：道具主参考；推荐画幅 1:1；灯色状态另由分镜指定为蓝、蓝、黄、红锁死、熄灭。

## ASSET_002 浅黄色浴巾｜道具主参考

- edit_instruction：后续只编辑折叠形态、褶皱、被推到画外或松松包裹猫的状态，不改变浅黄色、棉质、柔软厚度和边缘轮廓。
- 提示：柔软的浅黄色棉质浴巾，自然折叠并带有轻微褶皱，清晰可见织物纤维和圆润边缘，置于中性影棚表面，温暖家庭电影道具参考，柔和下午侧光，触感真实，颜色稳定，无文字水印，无品牌标志 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --无文字水印 无品牌标志
- prompt：Soft pale yellow cotton bath towel, naturally folded with slight rumples, visible woven fibers and rounded edge, isolated on a neutral studio surface, warm household film prop reference, gentle afternoon side light, tactile realistic fabric texture, stable color, no text watermark, no brand logo --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark brand logo
- 用途/参数：开场拿入、中段移开、结尾松松包裹团团；推荐画幅 1:1。

## ASSET_003 温毛巾｜安全清洁道具

- edit_instruction：后续只编辑铺展角度、阳光高光、推近距离和擦拭状态，不改变干净暖白色、棉质、柔软和不积水的状态。
- 提示：干净的暖白色小毛巾，平铺在窗边客厅地面的一块下午阳光中，柔软棉质纹理，细微暖色高光，安全平静的宠物照护道具，写实家庭电影画面，低反差自然光，不积水，无文字水印，无人物 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --无文字水印 无积水 无人物
- prompt：Clean small warm ivory hand towel spread flat on a sunlit living room floor near a window, soft cotton texture, subtle warm highlight, calm safe pet-care prop, realistic domestic film still, low-contrast natural light, no water pooling, no text watermark, no people --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark water pooling people
- 用途/参数：团团自主走上毛巾和擦拭动作的安全终点；推荐画幅 1:1。

## ASSET_004 灰色水盆｜危机道具

- edit_instruction：后续只编辑盆沿移动、轻微倾角、水平水波和地面反光，不改变低矮灰色塑料盆、浅水量和不完整倾倒的安全状态。
- 提示：低矮灰色塑料水盆，盆内只有少量温水，置于客厅地面，清晰可见水平水面和柔和盆沿，写实道具资产参考，下午窗边反光，适合轻微受控倾斜，无完整泼水，无人物，无文字水印 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --无文字水印 无完整倾倒 无人物
- prompt：Low gray plastic wash basin with a shallow amount of warm water, placed on a living room floor, visible horizontal water surface and soft rim, realistic prop asset reference, afternoon window reflection, suitable for controlled slight movement, no complete spill, no people, no text watermark --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark complete spill people
- 用途/参数：水盆危机的独立道具参考；推荐画幅 1:1；动作由盆沿移动、水平晃动和后期长滴声拆分完成。

## ASSET_005 小鱼干｜数量连续性道具

- edit_instruction：后续只编辑被猫叼住的角度、少量碎屑位置和结尾第二根鱼干的出现，不改变单根主鱼干的棕金色、长度、形状和数量因果。
- 提示：一根短小的棕金色干鱼零食，带有少量细小碎屑，单独置于暖灰色地面表面，真实宠物零食道具，纹理清晰，柔和下午光线，严格的单件连续性参考，无碗，无额外零食，无文字水印 --ar 1:1 --v 8.2 --raw --s 45 --c 3 --无文字水印 无额外食物
- prompt：One short golden-brown dried fish snack with a few tiny crumbs, isolated on a warm neutral floor surface, realistic pet treat prop, crisp texture, soft afternoon light, exact single-item continuity reference, no bowl, no extra snacks, no text watermark --ar 1:1 --v 8.2 --raw --s 45 --c 3 --no text watermark extra food
- 用途/参数：循环中始终为同一根鱼干；结尾才允许出现第二根；推荐画幅 1:1。

## ASSET_006 手机支架与拍摄提示灯｜空间道具

- edit_instruction：后续只编辑画面占比、反光强度和机位裁切，不改变黑色支架的直立轮廓、靠近矮柜的位置和持续亮起的拍摄提示灯。
- 提示：简洁黑色手机支架，带有小型亮起的拍摄提示灯，直立放置在客厅地面并靠近低矮木柜，真实家庭拍摄道具，温暖下午窗边光线，稳定轮廓，不生成可读屏幕文字，无文字水印 --ar 1:1 --v 8.2 --raw --s 45 --c 4 --无文字水印 无可读文字
- prompt：Minimal black phone tripod stand with a small illuminated recording indicator, standing beside a low wooden cabinet on a living room floor, realistic household filming prop, warm afternoon window light, stable upright silhouette, no readable screen text, no text watermark --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark readable text
- 用途/参数：开场压力锚点和固定空间关系；推荐画幅 1:1；倒计时由后期添加。

## ASSET_103 窗边阳光区｜安全区域

- edit_instruction：后续只编辑阳光面积、阴影软硬和镜头裁切，不改变窗光方向、地面材质和可铺放温毛巾的安全区域。
- 提示：客厅窗边一块安静的下午暖阳落在地面上，简单中性色地垫区域可铺放小毛巾，柔和自然阴影，平静安全的宠物照护氛围，写实家庭电影场景参考，无人物，无动物，无文字水印 --ar 16:9 --v 8.2 --raw --s 45 --c 5 --无文字水印 无人物 无动物
- prompt：Quiet window-side patch of warm afternoon sunlight on a living room floor, simple neutral mat area ready for a small towel, soft natural shadows, calm safe pet-care atmosphere, realistic domestic film location reference, no people, no animals, no text watermark --ar 16:9 --v 8.2 --raw --s 45 --c 5 --no text watermark people animals
- 用途/参数：温毛巾铺放和团团最终接受清洁的场景锚点；推荐画幅 16:9，视频再裁切为 9:16。

## 双语一致性检查

- 每个资产均有 edit_instruction、提示和 prompt。
- 中文提示与英文 prompt 的主体、状态、构图、参数和负面约束逐项对应。
- 本文件不输出 reference_images 字段。
- 角色长期锚点：团团橙白短毛、左耳深色毛、绿色项圈；小林浅灰/米白上衣、深色长裤、室内拖鞋、少部分露脸。
- 道具连续性：重拍器灯色蓝、蓝、黄、红锁死；鱼干不凭空增加；水盆不生成完整倾倒。
