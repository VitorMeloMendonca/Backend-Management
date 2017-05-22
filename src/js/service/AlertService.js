management.service('AlertService', function ($timeout) {
    var me = this;
    me.alertObj = {
        show: false,
        msg: '',
        type: 'alert-success'
    };
    me.alertShow = false;
    me.alertTypes = ['alert-success alert-dismissible fade in',
        'alert-info alert-dismissible fade in',
        'alert-warning alert-dismissible fade in',
        'alert-danger alert-dismissible fade in'];
        
    me.alert = function (type, msg) {
        me.alertObj.msg = msg;
        me.alertObj.type = me.alertTypes[type];
        me.alertObj.show = true;
    };
    me.success = function (msg, timeClose) {
        me.alert(0, msg);
        closeAlert(timeClose);
    }
    me.info = function (msg, timeClose) {
        me.alert(1, msg);
        closeAlert(timeClose);
    };
    me.warning = function (msg, timeClose) {
        me.alert(2, msg);
        closeAlert(timeClose);
    };
    me.danger = function (msg, timeClose) {
        me.alert(3, msg);
        closeAlert(timeClose);
    };
    me.hide = function () {
        me.alertObj.show = false;
    };

    function closeAlert(timeClose) {
        $timeout(function () {
            me.alertObj.show = false;
        }, timeClose == undefined ? 3000 : timeClose);
    }

    return this;
});
