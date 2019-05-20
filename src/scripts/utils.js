
registryUI.bytesToSize = function (bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == undefined || isNaN(bytes)) {
    return '?';
  } else if (bytes == 0) {
    return '0 Byte';
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.ceil(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
};

registryUI.dateFormat = function(date) {
  if (date === undefined) {
    return '';
  }
  const labels = ['a second', 'seconds', 'a minute', 'minutes', 'an hour', 'hours', 'a day', 'days', 'a month', 'months', 'a year', 'years'];
  const maxSeconds = [1, 60, 3600, 86400, 2592000, 31104000, Infinity];
  const diff = (new Date() - date) / 1000;
  for (var i = 0; i < maxSeconds.length - 1; i++) {
    if (maxSeconds[i] * 2 >= diff) {
      return labels[i * 2];
    } else if (maxSeconds[i + 1] > diff) {
      return Math.floor(diff / maxSeconds[i]) + ' ' + labels[i * 2 + 1];
    }
  }
};


registryUI.getHistoryIcon = function(attribute) {
  switch (attribute) {
    case 'architecture':
      return 'memory';
    case 'created':
      return 'event';
    case 'docker_version':
      return '';
    case 'os':
      return 'developer_board';
    case 'Cmd':
      return 'launch';
    case 'Entrypoint':
      return 'input';
    case 'Env':
      return 'notes';
    case 'Labels':
      return 'label';
    case 'User':
      return 'face';
    case 'Volumes':
      return 'storage';
    case 'WorkingDir':
      return 'home';
    case 'author':
      return 'account_circle';
    case 'id':
    case 'digest':
      return 'settings_ethernet';
    case 'created_by':
      return 'build';
    case 'size':
      return 'get_app';
    case 'ExposedPorts':
      return 'router';
    default:
      ''
  }
}