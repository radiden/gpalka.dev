---
title: 'Autosigning git commits'
description: 'A guide for setting up autosigning of git commits'
---

First set `user.signingkey` to your key's name:

```sh
git config --global user.signingkey "John Smith <j.smith@example.com>"
```

The, enable commit autosigning:

```sh
git config --global commit.gpgsign true
```

Now all your commits should be signed, as long as you correctly set up your GPG key on your git provider.
