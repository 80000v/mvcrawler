package util

import (
	"bytes"
	"fmt"
	"strconv"
	"strings"
)

var ts = []string{
	"b",
	"Kb",
	"Mb",
	"Gb",
}

// 字节长度格式化输出
// 例：2566b -> 2.50Kb
func SizeToString(b int64) string {
	n := float64(b)
	i := 0
	for n > 1024 {
		n /= 1024
		i++
	}

	return fmt.Sprintf("%.2f%s", n, ts[i])
}

// 拼接字符串
func MergeString(args ...string) string {
	buffer := bytes.Buffer{}
	for _, str := range args {
		buffer.WriteString(str)
	}
	return buffer.String()
}

// 检查s串中是否有str子串
func CheckString(s, substr string) bool {
	return strings.Contains(s, substr)
}

// 判读s串中是否有str子串
// 有返回，没有在头部添加再返回
func CheckAndInsertHead(s, substr, headStr string) string {
	if CheckString(s, substr) {
		return s
	}
	return MergeString(headStr, s)
}

func ToInt(s string) int {
	count, err := strconv.Atoi(s)
	if err != nil {
		return 0
	}
	return count
}
