# LivepeerDesktop
Desktop Application For Livepeer.  This application connects to the [Livepeer Toynet](https://github.com/livepeer/wiki/wiki/Toynet), and showcases the basic functionalities of the Livepeer network.

## Getting Started

### Running the app

If you are using OSX, you can simply [download a zipfile](https://s3.amazonaws.com/livepeer/LivepeerDesktop.zip).

#### Running with Node/Electron

To start the node, use:

```
git clone git@github.com:livepeer/LivepeerDesktop.git

cd LivepeerDesktop/app

npm install

npm start
```

Some caveats about the project - there are 2 binary dependencies: livepeer and ffmpeg.  Electron doesn't make it easy to distribute 3rd part binaries, so we are using a hack following [this example](http://stackoverflow.com/questions/38361996/how-can-i-bundle-a-precompiled-binary-with-electron)

To list out the steps -
* Create `app/node_modules/ffmpeg` and `app/node_modules/livepeer`.  
* Place `livepeer` and `enters.txt` inside `app/node_modules/livepeer`, `ffmpeg` inside `app/node_modules/ffmepg`

#### Packaging for OSX

You can also build it from scratch by using:

```
cd LivepeerDesktop

electron-packager ./ LivepeerDesktop --platform=darwin —-arch=all —-dir=build/ --icon=app/static/img/icon.icns --overwrite
```

You should see a directory with the osx app in it.

## Built With
[Electron](https://github.com/electron/electron)

## Contributing
The best way to contribute is by looking at the [issues](https://github.com/livepeer/LivepeerDesktop/issues) in this repo.  

For details and process of contributing to Livepeer in general, please read [CONTRIBUTING.md](https://github.com/livepeer/wiki/blob/master/CONTRIBUTING.md).

## License
This repository is licensed under the GNU General Public License v3.0, also included in our repository in the [COPYING](https://github.com/livepeer/LivepeerDesktop/blob/master/COPYING) file.
