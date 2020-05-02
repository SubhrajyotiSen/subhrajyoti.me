+++
categories = []
date = 2016-02-28T18:30:00Z
description = ""
draft = true
highlight = ""
tags = []
title = "Git, what and why?"

+++
#### **Git for Designers/Developers**

**Or anyone who really wants to use it but has no idea how to**

Writing code is hard. For every 1 minute of bliss typing characters in the computer and seeing it render things that didn’t exist before, there are 10 minutes of frustration with unreadable code and bugs that didn’t exist the night before.

Writing code with Git is hard. Writing code without it is _unthinkable_. Whether you’re senior developer on a huge team or a designer who just started dabbling with front-end for personal projects, using Git will change the way you code for the best and make group collaboration enjoyable.

This guide will walk you through basic concepts in Git with some hands-on action at the end. It won’t make you a Git master, but you will be able to use Git by yourself with [Github](https://www.github.com/) and its [desktop app](https://desktop.github.com/)**_._**

#### **What is Git**

Git is a distributed version-control system for code.

Descriptive but not very helpful, right? Let me tell you a true story then:

> You’re working on a small website. You’ve been trying to get that sticky footer right for a whole hour and somehow only managed to make it worse in the process. It’s 2AM. You hate CSS and is currently in the process of re-thinking your life choices. Screw this, **let’s go back to the previous version from 3 hours ago** and watch some Netflix.

**Oh wait.**

The _previous version_. You don’t have it anymore, do you?

What if every change in your project was tracked — every character and line of code you added or deleted. What if you could save _all_ of your code at _every_ stage of your work?

That way, once you started working on the _feature/sticky-footer_, you were sure nothing would be lost if you decided to roll back — and you could even go back to work on this feature later if you wanted to.

#### **Git is a time machine for code**

That’s what Git does. It tracks and saves **snapshots of your entire codebase** and allows you to easily distribute it to other developers (either teammates or people on the internet). In practice, Git will allow you to:

Roll-back changes in your code  
 Develop new features without affecting code that’s already live  
 Collaborate with other developers _in the same code_ _at the same time without going insane_  
 Make it _really hard_ to screw things up