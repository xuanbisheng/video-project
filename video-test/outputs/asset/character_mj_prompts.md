# 角色资产库：Midjourney 双语提示词

> 来源：outputs/character_concept_design_proposal.md、07_final_screenplay.md
> 使用范围：团团与小林的角色主参考、动作变体和状态变体。
> 当前状态：提示词草案。团团眼睛颜色、小林鞋袜和最终风格仍需审核。

## 使用规则

- 先生成全身多视图主参考，再生成剧情动作图；局部镜头只能从主参考派生。
- 每个提示词均提供中文审核版和英文 MJ 执行版，两版必须逐项对应。
- 参考图 URL、变量名和 Midjourney 参数保持原样，不翻译参数标记。
- 临时默认值：团团黄绿色眼睛；小林浅色室内拖鞋。审核后统一替换。
- 字幕、手机倒计时、设备文字和包装文字交给后期，不依赖 MJ 生成可读文字。

## 1. 团团：全身主参考

### 固定锚点

- 成年橘白短毛家猫，略圆润但敏捷。
- 左耳明显深橘/棕橘色毛斑。
- 低饱和绿色窄项圈和小型金属牌。
- 真实猫科头身比，短而有力的四肢，尾巴比例稳定。
- 临时默认：黄绿色眼睛。

### 中文正向提示词

写实比例的成年橘白短毛家猫，身体略圆润但动作敏捷，奶油白色胸口和口鼻，左耳保留明显深橘棕色深色毛斑，佩戴低饱和绿色窄项圈和小型金属牌，黄绿色眼睛，自然且略有生活感的短毛，可信的猫科解剖比例，全身角色设定板，正面、左侧面、背面、四分之三视图，四爪和尾巴完整可见，所有视图花纹和体型一致，中性站姿，浅灰色简洁背景，柔和均匀光线，无道具，不裁切头部和脚爪。

### English MJ prompt

realistic adult orange-and-white domestic shorthair cat, slightly round but agile body, cream-white chest and muzzle, distinct dark orange-brown patch on the left ear, low-saturation green narrow collar with a tiny metal tag, yellow-green eyes, natural short fur with a slightly lived-in texture, believable feline anatomy, full-body character reference sheet, front view, left side view, back view, three-quarter view, all paws and tail fully visible, consistent markings and proportions across every view, neutral standing pose, clean light-gray studio background, soft even light, production design reference, no props, no cropped head or paws

### 中文负面约束

不要卡通大头比例，不要拟人化身体，不要变成其他猫种，不要丢失左耳深色毛斑，不要改变项圈颜色，不要增加项圈或夸张铃铛，不要多肢体、重复尾巴或缺失爪子，不要攻击姿势、湿身、溺水、恐惧表情，不要文字、Logo、水印。

### English negative prompt and parameters

--no cartoon big head, anthropomorphic body, different cat breed, missing left-ear marking, changed collar color, extra collar, oversized bell, extra limbs, duplicate tail, missing paws, aggressive pose, wet cat, drowning, fear, text, logo, watermark --ar 2:3 --stylize 80

## 2. 团团：开场脏污状态

### 中文正向提示词

[CHARACTER_REFERENCE_IMAGE_URL] 同一只写实比例橘白短毛猫团团，保持相同体型、左耳深色毛斑、绿色项圈和黄绿色眼睛，全身入画，站在矮柜旁，只有左耳沾少量灰尘，嘴边挂着半截小鱼干，爪边有一点鱼干酱，神情警惕又带一点得意，周末下午客厅暖光，毛发和脚底接触真实，竖屏构图，角色连续性参考图。

### English MJ prompt

[CHARACTER_REFERENCE_IMAGE_URL] same realistic orange-and-white domestic shorthair cat Tuan Tuan, same body proportions, same dark orange-brown left-ear marking, same green collar and yellow-green eyes, full body, standing beside a low storage cabinet, a small amount of dust only on the left ear, a short piece of dried fish at the mouth, a tiny smear of fish sauce on the paw edge, alert but self-satisfied expression, warm weekend afternoon living-room light, realistic fur and floor contact, vertical composition, production continuity reference

### 中文负面约束

不要改变毛色和花纹，不要全身脏污，不要凭空增加鱼干，不要改变项圈，不要卡通化，不要惊吓、惩罚、浸水或溺水，不要裁掉脚爪，不要文字、Logo、水印。

### English negative prompt and parameters

--no changed fur pattern, excessive dirt, dirty whole body, extra food, different collar, cartoon style, frightened animal, punishment, bathing in water, drowning, cropped paws, text, logo, watermark --ar 9:16 --stylize 70

## 3. 团团：剧情动作模板

### 中文模板

[CHARACTER_REFERENCE_IMAGE_URL] 同一只团团，保持橘白短毛、左耳深色毛斑、绿色项圈和黄绿色眼睛，全身入画，[ACTION_CN]，动作语言清楚，爪子和尾巴自然，客厅尺度一致，周末下午暖光，角色身份稳定，竖屏制作参考图。

### English template

[CHARACTER_REFERENCE_IMAGE_URL] same realistic orange-and-white cat Tuan Tuan, same dark left-ear marking, same green collar, same yellow-green eyes, full body, [ACTION_EN], readable body language, natural paws and tail, consistent domestic living-room scale, warm afternoon light, stable visual identity, vertical production still

### 动作对照 / Action pairs

- 中文：蜷在沙发上假装晒太阳，只睁一只眼看向浅黄色浴巾。
  English: curled tightly on a sofa pretending to sunbathe, one eye open toward a pale-yellow towel
- 中文：耳朵压平，身体向后退，后爪碰到黑色重拍器。
  English: ears flattened, body moving backward, rear paw touching a small black replay device
