
    const form = document.getElementById('voteForm');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();

      if (!name || !age) {
        alert('Please enter valid details.');
        return;
      }

      const ageNumber = Number(age);

      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ageNumber > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000); // 4 second delay
      })
      .then((message) => alert(message))
      .catch((error) => alert(error));
    });
  </script>//your JS code here. If required.
 <script>
    const form = document.getElementById('voteForm');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();

      if (!name || !age) {
        alert('Please enter valid details.');
        return;
      }

      const ageNumber = Number(age);

      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ageNumber > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000); // 4 second delay
      })
      .then((message) => alert(message))
      .catch((error) => alert(error));
    });
  