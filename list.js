
mt=new Date()
mt.setMinutes(0)
bt = mt.getTime()-7200000
et = mt.getTime()+10800000


body = JSON.parse($response.body)
body.data[0].recordStatus = 4
body.data[0].beginTime = bt
body.data[0].endTime = et
body.data[0].reason = "我想出去吃汉堡王啊！"


$done({ body: JSON.stringify(body) });
