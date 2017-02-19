# Eventually this should be replaced with a robust runner which
# sets everything up.

rm $1.tmp
echo "import js.backend" >> $1.tmp
cat $1 >> $1.tmp

LEAN_PATH=`lean --path`
LEAN_PATH="src:$LEAN_PATH" lean --compile $1.tmp
babel out.js -o $1.js

# rm $1.tmp
