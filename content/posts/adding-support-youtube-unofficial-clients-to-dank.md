+++
categories = []
date = 2019-04-22T18:30:00Z
description = ""
highlight = ""
tags = []
title = "Adding support YouTube unofficial clients to Dank"

+++
Dank is the most Reddit client there is. If you aren’t aware of its awesome-ness yet, go \[read about it\]([https://saket.me/dank/](https://saket.me/dank/ "https://saket.me/dank/")) right now. And the best part is that it’s Open Source, which is also the reason this post exists.

When the user clicks on any URL, one of the things Dank does is to determine if the URL is a YouTube URL. If it is one, Dank tries to open it in the YouTube app if it is installed. If the YouTube is not present on the user’s device, it opens it as a regular link. 

Here comes the issue. Checking just the presence of the installed app is not sufficient. Here is why:

On non-rooted Android devices, the user does not get an option to uninstall system apps. YouTube comes as a system app on most devices. But the user does get an option to disable it.

If an app is disabled, the package is still installed but is unavailable for any functionality. Any Intent that tries to use this package will fail. 

In my case, I had disabled the YouTube app (more on that later). So when I clicked on any YouTube link in Dank, Dank noticed that I have the YouTube app installed and tried to open in the Link using it. But this failed with a Toast message. 

![](https://www.evernote.com/shard/s275/res/e070cfb7-dbf1-401b-979e-70cdb3c8ae7a)

Let’s dig into some code

A quick search for the string “youtube” in the codebase lead me to the \`findAllowedPackageNameForDeepLink\` in the\[UrlRouter\]([https://github.com/saket/Dank/blob/39beb5bdd01bb7e1203847be4b2dde5c2fb192fc/app/src/main/java/me/saket/dank/ui/UrlRouter.java#L220](https://github.com/saket/Dank/blob/39beb5bdd01bb7e1203847be4b2dde5c2fb192fc/app/src/main/java/me/saket/dank/ui/UrlRouter.java#L220 "https://github.com/saket/Dank/blob/39beb5bdd01bb7e1203847be4b2dde5c2fb192fc/app/src/main/java/me/saket/dank/ui/UrlRouter.java#L220")) class.

This method is invoked from the \`intent\` function \[here\]([https://github.com/saket/Dank/blob/39beb5bdd01bb7e1203847be4b2dde5c2fb192fc/app/src/main/java/me/saket/dank/ui/UrlRouter.java#L102](https://github.com/saket/Dank/blob/39beb5bdd01bb7e1203847be4b2dde5c2fb192fc/app/src/main/java/me/saket/dank/ui/UrlRouter.java#L102 "https://github.com/saket/Dank/blob/39beb5bdd01bb7e1203847be4b2dde5c2fb192fc/app/src/main/java/me/saket/dank/ui/UrlRouter.java#L102")).

Right after calling \`findAllowedPackageNameForDeepLink\`, there is an invocation to a function \`isPackageNameInstalled \`.

The \`isPackageNameInstalled\` function is where the issue happens. It just checks if the package is installed. Our problem can be fixed by modifying the function to the following.

![](https://www.evernote.com/shard/s275/res/8a1b00f7-0137-41d4-a5c8-fc095113162d)

I have also renamed the function to give more context to the functionality. 

Now if the YouTube is not present or is disabled, Dank opens it as a regular URL and I am able to watch the video. First step done.

Remember I mentioned that I have the YouTube app disabled? That’s because I use a YouTube MOD called YouTube vanced (because YouTube 

took ages to provide a dark theme) and also a YouTube downloader app installed. Now let’s add support to open YouTube links in third-party clients/MODs. 

A YouTube video can be opened using the following Intent.

![](https://www.evernote.com/shard/s275/res/2cfd04b0-0dd7-4711-bd9f-36a119eb8066)

Once we have a YouTube URL, we can use Regular Expressions to extract 

the video ID

![](https://www.evernote.com/shard/s275/res/6a2cfdf5-1bfa-4134-a30a-12915e5bc7f6)