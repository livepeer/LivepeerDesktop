#### Tasks run after npm install
### https://stackoverflow.com/questions/38361996/how-can-i-bundle-a-precompiled-binary-with-electron

DEST_LIVEPEER='./node_modules/livepeer'
DEST_FFMPEG='./node_modules/ffmpeg'

### REMOVE THE DIRS
rm -rf $DEST_LIVEPEER
rm -rf $DEST_FFMPEG

### COPY FILES
mkdir $DEST_LIVEPEER
cp -r vendors/livepeer  ./node_modules

mkdir $DEST_FFMPEG
cp -r vendors/ffmpeg  ./node_modules

echo
echo
echo "--- vendors dependencies copied to dist ---"
echo
