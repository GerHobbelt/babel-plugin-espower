var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('@gerhobbelt/babel-core');
var assign = require('core-js/library/fn/object/assign');
var createEspowerPlugin = require('../create');

function testTransform (fixtureName, extraSuffix, extraOptions) {
    it(fixtureName, function () {
        var suffix = extraSuffix ? '-' + extraSuffix : '';
        var fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
        var expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected' + suffix + '.js');
        var actualFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'actual' + suffix + '.js');
        var result = babel.transformFileSync(fixtureFilepath, assign({
            presets: [
                '@gerhobbelt/babel-preset-env',
                '@gerhobbelt/babel-preset-react'
            ],
            plugins: [
                createEspowerPlugin(babel, {
                    embedAst: true
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

describe('babel-plugin-espower with presets', function () {
    testTransform('NonTarget');
    testTransform('Mocha', 'presets-env');
    testTransform('Literal', 'presets-env');
    testTransform('Identifier', 'presets-env');
    testTransform('BinaryExpression', 'presets-env');
    testTransform('UnaryExpression', 'presets-env');
    testTransform('LogicalExpression', 'presets-env');
    testTransform('MemberExpression', 'presets-env');
    testTransform('CallExpression', 'presets-env');
    testTransform('AssignmentExpression', 'presets-env');
    testTransform('ArrayExpression', 'presets-env');
    testTransform('UpdateExpression', 'presets-env');
    testTransform('ConditionalExpression', 'presets-env');
    testTransform('ObjectExpression', 'presets-env');
    testTransform('SequenceExpression', 'presets-env');
    testTransform('NewExpression', 'presets-env');
    testTransform('FunctionExpression', 'presets-env');
    testTransform('TemplateLiteral', 'presets-env');
    testTransform('TaggedTemplateExpression', 'presets-env');
    testTransform('ArrowFunctionExpression', 'presets-env');
    testTransform('ClassExpression', 'presets-env');
    testTransform('SpreadElement', 'presets-env');
    testTransform('Property', 'presets-env');
    testTransform('YieldExpression', 'presets-env');
    testTransform('AwaitExpression', 'presets-env');
    testTransform('ObjectRestSpread', 'presets-env');
    testTransform('React', 'presets-react');
});
