# encode-audio

1. Upload the origin .wav files to the NPMap website (`/npmap/projects/encode-audio/`)
2. `npm install`
3. `node app.js`

The encoded files will be placed in the `./input` directory

## TODO

Support all of the params passed in the original script posted by GuideOne:

```
#!/bin/bash

for FILE in *wav
do
  WAV=`echo ${FILE} | sed -e s/mp3$/wav/`
  M4A=`echo ${FILE} | sed -e s/mp3$/m4a/`
  echo "Decoding ${FILE} into WAV ..."
  mpg123 --stereo -w "${WAV}" "${FILE}"
  echo "Encoding ${WAV} into HE-AACv2 ..."
  neroAacEnc -br 48000 -2pass -hev2 -if "${WAV}" -of "${M4A}"
  echo "-- ${WAV} --> ${M4A} (HE-AACv2) done."
  # rm -f "${WAV}"
done
```
