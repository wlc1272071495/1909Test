
function ajax({ type = "get", url, async = true, data = "", dataType, success }) {
    var req = new XMLHttpRequest();

    if (type == "get") {
        if (data) {
            if (typeof data == "string") {
                req.open("get", url + "?" + data, async);
            } else if (typeof data == "object") {
                var dataStr = "";
                for (var key in data) {
                    dataStr += key + "=" + data[key] + "&";
                }
                data = dataStr.substring(0, dataStr.length - 1);
                req.open("get", url + "?" + data, async);
            }
            req.send();
        } else {
            req.open("get", url, async);
            req.send();
        }

    } else if (type == "post") {

        if (data) {
            req.open("post", url, async);
            // post的传参方式 有两种
            if (typeof data == "string") {
                // 1. 字符串传参
                req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                req.send(data);

            } else if (typeof data == "object") {
                // 2. FormDate实例化对象传参
                var fd = new FormData();
                // fd.set("user", 123111);
                // fd.set("pwd", 222123);
                // fd.set("phone", 3333312);
                for (var key in data) {
                    fd.set(key, data[key]);
                }
                req.send(fd);
            }

        } else {
            req.send();
        }


    }

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            console.log(req.responseText);
            if (dataType == "json") {
                var res = JSON.parse(req.responseText);
            } else {
                var res = req.responseText;
            }

            if (typeof success == "function") {
                success(res);
            }

        }
    }
}


function get({ url, async = true, data = "", dataType, success }) {
    // ES5
    /* var url = obj.url;
    var async = obj.async
    async = async ? async : true;
    var data = obj.data;
    data = data ? data : "";
    var dataType = obj.dataType;
    var success = obj.success; */

    // ES6
    // var { url, async = true, data = "", dataType, success } = obj;

    var req = new XMLHttpRequest();
    if (data) {
        if (typeof data == "string") {
            req.open("get", url + "?" + data, async);
        } else if (typeof data == "object") {
            var dataStr = "";
            for (var key in data) {
                dataStr += key + "=" + data[key] + "&";
            }
            data = dataStr.substring(0, dataStr.length - 1);
            req.open("get", url + "?" + data, async);
        }
    } else {
        req.open("get", url, async);
    }

    req.send();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            // var res = req.responseText;
            console.log(req.responseText);
            if (dataType == "json") {
                var res = JSON.parse(req.responseText);
            } else {
                var res = req.responseText;
            }

            if (typeof success == "function") {
                success(res);
            }

            // console.log(res);
            // var data = res.data;
            // var { name, password, phone } = data;
            // document.write(`用户名：${name};密码：${password};手机号：${phone}`);
        }
    }
}


function post({ url, async = true, data = "", dataType, success }) {
    // ES5
    /* var url = obj.url;
    var async = obj.async
    async = async ? async : true;
    var data = obj.data;
    data = data ? data : "";
    var dataType = obj.dataType;
    var success = obj.success; */

    // ES6
    // var { url, async = true, data = "", dataType, success } = obj;





    var req = new XMLHttpRequest();
    req.open("post", url, async);
    if (data) {
        // post的传参方式 有两种
        if (typeof data == "string") {
            // 1. 字符串传参
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(data);

        } else {
            // 2. FormDate实例化对象传参
            var fd = new FormData();
            // fd.set("user", 123111);
            // fd.set("pwd", 222123);
            // fd.set("phone", 3333312);
            for (var key in data) {
                fd.set(key, data[key]);
            }
            req.send(fd);
        }

    } else {
        req.send();
    }

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            console.log(req.responseText);
            if (dataType == "json") {
                var res = JSON.parse(req.responseText);
            } else {
                var res = req.responseText;
            }

            if (typeof success == "function") {
                success(res);
            }


        }
    }
}

