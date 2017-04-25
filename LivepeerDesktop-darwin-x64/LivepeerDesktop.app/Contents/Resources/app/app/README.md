# Livepeer Desktop

The Livepeer Desktop app talks to a local Livepeer node.

##Build
The Livepeer Desktop app is built with electron-packager

`electron-packager ./ LivepeerDesktop --icon=./app/static/img/icon.icns --platform=darwin --arch=all --dir=build/ --electron-version=1.3.15 --overwrite`

FFMpeg and Livepeer binaries are packaged with the app using [this technique](http://stackoverflow.com/questions/38361996/how-can-i-bundle-a-precompiled-binary-with-electron)

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
