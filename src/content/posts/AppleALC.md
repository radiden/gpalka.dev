---
title: 'Compiling AppleALC'
description: 'A guide for compiling AppleALC'
---

# Compiling AppleALC

1. Clone the project and `cd` into the directory

```bash
git clone https://github.com/acidanthera/AppleALC
cd AppleALC
```

If you don't want to compile master (the latest code), then checkout the latest tag:

```bash
git checkout tags/$(git describe --tags $(git rev-list --tags --max-count=1))
```

2. Clone [MacKernelSdk](https://github.com/acidanthera/MacKernelSDK) into the AppleALC directory

```bash
git clone https://github.com/acidanthera/MacKernelSDK
```

3. Run the Lilu bootstrap script

```bash
src=$(/usr/bin/curl -Lfs https://raw.githubusercontent.com/acidanthera/Lilu/master/Lilu/Scripts/bootstrap.sh) && eval "$src"
```

If you get this error:

> xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance

You can either point it to your existing Xcode install:

```bash
# change Xcode.app to Xcode-beta.app if running a beta version
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

or ignore the warning and set the command line tools as the default:

```bash
xcode-select --install # install Command Line Tools if you haven't already
sudo xcode-select --switch /Library/Developer/CommandLineTools # enable command line tools
```

(thanks [davis](https://github.com/nodejs/node-gyp/issues/569) for the fix!)

4. Build with xcode

```bash
# make the amount of jobs your amount of cores/threads
xcodebuild -jobs 1 -configuration Debug
# if you'd rather build a release
xcodebuild -jobs 1 -configuration Release
```

5. You're done!

You should have a `build` directory in which you will either have a `Debug` or `Release` folder with your build.

If you don't, we're doomed.
