 // 入口函数
 $(function () {
    /*
    需求分析:
    1.给登录按钮注册点击事件(表单默认跳转,需要阻止默认跳转)
    2.获取用户名和密码
    2.1非空判断
    3.ajax发送请求
    4.返回数据并跳转首页
    */
    /*
    那么项目的基地址就是:http://localhost:8080/api/v1
     1、用户登录
         请求地址：/admin/user/login
         请求方式：post
         请求参数：
         | username | string | 用户名（admin） |
         | password | string | 密码(123456)    |
    */
    $('.loginBar').click(function (e) {
        e.preventDefault();

        var userName = $('.user_name').val();
        var userPassward = $('.user_pass').val();
        if (userName.trim().length == 0 || userPassward.trim().length == 0) {
            $('#myModal').modal();
            $('.modal-body>p').text('用户名或密码不能为空哦!');
            return;
        }
        $.ajax({
            url: BigNew.user_login,
            type: 'post',
            dataType: 'json',
            data: {
                username: userName,
                password: userPassward
            },
            success: function (backData) {
                console.log(backData);
                if (backData.code == 200) {
                    $('#myModal').modal();
                    $('.modal-body>p').text('登录成功');
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        //将服务器返回的token存入localStorage
                        localStorage.setItem('token',backData.token)
                        window.location.href = './index.html'
                    })

                } else {
                    $('#myModal').modal();
                    $('.modal-body>p').text(backData.msg);
                }
            }
        });
    })
})