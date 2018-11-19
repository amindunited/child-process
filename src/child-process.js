/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const childProcessExec = require('child_process').exec;

const exec = (command) => {
  const promise = new Promise((resolve, reject) => {
    childProcessExec(command, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
  return promise;
}

module.exports = {
  exec
};
