node-fidonet-mailer-binkp-crypt
===============================

[![Build Status](https://travis-ci.org/askovpen/node-fidonet-mailer-binkp-crypt.svg?branch=master)](https://travis-ci.org/askovpen/node-fidonet-mailer-binkp-crypt)
[![Build status](https://ci.appveyor.com/api/projects/status/c3l0au95nkaohx1h)](https://ci.appveyor.com/project/askovpen/node-fidonet-mailer-binkp-crypt)

[![(npm package version)](https://nodei.co/npm/fidonet-mailer-binkp-crypt.png?downloads=true)](https://npmjs.org/package/fidonet-mailer-binkp-crypt)

## Usage

```js
var crypt=require('../');
var client=crypt('password');
client.init_keys();
client.encrypt_buf(buf)
client.init_keys();
client.decrypt_buf(buf)
```
