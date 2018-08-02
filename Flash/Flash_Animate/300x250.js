(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,64);


(lib.copy2 = function() {
	this.initialize(img.copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,62);


(lib.food = function() {
	this.initialize(img.food);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,90);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,74);


(lib.lid = function() {
	this.initialize(img.lid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,98);


(lib.lid2 = function() {
	this.initialize(img.lid2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,135);


(lib.track = function() {
	this.initialize(img.track);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,20);


(lib.train = function() {
	this.initialize(img.train);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2737,66);


(lib.tray = function() {
	this.initialize(img.tray);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,251);


(lib.whiteBg_logo = function() {
	this.initialize(img.whiteBg_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.trak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.track();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trak, new cjs.Rectangle(0,0,314,20), null);


(lib.train_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.train();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.train_1, new cjs.Rectangle(0,0,2737,66), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAcIgLgbIgEgNIAAAAIgEANIgKAbIgDAAIgVg3IAKAAIAJAYIADALIAFgLIAIgYIAHAAIAJAYIAEALIADgLIAJgYIAKAAIgVA3g");
	this.shape.setTransform(16.6,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAVQgJgIAAgNQAAgLAJgJQAIgHALgBQANABAHAHQAJAJAAALQAAANgJAIQgHAHgNAAQgLAAgIgHgAgLgMQgGAFAAAHQAAAIAGAGQAEAFAHAAQAHAAAGgFQAFgGAAgIQAAgHgFgFQgGgGgHAAQgHAAgEAGg");
	this.shape_1.setTransform(9.2,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAcIAAgiQAAgFgDgDQgDgEgHAAQgFAAgDAEQgEADAAAFIAAAiIgLAAIAAg2IAKAAIAAAHQAFgIALAAQAJAAAGAFQAGAGAAAJIAAAjg");
	this.shape_2.setTransform(2.8,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAcIAAgiQAAgFgDgDQgDgEgHAAQgFAAgDAEQgEADAAAFIAAAiIgLAAIAAg2IAKAAIAAAHQAFgIALAAQAJAAAGAFQAGAGAAAJIAAAjg");
	this.shape_3.setTransform(-6,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAnIAAg2IAKAAIAAA2gAgDgbQgBgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAAAAAQACAAACADQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBABQgCACgCAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_4.setTransform(-10.3,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAVQgJgIAAgNQAAgLAJgJQAIgHALgBQANABAHAHQAJAJAAALQAAANgJAIQgHAHgNAAQgLAAgIgHgAgLgMQgGAFAAAHQAAAIAGAGQAFAFAGAAQAIAAAEgFQAGgGAAgIQAAgHgGgFQgEgGgIAAQgGAAgFAGg");
	this.shape_5.setTransform(-14.9,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAnQASgEgBgVIAAg7IAMAAIAAA8QAAANgIAJQgGAIgHABg");
	this.shape_6.setTransform(-20.6,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAcIgLgbIgEgNIAAAAIgEANIgKAbIgDAAIgVg3IAKAAIAJAYIADALIAFgLIAIgYIAHAAIAJAYIAEALIADgLIAJgYIAKAAIgVA3g");
	this.shape_7.setTransform(16.6,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAVQgJgIAAgNQAAgLAJgJQAIgHALgBQANABAHAHQAJAJAAALQAAANgJAIQgHAHgNAAQgLAAgIgHgAgLgMQgGAFAAAHQAAAIAGAGQAEAFAHAAQAHAAAGgFQAFgGAAgIQAAgHgFgFQgGgGgHAAQgHAAgEAGg");
	this.shape_8.setTransform(9.2,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AANAcIAAgiQAAgFgDgDQgDgEgHAAQgFAAgDAEQgEADAAAFIAAAiIgLAAIAAg2IAKAAIAAAHQAFgIALAAQAJAAAGAFQAGAGAAAJIAAAjg");
	this.shape_9.setTransform(2.8,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAcIAAgiQAAgFgDgDQgDgEgHAAQgFAAgDAEQgEADAAAFIAAAiIgLAAIAAg2IAKAAIAAAHQAFgIALAAQAJAAAGAFQAGAGAAAJIAAAjg");
	this.shape_10.setTransform(-6,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAnIAAg2IAKAAIAAA2gAgDgbQgBgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAAAAAQACAAACADQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBABQgCACgCAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_11.setTransform(-10.3,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAVQgJgIAAgNQAAgLAJgJQAIgHALgBQANABAHAHQAJAJAAALQAAANgJAIQgHAHgNAAQgLAAgIgHgAgLgMQgGAFAAAHQAAAIAGAGQAFAFAGAAQAIAAAEgFQAGgGAAgIQAAgHgGgFQgEgGgIAAQgGAAgFAGg");
	this.shape_12.setTransform(-14.9,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAnQASgEgBgVIAAg7IAMAAIAAA8QAAANgIAJQgGAIgHABg");
	this.shape_13.setTransform(-20.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#747474").s().p("AjPCOQgxAAAAgxIAAi5QAAgxAxAAIGfAAQAxAAAAAxIAAC5QAAAxgxAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AjPCOQgxAAAAgxIAAi5QAAgxAxAAIGfAAQAxAAAAAxIAAC5QAAAxgxAAg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjPCOQgxAAAAgxIAAi5QAAgxAxAAIGfAAQAxAAAAAxIAAC5QAAAxgxAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-14.2,51.5,28.5);


(lib.plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tray();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate, new cjs.Rectangle(0,0,301,251), null);


(lib.lid2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lid2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lid2_1, new cjs.Rectangle(0,0,188,135), null);


(lib.lid1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lid();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lid1, new cjs.Rectangle(0,0,174,98), null);


(lib.Hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Hand, new cjs.Rectangle(0,0,168,74), null);


(lib.Food = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.food();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Food, new cjs.Rectangle(0,0,171,90), null);


(lib.E_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whiteBg_logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.E_BG, new cjs.Rectangle(0,0,300,250), null);


(lib.copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAkQgFgEgHgNQgFgJgFAAIgHAAIAAAcIgNAAIAAhOIAXAAQALAAAFACQATAGgBAQQAAARgXAGQADABAEAHQAFAIADADQAEADAEAAIAHgBIADALQgEACgGAAQgJAAgGgFgAgVgBIAKAAIAAgCIALAAQAJgEAAgJQABgJgJgBIgLgBIgLAAg");
	this.shape.setTransform(120.8,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAoIAAhOIA4AAIAAALIgsAAIAAAVIAnAAIAAALIgnAAIAAAXIAsAAIAAAMg");
	this.shape_1.setTransform(112.6,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAoIAAhOIALAAIAABOg");
	this.shape_2.setTransform(107.1,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAoIAAg5IggAlIgBAAIggglIAAA5IgNAAIAAhOIAMAAIAiAqIAjgqIAKAAIAABOg");
	this.shape_3.setTransform(99.6,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAoIAAhOIA3AAIAAALIgrAAIAAAVIAoAAIAAALIgoAAIAAAXIArAAIAAAMg");
	this.shape_4.setTransform(90.4,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAkQgFgEgGgNQgGgJgEAAIgHAAIAAAcIgMAAIAAhOIAWAAQALAAAEACQAUAGgBAQQAAARgWAGQACABAEAHQAFAIADADQAEADAEAAIAHgBIACALQgCACgIAAQgIAAgHgFgAgVgBIAKAAIAAgCIAMAAQAJgEABgJQAAgJgJgBIgLgBIgMAAg");
	this.shape_5.setTransform(83.2,4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAoIAAhOIAXAAQALAAADABQAUAFAAATQAAAKgHAGQgGAGgIABIgOABIgJAAIAAAdgAgPAAIAKAAIAKAAQAMgEAAgJQAAgMgKgCIgWAAg");
	this.shape_6.setTransform(75.1,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAoIAAhOIAfAAQAIAAAKABQAeAIAAAdQAAAdggAHQgIADgOABgAgaAcIANAAQAIAAALgCQAVgHAAgTQAAgUgVgFQgJgCgIAAIgPAAg");
	this.shape_7.setTransform(63.6,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJAkQgFgEgHgNQgGgJgEAAIgGAAIAAAcIgOAAIAAhOIAYAAQAKAAAFACQATAGAAAQQAAARgYAGQADABAEAHIAIALQADADAGAAIAGgBIADALQgEACgGAAQgJAAgGgFgAgVgBIAKAAIAAgCIALAAQAKgEAAgJQAAgEgDgDQgCgDgEAAIgLgBIgLAAg");
	this.shape_8.setTransform(55.4,4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsAoIAohPIAHAAIApBOIgPAAIgLgVIglAAIgKAWgAgNAGIAaAAIgOgbg");
	this.shape_9.setTransform(46.4,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAoIAAhOIAfAAQAIAAAKABQAeAIAAAdQAAAdggAHQgIADgOABgAgbAcIAOAAQAIAAALgCQAVgHAAgTQAAgUgVgFQgJgCgIAAIgQAAg");
	this.shape_10.setTransform(37.2,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfAoIg5g5IAAA5IgNAAIAAhOIAKAAIA4A3IAAg3IANAAIAABOg");
	this.shape_11.setTransform(27,4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAeAoIgLgWIglAAIgLAWIgOAAIAmhPIAIAAIApBPgAgNAGIAbAAIgOgbg");
	this.shape_12.setTransform(17.5,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAnIAAhCIgdAAIAAgLIBGAAIAAALIgdAAIAABCg");
	this.shape_13.setTransform(10.3,4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAgIAEgJQAMAGAOAAQAVAAAAgMQAAgIgQgCQgVgEgGgDQgHgFAAgMQAAgXAfABQATAAALAHIgFALQgMgHgNABQgRgBAAALQAAAJAYAEQAaAEAAAQQAAALgKAIQgKAFgOABQgVgBgKgIg");
	this.shape_14.setTransform(3.3,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy7, new cjs.Rectangle(0,0,124.2,8.4), null);


(lib.copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444661").s().p("AAEBDIAAgjIg7AAIgMgRIA0hRIAgAAIguBIIAhAAIAAghIAeAAIAAAhIAiAAIAAAaIgiAAIAAAjg");
	this.shape.setTransform(201.8,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444661").s().p("AgwBCIAAiDIAgAAIAABnIBCAAIAAAcg");
	this.shape_1.setTransform(184.5,68.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444661").s().p("AgQBCIAAiDIAgAAIAACDg");
	this.shape_2.setTransform(174.4,68.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444661").s().p("AAAArQgRgZgDAAIgHAAIAAAvIghAAIAAiDIA2AAQA3AAAAAqQgBAPgIAJQgKAKgQADQAEACAKAOQAIAMAJAAIAKgCIAGAZQgHADgOAAQgZAAgPgYgAgcgHIASAAIAAgBQAYAAAAgOQAAgIgGgEQgFgDgLAAIgUAAg");
	this.shape_3.setTransform(164.6,68.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444661").s().p("Ag3BCIAAiDIA0AAQAOAAALADQAiAJAAAgQAAAigmAJQgHACgRAAIgPAAIAAAqgAgWgCIAPAAQAJAAAGgCQANgFAAgLQAAgNgNgDQgDgBgKAAIgRAAg");
	this.shape_4.setTransform(150.2,68.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#444661").s().p("AApBCIgOgdIg3AAIgMAdIglAAIA8iDIAdAAIBCCDgAgRAJIAeAAIgOgkg");
	this.shape_5.setTransform(135,68.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444661").s().p("Ag7A1IANgaQAQALAdAAQAcAAAAgNQAAgGgogIQgqgHAAgdQABgUAQgLQAPgLAYAAQAjAAAXAOIgLAZQgUgKgaAAQgXAAAAAMQABAIAoAIQAoAIAAAcQAAAUgRALQgRALgcAAQgjAAgWgPg");
	this.shape_6.setTransform(115.8,68.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444661").s().p("AhEBCIAAiDIA3AAQASAAAMADQA0ANAAAwQAAAsguARQgSAGgeAAgAgkAlIAOAAQARAAALgDQAcgJAAgbQAAgYgagJQgHgCgUAAIgRAAg");
	this.shape_7.setTransform(101,68.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#444661").s().p("AAqBCIhOhRIAABRIghAAIAAiDIAeAAIBMBPIAAhPIAhAAIAACDg");
	this.shape_8.setTransform(83.4,68.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#444661").s().p("AgzBCIAAiDIBmAAIAAAdIhEAAIAAAWIA+AAIAAAbIg+AAIAAAZIBFAAIAAAcg");
	this.shape_9.setTransform(68.4,68.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#444661").s().p("AgzBCIAAiDIBlAAIAAAdIhDAAIAAAWIA+AAIAAAbIg+AAIAAAZIBFAAIAAAcg");
	this.shape_10.setTransform(50.4,68.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#444661").s().p("AgwBCIAAiDIAgAAIAABnIBCAAIAAAcg");
	this.shape_11.setTransform(38.5,68.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444661").s().p("AApBCIgNgdIg4AAIgLAdIglAAIA8iDIAdAAIBACDgAgRAJIAfAAIgQgkg");
	this.shape_12.setTransform(23.9,68.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444661").s().p("Ag7A1IAMgaQAQALAdAAQAcAAAAgNQAAgGgngIQgqgHAAgdQAAgUAQgLQAPgLAYAAQAkAAAWAOIgLAZQgUgKgZAAQgWAAAAAMQAAAIAoAIQApAIgBAcQAAAUgRALQgRALgcAAQgjAAgWgPg");
	this.shape_13.setTransform(9,68.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWA8QgJgHgNgXQgNgUgHAAIgSAAIAAA3IgPAAIAAiDIAlAAQAQAAALAEQAbAIAAAaQAAAPgKAJQgLAJgRACQAEADAIAQQALARAHAFQAFAEAJAAIAIAAIACANQgFACgGAAQgMAAgJgHgAgqgCIAWAAQANAAAIgBQAVgGgBgSQAAgRgOgEQgHgEgRAAIgZAAg");
	this.shape_14.setTransform(202.1,39.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBCIAAiDIBbAAIAAANIhMAAIAAAtIBEAAIAAAMIhEAAIAAAwIBMAAIAAANg");
	this.shape_15.setTransform(188.6,39.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_16.setTransform(179.2,39.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA9BCIAAhpIg8BHIgBAAIg8hHIAABpIgPAAIAAiDIAOAAIA+BMIA/hMIALAAIAACDg");
	this.shape_17.setTransform(166.9,39.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtBCIAAiDIBbAAIAAANIhMAAIAAAtIBEAAIAAAMIhEAAIAAAwIBMAAIAAANg");
	this.shape_18.setTransform(151.6,39.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWA8QgKgHgNgXQgLgUgJAAIgSAAIAAA3IgOAAIAAiDIAlAAQAQAAALAEQAbAIAAAaQAAAPgKAJQgLAJgSACQAEADAJAQQAKARAIAFQAFAEAIAAIAIAAIAEANQgHACgGAAQgLAAgJgHgAgpgCIAVAAQAOAAAJgBQATgGAAgSQABgRgQgEQgGgEgQAAIgaAAg");
	this.shape_19.setTransform(139.7,39.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguBCIAAiDIAkAAQATAAAMAEQAaAJAAAbQAAAeggAJQgOAEgOAAIgSAAIAAAwgAggAEIASAAIAAABQAMAAALgCQAWgFAAgUQAAgTgQgGQgIgEgSAAIgVAAg");
	this.shape_20.setTransform(126.3,39.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhABCIAAiDIAwAAQAWAAARAGQAqAOAAAsQAAAwg0APQgNAEgXAAgAgwA1IAZAAQAXAAALgEQAmgMAAgmQAAgigegLQgNgFgXAAIgfAAg");
	this.shape_21.setTransform(106.8,39.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWA8QgJgHgNgXQgMgUgJAAIgSAAIAAA3IgOAAIAAiDIAmAAQAPAAALAEQAbAIAAAaQAAAPgKAJQgKAJgSACQAEADAIAQQALARAHAFQAFAEAJAAIAIAAIADANQgHACgFAAQgMAAgJgHgAgpgCIArgBQAUgGAAgSQAAgRgPgEQgGgEgQAAIgaAAg");
	this.shape_22.setTransform(93.1,39.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA2BCIgVgqIhEAAIgUAqIgQAAIBCiDIAKAAIBCCDgAgaAMIA2AAIgcg3g");
	this.shape_23.setTransform(77.8,39.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhABCIABiDIAuAAQAXAAARAGQAqAOAAAsQAAAwgzAPQgOAEgXAAgAgvA1IAYAAQAXAAALgEQAngMAAgmQAAgigfgLQgMgFgYAAIgeAAg");
	this.shape_24.setTransform(62.5,39.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA3BCIhphrIAABrIgOAAIAAiDIAMAAIBnBpIAAhpIAOAAIAACDg");
	this.shape_25.setTransform(45.5,39.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA3BCIgWgqIhDAAIgVAqIgPAAIBBiDIAJAAIBECDgAgbAMIA2AAIgcg3g");
	this.shape_26.setTransform(29.4,39.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHBCIgBh2IgyAAIAAgNIB1AAIAAANIg0AAIAAB2g");
	this.shape_27.setTransform(17.5,39.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag1A0IAIgLQARAOAaAAQAQgBAMgFQAMgIgBgMQAAgQgdgGQgmgGgIgGQgLgJAAgQQAAgRAPgKQANgKAWAAQAeABASANIgFALQgVgLgVAAQgRAAgJAGQgIAGAAAKQAAASAqAHQAsAGAAAcQAAATgRAKQgQALgXgBQggABgTgQg");
	this.shape_28.setTransform(5.4,39.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA4BCIhqhrIAABrIgPAAIAAiDIANAAIBmBpIAAhpIAQAAIAACDg");
	this.shape_29.setTransform(177,14.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgzAyQgVgTAAgeQAAgdAUgTQAUgTAgAAQAhAAAUATQAUATAAAdQAAAegVATQgTARghABQgggBgTgRgAgpglQgPAPAAAXQAAAYAPAPQAQAPAZAAQAaAAAQgPQAPgPAAgYQAAgXgQgPQgPgPgaAAQgZAAgQAPg");
	this.shape_30.setTransform(159.9,14.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AASBAQgLgLAAgQQAAgQALgKQAKgLARAAQAQAAALALQALAKAAAQQAAAQgLALQgLAKgQAAQgQAAgLgKgAAfAVQgFAGAAAKQgBAKAHAGQAFAGAIAAQAJAAAGgGQAGgGgBgKQABgKgGgGQgFgGgKAAQgJAAgFAGgAhFBIIB4iQIAUAAIh3CQgAhHgJQgLgLAAgQQAAgQALgKQAKgLARAAQAQAAALALQALAKAAAQQAAAQgLALQgLAJgQAAQgRAAgKgJgAg5g0QgHAHABAJQgBAKAHAGQAFAGAIAAQAJAAAGgGQAGgGgBgKQABgKgGgGQgFgGgKAAQgIAAgFAGg");
	this.shape_31.setTransform(136.9,12.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhNBOQgjgeAAgwQABguAhgfQAhgeAuAAQAuAAAgAeQAiAfgBAuQABAwgjAfQghAdgtAAQgugBgfgdgAg3g2QgVAWgBAgQABAhAVAWQAXAVAgAAQAhAAAVgVQAWgWAAghQAAgggWgWQgWgWggAAQggAAgXAWg");
	this.shape_32.setTransform(115.4,10.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhfBqIACgjQADg5A7gQQAJgDAkgGQAagFAKgHQAKgHAAgOQAAgPgPgHQgPgJgaABQgsAAgqAVIgPgbQAugaA2AAQAnAAAYAOQAdARAAAfQAAAggYANQgPAKglAHQgmAHgNAHQgZAMgBAaIAAAIICcAAIAAAcg");
	this.shape_33.setTransform(91.3,10.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgtBCIAAiDIBaAAIAAANIhLAAIAAAtIBEAAIAAAMIhEAAIAAAwIBMAAIAAANg");
	this.shape_34.setTransform(68.6,14.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDBCIhDiDIARAAIA3BuIA2huIAQAAIhCCDg");
	this.shape_35.setTransform(54.6,14.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AA3BCIgWgqIhDAAIgVAqIgPAAIBAiDIAKAAIBDCDgAgcALIA2AAIgbg3g");
	this.shape_36.setTransform(41.5,14.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag1A1IAIgMQASANAZABQARAAALgHQAMgGAAgNQAAgQgegFQglgHgJgHQgKgIAAgQQAAgRAOgKQAOgKAWAAQAeAAASAOIgGAKQgUgLgVABQgRgBgKAIQgIAGAAAJQAAATAqAGQAsAGAAAcQAAATgRAKQgPAKgYAAQggAAgTgOg");
	this.shape_37.setTransform(27.1,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy5, new cjs.Rectangle(0,0,208.6,75.7), null);


(lib.copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvA4IhZhaIAABaIgNAAIAAhvIAKAAIBYBZIAAhZIANAAIAABvg");
	this.shape.setTransform(185.8,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA4IAAhvIANAAIAABvg");
	this.shape_1.setTransform(176,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvA5IgSgkIg6AAIgRAkIgOAAIA4hxIAIAAIA5BxgAgWAIIAuAAIgYgvg");
	this.shape_2.setTransform(167,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAzQgJgFgLgUQgJgRgHAAIgPAAIAAAvIgNAAIAAhwIAhAAQANAAAJADQAWAIAAAVQAAAaggAEQADACAIAOQAJAPAFAEIAMAEQAFAAABgBIADALQgGACgEAAQgJAAgIgGgAgigDIASAAIAAABQAIAAAKgCQARgEAAgRQAAgMgOgGQgJgDgJAAIgVAAg");
	this.shape_3.setTransform(155.4,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA4IAAhkIgrAAIAAgLIBjAAIAAALIgsAAIAABkg");
	this.shape_4.setTransform(143.6,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1A4IAAhvIAnAAQARAAAQAFQAQAFAKANQAJANABASQAAApgrAMQgMAEgUAAgAgqAuIAVAAIAAgBQASAAAMgDQAggJAAgiQAAgdgbgJQgKgEgUAAIgaAAg");
	this.shape_5.setTransform(129,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIBMAAIAAALIhAAAIAAAmIA5AAIAAAJIg5AAIAAApIBBAAIAAALg");
	this.shape_6.setTransform(116.6,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIBMAAIAAALIhAAAIAAAmIA5AAIAAAJIg5AAIAAApIBBAAIAAALg");
	this.shape_7.setTransform(106,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoA5IAAhxIAhAAQAQAAAKAFQAWAIAAAWQAAAZgdAJQgMADgMAAIgPAAIAAApgAgaADIAkgBQASgFAAgSQAAgQgOgEQgLgEgLAAIgSAAg");
	this.shape_8.setTransform(95.2,5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsAuIAFgNQAPALAWAAQAPAAAJgFQAKgHAAgKQAAgOgZgEQgfgEgIgGQgJgHAAgNQAAgPANgIQAMgIASAAQAaAAAPALIgFAKQgQgJgTAAQgeAAAAAUQAAAPAkAGQAlAEAAAYQgBAQgOAJQgNAJgUAAQgbAAgPgMg");
	this.shape_9.setTransform(83.6,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAFIAAgKIAxAAIAAAKg");
	this.shape_10.setTransform(75.2,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmA4IAAgzIhKAAIAAAzIgOAAIAAhvIAOAAIAAAyIBKAAIAAgyIANAAIAABvg");
	this.shape_11.setTransform(64.4,5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoAqQgQgPAAgZQABgZASgRQATgRAdAAQAZAAAUAJIgDALQgVgIgUAAQgYAAgPANQgPANAAATQAAAVAOAMQAOANAaAAQAUAAANgGIAAggIgqAAIAAgKIA2AAIAAAyQgSAKgdAAQgfAAgTgQg");
	this.shape_12.setTransform(50.1,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFA4IAAhvIALAAIAABvg");
	this.shape_13.setTransform(40.9,5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmA4IAAgzIhLAAIAAAzIgMAAIAAhvIAMAAIAAAyIBLAAIAAgyIAMAAIAABvg");
	this.shape_14.setTransform(31.7,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGA4IAAgsIACAAIgxhDIAOAAIAoA4IAng4IAOAAIgwBDIAAAsg");
	this.shape_15.setTransform(14.8,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrA4IAAhvIAnAAQAHAAAKACQAXAHAAAUQAAASgRAGQAFAAAFACQAPAHAAARQAAAWgXAHQgOADgKAAgAgfAtIAvgBQAPgGAAgOQAAgLgKgEQgJgEgMAAIgfAAgAgfgFIAXAAQAIAAAHgCQAPgFAAgNQAAgOgOgDIgOgBIgZAAg");
	this.shape_16.setTransform(4.4,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy4, new cjs.Rectangle(0,0,191.4,11.8), null);


(lib.copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEA7IAQgbQATANAfAAQAhAAAAgPQgBgHgOgDIgfgFQgugKAAggQAAgXASgNQARgMAbAAQAlAAAdAPIgNAcQgYgMgcAAQgZAAAAANQAAAJAOAEQAJACAWADQAuAIAAAhQAAAXgTAMQgTANggAAQgpAAgZgRg");
	this.shape.setTransform(205.6,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBKIAAiTIAlAAIAACTg");
	this.shape_1.setTransform(193.9,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAwQgSgbgEAAIgIAAIAAA1IgmAAIAAiVIA9AAQA+AAAAAvQgBAQgKAMQgKALgSADQADACAMAQQAJAOALAAIAMgCIAGAcQgNAEgKAAQgcAAgSgcgAghgJIAWAAQAbAAAAgRQAAgJgHgEQgFgDgOAAIgXAAg");
	this.shape_2.setTransform(182.8,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBLIgOgeIg/AAIgNAeIgrAAIBFiVIAhAAIBJCVgAgUAOIAkAAIgSgpg");
	this.shape_3.setTransform(165,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BKIAAiTIA7AAQATAAAJADQAmAMAAAjQAAATgLALQgLAOgVAEQgHACgUAAIgRAAIAAAvgAgYgBIAQAAIAAgCQALAAAGgCQAPgDAAgPQAAgNgOgEIgiAAg");
	this.shape_4.setTransform(148.8,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAPIAAgdIBHAAIAAAdg");
	this.shape_5.setTransform(130,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwBKIhYhcIAABcIgmAAIAAiTIAhAAIBWBZIAAhZIAmAAIAACTg");
	this.shape_6.setTransform(109.6,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8A3QgYgUAAgjQAAgiAYgUQAXgVAlAAQAmAAAYAVQAXAUAAAiQAAAjgXAUQgYAVgmAAQgkAAgYgVgAgigfQgLAMAAATQABAUALAMQAMAMAVAAQAXAAAMgMQALgMAAgUQAAgTgLgMQgMgMgXAAQgWAAgMAMg");
	this.shape_7.setTransform(90,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNBKIAAiTIA+AAQAXAAAMACQAaAHAPAQQARASAAAdQAAAagQATQgOAPgWAJQgUAGghAAgAgoArIANAAIAAgBQAUAAANgDQAPgEAIgKQAKgLAAgPQAAgcgdgJQgJgCgWAAIgTAAg");
	this.shape_8.setTransform(71.4,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAwBKIhXhcIAABcIgnAAIAAiTIAhAAIBVBZIAAhZIAnAAIAACTg");
	this.shape_9.setTransform(51.6,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8A3QgYgUAAgjQAAgiAYgUQAXgVAlAAQAmAAAXAVQAYAUAAAiQAAAjgYAUQgXAVgmAAQgkAAgYgVgAghgfQgMAMAAATQAAAUAMAMQALAMAWAAQAWAAAMgMQAMgMgBgUQABgTgMgMQgMgMgWAAQgWAAgLAMg");
	this.shape_10.setTransform(32.1,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3BKIAAiTIAmAAIAAB0IBJAAIAAAfg");
	this.shape_11.setTransform(17.2,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#444661").s().p("AxgAMIAAgXMAjAAAAIAAAXg");
	this.shape_12.setTransform(112.1,28.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#444661").s().p("AxgAMIAAgXMAjAAAAIAAAXg");
	this.shape_13.setTransform(112.1,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy3, new cjs.Rectangle(0,0,224.1,30.2), null);


(lib.copy2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copy2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy2_1, new cjs.Rectangle(0,0,118,62), null);


(lib.copy1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copy1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1_1, new cjs.Rectangle(0,0,267,64), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_590 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(590).call(this.frame_590).wait(194));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDgA3RTYMAujAAAMAAAgmvMgujAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},591).wait(193));

	// BG_White
	this.instance = new lib.E_BG();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({x:451},63,cjs.Ease.get(1)).to({_off:true},505).wait(193));

	// Layer 21
	this.instance_1 = new lib.Hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(208,54,1,1,0,0,0,84,37);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136).to({_off:false},0).wait(1).to({rotation:0.1,x:208.6,y:53.7},0).wait(1).to({rotation:0.2,x:210.5,y:52.9},0).wait(1).to({rotation:0.6,x:214,y:51.5},0).wait(1).to({rotation:1.1,x:219.1,y:49.4},0).wait(1).to({rotation:1.7,x:225.4,y:46.7},0).wait(1).to({rotation:2.4,x:233,y:43.5},0).wait(1).to({rotation:3.2,x:241.9,y:39.8},0).wait(1).to({rotation:4.2,x:252.4,y:35.4},0).wait(1).to({rotation:5.3,x:264.4,y:30.4},0).wait(1).to({rotation:6.6,x:277.7,y:24.8},0).wait(1).to({rotation:8,x:292.3,y:18.7},0).wait(1).to({rotation:9.5,x:308.5,y:11.9},0).wait(1).to({rotation:11.2,x:325.9,y:4.6},0).wait(1).to({rotation:12.9,x:344.6,y:-3.3},0).wait(1).to({rotation:14.9,x:364.9,y:-11.8},0).wait(1).to({rotation:16.9,x:386.5,y:-20.8},0).wait(1).to({rotation:19.1,x:409.6,y:-30.5},0).wait(1).to({rotation:21.4,x:434,y:-40.7},0).wait(1).to({rotation:23.9,x:460,y:-51.7},0).wait(1).to({rotation:26.4,x:487.3,y:-63.1},0).wait(1).to({rotation:29.1,x:515.8,y:-75.1},0).wait(1).to({rotation:30,x:525,y:-78.9},0).wait(432).to({_off:true},1).wait(193));

	// hand
	this.instance_2 = new lib.Hand();
	this.instance_2.parent = this;
	this.instance_2.setTransform(394,54,1,1,0,0,0,84,37);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121).to({_off:false},0).to({x:208},10,cjs.Ease.get(1)).to({_off:true},5).wait(648));

	// lid2
	this.instance_3 = new lib.lid2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(158,150.5,1,1,0,0,0,94,67.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136).to({_off:false},0).wait(1).to({rotation:0.1,x:158.6,y:150.2},0).wait(1).to({rotation:0.2,x:160.1,y:149.2},0).wait(1).to({rotation:0.6,x:163.1,y:147.5},0).wait(1).to({rotation:1.1,x:167.4,y:144.9},0).wait(1).to({rotation:1.7,x:172.7,y:141.6},0).wait(1).to({rotation:2.4,x:179.1,y:137.8},0).wait(1).to({rotation:3.2,x:186.7,y:133.3},0).wait(1).to({rotation:4.2,x:195.5,y:128},0).wait(1).to({rotation:5.3,x:205.7,y:121.8},0).wait(1).to({rotation:6.6,x:217,y:115.1},0).wait(1).to({rotation:8,x:229.3,y:107.7},0).wait(1).to({rotation:9.5,x:243,y:99.5},0).wait(1).to({rotation:11.2,x:257.7,y:90.6},0).wait(1).to({rotation:12.9,x:273.5,y:81.2},0).wait(1).to({rotation:14.9,x:290.6,y:70.9},0).wait(1).to({rotation:16.9,x:308.9,y:59.9},0).wait(1).to({rotation:19.1,x:328.5,y:48.2},0).wait(1).to({rotation:21.4,x:349.1,y:35.8},0).wait(1).to({rotation:23.9,x:371,y:22.6},0).wait(1).to({rotation:26.4,x:394.1,y:8.7},0).wait(1).to({rotation:29.1,x:418.2,y:-5.8},0).wait(1).to({rotation:30,x:426,y:-10.5},0).wait(432).to({_off:true},1).wait(193));

	// lid1
	this.instance_4 = new lib.lid1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151,132,1,1,0,0,0,87,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({alpha:0},0).to({_off:true},455).wait(193));

	// food
	this.instance_5 = new lib.Food();
	this.instance_5.parent = this;
	this.instance_5.setTransform(162.5,152,1,1,0,0,0,85.5,45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).wait(53).to({alpha:0},0).to({_off:true},398).wait(193));

	// train
	this.instance_6 = new lib.train_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1426.2,153,1,1,0,0,0,1368.5,33);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(240).to({_off:false},0).to({x:1518.5},120,cjs.Ease.get(1)).wait(47).to({alpha:0},0).wait(377));

	// trak
	this.instance_7 = new lib.trak();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,191,1,1,0,0,0,157,10);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(240).to({_off:false},0).wait(167).to({alpha:0},0).to({_off:true},376).wait(1));

	// cta
	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(154.1,164.3,2.175,0.947);
	this.instance_8.shadow = new cjs.Shadow("rgba(134,142,160,1)",1,1,2);
	this.instance_8._off = true;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(476).to({_off:false},0).wait(308));

	// mask_copy8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_457 = new cjs.Graphics().p("AysKzIAAgtMAomAAAIAAAtg");
	var mask_graphics_458 = new cjs.Graphics().p("AysK6IAAh5MAomAAAIAAB5g");
	var mask_graphics_459 = new cjs.Graphics().p("AysLAIAAjBMAomAAAIAADBg");
	var mask_graphics_460 = new cjs.Graphics().p("AysLFIAAkEMAomAAAIAAEEg");
	var mask_graphics_461 = new cjs.Graphics().p("AysLLIAAlEMAomAAAIAAFEg");
	var mask_graphics_462 = new cjs.Graphics().p("AysLQIAAl/MAomAAAIAAF/g");
	var mask_graphics_463 = new cjs.Graphics().p("AysLUIAAm2MAomAAAIAAG2g");
	var mask_graphics_464 = new cjs.Graphics().p("AysLZIAAnqMAomAAAIAAHqg");
	var mask_graphics_465 = new cjs.Graphics().p("AysLdIAAoZMAomAAAIAAIZg");
	var mask_graphics_466 = new cjs.Graphics().p("AysLgIAApEMAomAAAIAAJEg");
	var mask_graphics_467 = new cjs.Graphics().p("AysLkIAAprMAomAAAIAAJrg");
	var mask_graphics_468 = new cjs.Graphics().p("AysLnIAAqOMAomAAAIAAKOg");
	var mask_graphics_469 = new cjs.Graphics().p("AysLpIAAqsMAomAAAIAAKsg");
	var mask_graphics_470 = new cjs.Graphics().p("AysLsIAArIMAomAAAIAALIg");
	var mask_graphics_471 = new cjs.Graphics().p("AysLtIAArdMAomAAAIAALdg");
	var mask_graphics_472 = new cjs.Graphics().p("AysLvIAArvMAomAAAIAALvg");
	var mask_graphics_473 = new cjs.Graphics().p("AysLwIAAr9MAomAAAIAAL9g");
	var mask_graphics_474 = new cjs.Graphics().p("AysLxIAAsIMAomAAAIAAMIg");
	var mask_graphics_475 = new cjs.Graphics().p("AysLyIAAsOMAomAAAIAAMOg");
	var mask_graphics_476 = new cjs.Graphics().p("AysL1IAAsQMAomAAAIAAMQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(457).to({graphics:mask_graphics_457,x:140.2,y:69.1}).wait(1).to({graphics:mask_graphics_458,x:140.2,y:69.8}).wait(1).to({graphics:mask_graphics_459,x:140.2,y:70.4}).wait(1).to({graphics:mask_graphics_460,x:140.2,y:70.9}).wait(1).to({graphics:mask_graphics_461,x:140.2,y:71.5}).wait(1).to({graphics:mask_graphics_462,x:140.2,y:72}).wait(1).to({graphics:mask_graphics_463,x:140.2,y:72.4}).wait(1).to({graphics:mask_graphics_464,x:140.2,y:72.9}).wait(1).to({graphics:mask_graphics_465,x:140.2,y:73.3}).wait(1).to({graphics:mask_graphics_466,x:140.2,y:73.6}).wait(1).to({graphics:mask_graphics_467,x:140.2,y:74}).wait(1).to({graphics:mask_graphics_468,x:140.2,y:74.3}).wait(1).to({graphics:mask_graphics_469,x:140.2,y:74.5}).wait(1).to({graphics:mask_graphics_470,x:140.2,y:74.8}).wait(1).to({graphics:mask_graphics_471,x:140.2,y:74.9}).wait(1).to({graphics:mask_graphics_472,x:140.2,y:75.1}).wait(1).to({graphics:mask_graphics_473,x:140.2,y:75.2}).wait(1).to({graphics:mask_graphics_474,x:140.2,y:75.3}).wait(1).to({graphics:mask_graphics_475,x:140.2,y:75.4}).wait(1).to({graphics:mask_graphics_476,x:140.2,y:75.8}).wait(308));

	// copy8.svg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABGBoIAWgqIglhAIAMAAIAfA0IAcg0IAMAAIg4BqgAgbA+QgJgIAAgQQAAgYATgMQANgHARAAIAWABIAAA3QAAAIAHAAIAGgBIACAJQgGACgFAAQgPAAAAgOIAAgJQgEALgJAGQgJAHgKAAIgCAAQgKAAgHgIgAgJALQgOAKAAARQAAAWASAAQALABAJgNQAKgOAAgZIAAgEIgMAAQgOAAgIAGgAhVBFIgYg3IgXA3IgIAAIgihHIANAAIAaA3IAXg3IAIAAIAYA3IAZg3IAMAAIgiBHgACeAGIAAgJIgIAFIgDgDIAKgGIgKgGIADgEIAIAGIAAgKIAFAAIAAAKIAJgGIADAEIgKAGIAKAGIgDADIgJgFIAAAJgAA6gmQgLgJAAgRQAAgQALgLQAMgMASAAQAeAAAAAVQAAAWglAAIgVgBQABALAHAHQAIAGAMAAQAQAAAIgFIADAKQgNAFgQAAQgSAAgKgLgABFhXQgIAGgBAKIAUABQAbAAAAgMQAAgFgFgDQgGgDgHAAQgMABgIAFgAiRgmQgLgLAAgQQAAgQALgLQALgLASAAQASAAALALQALALAAAQQAAAQgKAKQgLALgTAAIgBAAQgSAAgKgKgAiJhVQgHAIAAAMQAAAMAHAIQAIAIANAAQANgBAHgHQAIgIAAgMQAAgMgIgIQgIgIgMAAQgNAAgIAIgAAKgsIAAghQAAgRgOAAQgLAAgKAKQgJAJgEAPQgDAQAAAHIAAAHIgLAAIAAg+IgPAAIAAgJIAcAAIAAAbQAFgMAJgIQAKgJAMAAQAXAAAAAZIAAAgQAAAHAIAAQAFAAACgBIACAJIgLACQgQAAAAgPg");
	this.shape_1.setTransform(252.5,105.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiDDGQgugoAAg9QAAgoASgbQAPgXAegPQgyghAAhAQAAg9AtgkQAtglBKAAQBLAAAtAkQAtAlAAA9QAABAgyAhQA/AhAABIQAAA9guAoQgxAqhTAAQhSAAgxgqgAifBhQAAA1ApAiQArAkBKAAQBJAAArgkQAqgiAAg1QAAhChAgdQgZALgaAGQAjAKARAQQAWAUgBAfQAAAlgcAWQgfAZg5AAQg5AAgfgZQgcgWAAglQAAg2BJgXQgdgHgVgKQhBAeAABBgAhDAyQgdAQAAAeQAAAcAXASQAaASAvAAQAwAAAZgTQAYgRAAgcQAAgdgcgRQgVgMgwgLQgvAKgUANgAhCgHQAWAHAsAIQAlgHAegIQgSgGgxgMQgvALgTAHgABOifQAaASAAAiQAAAdgTASQgRAPghAKQAWAFAjAMQA0gcgBg7QAAg1gngeQgngfhCAAQhBAAgoAfQgnAeAAA1QAAA7A0AcQAdgMAbgFQghgKgQgPQgTgTgBgcQAAgiAbgSQAbgUAzAAQA0AAAbAUgAhThrQAAAYAZAQQASALAoALQApgLATgLQAYgQgBgYQABgYgWgOQgVgOgpAAQhTAAAAA0g");
	this.shape_2.setTransform(210.3,105.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AieDrIAAgUICOAAIAAgoIiOAAIAAgUICOAAIAAknIhsBvIgQgPIC6i+IASAAIAAGEIB2AAIAAAUIi0AAIAAAoIC0AAIAAAVgAADigIAAE7IAoAAIAAlkgAi1hVICRiUIAdAAIigCjg");
	this.shape_3.setTransform(170.9,105.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AidDrIAAgUICOAAIAAgoIiOAAIAAgUICOAAIAAknIhtBvIgPgPIC5i+IASAAIAAGEIB3AAIAAAUIi0AAIAAAoIC0AAIAAAVgAAEigIAAE7IAoAAIAAlkgAi2hVICSiUIAcAAIifCjg");
	this.shape_4.setTransform(132.2,105.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaDvIAAgXIgmAAIAAAXIgUAAIAAgZQg1gEglgbQghgVgQgjIASgJQAOAeAcATQAfAXAwAEIAAgoQg/gHgWgvIASgJQASAlAxAHIAAhgQg1gCgjglQglgkABg1QgBg1AlglQAjglA1gCIAAgUIAUAAIAAAUIAmAAIAAgUIAVAAIAAAVQAqADAfAVQAdAUARAeIgSAJQgOgbgZgQQgbgSgjgDIAAApQAuAHATAiIgSAJQgOgZghgFIAABgQA0ACAkAlQAkAkAAA1QAAA2gkAlQgjAlg1ABIAAAXgAgMDDIAmAAIAAgoIgmAAgAAwAQQAbACASAUQATAUAAAbQAAAdgTATQgSAUgbABIAAAoQAsgBAegfQAfgggBgtQAAgtgegeQgfgegrgDgAAwCIQASgCANgOQANgOAAgUQAAgTgOgOQgNgOgRgCgAgMCGIAmAAIAAkTIgmAAgAhrimQgeAfAAAtQAAAsAeAfQAeAeAtADIAAgoQgcgCgSgTQgSgTAAgcQgBgdATgTQASgTAcgDIAAgoQgtACgeAggAhAh9QgMAOAAATQAAAUAMANQANAOATACIAAhiQgUACgMAOgAgMigIAmAAIAAgpIgmAAg");
	this.shape_5.setTransform(92.2,105.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0AVIAAgfQgBgQgOAAQgTAAgKAdQgDAKAAAPIAAAIIgLAAIAAguQAAgQgNAAQgKgBgIAJQgHAIgEANQgEAKAAAPIAAAIIgLAAIAAg8IgNAAIAAgIIAYAAIAAAYQAKgaAYAAQAXAAAAAWIAAAEQAJgbAYAAQAXgBAAAYIAAAgQAAAGAJABIAGgCIACAJIgKADQgRAAABgQg");
	this.shape_6.setTransform(60.5,106.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAZQgKgKAAgPQAAgPAKgKQAMgLAQAAQARAAAMALQAKAKAAAPQAAAPgKALQgMALgRAAQgQgBgMgLgAgTgSQgIAIAAAKQAAAMAHAHQAIAIAMAAQALAAAJgIQAHgIAAgLQAAgLgHgHQgIgIgMAAQgLAAgIAIg");
	this.shape_7.setTransform(47.8,106.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAkIAAg8IgPAAIAAgIIAZAAIAAAZQAKgcAZAAIAAALQgWAAgKAdQgDAKAAAOIAAAHg");
	this.shape_8.setTransform(39.8,106.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAxIAAhhIBDAAIAAAKIg4AAIAAAhIAzAAIAAAJIgzAAIAAAtg");
	this.shape_9.setTransform(32.6,105.3);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},457).wait(327));

	// copy7.svg
	this.instance_9 = new lib.copy7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(152,64.1,1,1,0,0,0,62.1,4.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(457).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(-1)).wait(308));

	// mask_copy6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_457 = new cjs.Graphics().p("AEOEdIAAlJIANAAIAAFJg");
	var mask_1_graphics_458 = new cjs.Graphics().p("AELEdIAAlJIASAAIAAFJg");
	var mask_1_graphics_459 = new cjs.Graphics().p("AEDEdIAAlJIAiAAIAAFJg");
	var mask_1_graphics_460 = new cjs.Graphics().p("AD2EdIAAlJIA8AAIAAFJg");
	var mask_1_graphics_461 = new cjs.Graphics().p("ADkEdIAAlJIBhAAIAAFJg");
	var mask_1_graphics_462 = new cjs.Graphics().p("ADMEdIAAlJICQAAIAAFJg");
	var mask_1_graphics_463 = new cjs.Graphics().p("ACvEdIAAlJIDKAAIAAFJg");
	var mask_1_graphics_464 = new cjs.Graphics().p("ACNEdIAAlJIEOAAIAAFJg");
	var mask_1_graphics_465 = new cjs.Graphics().p("ABmEdIAAlJIFdAAIAAFJg");
	var mask_1_graphics_466 = new cjs.Graphics().p("AA5EdIAAlJIG2AAIAAFJg");
	var mask_1_graphics_467 = new cjs.Graphics().p("AAHEdIAAlJIIaAAIAAFJg");
	var mask_1_graphics_468 = new cjs.Graphics().p("AgvEdIAAlJIKIAAIAAFJg");
	var mask_1_graphics_469 = new cjs.Graphics().p("AhrEdIAAlJIMAAAIAAFJg");
	var mask_1_graphics_470 = new cjs.Graphics().p("AitEdIAAlJIOEAAIAAFJg");
	var mask_1_graphics_471 = new cjs.Graphics().p("Aj0EdIAAlJIQSAAIAAFJg");
	var mask_1_graphics_472 = new cjs.Graphics().p("AlAEdIAAlJISqAAIAAFJg");
	var mask_1_graphics_473 = new cjs.Graphics().p("AmSEdIAAlJIVNAAIAAFJg");
	var mask_1_graphics_474 = new cjs.Graphics().p("AnpEdIAAlJIX7AAIAAFJg");
	var mask_1_graphics_475 = new cjs.Graphics().p("ApFEdIAAlJIazAAIAAFJg");
	var mask_1_graphics_476 = new cjs.Graphics().p("AqnEdIAAlJId1AAIAAFJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(457).to({graphics:mask_1_graphics_457,x:28.3,y:28.5}).wait(1).to({graphics:mask_1_graphics_458,x:28.5,y:28.5}).wait(1).to({graphics:mask_1_graphics_459,x:29.3,y:28.5}).wait(1).to({graphics:mask_1_graphics_460,x:30.6,y:28.5}).wait(1).to({graphics:mask_1_graphics_461,x:32.5,y:28.5}).wait(1).to({graphics:mask_1_graphics_462,x:34.8,y:28.5}).wait(1).to({graphics:mask_1_graphics_463,x:37.7,y:28.5}).wait(1).to({graphics:mask_1_graphics_464,x:41.1,y:28.5}).wait(1).to({graphics:mask_1_graphics_465,x:45.1,y:28.5}).wait(1).to({graphics:mask_1_graphics_466,x:49.5,y:28.5}).wait(1).to({graphics:mask_1_graphics_467,x:54.5,y:28.5}).wait(1).to({graphics:mask_1_graphics_468,x:60.1,y:28.5}).wait(1).to({graphics:mask_1_graphics_469,x:66.1,y:28.5}).wait(1).to({graphics:mask_1_graphics_470,x:72.7,y:28.5}).wait(1).to({graphics:mask_1_graphics_471,x:79.8,y:28.5}).wait(1).to({graphics:mask_1_graphics_472,x:87.4,y:28.5}).wait(1).to({graphics:mask_1_graphics_473,x:95.5,y:28.5}).wait(1).to({graphics:mask_1_graphics_474,x:104.2,y:28.5}).wait(1).to({graphics:mask_1_graphics_475,x:113.4,y:28.5}).wait(1).to({graphics:mask_1_graphics_476,x:123,y:28.5}).wait(308));

	// copy6.svg
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2AwIAMgVQAPAJAaABQAZAAAAgNQAAgFglgHQglgHAAgbQAAgSAOgKQAOgLAWABQAegBAXAMIgKAXQgQgJgaAAQgUAAAAALQAAAHAkAHQAmAHAAAZQAAATgQAKQgPAKgZAAQgiAAgTgNg");
	this.shape_10.setTransform(226.8,40.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOA8IAAh3IAdAAIAAB3g");
	this.shape_11.setTransform(217.4,40.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAnQgOgXgEAAIgHAAIAAArIgeAAIAAh3IAyAAQAyAAAAAmQgBAageAIQADABAKANQAHALAIAAQAFAAAEgCIAFAXQgKADgJAAQgXAAgOgWgAgZgHIARAAQAWAAAAgOQAAgNgVAAIgSAAg");
	this.shape_12.setTransform(208.4,40.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOg8IAaAAIA6B4IghAAIgMgZIgzAAIgKAZIghABgAgPALIAdAAIgQgig");
	this.shape_13.setTransform(194.1,40.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgxA8IAAh3IAtAAQAOAAAJACQAfAIAAAeQAAAfgiAIQgNACgIAAIgOAAIAAAmgAgUgEIAMAAIAAACIAAAAQAIAAAGgCQAMgEAAgLQAAgKgLgFIgbAAg");
	this.shape_14.setTransform(181.2,40.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAMIAAgXIA5AAIAAAXg");
	this.shape_15.setTransform(165.9,41.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmA8IhHhKIAABKIgdAAIABh3IAaAAIBFBHIAAhHIAeAAIAAB3g");
	this.shape_16.setTransform(149.3,40.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwAtQgTgQAAgdQAAgcATgQQASgQAegBQAfABASAQQATAQAAAcQgBAcgSARQgSAQgfAAQgeAAgSgQgAgbgYQgJAKAAAOQAAAPAJAKQAKAKARAAQASAAAKgKQAJgKAAgPQAAgOgJgKQgKgKgSAAQgRAAgKAKg");
	this.shape_17.setTransform(133.6,40.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag+A8IgBh3IA0AAQARAAALADQAUAFANANQANAPAAAWQAAAVgNAQQgLAMgRAGQgSAGgZAAgAghAiIANAAQARAAAJgDQAagHAAgZQAAgZgYgFQgHgCgTAAIgPAAg");
	this.shape_18.setTransform(118.5,40.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAmA8IhHhKIAABKIgdAAIAAh3IAbAAIBFBHIAAhHIAeAAIAAB3g");
	this.shape_19.setTransform(102.6,40.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwAtQgTgQAAgdQAAgcATgQQATgQAdgBQAfABASAQQATAQAAAcQAAAcgTARQgTAQgeAAQgdAAgTgQgAgbgYQgJAKAAAOQAAAPAJAKQAKAKARAAQASAAAKgKQAJgJAAgQQAAgOgJgKQgKgKgSAAQgRAAgKAKg");
	this.shape_20.setTransform(86.9,40.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtA8IABh3IAeAAIAABdIA7AAIAAAag");
	this.shape_21.setTransform(74.8,40.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#454762").s().p("AuHAKIAAgTIcPAAIAAATg");
	this.shape_22.setTransform(151.4,51.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#454762").s().p("AuHAKIAAgTIcPAAIAAATg");
	this.shape_23.setTransform(151.4,29.2);

	var maskedShapeInstanceList = [this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},457).wait(327));

	// mask_copy5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AtvMRIAAvTMAh5AAAIAAPTg");
	var mask_2_graphics_408 = new cjs.Graphics().p("ABzFFIAAg8IC5AAIAAA8g");
	var mask_2_graphics_409 = new cjs.Graphics().p("AArFmIAAh+IFIAAIAAB+g");
	var mask_2_graphics_410 = new cjs.Graphics().p("AgbGHIAAjAIHUAAIAADAg");
	var mask_2_graphics_411 = new cjs.Graphics().p("AhiGoIAAkCIJiAAIAAECg");
	var mask_2_graphics_412 = new cjs.Graphics().p("AipHIIAAlCILwAAIAAFCg");
	var mask_2_graphics_413 = new cjs.Graphics().p("AjwHpIAAmEIN9AAIAAGEg");
	var mask_2_graphics_414 = new cjs.Graphics().p("Ak3IKIAAnGIQLAAIAAHGg");
	var mask_2_graphics_415 = new cjs.Graphics().p("Al+IrIAAoIISZAAIAAIIg");
	var mask_2_graphics_416 = new cjs.Graphics().p("AnFJMIAApKIUmAAIAAJKg");
	var mask_2_graphics_417 = new cjs.Graphics().p("AoMJtIAAqLIW0AAIAAKLg");
	var mask_2_graphics_418 = new cjs.Graphics().p("ApTKOIAArNIZCAAIAALNg");
	var mask_2_graphics_419 = new cjs.Graphics().p("AqaKuIAAsNIbPAAIAAMNg");
	var mask_2_graphics_420 = new cjs.Graphics().p("ArhLPIAAtPIddAAIAANPg");
	var mask_2_graphics_421 = new cjs.Graphics().p("AsoLwIAAuRIfrAAIAAORg");
	var mask_2_graphics_422 = new cjs.Graphics().p("AtvMRIAAvTMAh5AAAIAAPTg");
	var mask_2_graphics_456 = new cjs.Graphics().p("AtvMRIAAvTMAh5AAAIAAPTg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:129,y:78.5}).wait(408).to({graphics:mask_2_graphics_408,x:30,y:32.5}).wait(1).to({graphics:mask_2_graphics_409,x:37.1,y:35.8}).wait(1).to({graphics:mask_2_graphics_410,x:44.1,y:39.1}).wait(1).to({graphics:mask_2_graphics_411,x:51.2,y:42.4}).wait(1).to({graphics:mask_2_graphics_412,x:58.3,y:45.6}).wait(1).to({graphics:mask_2_graphics_413,x:65.3,y:48.9}).wait(1).to({graphics:mask_2_graphics_414,x:72.4,y:52.2}).wait(1).to({graphics:mask_2_graphics_415,x:79.5,y:55.5}).wait(1).to({graphics:mask_2_graphics_416,x:86.5,y:58.8}).wait(1).to({graphics:mask_2_graphics_417,x:93.6,y:62.1}).wait(1).to({graphics:mask_2_graphics_418,x:100.7,y:65.4}).wait(1).to({graphics:mask_2_graphics_419,x:107.7,y:68.6}).wait(1).to({graphics:mask_2_graphics_420,x:114.8,y:71.9}).wait(1).to({graphics:mask_2_graphics_421,x:121.9,y:75.2}).wait(1).to({graphics:mask_2_graphics_422,x:129,y:78.5}).wait(34).to({graphics:mask_2_graphics_456,x:129,y:78.5}).wait(328));

	// copy5.svg
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#444661").s().p("AAEBDIAAgjIg7AAIgMgRIA0hRIAgAAIguBIIAhAAIAAghIAeAAIAAAhIAiAAIAAAaIgiAAIAAAjg");
	this.shape_24.setTransform(247.2,139.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#444661").s().p("AgwBCIAAiDIAgAAIAABnIBCAAIAAAcg");
	this.shape_25.setTransform(229.9,139.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444661").s().p("AgQBCIAAiDIAgAAIAACDg");
	this.shape_26.setTransform(219.8,139.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444661").s().p("AAAArQgRgZgDAAIgHAAIAAAvIghAAIAAiDIA2AAQA3AAAAAqQgBAPgIAJQgKAKgQADQAEACAKAOQAIAMAJAAIAKgCIAGAZQgHADgOAAQgZAAgPgYgAgcgHIASAAIAAgBQAYAAAAgOQAAgIgGgEQgFgDgLAAIgUAAg");
	this.shape_27.setTransform(210,139.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#444661").s().p("Ag3BCIAAiDIA0AAQAOAAALADQAiAJAAAgQAAAigmAJQgHACgRAAIgPAAIAAAqgAgWgCIAPAAQAJAAAGgCQANgFAAgLQAAgNgNgDQgDgBgKAAIgRAAg");
	this.shape_28.setTransform(195.6,139.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444661").s().p("AApBCIgOgdIg3AAIgMAdIglAAIA8iDIAdAAIBCCDgAgRAJIAeAAIgOgkg");
	this.shape_29.setTransform(180.4,139.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#444661").s().p("Ag7A1IANgaQAQALAdAAQAcAAAAgNQAAgGgogIQgqgHAAgdQABgUAQgLQAPgLAYAAQAjAAAXAOIgLAZQgUgKgaAAQgXAAAAAMQABAIAoAIQAoAIAAAcQAAAUgRALQgRALgcAAQgjAAgWgPg");
	this.shape_30.setTransform(161.2,139.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444661").s().p("AhEBCIAAiDIA3AAQASAAAMADQA0ANAAAwQAAAsguARQgSAGgeAAgAgkAlIAOAAQARAAALgDQAcgJAAgbQAAgYgagJQgHgCgUAAIgRAAg");
	this.shape_31.setTransform(146.4,139.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#444661").s().p("AAqBCIhOhRIAABRIghAAIAAiDIAeAAIBMBPIAAhPIAhAAIAACDg");
	this.shape_32.setTransform(128.8,139.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444661").s().p("AgzBCIAAiDIBmAAIAAAdIhEAAIAAAWIA+AAIAAAbIg+AAIAAAZIBFAAIAAAcg");
	this.shape_33.setTransform(113.8,139.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#444661").s().p("AgzBCIAAiDIBlAAIAAAdIhDAAIAAAWIA+AAIAAAbIg+AAIAAAZIBFAAIAAAcg");
	this.shape_34.setTransform(95.8,139.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#444661").s().p("AgwBCIAAiDIAgAAIAABnIBCAAIAAAcg");
	this.shape_35.setTransform(83.9,139.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#444661").s().p("AApBCIgNgdIg4AAIgLAdIglAAIA8iDIAdAAIBACDgAgRAJIAfAAIgQgkg");
	this.shape_36.setTransform(69.3,139.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#444661").s().p("Ag7A1IAMgaQAQALAdAAQAcAAAAgNQAAgGgngIQgqgHAAgdQAAgUAQgLQAPgLAYAAQAkAAAWAOIgLAZQgUgKgZAAQgWAAAAAMQAAAIAoAIQApAIgBAcQAAAUgRALQgRALgcAAQgjAAgWgPg");
	this.shape_37.setTransform(54.4,139.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAWA8QgJgHgNgXQgNgUgHAAIgSAAIAAA3IgPAAIAAiDIAlAAQAQAAALAEQAbAIAAAaQAAAPgKAJQgLAJgRACQAEADAIAQQALARAHAFQAFAEAJAAIAIAAIACANQgFACgGAAQgMAAgJgHgAgqgCIAWAAQANAAAIgBQAVgGgBgSQAAgRgOgEQgHgEgRAAIgZAAg");
	this.shape_38.setTransform(247.5,110.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtBCIAAiDIBbAAIAAANIhMAAIAAAtIBEAAIAAAMIhEAAIAAAwIBMAAIAAANg");
	this.shape_39.setTransform(234,110.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_40.setTransform(224.6,110.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA9BCIAAhpIg8BHIgBAAIg8hHIAABpIgPAAIAAiDIAOAAIA+BMIA/hMIALAAIAACDg");
	this.shape_41.setTransform(212.3,110.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgtBCIAAiDIBbAAIAAANIhMAAIAAAtIBEAAIAAAMIhEAAIAAAwIBMAAIAAANg");
	this.shape_42.setTransform(197,110.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAWA8QgKgHgNgXQgLgUgJAAIgSAAIAAA3IgOAAIAAiDIAlAAQAQAAALAEQAbAIAAAaQAAAPgKAJQgLAJgSACQAEADAJAQQAKARAIAFQAFAEAIAAIAIAAIAEANQgHACgGAAQgLAAgJgHgAgpgCIAVAAQAOAAAJgBQATgGAAgSQABgRgQgEQgGgEgQAAIgaAAg");
	this.shape_43.setTransform(185.1,110.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AguBCIAAiDIAkAAQATAAAMAEQAaAJAAAbQAAAeggAJQgOAEgOAAIgSAAIAAAwgAggAEIASAAIAAABQAMAAALgCQAWgFAAgUQAAgTgQgGQgIgEgSAAIgVAAg");
	this.shape_44.setTransform(171.7,110.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhABCIAAiDIAwAAQAWAAARAGQAqAOAAAsQAAAwg0APQgNAEgXAAgAgwA1IAZAAQAXAAALgEQAmgMAAgmQAAgigegLQgNgFgXAAIgfAAg");
	this.shape_45.setTransform(152.2,110.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAWA8QgJgHgNgXQgMgUgJAAIgSAAIAAA3IgOAAIAAiDIAmAAQAPAAALAEQAbAIAAAaQAAAPgKAJQgKAJgSACQAEADAIAQQALARAHAFQAFAEAJAAIAIAAIADANQgHACgFAAQgMAAgJgHgAgpgCIArgBQAUgGAAgSQAAgRgPgEQgGgEgQAAIgaAAg");
	this.shape_46.setTransform(138.5,110.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AA2BCIgVgqIhEAAIgUAqIgQAAIBCiDIAKAAIBCCDgAgaAMIA2AAIgcg3g");
	this.shape_47.setTransform(123.2,110.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhABCIABiDIAuAAQAXAAARAGQAqAOAAAsQAAAwgzAPQgOAEgXAAgAgvA1IAYAAQAXAAALgEQAngMAAgmQAAgigfgLQgMgFgYAAIgeAAg");
	this.shape_48.setTransform(107.9,110.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA3BCIhphrIAABrIgOAAIAAiDIAMAAIBnBpIAAhpIAOAAIAACDg");
	this.shape_49.setTransform(90.9,110.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AA3BCIgWgqIhDAAIgVAqIgPAAIBBiDIAJAAIBECDgAgbAMIA2AAIgcg3g");
	this.shape_50.setTransform(74.8,110.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgHBCIgBh2IgyAAIAAgNIB1AAIAAANIg0AAIAAB2g");
	this.shape_51.setTransform(62.9,110.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag1A0IAIgLQARAOAaAAQAQgBAMgFQAMgIgBgMQAAgQgdgGQgmgGgIgGQgLgJAAgQQAAgRAPgKQANgKAWAAQAeABASANIgFALQgVgLgVAAQgRAAgJAGQgIAGAAAKQAAASAqAHQAsAGAAAcQAAATgRAKQgQALgXgBQggABgTgQg");
	this.shape_52.setTransform(50.8,110.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AA4BCIhqhrIAABrIgPAAIAAiDIANAAIBmBpIAAhpIAQAAIAACDg");
	this.shape_53.setTransform(222.4,85.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgzAyQgVgTAAgeQAAgdAUgTQAUgTAgAAQAhAAAUATQAUATAAAdQAAAegVATQgTARghABQgggBgTgRgAgpglQgPAPAAAXQAAAYAPAPQAQAPAZAAQAaAAAQgPQAPgPAAgYQAAgXgQgPQgPgPgaAAQgZAAgQAPg");
	this.shape_54.setTransform(205.3,85.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AASBAQgLgLAAgQQAAgQALgKQAKgLARAAQAQAAALALQALAKAAAQQAAAQgLALQgLAKgQAAQgQAAgLgKgAAfAVQgFAGAAAKQgBAKAHAGQAFAGAIAAQAJAAAGgGQAGgGgBgKQABgKgGgGQgFgGgKAAQgJAAgFAGgAhFBIIB4iQIAUAAIh3CQgAhHgJQgLgLAAgQQAAgQALgKQAKgLARAAQAQAAALALQALAKAAAQQAAAQgLALQgLAJgQAAQgRAAgKgJgAg5g0QgHAHABAJQgBAKAHAGQAFAGAIAAQAJAAAGgGQAGgGgBgKQABgKgGgGQgFgGgKAAQgIAAgFAGg");
	this.shape_55.setTransform(182.3,83.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhNBOQgjgeAAgwQABguAhgfQAhgeAuAAQAuAAAgAeQAiAfgBAuQABAwgjAfQghAdgtAAQgugBgfgdgAg3g2QgVAWgBAgQABAhAVAWQAXAVAgAAQAhAAAVgVQAWgWAAghQAAgggWgWQgWgWggAAQggAAgXAWg");
	this.shape_56.setTransform(160.8,81.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhfBqIACgjQADg5A7gQQAJgDAkgGQAagFAKgHQAKgHAAgOQAAgPgPgHQgPgJgaABQgsAAgqAVIgPgbQAugaA2AAQAnAAAYAOQAdARAAAfQAAAggYANQgPAKglAHQgmAHgNAHQgZAMgBAaIAAAIICcAAIAAAcg");
	this.shape_57.setTransform(136.7,81.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgtBCIAAiDIBaAAIAAANIhLAAIAAAtIBEAAIAAAMIhEAAIAAAwIBMAAIAAANg");
	this.shape_58.setTransform(114,85.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgDBCIhDiDIARAAIA3BuIA2huIAQAAIhCCDg");
	this.shape_59.setTransform(100,85.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AA3BCIgWgqIhDAAIgVAqIgPAAIBAiDIAKAAIBDCDgAgcALIA2AAIgbg3g");
	this.shape_60.setTransform(86.9,85.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ag1A1IAIgMQASANAZABQARAAALgHQAMgGAAgNQAAgQgegFQglgHgJgHQgKgIAAgQQAAgRAOgKQAOgKAWAAQAeAAASAOIgGAKQgUgLgVABQgRgBgKAIQgIAGAAAJQAAATAqAGQAsAGAAAcQAAATgRAKQgPAKgYAAQggAAgTgOg");
	this.shape_61.setTransform(72.5,85.8);

	this.instance_10 = new lib.copy5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(149.7,108.9,1,1,0,0,0,104.3,37.8);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},408).to({state:[{t:this.instance_10}]},48).wait(328));

	// copy4.svg
	this.instance_11 = new lib.copy4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.9,78.4,1,1,0,0,0,95.7,5.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(210).to({_off:false},0).to({alpha:1},22).wait(175).to({alpha:0},0).to({_off:true},184).wait(193));

	// copy3_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AvnFFIAAmjMAktAAAIAAGjg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AL4FFIAAmjIADAAIAAGjg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AL1FFIAAmjIAHAAIAAGjg");
	var mask_3_graphics_200 = new cjs.Graphics().p("ALsFFIAAmjIATAAIAAGjg");
	var mask_3_graphics_201 = new cjs.Graphics().p("ALcFFIAAmjIAnAAIAAGjg");
	var mask_3_graphics_202 = new cjs.Graphics().p("ALGFFIAAmjIBEAAIAAGjg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AKpFFIAAmjIBpAAIAAGjg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AKHFFIAAmjICVAAIAAGjg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AJeFFIAAmjIDKAAIAAGjg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AIuFFIAAmjIEIAAIAAGjg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AH4FFIAAmjIFNAAIAAGjg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AG8FFIAAmjIGbAAIAAGjg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AF6FFIAAmjIHwAAIAAGjg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AExFFIAAmjIJOAAIAAGjg");
	var mask_3_graphics_211 = new cjs.Graphics().p("ADiFFIAAmjIK0AAIAAGjg");
	var mask_3_graphics_212 = new cjs.Graphics().p("ACNFFIAAmjIMiAAIAAGjg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AAyFFIAAmjIOXAAIAAGjg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AgvFFIAAmjIQVAAIAAGjg");
	var mask_3_graphics_215 = new cjs.Graphics().p("AiYFFIAAmjIScAAIAAGjg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AkGFFIAAmjIUqAAIAAGjg");
	var mask_3_graphics_217 = new cjs.Graphics().p("Al7FFIAAmjIXBAAIAAGjg");
	var mask_3_graphics_218 = new cjs.Graphics().p("An2FFIAAmjIZgAAIAAGjg");
	var mask_3_graphics_219 = new cjs.Graphics().p("Ap4FFIAAmjIcHAAIAAGjg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AsAFFIAAmjIe2AAIAAGjg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AuOFFIAAmjMAhuAAAIAAGjg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AvnFFIAAmjMAktAAAIAAGjg");
	var mask_3_graphics_407 = new cjs.Graphics().p("AvnFFIAAmjMAktAAAIAAGjg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:135,y:32.5}).wait(198).to({graphics:mask_3_graphics_198,x:76.3,y:32.5}).wait(1).to({graphics:mask_3_graphics_199,x:76.4,y:32.5}).wait(1).to({graphics:mask_3_graphics_200,x:76.7,y:32.5}).wait(1).to({graphics:mask_3_graphics_201,x:77.1,y:32.5}).wait(1).to({graphics:mask_3_graphics_202,x:77.8,y:32.5}).wait(1).to({graphics:mask_3_graphics_203,x:78.6,y:32.5}).wait(1).to({graphics:mask_3_graphics_204,x:79.6,y:32.5}).wait(1).to({graphics:mask_3_graphics_205,x:80.8,y:32.5}).wait(1).to({graphics:mask_3_graphics_206,x:82.2,y:32.5}).wait(1).to({graphics:mask_3_graphics_207,x:83.7,y:32.5}).wait(1).to({graphics:mask_3_graphics_208,x:85.5,y:32.5}).wait(1).to({graphics:mask_3_graphics_209,x:87.4,y:32.5}).wait(1).to({graphics:mask_3_graphics_210,x:89.5,y:32.5}).wait(1).to({graphics:mask_3_graphics_211,x:91.8,y:32.5}).wait(1).to({graphics:mask_3_graphics_212,x:94.3,y:32.5}).wait(1).to({graphics:mask_3_graphics_213,x:96.9,y:32.5}).wait(1).to({graphics:mask_3_graphics_214,x:99.8,y:32.5}).wait(1).to({graphics:mask_3_graphics_215,x:102.8,y:32.5}).wait(1).to({graphics:mask_3_graphics_216,x:106,y:32.5}).wait(1).to({graphics:mask_3_graphics_217,x:109.4,y:32.5}).wait(1).to({graphics:mask_3_graphics_218,x:113,y:32.5}).wait(1).to({graphics:mask_3_graphics_219,x:116.7,y:32.5}).wait(1).to({graphics:mask_3_graphics_220,x:120.6,y:32.5}).wait(1).to({graphics:mask_3_graphics_221,x:124.8,y:32.5}).wait(1).to({graphics:mask_3_graphics_222,x:135,y:32.5}).wait(185).to({graphics:mask_3_graphics_407,x:135,y:32.5}).wait(377));

	// copy3.svg
	this.instance_12 = new lib.copy3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.9,42.9,1,1,0,0,0,112,15.1);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(198).to({_off:false},0).wait(209).to({alpha:0},0).wait(377));

	// copy2
	this.instance_13 = new lib.copy2_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(155,53,1,1,0,0,0,59,31);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(136).to({alpha:1},24,cjs.Ease.get(-1)).wait(33).to({alpha:0},0).to({_off:true},398).wait(193));

	// copy1
	this.instance_14 = new lib.copy1_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150.5,57,1,1,0,0,0,133.5,32);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(52).to({_off:false},0).to({alpha:1},24,cjs.Ease.get(-1)).wait(37).to({alpha:0},23,cjs.Ease.get(-1)).to({_off:true},455).wait(193));

	// tray
	this.instance_15 = new lib.tray();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.5,-0.5);

	this.instance_16 = new lib.plate();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,125,1,1,0,0,0,150.5,125.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},193).to({state:[]},398).wait(193));

	// bg
	this.instance_17 = new lib.bg();
	this.instance_17.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},591).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);
// library properties:
lib.properties = {
	id: '8D390BB13100486C8B22A34887CE715B',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/copy1.png", id:"copy1"},
		{src:"images/copy2.png", id:"copy2"},
		{src:"images/food.png", id:"food"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/lid.png", id:"lid"},
		{src:"images/lid2.png", id:"lid2"},
		{src:"images/track.png", id:"track"},
		{src:"images/train.png", id:"train"},
		{src:"images/tray.png", id:"tray"},
		{src:"images/whiteBg_logo.png", id:"whiteBg_logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8D390BB13100486C8B22A34887CE715B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;