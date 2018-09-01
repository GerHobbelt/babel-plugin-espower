var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('@gerhobbelt/babel-core');
var createEspowerPlugin = require('../create');

function testTransform (fixtureName, extraOptions) {
    it(fixtureName, function () {
        var fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
        var expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
        var actualFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'actual.js');
        var result = babel.transformFileSync(fixtureFilepath, Object.assign({
            plugins: [
                createEspowerPlugin(babel, {
                    embedAst: false
                })
            ]
        }, extraOptions));
        var actual = result.code + '\n';

        // dirty hack to tweak the sources to ensure all platforms (Windows vs. UNIX) produce the same output:
        // tweak the forward-slash to backslash for all `filepath` entries in there:
        actual = actual.replace(/filepath:.*$/gm, function (line) {
            return line.replace(/[\\][\\]/g, '/');
        });

        if (fs.existsSync(expectedFilepath)) {
            var expected = fs.readFileSync(expectedFilepath, 'utf8');
            if (actual !== expected) {
                fs.writeFileSync(actualFilepath, actual, 'utf8');
            }
            assert.equal(actual, expected);
        } else {
            console.warn("          Regenerating test SOLLWERT for " + fixtureName + " ...");
            assert(true); // shut up test rig: one (fake) test done at least!
            fs.writeFileSync(expectedFilepath, actual, 'utf8');
        }
    });
}

describe('babel-plugin-espower', function () {
    testTransform('Mocha');
    testTransform('NonTarget');
    testTransform('Literal');
    testTransform('Identifier');
    testTransform('BinaryExpression');
    testTransform('UnaryExpression');
    testTransform('LogicalExpression');
    testTransform('MemberExpression');
    testTransform('CallExpression');
    testTransform('AssignmentExpression');
    testTransform('ArrayExpression');
    testTransform('UpdateExpression');
    testTransform('ConditionalExpression');
    testTransform('ObjectExpression');
    testTransform('SequenceExpression');
    testTransform('NewExpression');
    testTransform('FunctionExpression');
    testTransform('TemplateLiteral');
    testTransform('TaggedTemplateExpression');
    testTransform('ArrowFunctionExpression');
    testTransform('ClassExpression');
    testTransform('SpreadElement');
    testTransform('Property');
    testTransform('YieldExpression');
    testTransform('inputSourceMap', {
        plugins: [
            createEspowerPlugin(babel, {
                embedAst: false,
                sourceRoot: "/absolute/"
            })
        ]
    });
    testTransform('customPatterns', {
        plugins: [
            createEspowerPlugin(babel, {
                embedAst: false,
                patterns: [
                    'assert.isNull(object, [message])',
                    'assert.same(actual, expected, [message])',
                    'assert.near(actual, expected, delta, [message])'
                ]
            })
        ]
    });
    testTransform('CommentsInAssertion');
});
