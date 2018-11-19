/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const exec = require('./index').exec;
const expect = require('chai').expect

describe('Child Process Exec', () => {

  it('should export a function', () => {
    expect(exec).to.be.a('function');
  });

  it('should handle errors', () => {
    const result = exec('blmb1 Hey')
      .then(() => {
        expect(true).to.be.equal(false);
      }, err => {
        expect(true).to.be.equal(true);
      });
  });

  it('should return a promise', () => {
    const result = exec('echo Hey')
      .then(() => {
        expect(true).to.be.equal(true);
      }, err => err);
  });

});
