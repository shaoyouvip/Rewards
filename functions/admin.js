export async function onRequest(context) {
  const { pathname } = new URL(context.request.url);
  
  // 检查路径是否是 /admin（忽略大小写）
  if (pathname.toLowerCase() === '/admin') {
    // 读取 admin.html 文件内容
    const adminPage = await context.env.ASSETS.fetch(new Request(new URL('/admin.html', context.request.url)));
    return adminPage;
  }
  
  // 其他情况交给默认处理
  return context.next();
}
