# 道具资产库：Midjourney 双语提示词

> 来源：07_final_screenplay.md及角色设定中的道具连续性要求。
> 使用范围：黑色三秒重拍器、浴巾、温毛巾、水盆、小鱼干、手机支架、扫地机器人。
> 目标：先建立道具主参考，再生成状态变体和角色/场景同框尺度图。

## 通用道具规则

- 每个道具同时提供中文审核版和英文 MJ 执行版。
- 道具外观、颜色、材质、数量和尺寸比例在所有镜头中保持一致。
- 文字、Logo、倒计时、字幕和包装信息后期完成；MJ 只生成无文字或不可读文字的外观。
- 道具主参考优先使用 --ar 1:1；同框或剧情状态使用 --ar 9:16。
- 黑色重拍器的灯色变化按蓝、蓝、黄、红锁死、熄灭处理；锁死后永远不再亮起。

## 1. 黑色三秒重拍器

### 中文正向提示词

紧凑的黑色磨砂三秒重拍器，掌心大小的圆角矩形机身，一个可触按顶部按钮，四个小型指示灯整齐排列，边缘有轻微模塑细节，真实消费电子材质，正面三分之四视图和顶部视图，浅灰中性背景上的独立产品参考图，柔和棚拍光线，无品牌、无可读标签，适合作为影视道具设计。

### English MJ prompt

compact matte-black three-second replay device, palm-sized rounded rectangular body, one tactile top button, four small indicator lights arranged in a clear row, subtle molded edges, realistic consumer electronics material, front three-quarter view and top view, isolated product reference on a neutral light-gray background, soft studio light, no brand, no readable labels, production prop design

### 中文负面约束

不要未来科幻设备、屏幕文字、品牌 Logo、额外按钮、透明塑料、金色金属、过大尺寸、手、猫或水印。

### English negative prompt and parameters

--no futuristic sci-fi gadget, screen text, brand logo, extra buttons, transparent plastic, metallic gold, oversized device, hand, cat, watermark --ar 1:1 --stylize 50

### 状态模板 / State template

中文：保持同一黑色磨砂重拍器、同一机身和按钮位置、四个指示灯位置不变，[LIGHT_STATE_CN]，独立产品连续性参考图，中性背景，真实柔和光线，无可读文字。

English: [PROP_REFERENCE_IMAGE_URL] same matte-black replay device, four indicator lights in the same positions, [LIGHT_STATE_EN], isolated product continuity reference, identical body shape and button placement, neutral background, realistic soft light, no readable text

状态对照 / State pairs：

- 中文：第一格蓝灯亮，其余灯熄灭。
  English: first blue light on, remaining lights off
- 中文：第二格蓝灯亮，第一格熄灭，其余灯熄灭。
  English: second blue light on, first light off, remaining lights off
- 中文：第三格指示灯由蓝色转为黄色，前面灯熄灭。
  English: third indicator changing from blue to yellow, previous lights off
- 中文：最后一格红灯常亮，设备锁死，其余灯熄灭。
  English: last indicator solid red, device locked, all other lights off
- 中文：四格灯短暂同时闪红，随后设备完全熄灭。
  English: all four lights briefly red, then completely powered off

状态负面约束 / State negative prompt：

中文：不要改变机身、灯数量或按钮位置，不要彩虹灯、可读文字、Logo、额外按钮、重复设备或水印。

English: --no changed body, changed light count, rainbow lights, readable text, logo, extra button, duplicate device, watermark --ar 1:1 --stylize 40

## 2. 浅黄色浴巾与温毛巾

### 浴巾 / Bath towel

中文：一条浅黄色棉质浴巾，中等厚度毛圈织物，柔软折叠边缘，实用家用尺寸，独立纺织品产品参考图，三分之四折叠视图和松散展开视图，浅灰中性背景，柔和自然光，无图案、无文字、无 Logo。

English: single pale-yellow cotton bath towel, medium-thick terry texture, soft folded edges, practical home-use size, isolated textile product reference, front three-quarter folded view and loosely unfolded view, neutral light-gray background, soft natural light, no pattern, no text, no logo

中文负面约束：不要图案、条纹、刺绣、文字、Logo、多条浴巾、滴水湿布或水印。

English negative prompt: --no patterned towel, stripes, embroidery, text, logo, multiple towels, wet dripping fabric, watermark --ar 1:1 --stylize 45

### 温毛巾 / Warm hand towel

中文：一条暖象牙色棉质小毛巾，比浅黄色浴巾更小，柔软并带有晒过阳光的温暖感，简单折叠和松散铺开视图，独立纺织品产品参考图，中性背景，柔和窗边光线，无图案、无文字、无 Logo。

English: single warm ivory cotton hand towel, smaller than the pale-yellow bath towel, visibly soft and slightly warm from sunlight, simple folded and loosely spread views, isolated textile product reference, neutral background, gentle window light, no pattern, no text, no logo

中文负面约束：不要变成浅黄色浴巾颜色，不要图案、多条毛巾、浸水、滴水湿布、文字、Logo 或水印。

