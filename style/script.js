let currentUserName = '';

  function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '🍃 🍀';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
      heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
      
      document.getElementById('hearts').appendChild(heart);
      
      setTimeout(() => {
          heart.remove();
      }, 6000);
  }

  // Create hearts periodically
  setInterval(createHeart, 800);

  // Show gift screen with user name
  let backgroundMusic; // Biến lưu nhạc nền

function showGift() {
    const nameInput = document.getElementById('nameInput');
    const userName = nameInput.value.trim();

    if (!userName) {
        nameInput.style.borderColor = '#ff6b9d';
        nameInput.placeholder = 'Vui lòng nhập tên của bạn! 😊';
        nameInput.focus();
        return;
    }

    currentUserName = userName;

    // Update all user name elements
    document.getElementById('userName').textContent = userName;
    document.getElementById('userNameInMessage').textContent = userName;
    document.getElementById('userNameInSurprise').textContent = userName;

    // Hide welcome screen and show gift screen
    const welcomeScreen = document.getElementById('welcomeScreen');
    const giftScreen = document.getElementById('giftScreen');

    welcomeScreen.style.display = 'none';
    giftScreen.style.display = 'block';

    // Reset gift screen animation
    giftScreen.style.animation = 'slideUp 1s ease-out forwards';

    // Create celebration hearts
    createMoreHearts();

    // 🎵 Phát nhạc nền
    if (!backgroundMusic) {
        backgroundMusic = new Audio("style/NhacChill.mp3"); // thay "music.mp3" bằng đường dẫn nhạc của bạn
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.5;
        backgroundMusic.play().catch(err => {
            console.log("Không thể phát nhạc:", err);
        });
    }
}


  // Go back to welcome screen
  function goBack() {
      const welcomeScreen = document.getElementById('welcomeScreen');
      const giftScreen = document.getElementById('giftScreen');
      
      giftScreen.style.display = 'none';
      welcomeScreen.style.display = 'block';
      
      // Reset welcome screen animation
      welcomeScreen.style.animation = 'slideUp 1s ease-out forwards';
      
      // Clear the input
      document.getElementById('nameInput').value = '';
      document.getElementById('nameInput').style.borderColor = '#667eea';
      document.getElementById('nameInput').placeholder = 'Nhập tên của bạn...';
  }

  // Interactive functions for gift screen
  function showSurprise() {
      const surpriseText = document.getElementById('surpriseText');
      surpriseText.style.display = surpriseText.style.display === 'block' ? 'none' : 'block';
  }

  function createMoreHearts() {
      for (let i = 0; i < 15; i++) {
          setTimeout(() => createHeart(), i * 100);
      }
  }

  const messages = [
      `Gửi đến <span class='highlight'>${currentUserName || 'bạn'}</span> - người bạn của tôi! 💕<br>Cảm ơn bạn vì đã xuất hiện trong cuộc sống của tổi,cùng tôi chia sẻ những khoảnh khắc <span class='highlight'>vui buồn</span>.<br>Tình bạn của chúng ta thật <span class='highlight'>quý giá</span> và ý nghĩa! ✨`,
      `<span class='highlight'>${currentUserName || 'Bạn'}</span> là <span class='highlight'>ánh sáng</span> trong những ngày tăm tối của tôi! 🌟<br>Cảm ơn vì đã làm cuộc sống tôi <span class='highlight'>ý nghĩa</span> hơn! 💫`,
      `Với <span class='highlight'>${currentUserName || 'bạn'}</span>, mỗi ngày đều là một <span class='highlight'>cuộc phiêu lưu</span> mới! 🎪<br>Cảm ơn vì những <span class='highlight'>kỷ niệm đẹp</span> chúng ta đã tạo ra! 🌸`,
      `<span class='highlight'>${currentUserName || 'Bạn'}</span> không chỉ là bạn, mà còn là <span class='highlight'>gia đình</span> tôi đã chọn! 👨‍👩‍👧‍👦<br>Cảm ơn vì đã tin tưởng tôi và <span class='highlight'>ủng hộ</span> tôi! 💪`
  ];

  let currentMessage = 0;

  function changeMessage() {
      // Update messages with current user name
      const updatedMessages = [
          `Gửi đến <span class='highlight'>${currentUserName}</span> những lời động viên! 💕<br>Tuy nhỏ nhưng rất mong nó giúp được bạn <br><span class='highlight'>Hãy luôn vui vẻ <span class='highlight'>${currentUserName}</span> nhá 🤗. <br> HẾT RỒI 😁`,

          `<span class='highlight'>${currentUserName}</span> ơi! Đời có bao nhiêu đâu mà buồn 😔,<br> hãy vững tin và quên đi tất cả. 🌟<br>Cuộc sống có vô vàn những điều tốt đẹp ☺️ đang chờ bạn phía trước, <br> <span class='highlight'>vui vẻ đón nhận bạn sẽ thấy thật hạnh phúc và bình yên.</span> 💫<br> (Đọc tiếp)`,

          `<span class='highlight'>${currentUserName}</span> hãy nhớ rằng, Có những ngày mây ⛈️ đen kéo tới bao phủ cả một bầu trời, rồi mưa ☔ đổ xuống ào ào, <br>xung quanh trắng xóa một màu, cứ dai dẳng không dứt. <br>🌟Nhưng rồi, trời lại quang mây cũng tạnh 🌤️. Nỗi buồn cũng như vậy<br> <span class='highlight'>Cố vượt qua bạn nhé, tôi sẽ luôn ở bên cạnh bạn!</span> 💫<br> (Đọc tiếp)`,

          `Suốt ngày cứ suy nghĩ vẩn vơ rồi tự mình buồn🥹.<br> Không ai hiểu mình cả, không một ai nhiều lúc buồn hay bế tắc cũng chả biết tâm sự với ai 😔. <br>Càng lớn càng suy nghĩ sâu xa 🙄, ước gì thời gian có thể quay trở lại 🍀 không buồn nhiều không nhiều tâm sự như bây giờ. <br>Dù thế nào cũng phải<span class='highlight'> mạnh mẽ,<br> chỉ được phép cố gắng không được phép gục ngã.</span>🌸<br> (Đọc tiếp)`,

          `<span class='highlight'>${currentUserName}</span> à, Cuộc đời này rất công bằng😊<br><span class='highlight'>Nếu cuộc sống lấy đi của bạn một thứ gì 😔<br> thì cũng sẽ bù cho bạn lại một thứ khác🥰.</span> <br>Quan trọng bạn có chịu khó đi tìm không thôi. <br><span class='highlight'>Đừng lo lắng mình sẽ đi cùng bạn.</span>💪<br> (Đọc tiếp)`,

          `Nhớ nha <span class='highlight'>${currentUserName}</span> à,<br> Có thể cuộc đời bạn không được đẹp như người khác😊<br><span class='highlight'>Nhưng vì nó là cuộc đời của bạn<br> thì hãy cố mà sống sao cho nó đẹp nhất đối với bạn🥰.</span> <br>Đừng quan trọng lời nói hay suy nghĩ của bất cứ ai về mình 🤗<br><span class='highlight'>Hãy cứ là chính bạn 💯</span><br> (Đọc tiếp)`
      ];
      
      const messageElement = document.getElementById('giftMessage');
      currentMessage = (currentMessage + 1) % updatedMessages.length;
      messageElement.innerHTML = updatedMessages[currentMessage];
      
      // Add animation effect
      messageElement.style.animation = 'fadeInScale 0.5s ease-out';
      setTimeout(() => {
          messageElement.style.animation = '';
      }, 500);
  }

  // Allow Enter key to submit name
  document.getElementById('nameInput').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          showGift();
      }
  });

  // Add some initial hearts
  for (let i = 0; i < 5; i++) {
      setTimeout(() => createHeart(), i * 200);
  }