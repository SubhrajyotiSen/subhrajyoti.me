+++
title = "Build LineageOS for Redmi Note 5 Pro"
description = ""
tags = [
    "android",
    "oss"
]
date = "2019-06-11"
categories = [
    "Android"
]
highlight = "true"
+++


Before starting out the procedure, I would hihgly recommend building it on a high-spec VPS and not on your personal computer. You could try out the free-trial of Google Cloud Platform.
The guide will assume you are on a Linux system. Please don't try building on any other OS

## Installing required tools and libraries
For this I recommend using the scripts from Akhil Narang's [script](https://github.com/akhilnarang/scripts) repo.
I personally use a Ubuntu on a build server. So I will execute [android_build_env.sh](https://github.com/akhilnarang/scripts/blob/master/setup/android_build_env.sh) script.
```
sh setup/android_build_env.sh
```

## Syncing the sources
You can find the syncing instructions on the [LineageOS android repo](https://github.com/LineageOS/android).

For this you will need to install `repo`. Run the following commands in your home directory
```
mkdir ~/bin
PATH=~/bin:$PATH
curl http://commondatastorage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
chmod a+x ~/bin/repo
```

Now that you have `repo`, run the following commands to start syncing the project. Make sure you have enough free space since the download can be ~50GB

```
mkdir los
cd los
repo init -u git://github.com/LineageOS/android.git -b lineage-16.0 --depth=1
```

Now you need to add your local manifest
```
mkdir .repo/local_manifests
wget https://gist.githubusercontent.com/SubhrajyotiSen/a4527f82609f03a8bf4e48e6694ac142/raw/25d2a5e58bbe5734d7a0771bc7ff929043fe2b44/whyred_los.xml -P los/.repo/local_manifests/
```

Now start syncing the sources

```
repo sync -cfj8 --current-branch --no-tags --no-clone-bundle --optimized-fetch --prune
```

Now kindly go to something productive as this might take a while depending on connection speed. 


Once it is done, it's time to start building.


It is always a good idea to setup ccache as this will make the future builds faster
```
export USE_CCACHE=1
export CCACHE_DIR=~/.cache
prebuilts/misc/linux-x86/ccache/ccache -M 50G
```
Here I am using 50GB ccache. You can specify the size depending on how much space you have available

```
. build/envsetup.sh
lunch lineage_whyred-userdeug
make bacon -j8
```

This will start the build. It can take a few hours depending on the specs of your machine.

If all goes well, you will get a success message and your build should be available in los/out/target/product/whyred/

If you get errors along the way, in most cases a direct Google search should help fix yours error. 


  

