(function () {
  // ⚠️ 아래 BOT_URL을 실제 GitHub Pages 주소로 바꿔주세요
  // 예: 'https://은진님계정.github.io/tounou-cs-bot/bot.html'
  var BOT_URL = 'https://eunjin-cx.github.io/tounou-cs-bot/bot.html';

  var isOpen = false;

  // 1. 플로팅 버튼 생성
  var btn = document.createElement('button');
  btn.id = 'tounou-cs-bot-toggle-btn';
  btn.innerHTML = '💬';
  btn.style.cssText = [
    'position:fixed',
    'right:24px',
    'bottom:24px',
    'width:56px',
    'height:56px',
    'border-radius:50%',
    'background:#1a1a1a',
    'color:#ffe066',
    'font-size:26px',
    'border:none',
    'box-shadow:0 4px 16px rgba(0,0,0,.25)',
    'cursor:pointer',
    'z-index:999998',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'transition:transform .15s'
  ].join(';');
  btn.onmouseenter = function () { btn.style.transform = 'scale(1.08)'; };
  btn.onmouseleave = function () { btn.style.transform = 'scale(1)'; };

  // 2. iframe 컨테이너 생성 (처음엔 숨김)
  var container = document.createElement('div');
  container.id = 'tounou-cs-bot-container';
  container.style.cssText = [
    'position:fixed',
    'right:24px',
    'bottom:92px',
    'width:380px',
    'height:640px',
    'max-height:75vh',
    'border-radius:16px',
    'overflow:hidden',
    'box-shadow:0 8px 32px rgba(0,0,0,.3)',
    'z-index:999999',
    'display:none',
    'background:#fff'
  ].join(';');

  var iframe = document.createElement('iframe');
  iframe.src = BOT_URL;
  iframe.style.cssText = 'width:100%;height:100%;border:none;';
  container.appendChild(iframe);

  // 3. 토글 동작
  btn.addEventListener('click', function () {
    isOpen = !isOpen;
    container.style.display = isOpen ? 'block' : 'none';
    btn.innerHTML = isOpen ? '✕' : '💬';
  });

  // 4. 모바일 대응 (화면 작을 때 전체화면에 가깝게)
  function adjustForMobile() {
    if (window.innerWidth < 480) {
      container.style.width = 'calc(100vw - 24px)';
      container.style.right = '12px';
      container.style.height = 'calc(100vh - 120px)';
    } else {
      container.style.width = '380px';
      container.style.right = '24px';
      container.style.height = '640px';
    }
  }
  adjustForMobile();
  window.addEventListener('resize', adjustForMobile);

  // 5. DOM에 삽입
  document.body.appendChild(btn);
  document.body.appendChild(container);
})();
