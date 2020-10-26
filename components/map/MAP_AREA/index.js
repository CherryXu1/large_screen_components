class AreaMap {
    seriesDataConver(data, cityinfo, poly) {
        const res = [];
        for (let i = 0; i < data.length; i++) {
            let geoCoord = data[i]["properties"]["cp"];
            let name = data[i]["properties"].name;
            const len = cityinfo.map((v, e) => {
                if (new RegExp(name).test(v.NAME)) {
                    return v.ONLINEUSER;
                }
            });
            this.pushRes(parseInt(len.join("") / 1000), res, geoCoord, poly);
        }
        return res;
    }
    pushRes(len, res, geo, poly) {
            let x, y;
            while (len > 0) {
                x = geo[0] - (Math.random() * 1 - 0.3);
                y = geo[1] + (Math.random() * 2 - 0.3);
                var p = [x, y];
                if (this.rayCasting(p, poly)) {
                    res.push({
                        type: 'average',
                        valueIndex: '0',
                        coord: [x, y]
                    });
                }
                len--;
            }
        }
        //    边界算法
    rayCasting(p, poly) {
        let px = p[0],
            py = p[1],
            flag = false;
        for (let i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
            const sx = poly[i][0],
                sy = poly[i][1],
                tx = poly[j][0],
                ty = poly[j][1];
            // 点与多边形顶点重合
            if ((sx === px && sy === py) || (tx === px && ty === py)) {
                return true
            }
            // 判断线段两端点是否在射线两侧
            if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
                // 线段上与射线 Y 坐标相同的点的 X 坐标
                const x = sx + (py - sy) * (tx - sx) / (ty - sy);
                // 点在多边形的边上
                if (x === px) {
                    return true
                }
                // 射线穿过多边形的边界
                if (x > px) {
                    flag = !flag
                }
            }
        }
    }
}

export default new AreaMap();