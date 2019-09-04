window.onload = function(){
    //let url = 'http://104.168.165.226:12345/update';
    let url = 'http://127.0.0.1:12345/update';
    let data = {
        modules: 0
    }
    update(data,url)
}
/* (function(win,doc){
	function change(){
		doc.documentElement.style.fontsize = 10*doc.documentElement.clientWidth/320 + 'px';
	}
	change();
	win.addEventListener('resize',change,false)
})(window,document) */
function update(data,url) {
    var list = document.getElementById('list')
    list.innerHTML = `<div id="tips"><i class="fa fa-spinner" aria-hidden="true"></i>搜索中，请稍后！</div>`
    $.ajax({
        type: "post",
        async: true,
        url,
        dataType: "json",
        data: JSON.stringify(data),
        success: function (res) {
            list.innerHTML = '';
            if(res.code == 1){
                for(var i=0;i<res.items.length;i++) {
                    var row = res.items[i]
                    for (var j = 0; j < row.length; j++) {
                        let oLi = document.createElement("li")
                        oLi.innerHTML = `
				<a href="${row[j].url}" target="con">
				    <div class="box">
						<div class="status">${row[j].status}</div>
				        <div class="box-img"><img src="${row[j].img}"  onerror="this.src='./template/images/default_grey_pc.png'"></div>
				        <div class="detail">
					        <div class="title">${row[j].title}</div>
					        <div class="from">来源:<text class="from-detail">${row[j].from}</text></div>
				        </div>
				    </div>
				</a>`;
                        list.appendChild(oLi)
                    }
                }
            }else{
                list.innerHTML = `<div id="tips"><i class="fa fa-circle-o-notch"></i>暂时没有资源呢!</div>`
            }
        },
        error: function (e) {
            list.innerHTML = `<div id="tips"><i class="fa fa-exclamation-circle"></i>网络开小差了,请稍后再试!</div>`
        }
    });
}

function getData(data,url){
    var list = document.getElementById('list')
    list.innerHTML = `<div id="tips"><i class="fa fa-spinner" aria-hidden="true"></i>搜索中，请稍后！</div>`
    $.ajax({
        type: "post",
        async: true,
        url,
        dataType: "json",
        data: JSON.stringify(data),
        success: function (res) {
            list.innerHTML = "";
            if(res.code == 1){
                for(var i=0;i<res.items.length;i++){
                    let  oLi = document.createElement("li")
                    oLi.innerHTML = `
				<a href="${res.items[i].url}" target="con">
				    <div class="box">
				        <div><img src="${res.items[i].img}"  onerror="this.src='./template/images/default_grey_pc.png'"></div>
				        <div class="detail">
					        <div class="title">${res.items[i].title}</div>
					        <div class="from">来源:<text class="from-detail">${res.items[i].from}</text></div>
					        <i>${res.items[i].status}</i>
				        </div>
				    </div>
				</a>`;
                    list.appendChild(oLi)
                }
            }else{
                list.innerHTML = `<div id="tips"><i class="fa fa-circle-o-notch"></i>暂时没有资源呢!</div>`
            }
        },
        error: function (e) {
            list.innerHTML = `<div id="tips"><i class="fa fa-exclamation-circle"></i>网络开小差了,请稍后再试!</div>`
        }
    });
}

var nextPage = 0

function search(){
    let txt = $("#keyboard").val();
    if (txt != "") {
        let data = {"txt": txt,"page":0};
        //let url = "http://104.168.165.226:12345/search";
        let url = "http://127.0.0.1:12345/search";
        getData(data, url);
        $('#title-top').text('全网搜索结果')
    }
}
function keySearch(){
    if (event.keyCode == 13){
        search()
    }
}