$(function () {
    //日期插件初始化
    jeDate("#testico", {
        theme: { bgcolor: "#00A1CB", color: "#ffffff", pnColor: "#00CCFF" },
        format: "YYYY-MM-DD",
        isinitVal: true,
        isTime: false,
    });

    //富文本编辑器插件初始化
    tinymce.init({
        selector: '#mytextarea',
        language: 'zh_CN',
        directionality: 'ltl',
        browser_spellcheck: true,
        contextmenu: false,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste imagetools wordcount",
            "code"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
    });
})