English negative prompt: --no pale-yellow bath towel color, patterned fabric, multiple towels, soaking water, dripping wet towel, text, logo, watermark --ar 1:1 --stylize 45

## 3. 灰色水盆

### 中文正向提示词

浅灰色磨砂家用水盆，低矮宽盆沿，稳定圆润底座，真实塑料表面，空盆且安全的产品参考图，正面三分之四视图和顶部视图，中性背景，柔和日光，轮廓清晰，无品牌、无文字。

### English MJ prompt

shallow matte-gray household water basin, low wide rim, stable rounded base, realistic plastic surface, empty and safe product reference, front three-quarter view and top view, neutral background, soft daylight, clear readable silhouette, no brand, no text

### 中文负面约束

不要金属碗、深桶、尖锐盆沿、破裂塑料、溢水、大量飞溅、Logo、文字或水印。

### English negative prompt and parameters

--no metal bowl, deep bucket, sharp rim, cracked plastic, overflowing water, splashing water, logo, text, watermark --ar 1:1 --stylize 45

### 倾斜状态 / Tilt state

中文：[PROP_REFERENCE_IMAGE_URL] 同一只浅灰色磨砂家用水盆，放在客厅地板上并轻微倾斜，水面明显晃动但没有溢出，受控的动作参考，比例真实，不生成完整液体倾倒，不出现危险或受伤。

English: [PROP_REFERENCE_IMAGE_URL] same shallow matte-gray household water basin, basin rim slightly tilted on a living-room floor, water surface visibly wobbling but not spilling, controlled practical action reference, realistic scale, no complete liquid pour, no danger or injury

中文负面约束：不要翻倒水盆、洪水、大飞溅、受伤动物、损坏手机支架、文字、Logo 或水印。

English negative prompt and parameters: --no overturned basin, flood, large splash, injured animal, broken phone stand, text, logo, watermark --ar 9:16 --stylize 55

## 4. 小鱼干 / Dried fish treat

中文：一根单独的小型金棕色鱼干，天然略不规则形状，干燥纹理表面，独立食品道具参考图，尺寸适合猫叼走，柔和真实光线，无包装、无文字。

English: one single small golden-brown dried fish treat, slightly irregular natural shape, dry textured surface, isolated food prop reference on a neutral background, consistent size for a cat carrying it, soft realistic light, no package, no text

中文负面约束：不要鱼干堆、额外鱼干、巨型鱼、新鲜生鱼、包装、文字、Logo 或水印。

English negative prompt and parameters: --no pile of fish, extra treats, giant fish, fresh raw fish, package, text, logo, watermark --ar 1:1 --stylize 40

## 5. 手机支架 / Smartphone tripod

中文：简洁黑色磨砂手机三脚支架，紧凑的家庭拍摄配件，稳定三脚底座，中性手机夹，不显示手机屏幕内容，独立产品参考图，柔和棚拍光线，无品牌、无文字。

English: simple matte-black smartphone tripod stand, compact home filming accessory, stable three-legged base, neutral phone holder, no visible phone screen content, isolated product reference, soft studio light, no brand, no text

中文负面约束：不要镜头特写、可读屏幕、品牌 Logo、额外支腿、不稳定悬浮支架、文字或水印。

English negative prompt and parameters: --no camera lens close-up, readable screen, brand logo, extra legs, unstable floating stand, text, watermark --ar 1:1 --stylize 40

## 6. 扫地机器人 / Robot vacuum

中文：安静的低矮家用扫地机器人，中性炭灰和白色圆形机身，低调传感器凸起，真实消费电器，独立产品参考图，无品牌、无可读文字，柔和居家光线。

English: quiet low-profile household robot vacuum, simple neutral charcoal-and-white circular body, subtle sensor bump, realistic consumer appliance, isolated product reference, no visible brand, no readable text, soft home lighting

中文负面约束：不要人形机器人、未来机械、吸尘软管、攻击性设计、品牌 Logo、文字或水印。

English negative prompt and parameters: --no humanoid robot, futuristic machine, vacuum hose, aggressive design, brand logo, text, watermark --ar 1:1 --stylize 50

## 7. 道具同框尺度参考 / Prop scale board

中文：同一只黑色磨砂重拍器、浅黄色浴巾、暖象牙色温毛巾、浅灰色水盆、一根小鱼干和简洁黑色手机支架，整齐放置在矮柜附近的客厅地面，实际可用的比例关系，无可读文字，道具尺度板。

English: same matte-black replay device beside one pale-yellow bath towel, one warm ivory hand towel, one shallow matte-gray water basin, one single dried fish and a simple black smartphone tripod, organized on a realistic living-room floor near a low cabinet, consistent practical scale, no readable text, production asset scale board

中文负面约束：不要额外鱼干、重复毛巾、颜色变化、漂浮物件、文字、Logo 或水印。

English negative prompt and parameters: --no extra fish, duplicate towels, changed colors, floating objects, text, logo, watermark --ar 4:3 --stylize 55

