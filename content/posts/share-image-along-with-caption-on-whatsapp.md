+++
categories = ["tutorial"]
date = 2017-01-03T18:30:00Z
description = "A short tutorial on how to programatically share images on WhatsApp along with a caption"
highlight = ""
tags = ["android"]
title = "Share image along with caption on WhatsApp"

+++
So I came across this[ question on StackOverflow](http://stackoverflow.com/questions/41461267/how-to-share-text-and-image-to-whatsapp-from-my-app) asking how one can share an image on WhatsApp along with a caption. Before the question could be answered, two users incorrectly marked it as a duplicate.

So I thought of sharing my answer here so that it can help out others.

We start by creating an ACTION_SEND Intent since the Intent sends data

    Intent intent = new Intent();
    intent.setAction(Intent.ACTION_SEND);

We set the Intent type to image since we are primarily sending an image

    intent.setType("image/*");

The main part comes now. We need to specify in our Intent that it is meant for WhatsApp only. We can do this by specifying the package name through the setPackage() method

    intent.setPackage("com.whatsapp");

Now we need to specify the image and message to be shared. We specify an URI to the required image.

    intent.putExtra(Intent.EXTRA_STREAM,Uri.parse("file:///sdcard/wa.jpeg"));
    intent.putExtra(Intent.EXTRA_TEXT, your_message);

And finally, fire up the Intent.

    try {
    startActivity(i);
    } catch (android.content.ActivityNotFoundException e) {
    Log.d("TAG", "WhatsApp has not been installed");
    }

We use a try catch block to handle cases where WhatsApp is not available on the device.