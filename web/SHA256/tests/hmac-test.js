(function (sha256, sha224) {
  Array.prototype.toHexString = ArrayBuffer.prototype.toHexString = function () {
    var array = new Uint8Array(this);
    var hex = '';
    for (var i = 0; i < array.length; ++i) {
      var c = array[i].toString('16');
      hex += c.length === 1 ? '0' + c : c;
    }
    return hex;
  };

  var testCases = {
    sha256_hmac: {
      'Test Vectors': {
        'b0344c61d8db38535ca8afceaf0bf12b881dc200c9833da726e9376c2e32cff7': [
          [0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
          'Hi There'
        ],
        '5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843': [
          'Jefe',
          'what do ya want for nothing?'
        ],
        '773ea91e36800e46854db8ebd09181a72959098b3ef8c122d9635514ced565fe': [
          [0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa],
          [0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd]
        ],
        '82558a389a443c0ea4cc819899f2083a85f0faa3e578f8077a2e3ff46729665b': [
          [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19],
          [0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd]
        ],
        '60e431591ee0b67f0d8a26aacbf5b77f8e0bc6213728c5140546040f0ee37f54': [
          [0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa],
          'Test Using Larger Than Block-Size Key - Hash Key First'
        ],
        '9b09ffa71b942fcb27635fbcd5b0e944bfdc63644f0713938a7f51535c3a35e2': [
          [0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa],
          'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.'
        ]
      },
      'UTF8': {
        '865cc329d317f6d9fdbd183a3c5cc5fd4c370d11f98abbbb404bceb1e6392c7e': ['中文', '中文'],
        'efeef87be5731506b69bb64a9898a456dd12c94834c36a4d8ba99e3db79ad7ed': ['aécio', 'aécio'],
        '8a6e527049b9cfc7e1c84bcf356a1289c95da68a586c03de3327f3de0d3737fe': ['𠜎', '𠜎']
      },
      'ArrayBuffer': {
        'e48411262715c8370cd5e7bf8e82bef53bd53712d007f3429351843b77c7bb9b': [
          new ArrayBuffer(0),
          'Hi There'
        ]
      }
    },
    sha224_hmac: {
      'Test Vectors': {
        '896fb1128abbdf196832107cd49df33f47b4b1169912ba4f53684b22': [
          [0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b, 0x0b],
          'Hi There'
        ],
        'a30e01098bc6dbbf45690f3a7e9e6d0f8bbea2a39e6148008fd05e44': [
          'Jefe',
          'what do ya want for nothing?'
        ],
        '7fb3cb3588c6c1f6ffa9694d7d6ad2649365b0c1f65d69d1ec8333ea': [
          [0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa],
          [0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd, 0xdd]
        ],
        '6c11506874013cac6a2abc1bb382627cec6a90d86efc012de7afec5a': [
          [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19],
          [0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd, 0xcd]
        ],
        '95e9a0db962095adaebe9b2d6f0dbce2d499f112f2d2b7273fa6870e': [
          [0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa],
          'Test Using Larger Than Block-Size Key - Hash Key First'
        ],
        '3a854166ac5d9f023f54d517d0b39dbd946770db9c2b95c9f6f565d1': [
          [0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa, 0xaa],
          'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.'
        ]
      },
      'UTF8': {
        'e2280928fe813aeb7fa59aa14dd5e589041bfdf91945d19d25b9f3db': ['中文', '中文'],
        '86c53dc054b16f6e006a254891bc9ff0da5df8e1a6faee3b0aaa732d': ['aécio', 'aécio'],
        'e9e5991bfb84506b105f800afac1599ff807bb8e20db8ffda48997b9': ['𠜎', '𠜎']
      },
      'ArrayBuffer': {
        'da8f94de91d62154b55ea4e8d6eb133f6d553bcd1f1ba205b9488945': [
          new ArrayBuffer(0),
          'Hi There'
        ]
      }
    }
  };

  var errorTestCases = [null, undefined, { length: 0 }, 0, 1, false, true, NaN, Infinity, function () {}];

  function runTestCases(name, algorithm) {
    var methods = [
      {
        name: name,
        call: algorithm,
      },
      {
        name: name + '.hex',
        call: algorithm.hex
      },
      {
        name: name + '.array',
        call: function (key, message) {
          return algorithm.array(key, message).toHexString();
        }
      },
      {
        name: name + '.digest',
        call: function (key, message) {
          return algorithm.digest(key, message).toHexString();
        }
      },
      {
        name: name + '.arrayBuffer',
        call: function (key, message) {
          return algorithm.arrayBuffer(key, message).toHexString();
        }
      }
    ];

    var classMethods = [
      {
        name: 'create',
        call: function (key, message) {
          return algorithm.create(key).update(message).toString();
        }
      },
      {
        name: 'update',
        call: function (key, message) {
          return algorithm.update(key, message).toString();
        }
      },
      {
        name: 'hex',
        call: function (key, message) {
          return algorithm.update(key, message).hex();
        }
      },
      {
        name: 'array',
        call: function (key, message) {
          return algorithm.update(key, message).array().toHexString();
        }
      },
      {
        name: 'digest',
        call: function (key, message) {
          return algorithm.update(key, message).digest().toHexString();
        }
      },
      {
        name: 'arrayBuffer',
        call: function (key, message) {
          return algorithm.update(key, message).arrayBuffer().toHexString();
        }
      },
      {
        name: 'finalize',
        call: function (key, message) {
          var hash = algorithm.update(key, message);
          hash.hex();
          hash.update(message);
          return hash.hex();
        }
      }
    ];

    var subTestCases = testCases[name];

    describe(name, function () {
      methods.forEach(function (method) {
        describe('#' + method.name, function () {
          for (var testCaseName in subTestCases) {
            (function (testCaseName) {
              var testCase = subTestCases[testCaseName];
              context('when ' + testCaseName, function () {
                for (var hash in testCase) {
                  (function (message, hash) {
                    it('should be equal', function () {
                      expect(method.call(message[0], message[1])).to.be(hash);
                    });
                  })(testCase[hash], hash);
                }
              });
            })(testCaseName);
          }
        });
      });

      classMethods.forEach(function (method) {
        describe('#' + method.name, function () {
          for (var testCaseName in subTestCases) {
            (function (testCaseName) {
              var testCase = subTestCases[testCaseName];
              context('when ' + testCaseName, function () {
                for (var hash in testCase) {
                  (function (message, hash) {
                    it('should be equal', function () {
                      expect(method.call(message[0], message[1])).to.be(hash);
                    });
                  })(testCase[hash], hash);
                }
              });
            })(testCaseName);
          }
        });
      });

      describe('#' + name, function () {
        errorTestCases.forEach(function (testCase) {
          context('when ' + testCase, function () {
            it('should throw error', function () {
              expect(function () {
                algorithm(testCase, '');
              }).to.throwError(/input is invalid type/);
            });
          });
        });
      });
    });
  }

  runTestCases('sha256_hmac', sha256.hmac);
  runTestCases('sha224_hmac', sha224.hmac);
})(sha256, sha224);
