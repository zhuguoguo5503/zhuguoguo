// build/svg-loader.js

const fs = require('fs-extra');
const path = require('path');
const lavasConfigPath = require.resolve('../lavas.config.js');

module.exports = function (source) {
    // 删除require缓存
    delete require.cache[lavasConfigPath];

    const lavasConfig = require(lavasConfigPath);
    const iconConfig = lavasConfig.icon;
    const svgDir = iconConfig.svgDir;
    const icons = iconConfig.icons;
    const prefix = iconConfig.prefix;
    const PATH_REG = / d="([^"]+)"/g;

    // 监听`lavas.config.js`文件变化
    this.addDependency(lavasConfigPath);

    // 从vue-awesome中导入
    if (icons) {
        source += icons.map(name => `import 'vue-awesome/icons/${name}';`).join('');
    }

    if (fs.pathExistsSync(svgDir)) {
        // 验证`assets/svg`文件夹
        try {
            if (!fs.statSync(svgDir).isDirectory()) {
                throw new Error(`Invalid directory of svg: ${svgDir}`);
            }
        }
        catch (err) {
            this.emitError(err);
            return source;
        }

        // 监听`assets/svg`文件夹变化
        this.addContextDependency(svgDir);

        // 从`assets/svg`文件夹中取
        fs.readdirSync(svgDir).forEach(file => {
            let svg = fs.readFileSync(path.resolve(svgDir, file), 'utf8');
            let sizeMatch = svg.match(/ viewBox="0 0 (\d+) (\d+)"/);

            let dMatch;
            let paths = [];
            let svgName = prefix + path.basename(file, path.extname(file));

            if (!sizeMatch) {
                return;
            }

            // 匹配多个 <path d=""> 路径
            while (dMatch = PATH_REG.exec(svg)) {
                paths.push({
                    d: dMatch[1]
                });
            }

            // 注册使用到的svg
            source += `Icon.register(
                {
                    '${svgName}': {
                        width: ${parseInt(sizeMatch[1], 10)},
                        height: ${parseInt(sizeMatch[2], 10)},
                        paths: ${JSON.stringify(paths)}
                    }
                });`;
        });
    }

    return source;
};
