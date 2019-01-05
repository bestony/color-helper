const got = require('got')
const cloud = require('wx-server-sdk')
const templateId = '9XanwpXR18w4T-NCE-aW6Khmyigm6KfCKfiFogS84go';
const appid = 'wx4d9b748efd0902df'; // 小程序 appId
const secret = 'aa5c36e5b9922b7dc725ebb06ca18cb9'; // 小程序 secret
let token_url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
let msg_url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='


cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let tokenResponse = await got(token_url);
  let token = JSON.parse(tokenResponse.body).access_token;
  const { OPENID, APPID } = cloud.getWXContext();
  let form_id = event.formId;

  let msgResponse = await got(msg_url + token, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      touser: OPENID,
      template_id: templateId,
      form_id: form_id,
      data: {
        keyword1: {
          value: event.color1 // keyword1 的值
        },
        keyword2: {
          value: event.color2 // keyword2 的值
        },
        keyword3: {
          value: event.color3 // keyword2 的值
        },
        keyword4: {
          value: event.color4 // keyword2 的值
        }
      },
      page: 'pages/random/random' 
    })
  })
  return msgResponse.body
}