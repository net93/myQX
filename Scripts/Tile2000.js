var create = Object.create || (function () {
	function F() {}
	return function (proto) {
		F.prototype = proto;
		return new F();
	};
})();

var UtilExtend = function(dest, ...args) {
	let i, j, len, src;

	for (j = 0, len = args.length; j < len; j++) {
		src = args[j];
		for (i in src) {
			dest[i] = src[i];
		}
	}
	return dest;
}

var UtilTemplate = function(str, data) {
    const templateRe = /\{ *([\w_ -]+) *\}/g;

	return str.replace(templateRe, (str, key) => {
		let value = data[key];

		if (value === undefined) {
			throw new Error(`No value provided for variable ${str}`);

		} else if (typeof value === 'function') {
			value = value(data);
		}
		return value;
	});
}

var UtilBaseURL = function(str){
    return (new URL(str)).origin;
}

setOptions = function(obj, options) {
    if (!Object.prototype.hasOwnProperty.call(obj, 'options')) {
        obj.options = obj.options ? create(obj.options) : {};
    }
    for (const i in options) {
        obj.options[i] = options[i];
    }
    return obj.options;
}

VN2000 = L.TileLayere.xtend({
    x0: function(o){
        var a = [];
        for (var n = 0, l = o.length; n < l; n ++) {
            var h = Number(o.charCodeAt(n)).toString(16);
            a.push(h);
        }
        return a.join('');
    },
    getTileUrl(coords) {
        var isRetia = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;
		const data = {
			r: isRetia ? '@2x' : '',
			s: this._getSubdomain(coords),
			x: coords.x,
			y: coords.y,
			z: this._getZoomForUrl()
		};
		if (this._map && !this._map.options.crs.infinite) {
			const invertedY = this._globalTileRange.max.y - coords.y;
			if (this.options.tms) {
				data['y'] = invertedY;
			}
			data['-y'] = invertedY;
		}

        var mainKeyURL = 'https://tile.qhviet.com:8443';

		if(this._url.indexOf('https://mapshome.sgp1.digitaloceanspaces.com') > -1){
			this._url = this._url.replace('https://mapshome.sgp1.digitaloceanspaces.com', mainKeyURL);
		}

        var isMainGateway = this._url.indexOf(mainKeyURL) > -1 ? true : false;

		var requestToken = 'fd8bb2fe4c7a15398389216ac7fc7c2d4ec6b8b3c6e3a09e014bf4bd57306560';

		return isMainGateway 
        ? [UtilBaseURL(this._url), this.getSegment(1), this.getSegment(2, UtilExtend(data, this.options))].join('/') + '.png?t=' + requestToken 
        : UtilTemplate(this._url, UtilExtend(data, this.options));
	},
    getSegment: function(key, coords){
        switch (key) {
            case 1:
                let allSegment = this._url.split('/');
                let segment = typeof allSegment[3] != 'undefined' ? allSegment[3] : '';
                return this.x0(segment);
            case 2:
                return this.x0([coords.x, coords.y, coords.z].join('_'));

        }
    }
});

vn2000 = function(url, options) {
    return new VN2000(url, options);
}
