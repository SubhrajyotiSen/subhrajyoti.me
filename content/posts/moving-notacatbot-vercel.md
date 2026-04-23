+++
categories = []
date = 2026-04-23T20:18:00Z
description = "A story about making NotACatBot more available"
highlight = ""
tags = ["year-in-review"]
title = "Migrating NotACatBot to Vercel Serverless Functions"

+++

About 7 years ago, I created a tiny Telegram bot that lets users get random cat images and facts. Go try it out at [https://t.me/NotACatBot](https://t.me/NotACatBot) and, if you're keen, the sources are available at [https://github.com/SubhrajyotiSen/NotACatBot](https://github.com/SubhrajyotiSen/NotACatBot).

The bot started out as a simple polling script and that would have sufficed. About a month later, I started learning Docker and as an exercise, I decided to create a Docker image of the bot. While you can argue that Docker wasn't the correct tool for the project, I didn't really care at the time. The next obvious step was to get this script off my personal computer and onto the cloud. 

Being a college student, I didn't quite have the money to pay for a server. Thanks to Oracle Cloud's free tier, I was able to low-power VPS to host the bot. There was only one catch - idle VPSs on the free tier are shut down periodically. I am fine with this caveat since I assumed no one would use the bot as often. I was quite wrong!

A few weeks after I moved the bot to the VPS, I received a message from a stranger on Telegram saying the bot was down. Turns out I had mentioned my Telegram username on the bot's bio. And that I had users?! I quickly logged onto the Oracle console and restarted the VPS.

The next time the bot went down, I received messages from 3 strangers. Turns out people loved the bot and had added it to their Telegram groups. I never quite had the motivation to add analytics to the project and I also wanted the project to remain simple. Simple to the extent that the only way I could track the number of users was through a [.txt file](https://github.com/SubhrajyotiSen/NotACatBot/commit/f6c582c07e2682572127843cd2d8b62104f81d52). 

Years went by and I kept restarting the VPS every time it went down. With the advent of LLM-based coding tools, I figured it's time to finally find a decent solution to this issue and also learn something new in the process. After some [Kagi-ing](http://kagi.com/), I learnt of the term 'serverless' and eventually stumbled upon [Vercel Functions](https://vercel.com/docs/functions).

After a bit of prompting and manual debugging, the Vercel-friendly implementation was ready. This was also a good opportunity to update the Python Telegram library that I had been postponing due to breaking changes.

It's been 2 months since the rewrite. The bot is significantly faster and, most importantly, always available.
