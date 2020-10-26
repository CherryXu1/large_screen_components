class Index {
    constructor(node) {
        this.node = node;
        console.log(this.node)
        this.init();
    }
    init() {
        const self = this;
        this.nodes = [];
        Array.prototype.slice.call(self.node, 0).forEach((item, index) => {
            self.nodes.push(self.update(item));
            self.bindEvents(item, index);
        })
        console.log(this.nodes)
    }
    updata(item) {
        return {
            w: item.offsetWidth,
            h: item.offsetHeight,
            l: item.offsetLeft,
            t: item.offsetTop
        }
    }
    bindEvents(item, index) {
        const self = this;
        $(item).on('mouseenter', (e) => {

        })
    }
}

export default Index;