
                  // Define the list of todo items
                  const todoList = [
                    { parent: 'Siyabonga Ndaba', children: 'Marketing Exc', child4:'W0338311',COMENDATIONS: '111', COMPLAINTS:'4' ,status:'WHITE', avatarURL: 'https://scontent.fjnb1-1.fna.fbcdn.net/v/t39.30808-6/345442685_3590542494508804_811087326214541940_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH_l7STBCUoHe4FzpBoeQsQF5PqALyd6dIXk-oAvJ3p0o4WlAubDdE5KPebVVoTOxjwBBqUxHwJDq5Bu9tpTeAk&_nc_ohc=iPKN6hepejQAb75DaY0&_nc_zt=23&_nc_ht=scontent.fjnb1-1.fna&oh=00_AfAvIbagg9mAKYR73weuos1rNW2QIfcFPVyP4rXrhqfX2w&oe=661C6F73' },
                    { parent: 'Boniswa Mngomezulu', children: 'Fashion Designer', child4:'W0333411',COMENDATIONS: '221', COMPLAINTS:'0' ,status:'WHITE',avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUyQuiQw9U1nmRAMctkwAWN5Cf_jAntu_8fk06h-FmmA&s' },
                    { parent: 'Ntsamaeng Moseamedi Lotus mae', children: 'DJ', child4:'W0388411',COMENDATIONS: '0', COMPLAINTS:'1' ,status:'BLACK',avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkakdRTLKygFdbUK2g6v2kmVKlqRvZ9t7YuQRYjvT9YfRMMfE-lIHKhIzqFgD0DOrXCs&usqp=CAU' },
                    { parent: 'Chat online', children: ['today', 'never'],avatarURL: 'https://siyapercy.online/Siyabonga%20Ndaba.jpg' },
                    { parent: 'Meet mom', children: ['today', 'never'],avatarURL: 'https://siyapercy.online/Siyabonga%20Ndaba.jpg' }
                  ];
              
                  // Function to render the todo list based on the search input
                  function renderTodoList(searchText) {
                    const todoListContainer = document.getElementById('todoList');
                    todoListContainer.innerHTML = '';
              
                    if (searchText === '') {
                      // If there's nothing in the search field, the button is inactive.
                      return;
                    }
              
                    const searchResults = todoList.filter(item => item.parent.toLowerCase().includes(searchText.toLowerCase()));
                    

                    if (searchResults.length === 0) {
                      todoListContainer.innerHTML = '<li>No matching persons or entities found.</li> <div class="btn-container"><button id="deepSearchButton">Refine Search</button></div>';
                      document.getElementById("deepSearchButton").addEventListener("click", function() {
    window.location.href = 'deep-search.html';
});

                    } else {
                      searchResults.forEach((item, index) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('profile-card');

    const backdrop = document.createElement('div'); // Changed variable name
    backdrop.classList.add('backdrop');
    backdrop.innerHTML = `    `;

    const profilecardTop = document.createElement('div'); // Changed variable name
    profilecardTop.classList.add('profile-card-top');
    profilecardTop.innerHTML = `
        <i class="fa-solid fa-arrow-left-long"></i>
        <div>
            <i class="fa-regular fa-heart heart"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;

    const profilecardMiddle = document.createElement('div'); // Changed variable name
    profilecardMiddle.classList.add('profile-card-middle');
    profilecardMiddle.innerHTML = `
        <div class="profile-pic"><img class="avatar" src="${item.avatarURL}" alt="Avatar">
            <i class="fa-solid fa-circle-check"></i>
        </div>
        <h1>${item.parent}</h1>
        <h2> ${item.children}</h2>
   
           
                <span style=" 
                color: #9E9E9E;;"
                >${item.status} LISTED</span>
           
        <div class="social-data">
            
            <div>
                <h6>Complaints</h6>
                <span>${item.COMPLAINTS}</span>
            </div>
            <div>
                <h6>Commend</h6>
                <span>${item.COMENDATIONS}</span>
            </div>
        </div>
        <div class="social-icons">
            <div><i class="fab fa-linkedin"></i></div> 
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fab fa-instagram"></i></div> <!-- Instagram -->
<div><i class="fab fa-pinterest"></i></div> <!-- Pinterest -->

        </div>
    `;

    const profilecardBottom = document.createElement('div'); // Changed variable name
    profilecardBottom.classList.add('profile-card-bottom');
    profilecardBottom.innerHTML = `
        <a href="deep-search.htnl" class="follow">COMPLAIN</a>
        <a href="deep-search.htnl" class="hire-me">COMMEND</a>
    `;

    todoItem.appendChild(backdrop);
    todoItem.appendChild(profilecardTop);
    todoItem.appendChild(profilecardMiddle);
    todoItem.appendChild(profilecardBottom);

    todoListContainer.appendChild(todoItem);
});

                    }
                  }
              
                  // Function to handle the search button click
                  function searchTodo() {
                    const searchInput = document.getElementById('searchInput');
                    const searchText = searchInput.value;
                    renderTodoList(searchText);
                  }
              
                  // Listen for input changes and activate/deactivate the search button
                  document.getElementById('searchInput').addEventListener('input', function () {
                    const searchButton = document.getElementById('searchButton');
                    if (this.value === '') {
                      searchButton.disabled = true;
                    } else {
                      searchButton.disabled = false;
                    }
                  });