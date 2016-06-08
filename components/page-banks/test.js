import QUnit from 'steal-qunit';
import F from 'funcunit';

var itemsToShow = 20;//CONSTANTS.GRID.LIMIT;

F.attach(QUnit);

QUnit.module('Logging', {
    beforeEach: function() {
        F.open('/components/page-banks/demo.html');
    }
});

QUnit.done(function() {
    F.win.close();
});

QUnit.test('Check for gird visiblity', function(assert) {
  F('grid-component').visible(function() {
    F('grid-component').invisible(function() {
      assert.equal(F('grid-component table').size(), 1, 'Grid is present');
    });
  });
});
