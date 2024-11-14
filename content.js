// 创建一个观察器实例
const observer = new MutationObserver((mutations) => {
    // 获取主要内容区域
    const mainContent = document.querySelector('body');
    if (mainContent) {
        // 清空所有内容并添加固定结构
        mainContent.innerHTML = `
            <div class="lkong-header">
                <img src="https://www.lkong.com/favicon.ico" class="logo" alt="龙空">
            </div>
            <a href="https://www.lkong.com/forum/15" class="section-title">网文江湖</a>
            <div class="content-container">
                <div class="css-1whuy04">
                    <div class="css-760i8n">
                        <div class="css-f30376">
                            <div class="bubble">28</div>
                            <div class="main-title">
                                <a target="_blank" href="/thread/3664554">上架一小时订阅</a>
                            </div>
                            <div class="author">
                                <a href="/user/769054" target="_lkong">zdengjing</a>
                                <br>
                                <a href="/thread/3664554" target="_lkong">几秒前</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 设置背景为白色
        mainContent.style.background = '#fff';

        // 创建一个新的观察器来监听帖子列表的变化
        const threadObserver = new MutationObserver((mutations) => {
            const originalThreadList = document.querySelector('.thread-list');
            if (originalThreadList) {
                const ourThreadList = document.querySelector('.css-1whuy04');
                if (ourThreadList) {
                    ourThreadList.innerHTML = originalThreadList.innerHTML;
                }
            }
        });

        // 开始观察帖子列表
        threadObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        // 停止主观察器
        observer.disconnect();
    }
});

// 开始观察文档
observer.observe(document, {
    childList: true,
    subtree: true
});

// 立即尝试清空一次
const mainContent = document.querySelector('body');
if (mainContent) {
    mainContent.innerHTML = `
        <div class="lkong-header">
            <img src="https://www.lkong.com/favicon.ico" class="logo" alt="龙空">
        </div>
        <a href="https://www.lkong.com/forum/15" class="section-title">网文江湖</a>
        <div class="content-container">
            <div class="css-1whuy04">
                <div class="css-760i8n">
                    <div class="css-f30376">
                        <div class="bubble">28</div>
                        <div class="main-title">
                            <a target="_blank" href="/thread/3664554">上架一小时订阅</a>
                        </div>
                        <div class="author">
                            <a href="/user/769054" target="_lkong">zdengjing</a>
                            <br>
                            <a href="/thread/3664554" target="_lkong">几秒前</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    mainContent.style.background = '#fff';
} 