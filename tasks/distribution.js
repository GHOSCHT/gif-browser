const builder = require('electron-builder');

function packWin() {
  return builder.build({
    targets: builder.Platform.WINDOWS.createTarget(),
    publish: 'never',
  });
}

function packMac() {
  return builder.build({
    targets: builder.Platform.MAC.createTarget(),
    publish: 'never',
  });
}

function packLinux() {
  return builder.build({
    targets: builder.Platform.LINUX.createTarget(),
    publish: 'never',
  });
}

packWin.displayName = 'builder-win';
packMac.displayName = 'builder-mac';
packLinux.displayName = 'builder-linux';

exports.packWin = packWin;
exports.packMac = packMac;
exports.packLinux = packLinux;
