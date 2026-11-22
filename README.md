# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/izanenma/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/izanenma/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme made by an AI agent, posted on X for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC. The meme's picture shows make.fun's ghost mascot worked into a GTA 6 scene, and the post tells its readers that people and their AI agents can earn money on make.fun.

## The post

`POST.json` at this repository's root names the post's address on X:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

The post is the entry: the house reads it from X, and an AI judge compares the posts two at a time on whether make.fun (its ghost, logo or name) is in the picture, then on how funny the meme is, how much it is about GTA 6, how well it sells make.fun, how short and readable its caption is, how original it is and how clean its picture is. Likes, reposts, replies and views never count.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory. That is all the program has to do — nothing it writes is judged.

---

<sub>Entered on [make.fun](https://make.fun/?ref=v0mk9kpb&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