- 中文：抬起一只前爪按下黑色重拍器顶部按钮，谨慎而坚定。
  English: one front paw pressing the top button of the black replay device, cautious determined expression
- 中文：冲向地面上唯一的一根小鱼干，途中回头看小林。
  English: sprinting toward one single dried fish on the floor, looking back at the owner
- 中文：一只前爪停在半空，在温毛巾和重拍器之间犹豫。
  English: frozen with one paw raised, looking between the warm towel and the replay device
- 中文：没有被抓取，自主走上温毛巾，身体逐渐压低。
  English: walking voluntarily onto a warm towel, lowering the body without being grabbed
- 中文：被毛巾松松包住，叼着一根小鱼干离开，尾巴尖弯向重拍器。
  English: loosely wrapped in a towel, carrying one dried fish away with the tail tip curved toward the replay device

### 双语负面约束与参数

中文：不要身份漂移、项圈变化、左耳花纹变化、额外鱼干、重复设备、额外肢体、变形爪子、强行控制、浸水洗澡、湿毛、恐惧表情、文字、Logo、水印。

English: --no identity drift, changed collar, changed left-ear marking, extra fish, duplicate device, extra limbs, deformed paws, forced restraint, bathing in water, wet fur, fear, text, logo, watermark --ar 9:16 --stylize 70

## 4. 小林：全身主参考

### 固定锚点

- 临时默认：约 30 岁、普通都市居家男性、自然黑色短发。
- 略瘦但自然的成年体型，清爽、亲切、克制。
- 浅灰棉质居家短袖、深灰直筒家居长裤。
- 临时默认：浅色室内拖鞋；如审核改为素色短袜，所有提示词统一替换。
- 不使用制服、品牌、复杂图案或偶像化造型。

### 中文正向提示词

约 30 岁的普通都市居家男性，自然黑色短发，发型略有居家凌乱感，清爽亲切的克制表情，略瘦但自然的成年体型，浅灰棉质居家短袖，深灰直筒家居长裤，浅色室内拖鞋，完整全身角色设定板，正面、侧面、背面、四分之三视图，双手和双脚完整可见，中性站姿，无道具，浅灰色简洁背景，柔和均匀光线，生活化写实风格，所有视图服装和人物身份一致。

### English MJ prompt

ordinary Asian homebody man around 30, natural short black hair with a slight lived-in texture, calm kind face, restrained gentle expression, naturally slim adult proportions, light gray cotton home T-shirt, straight dark charcoal lounge pants, light neutral indoor slippers, complete full-body character reference sheet, front view, side view, back view, three-quarter view, hands and feet fully visible, neutral standing pose, no props, clean light-gray studio background, soft even light, grounded domestic realism, consistent clothing and identity across every view

### 中文负面约束

不要时尚模特脸、明星脸、制服、西装、品牌标志、复杂图案或多余首饰，不要改变发型、裤子和鞋袜，不要缺失手指、额外肢体、裁掉头部或脚部，不要文字、Logo、水印。

### English negative prompt and parameters

--no fashion model face, celebrity likeness, uniform, suit, brand logo, busy pattern, jewelry, changing hairstyle, changing pants, changing footwear, missing fingers, extra limbs, cropped head, cropped feet, text, logo, watermark --ar 2:3 --stylize 60

## 5. 小林：剧情动作模板

### 中文模板

[CHARACTER_REFERENCE_IMAGE_URL] 同一位小林，保持自然黑色短发、浅灰居家短袖、深灰家居长裤和浅色室内拖鞋，全身入画，[ACTION_CN]，身体语言平静、可预测，周末下午客厅柔和光线，手脚真实，竖屏制作参考图，人物身份一致。

### English template

[CHARACTER_REFERENCE_IMAGE_URL] same ordinary Asian homebody man, same short black hair, same light gray home T-shirt, same dark charcoal lounge pants, same light neutral indoor slippers, full body, [ACTION_EN], calm predictable body language, soft weekend afternoon living-room light, realistic hands and feet, vertical production still, consistent character identity

### 动作对照 / Action pairs

- 中文：拿着浅黄色浴巾进入客厅，身体朝向猫但不追赶。
  English: entering the living room carrying a small pale-yellow towel, body angled toward the cat but not chasing
- 中文：蹲在黑色重拍器旁，一只手停在设备边缘。
  English: crouching beside the black replay device, one hand resting near its edge
- 中文：伸手触碰猫之前停住，掌心可见，肩膀放松。
  English: stopping his hand before touching the cat, open palm visible, shoulders relaxed
- 中文：坐得更远，双手放在膝盖上，给猫留出空间。
  English: sitting farther away with both hands on his knees, giving the cat space
- 中文：不伸手抓猫，只把温毛巾轻轻推向猫。
  English: gently pushing a warm towel toward the cat without reaching for the cat
- 中文：用放松的手掌递出一根小鱼干。
  English: offering one dried fish with an open relaxed hand
- 中文：猫把头放在膝盖上时保持不动，轻轻挠猫的一只耳朵。
  English: sitting still while the cat rests its head on his knee, gently scratching behind one ear

### 双语负面约束与参数

中文：不要抓猫、追猫、威胁姿势、夸张喜剧脸、换装、换鞋、缺失手指、额外肢体、裁掉脚部、文字、Logo、水印。

English: --no grabbing cat, chasing cat, threatening pose, exaggerated comedy face, costume change, shoe change, missing fingers, extra limbs, cropped feet, text, logo, watermark --ar 9:16 --stylize 60

## 6. 角色审核锁定项

- 团团眼睛：黄绿色是否确认。
- 小林鞋袜：浅色室内拖鞋或素色短袜，必须二选一。
- 小林全身基准：是否露脸，以及最终年龄感觉。
- 整体风格：生活化写实喜剧或轻微动画化。

