namespace CommonUtil {

    /**
     * 获取对象类名
     * 注意只使用 egret 类型
     */
    export function getClassName(target: egret.HashObject): string {
        return target['__proto__']['__class__'];
    }

    /**
     * 解析 URL 中参数。
     * 要获取的 key 中不允许有 '=',value 中可以正常解析。如果没有 value 默认为 “0”。<br/>
     * @return {{ [index: string]: string }} 包含URL参数的键值对对象。
     * @author Created by pony on 2019/01/01.
     */
    export const getUrlParams = (urlStr?: string) => {

        const params: { [index: string]: string } = {};

        const url = urlStr || window.location.href;
        const idx = url.indexOf('?');

        if (idx === -1) {
            return params;
        }

        const queryStr = url.substring(idx + 1);
        const args = queryStr.split('&');
        for (let i = 0, l = args.length; i < l; i++) {

            const str = args[i];

            const keyIdx = str.indexOf('=');
            if (keyIdx === -1) {
                //没有 value 时，添加一个默认值
                params[str] = '0';
                continue;
            }

            const key = str.substring(0, keyIdx);
            const value = str.substring(keyIdx + 1);

            params[key] = value;
        }

        return params;
    };

}