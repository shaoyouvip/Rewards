export async function onRequest(context) {
  const { env } = context;

  const config = {
    backgroundImageUrl: env.CONFIG_BACKGROUND_IMAGE_URL || "/img/bj.webp", 
    // --- MODIFIED --- Changed the default page title
    pageTitle: env.CONFIG_PAGE_TITLE || "赞赏页面",
    favicon: env.CONFIG_FAVICON || "/img/icon.webp",
    // --- MODIFIED --- Changed the default banner title to match the screenshot
    bannerTitle: env.CONFIG_BANNER_TITLE || "您的赞赏，是我的续命咖啡~",
    qrCodes: {
      wechat: env.CONFIG_QR_WECHAT || "/img/zsm_wx.webp",
      alipay: env.CONFIG_QR_ALIPAY || "/img/zsm_zfb.webp",
    },
    infoBox: {
      text: env.CONFIG_INFO_TEXT || "如需修改昵称信息，您可以将您的赞赏截图和转账单号/支付单号和修改昵称发送到",
      email: env.CONFIG_INFO_EMAIL || "zrf@zrf.me",
    },
    footerHTML: env.CONFIG_FOOTER_HTML || `周润发: <a href="https://blog.zrf.me/">博客</a>`,
    pagination: {
      rowsPerPage: parseInt(env.CONFIG_ROWS_PER_PAGE, 10) || 10,
    },
    highlightTiers: {
      primary: parseInt(env.CONFIG_HIGHLIGHT_PRIMARY, 10) || 100,
      secondary: parseInt(env.CONFIG_HIGHLIGHT_SECONDARY, 10) || 20,
    }
  };

  return new Response(JSON.stringify(config), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });
}