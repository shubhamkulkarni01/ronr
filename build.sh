HOME=$(dirname $0)

npm run build --prefix $HOME/client 
rm -rf $HOME/backend/build
cp -r $HOME/client/build $HOME/backend
