# Repro

```sh
npm i

# Terminal one
npm run server

# Terminal two
npm run test
```

You'll see that Cypress will Out-Of-Memory pretty quickly because it records the whole DOM anytime the animation updates itself.
