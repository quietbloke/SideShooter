echo off
echo Building Core
cd core
cmd /c tsc
cd ..
echo Building Helpers
cd helpers
cmd /c tsc
