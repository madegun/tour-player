/* globals Tour, Lang, BrouserInfo*/

Tour.init = function(data, options) {
    console.info('Tour-player', 'v' + this.version.join('.'), 'by http://Tour-360.ru');
    BrouserInfo();
    this.options.set(this.defaultOption);
    this.options.set(options);
    this.options.set(this.query.get());
    Lang.set(this.options.lang, Tour.dictionary);
    this.createScene();
    this.setControlPanel();
    this.setMouseMenu();
    this.load(this.options.data || data, function(data) {
        document.title = Lang.translate(data.title) || '';
        var query = Tour.query.get();
        query.id = query.id || data.start || 0;
        this.view.set(query);
        this.addEventListeners();
        this.animate();
    }.bind(this));
};
