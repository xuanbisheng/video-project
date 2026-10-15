# MiniMax H3 documentation notes

These notes summarize the official MiniMax Open Platform documentation consulted while creating this skill. Check the linked pages again if exact limits or endpoint behavior matter, because API specifications can change.

## Official sources

- [Video generation guide](https://platform.minimax.cn/docs/guides/video-generation)
- [H3 highlights and prompt examples](https://platform.minimax.cn/docs/guides/video-prompt)
- [Create video generation task API](https://platform.minimax.cn/docs/api-reference/video-generation-v2-create)

## Prompt-relevant behavior

- H3 supports text-to-video, video generation with first and/or last frame images, and multimodal reference generation using images, videos, and audio. The API accepts a `content` array containing one non-empty text item; multimodal items can carry a `role` that identifies their use.
- First/last-frame inputs and multimodal reference inputs are mutually exclusive in one request. Relevant roles are `first_frame`, `last_frame`, `reference_image`, `reference_video`, and `reference_audio`.
- The guide describes H3 as understanding people, actions, sound, emotion, camera, style, and expressive intent. Its examples use connected instructions that establish the creative goal, story/action, asset references, continuity, framing, tone, and sound as appropriate. Examples vary by use case; they do not impose a mandatory prompt template.
- The API prompt text limit is 7,000 characters.
- `MiniMax-H3` supports integer durations from 4 to 15 seconds and resolutions `768P` or `2K`.
- Supported ratios are `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, and `9:16`. Text-to-video requires an explicit non-`adaptive` ratio. For first/last-frame image generation, the ratio follows the input image and is treated as `adaptive`. Multimodal-reference generation may use `adaptive` or an explicit supported ratio.
- For a text prompt to output one generated video, describe the actions as a concise temporal progression. If the source storyboard extends beyond 15 seconds or needs edits between distinct scenes, split it into clips, each no longer than H3's per-request duration limit.

Use these constraints to shape and label prompts; do not expose implementation details unless the user asks for API-ready JSON or code.
