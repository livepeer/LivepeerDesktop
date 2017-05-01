# LivepeerDesktop
Desktop Application For Livepeer

This is an example Livepeer desktop client, written in Electron.

To start the node, use:

```
git clone git@github.com:livepeer/LivepeerDesktop.git

cd LivepeerDesktop/app

npm install

npm start
```

### Building from scratch

You can also build it from scratch by using:

```
cd LivepeerDesktop

electron-packager ./ LivepeerDesktop --platform=darwin —-arch=all —-dir=build/ --icon=app/static/img/icon.icns --overwrite
```

You should see a directory with the osx app in it.
