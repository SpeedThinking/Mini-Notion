

//const.js
const settingsMenu = document.getElementById('settings-menu');
const mySettings = document.getElementById('my-settings');
const userNameConfigTextArea = document.getElementById('name');
const userName = document.getElementById('user-name');

function setUp() {
  document.addEventListener('click', toggleSettingsMenu); 
  document.addEventListener('keydown', closeSettingsOnEscape); 
  updateUserName();
}

function updateAvatar() {
  const avatarPicture = document.getElementById('avatar');
  const fileInput = document.getElementById('file');

  fileInput.addEventListener('change', function(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function(event) {
        avatarPicture.src = event.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  });
}


function updateUserName() {
  userNameConfigTextArea.addEventListener('input', function() {
      userName.innerText = this.value; 
    })
  window.addEventListener('load', function() {
      userNameConfigTextArea.value = userName.innerText;
  });
}


function toggleSettingsMenu(event) {
  if (event.target.id === 'settings-button' || event.target.className === 'fa-solid fa-gear' || event.target.className === 'settings-text') {
    settingsMenu.showModal(); 
  } else if (!settingsMenu.contains(event.target)) {
    settingsMenu.close(); 
  }
}

function closeSettingsOnEscape(event) {
  if (event.key === 'Escape') {
    settingsMenu.close();
  }
}





window.addEventListener('DOMContentLoaded', setUp, false);


document.addEventListener("DOMContentLoaded", function() {
  const pickerOptions = { 
    onEmojiSelect: (emoji) => {
      let emojiTexts = document.querySelectorAll('.emoji-text');
      emojiTexts.forEach((emojiText) => {
        emojiText.innerHTML = emoji.native;
      });
      document.body.removeChild(picker);
    },
    previewPosition: 'none',
    set: 'twitter',
  };

  const picker = new EmojiMart.Picker(pickerOptions);
  picker.style.zIndex = 9999;
  picker.style.position = 'absolute';
  picker.style.top = '27%';
  picker.style.left = '22%';
  picker.style.transform = 'translate(-50%, -50%)';
  let emojiTriggers = document.querySelectorAll('.emoji-trigger');
  
  emojiTriggers.forEach((emojiTrigger) => {
    emojiTrigger.addEventListener('click', () => {
      document.body.appendChild(picker);
    });
  });

  document.getElementById('nav-top').onclick = () => {
    document.body.removeChild(picker);
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const editIcon = document.getElementById('edit');
  const fileInput = document.getElementById('avatar-image');

  editIcon.addEventListener('click', function() {
      fileInput.click(); 
  });

  fileInput.addEventListener('change', function(event) {
      const avatarPicture = document.getElementById('avatar');
      if (event.target.files && event.target.files[0]) {
          const reader = new FileReader();
          reader.onload = function(event) {
              avatarPicture.src = event.target.result;
          };
          reader.readAsDataURL(event.target.files[0]);
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const editIcon = document.getElementById('edit-wallpaper');
  const fileInput = document.getElementById('image');

  editIcon.addEventListener('click', function() {
      fileInput.click(); 
  });

  fileInput.addEventListener('change', function(event) {
      const wallpaper = document.getElementById('wallpaper');
      if (event.target.files && event.target.files[0]) {
          const reader = new FileReader();
          reader.onload = function(event) {
              wallpaper.src = event.target.result;
          };
          reader.readAsDataURL(event.target.files[0]);
      }
  });
});

// <i class="fa-solid fa-star" style="color: #f6c050;"></i>

const starButton = document.getElementById('star');
starButton.addEventListener('click', function() {
  starButton.className = starButton.className === 'fa-regular fa-star' ? 'fa-solid fa-star' : 'fa-regular fa-star';
  starButton.style.color = starButton.className === 'fa-regular fa-star' ? 'black' : '#f6c050';
})

const repositionButton = document.getElementById('reposition');

let isRepositionActive = false;

repositionButton.addEventListener('click', function() {
  isRepositionActive = !isRepositionActive; // Toggle the variable value
  
  const landscape = document.getElementById('landscape');
  
  if (isRepositionActive) {
    landscape.style.overflowY = 'scroll';
  } else {
    landscape.style.overflow = 'hidden'; // Reset to default value when toggle is turned off
  }
});

function loadFiletToInput(event, icon) {
  let image = document.getElementById(icon);
  image.src = URL.createObjectURL(event.target.files[0]);
};

document.addEventListener('DOMContentLoaded', function() {
  const editIcon = document.getElementById('icon');
  const fileInput = document.getElementById('modifiable-icon');

  editIcon.addEventListener('click', function() {
      fileInput.click(); 
  });

  fileInput.addEventListener('change', function(event) {
      const avatarPicture = document.getElementById('icon');
      if (event.target.files && event.target.files[0]) {
          const reader = new FileReader();
          reader.onload = function(event) {
              avatarPicture.src = event.target.result;
          };
          reader.readAsDataURL(event.target.files[0]);
      }
  });
});

