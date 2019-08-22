package mvcrawler_test

import (
	"github.com/tagDong/mvcrawler"
	"github.com/tagDong/mvcrawler/conf"
	"testing"
)

func TestNewDownLoader(t *testing.T) {
	conf.LoadConfig("conf/conf.json")
	mvcrawler.InitLogger()

	d := mvcrawler.NewDownLoader()

	node := mvcrawler.NewNode("http://www.jbhua.com/uploads/150617/1-15061g01u5933.jpg", "1-15061g01u5933.jpg", ImageType)
	d.AddNode(node)

	node1 := mvcrawler.NewNode("http://www.silisili.me", "www.silisili.me.html", HtmlType)
	d.AddNode(node1)

	node2 := mvcrawler.NewNode("http://b-ssl.duitang.com/uploads/blog/201308/06/20130806222801_Tr38Z.jpeg", "20130806222801_Tr38Z.jpeg", ImageType)
	d.AddNode(node2)

	node3 := mvcrawler.NewNode("http://photocdn.sohu.com/20150724/mp24129102_1437711995584_2.gif", "", ImageType)
	d.AddNode(node3)

	node4 := mvcrawler.NewNode("http://b-ssl.duitang.com/uploads/item/201411/08/20141108074440_3dFfP.jpeg", "", ImageType)
	d.AddNode(node4)

	d.AddNode(mvcrawler.NewNode("https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/3_cda6388ad4f3a1d9db9fd0f942af406d.mp4", "龙珠英雄1.mp4", VideoType))

	select {}
}
