yarn start &
pid=$(echo "$!")

cd android
./gradlew assembleRelease
cp app/build/outputs/apk/release/app-release.apk ../edugame.apk
cd ..

kill $pid
