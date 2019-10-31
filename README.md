### My personal Mail API

I create this for personal use, but feel free to use it if you want. 

It probably needs some adjustments though.


For starting using it, just install the modules

# yarn

And after that, configure your host settings on the **options.json** file, e.g.

```javascript
{
  "host": "smtp.example.net",
  "port": 587,
  "secure": false,
  "auth": {
    "user": "your_host_user",
    "pass": "your_host_password"
  }
}
```

And that's all

Now run **yarn start** or **npm start** and you're done 