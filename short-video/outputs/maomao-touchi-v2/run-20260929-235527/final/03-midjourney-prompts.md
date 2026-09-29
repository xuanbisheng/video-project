# Midjourney V8.2 资产提示词

## 使用规则

- 版本：Midjourney V8.2
- 每条提示词参数位于末尾；不使用旧版 --oref、Character Reference 或 Omni Reference 方案
- 如需连续性，使用单主体单视角参考图，并配合 V8.2 Edit Model；不要把多角度拼图直接当作 H3 身份参考
- 资产参考图与视频首帧职责分开记录

## CHAR_001 团团

- reference_images：无；首次生成单主体参考
- edit_instruction：后续只编辑左耳临时灰尘、鱼干酱和毛巾状态，不改变毛色、左耳深色毛和绿色项圈
- prompt：A single orange-and-white short-haired domestic cat named Tuantuan, dark fur marking on the left ear, green collar, alert intelligent eyes, compact cat body, three-quarter standing pose on a clean neutral studio floor, realistic short fur, soft window light, warm natural colors, production asset portrait, clear silhouette, no clothing, no extra animals --ar 2:3 --v 8.2 --raw --s 60 --c 6 --no text watermark extra animals

## CHAR_002 小林

- reference_images：无；生成单主体半身参考，允许自然露脸但不做正面证件照
- edit_instruction：后续只编辑手势和镜头裁切，不改变服装色系、室内拖鞋和温和表演气质
- prompt：A young Chinese woman just graduated from university, gentle pet blogger, warm caring expression, small natural partial face reveal, light gray or ivory casual top, dark trousers, simple indoor slippers, relaxed weekend home posture, one hand ready to care for a cat, realistic lifestyle film character reference, soft afternoon window light, neutral low-saturation palette, half-body framing, no exaggerated jewelry --ar 2:3 --v 8.2 --raw --s 55 --c 6 --no text watermark full-body fashion pose

## ASSET_101 客厅

- reference_images：无；生成空间参考图
- edit_instruction：后续保持矮柜、沙发、窗边阳光区、手机支架和水盆的相对位置，仅调整机位裁切
- prompt：Cozy ordinary family living room on a weekend afternoon, low wooden cabinet and storage door gap, sofa on the side, warm sunlight from one window, clear open floor area for a cat, black timer device and gray water basin near a phone tripod by the cabinet, realistic domestic interior, warm natural light, production design reference, stable spatial layout, no people --ar 16:9 --v 8.2 --raw --s 50 --c 5 --no text watermark extra people

## ASSET_102 矮柜与门缝

- prompt：Low wooden storage cabinet with a narrow door gap large enough for a cat to emerge, small black timer device reachable beside the cabinet, ordinary lived-in apartment interior, afternoon window light, realistic wood grain and floor texture, clean production design reference, eye-level medium framing --ar 16:9 --v 8.2 --raw --s 45 --c 5 --no text watermark people

## ASSET_001 重拍器

- prompt：Small black three-second replay timer device, matte black rounded rectangular body, one tactile button, four evenly spaced indicator lights on the top face, subtle use marks, isolated on a neutral warm gray surface, product photography for film continuity, soft side light, precise button and light layout, realistic plastic and metal texture --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark hands

## ASSET_002 浅黄色浴巾

- prompt：Soft pale yellow cotton bath towel, natural folded and slightly rumpled shape, visible woven fibers and rounded edge, isolated on a neutral studio surface, warm household film prop reference, gentle afternoon side light, tactile fabric texture, realistic color --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark text logo

## ASSET_003 温毛巾

- prompt：Clean small warm ivory hand towel spread flat on a sunlit living room floor near a window, soft cotton texture, subtle warm highlight, calm safe pet-care prop, realistic domestic film still, low contrast natural light, no water pooling --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark text logo

## ASSET_004 灰色水盆

- prompt：Low gray plastic wash basin with a shallow amount of warm water, isolated on a living room floor, visible horizontal water surface and soft rim, realistic prop reference, afternoon window reflection, stable shape for controlled slight tilting, no spill, no person --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark hands

## ASSET_005 小鱼干

- prompt：One short golden-brown dried fish snack with a few tiny crumbs, isolated on a warm neutral floor surface, realistic pet treat prop, crisp texture, soft afternoon light, exact single-item continuity reference, no bowl and no extra snacks --ar 1:1 --v 8.2 --raw --s 45 --c 3 --no text watermark extra food

## ASSET_006 手机支架

- prompt：Minimal black phone tripod stand with a small illuminated recording indicator, positioned beside a low wooden cabinet on a living room floor, realistic household filming prop, warm afternoon window light, stable upright silhouette, no readable screen text --ar 1:1 --v 8.2 --raw --s 45 --c 4 --no text watermark readable text

## ASSET_103 窗边阳光区

- prompt：Quiet window-side patch of warm afternoon sunlight on a living room floor, simple neutral mat area ready for a small towel, soft natural shadows, calm safe pet-care atmosphere, realistic domestic film location reference, no people, no animals, no text --ar 16:9 --v 8.2 --raw --s 45 --c 5 --no text watermark people animals
